import React, { useContext, useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Context } from "../Context.js"
// import PropTypes from 'prop-types'

import Summary from "./Summary.js"
import Tables from "./Tables.js"
import Graphs from "./Graphs.js"
import Tabs from './Tabs.js'

function Results() {
    const { locations, climateDataOne, climateDataTwo } = useContext(Context)
    const [locationsProper, setLocationsProper] = useState({
        one: '',
        two: ''
    })
    const [averagesOne, setAveragesOne] = useState({})
    const [averagesTwo, setAveragesTwo] = useState({})

    const initialRenderOne = useRef(true);
    const initialRenderTwo = useRef(true);

    useEffect(() => {
        const one = locations.one.charAt(0).toUpperCase() + locations.one.slice(1).replace(/,.*/,'').toLowerCase();
        const two = locations.two.charAt(0).toUpperCase() + locations.two.slice(1).replace(/,.*/,'').toLowerCase();
        setLocationsProper({
            one: one,
            two: two
        })
    }, [climateDataOne])

    useEffect(() => {
        if (initialRenderOne.current) {
            initialRenderOne.current = false;
        } else {
            const annualPrcp1 = Math.round(climateDataOne.reduce((sum, item) => {return sum + item.prcp}, 0));
            const annualTavg1 = Math.round(climateDataOne.reduce((sum, item) => {return sum + item.tavg}, 0) / 12);
            const annualTmax1 = Math.round(climateDataOne.reduce((sum, item) => {return sum + item.tmax}, 0) / 12);
            const annualTmin1 = Math.round(climateDataOne.reduce((sum, item) => {return sum + item.tmin}, 0) / 12);
            const annualWspd1 = Math.round(10 * climateDataOne.reduce((sum, item) => {return sum + item.wspd}, 0) / 12) / 10;
            setAveragesOne({
                prcp: annualPrcp1,
                tavg: annualTavg1,
                tmax: annualTmax1,
                tmin: annualTmin1,
                wspd: annualWspd1
            })
        }
    }, [climateDataOne])

    useEffect(() => {
        if (initialRenderTwo.current) {
            initialRenderTwo.current = false;
        } else {
            const annualPrcp2 = Math.round(climateDataTwo.reduce((sum, item) => {return sum + item.prcp}, 0));
            const annualTavg2 = Math.round(climateDataTwo.reduce((sum, item) => {return sum + item.tavg}, 0) / 12);
            const annualTmax2 = Math.round(climateDataTwo.reduce((sum, item) => {return sum + item.tmax}, 0) / 12);
            const annualTmin2 = Math.round(climateDataTwo.reduce((sum, item) => {return sum + item.tmin}, 0) / 12);
            const annualWspd2 = Math.round(10 * climateDataTwo.reduce((sum, item) => {return sum + item.wspd}, 0) / 12) / 10;
            setAveragesTwo({
                prcp: annualPrcp2,
                tavg: annualTavg2,
                tmax: annualTmax2,
                tmin: annualTmin2,
                wspd: annualWspd2
            })
        }
    }, [climateDataTwo])

    const results = <main className="results">
            <h2>{locationsProper.one} vs. {locationsProper.two}</h2>
            <Tabs />
            <Routes>
                <Route path="/" element={<Summary  
                    averagesOne={averagesOne} 
                    averagesTwo={averagesTwo} 
                    locations={locationsProper} 
                />} />
                <Route path="/tables" element={<Tables 
                    climateDataOne={climateDataOne} 
                    climateDataTwo={climateDataTwo} 
                    averagesOne={averagesOne} 
                    averagesTwo={averagesTwo} 
                    locations={locationsProper} 
                />} />
                <Route path="/graphs" element={<Graphs 
                    climateDataOne={climateDataOne} 
                    climateDataTwo={climateDataTwo}
                    locations={locationsProper} 
                />} />
                <Route path="*" element={<Summary  
                    averagesOne={averagesOne} 
                    averagesTwo={averagesTwo} 
                    locations={locationsProper} 
                />} />
            </Routes>
        </main>;

    return (
        <>
            {locationsProper.one.length > 0 ? results : undefined}
        </>
    );
}

// Results.propTypes = {

// }

export default Results

