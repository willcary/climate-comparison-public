import React from 'react';
import MonthlyAvgT from "./MonthlyAvgT";
import MonthlyMinMaxT from './MonthlyMinMaxT';
import MonthlyPrcp from './MonthlyPrcp';
import MonthlyWspd from './MonthlyWspd';

function MonthlyAveragesTables({ locations, climateDataOne, climateDataTwo }) {
    const {one, two} = locations;

    return (
        <div>
            <h3>Monthly Averages</h3>
            <div className="flex-container">
                <MonthlyAvgT climateDataOne={climateDataOne} climateDataTwo={climateDataTwo} one={one} two={two}/>
                <MonthlyMinMaxT climateDataOne={climateDataOne} climateDataTwo={climateDataTwo} one={one} two={two}/>
            </div>
            <div className="flex-container">
                <MonthlyPrcp climateDataOne={climateDataOne} climateDataTwo={climateDataTwo} one={one} two={two}/>
                <MonthlyWspd climateDataOne={climateDataOne} climateDataTwo={climateDataTwo} one={one} two={two}/>
            </div>
        </div>
    )
}

export default MonthlyAveragesTables
