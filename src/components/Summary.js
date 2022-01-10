import React from 'react'
// import PropTypes from 'prop-types'

function Summary({ averagesOne, averagesTwo, locations }) {
    const {one, two} = locations;
    return (
        <div className="results-container">
            <h3>Summary</h3>
            <p>{one} has an average annual temperature of {averagesOne.tavg}°F while {two} has an average annual temperature of {averagesTwo.tavg}°F. {/*Average Temperature Comparison*/}{averagesOne.tavg > averagesTwo.tavg ? `Accordingly, ${one} is usually around ${averagesOne.tavg - averagesTwo.tavg}°F warmer than ${two}, but will vary throughout the year.` : averagesOne.tavg === averagesTwo.tavg ? `Both locations have the same average temperatures although they may vary throughout different seasons and months (see other tabs).` : `Accordingly, ${one} is usually around ${averagesTwo.tavg - averagesOne.tavg}°F cooler than ${two}, but will vary throughout the year.`} {/*Average Min/Max Temperatures*/}The annual average minimum and maximum temperatures are {averagesOne.tmin}°F and {averagesOne.tmax}°F for {one} and {averagesTwo.tmin}°F and {averagesTwo.tmax}°F for {two}. {/*Average Precipitation Comparison*/}{averagesOne.prcp > averagesTwo.prcp ? `It tends to precipitate more in ${one} than ${locations.two} with annual totals of ${averagesOne.prcp} inches and ${averagesTwo.prcp} inches respectively.` : averagesTwo.prcp > averagesOne.prcp ? `It tends to precipitate more in ${two} than ${one} with annual totals of ${averagesTwo.prcp} inches and ${averagesOne.prcp} inches respectively.` : `Annual total averages, ${averagesOne.prcp} inches, are the same for both locations.`} {/*Average Windspeed Comparison*/}{averagesOne.wspd > averagesTwo.wspd ? `${one} has an average annual windspeed of ${averagesOne.wspd} miles/hour, windier than the ${averagesTwo.wspd} miles/hour experienced in ${two}.` : averagesOne.wspd < averagesTwo.wspd ? `${two} has an average annual windspeed of ${averagesTwo.wspd} miles/hour, windier than the ${averagesOne.wspd} miles/hour experienced in ${one}.` : `Both locations have an average windspeed of ${averagesOne.wspd} miles/hour.`}</p>

            <p>See the Tables and Graphs <em>(tabs above)</em> for detailed monthly climate data.</p>
        </div>
    )
}

// Summary.propTypes = {

// }

export default Summary

