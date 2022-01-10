import React from 'react'
// import PropTypes from 'prop-types'

import AnnualAveragesTable from './tables/AnnualAveragesTable'
import MonthlyAveragesTables from './tables/MonthlyAveragesTables'

function Tables({ climateDataOne, climateDataTwo, averagesOne, averagesTwo, locations }) {
    
    return (
        <div className="results-container">
            <AnnualAveragesTable locations={locations} averagesOne={averagesOne} averagesTwo={averagesTwo}/>
            <MonthlyAveragesTables locations={locations} climateDataOne={climateDataOne} climateDataTwo={climateDataTwo}/>
        </div>
    )
}

// Tables.propTypes = {

// }

export default Tables

