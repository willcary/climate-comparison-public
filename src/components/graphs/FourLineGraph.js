import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Context } from "../../Context"

function FourLineGraph({ locations, legendDescriptor, data, title, dataKey1, dataKey2, dataKey3, dataKey4, yAxisLabel }) {
    const {one, two} = locations;
    const { theme } = useContext(Context);
    const axisTheme = () => theme === 'light' ? '#313131' : '#f7f3eb';
    const lineTheme1 = () => theme === 'light' ? '#005783' : '#2cb9ff';
    const lineTheme2 = () => theme === 'light' ? '#9E5400' : '#eb9902';
    const dotTheme1 = {
        stroke: lineTheme1(), 
        fill: lineTheme1(),
        r: 1.5
    }
    const dotTheme2 = {
        stroke: lineTheme2(), 
        fill: lineTheme2(),
        r: 1.5
    }
    const activeDotTheme1 = {
        stroke: lineTheme1(), 
        fill: '#fff',
        r: 3.5
    }
    const activeDotTheme2 = {
        stroke: lineTheme2(), 
        fill: '#fff',
        r: 3.5
    }
    const toolTipLight = {
        backgroundColor: '#f7f3eb',
        color: '#313131'
    }
    const toolTipDark = {
        backgroundColor: '#313131',
        color: '#f7f3eb'
    }
    const legendPayLoad = [
        { value: `${one} ${legendDescriptor}`, type: 'line', id: '1', color: lineTheme1() }, 
        { value: `${two} ${legendDescriptor}`, type: 'line', id: '1', color: lineTheme2() }
    ]

    const tooltipStyle = () => theme === 'light' ? toolTipLight : toolTipDark;

    return (
        <div className='center-container'>
            <h4>{title}</h4>
            <ResponsiveContainer width='100%' height={350} debounce={1}>
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }} title={title}>
                    <CartesianGrid stroke={theme === 'light' ? "#ccc" : '#555555'} strokeDasharray="1 1" />
                    <XAxis dataKey="month" stroke={axisTheme()} />
                    <YAxis stroke={axisTheme()} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', fill: axisTheme() }} />
                    <Line name={one + ' min'} type="monotone" dataKey={dataKey1} stroke={lineTheme1()} strokeWidth='2' dot={dotTheme1} activeDot={activeDotTheme1} />
                    <Line name={one + ' max'} type="monotone" dataKey={dataKey2} stroke={lineTheme1()} strokeWidth='2' dot={dotTheme1} activeDot={activeDotTheme1} />
                    <Line name={two + ' min'} type="monotone" dataKey={dataKey3} stroke={lineTheme2()} strokeWidth='2' dot={dotTheme2} activeDot={activeDotTheme2} />
                    <Line name={two + ' max'} type="monotone" dataKey={dataKey4} stroke={lineTheme2()} strokeWidth='2' dot={dotTheme2} activeDot={activeDotTheme2} />
                    <Tooltip labelStyle={tooltipStyle()} itemStyle={theme === 'light' ? {backgroundColor: '#f7f3eb'} : {backgroundColor: '#313131'}} contentStyle={tooltipStyle()} />
                    <Legend payload={legendPayLoad}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

FourLineGraph.propTypes = {
    locations: PropTypes.object, 
    legendDescriptor: PropTypes.string, 
    data: PropTypes.array, 
    title: PropTypes.string, 
    dataKey1: PropTypes.string, 
    dataKey2: PropTypes.string, 
    dataKey3: PropTypes.string, 
    dataKey4: PropTypes.string, 
    yAxisLabel: PropTypes.string
}

export default FourLineGraph