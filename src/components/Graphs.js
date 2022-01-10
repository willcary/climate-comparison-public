import React, { useState, useEffect } from 'react'
import TwoLineGraph from './graphs/TwoLineGraph'
import FourLineGraph from './graphs/FourLineGraph'
// import PropTypes from 'prop-types'

function Graphs({ locations, climateDataOne, climateDataTwo }) {
    const [graphData, setGraphData] = useState(null);
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];

    function createGraphData() {
        const data = [];
        for (let i = 0; i < months.length; i++) {
            data.push({
                month: months[i],
                tavg1: climateDataOne[i].tavg,
                tavg2: climateDataTwo[i].tavg,
                tmin1: climateDataOne[i].tmin,
                tmin2: climateDataTwo[i].tmin,
                tmax1: climateDataOne[i].tmax,
                tmax2: climateDataTwo[i].tmax,
                prcp1: climateDataOne[i].prcp,
                prcp2: climateDataTwo[i].prcp,
                wspd1: climateDataOne[i].wspd,
                wspd2: climateDataTwo[i].wspd
            })
        }
        return data;
    }

    useEffect(() => {
        setGraphData(createGraphData());
    }, [climateDataOne, climateDataTwo])

    return (
        <div className="results-container">
            <h3>Graphs</h3>
            <TwoLineGraph 
                locations={locations} 
                data={graphData} 
                title='Monthly Avg T (°F)' 
                dataKey1='tavg1' 
                dataKey2='tavg2' 
                yAxisLabel='Avg T (°F)' 
            />
            <FourLineGraph 
                locations={locations} 
                legendDescriptor='min/max'
                data={graphData} 
                title='Monthly Min/Max T (°F)' 
                dataKey1='tmin1' 
                dataKey2='tmax1' 
                dataKey3='tmin2' 
                dataKey4='tmax2' 
                yAxisLabel='Avg T (°F)' 
            />
            <TwoLineGraph 
                locations={locations} 
                data={graphData} 
                title='Monthly precipitation (inches)' 
                dataKey1='prcp1' 
                dataKey2='prcp2' 
                yAxisLabel='Precip (in)' 
            />
            <TwoLineGraph 
                locations={locations} 
                data={graphData} 
                title='Monthly wind speed (mi/hr)' 
                dataKey1='wspd1' 
                dataKey2='wspd2' 
                yAxisLabel='Wind (mi/hr)' 
            />
        </div>
    )
}

// Graphs.propTypes = {

// }

export default Graphs

