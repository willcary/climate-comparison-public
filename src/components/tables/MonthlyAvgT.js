import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from "../../Context"

function MonthlyAvgT({ climateDataOne, climateDataTwo, one, two }) {
    const { theme } = useContext(Context);
    const tbodyClass = () => theme === 'dark' ? 'tbody-dark' : '';

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Average T (°F)</th>
                </tr>
                <tr>
                    <td>Month</td>
                    <td>{one}</td>
                    <td>{two}</td>
                </tr>
            </thead>
            <tbody className={tbodyClass()}>
                <tr>
                    <td>Jan</td>
                    <td>{climateDataOne[0].tavg}</td>
                    <td>{climateDataTwo[0].tavg}</td>
                </tr>
                <tr>
                    <td>Feb</td>
                    <td>{climateDataOne[1].tavg}</td>
                    <td>{climateDataTwo[1].tavg}</td>
                </tr>
                <tr>
                    <td>Mar</td>
                    <td>{climateDataOne[2].tavg}</td>
                    <td>{climateDataTwo[2].tavg}</td>
                </tr>
                <tr>
                    <td>Apr</td>
                    <td>{climateDataOne[3].tavg}</td>
                    <td>{climateDataTwo[3].tavg}</td>
                </tr>
                <tr>
                    <td>May</td>
                    <td>{climateDataOne[4].tavg}</td>
                    <td>{climateDataTwo[4].tavg}</td>
                </tr>
                <tr>
                    <td>Jun</td>
                    <td>{climateDataOne[5].tavg}</td>
                    <td>{climateDataTwo[5].tavg}</td>
                </tr>
                <tr>
                    <td>Jul</td>
                    <td>{climateDataOne[6].tavg}</td>
                    <td>{climateDataTwo[6].tavg}</td>
                </tr>
                <tr>
                    <td>Aug</td>
                    <td>{climateDataOne[7].tavg}</td>
                    <td>{climateDataTwo[7].tavg}</td>
                </tr>
                <tr>
                    <td>Sep</td>
                    <td>{climateDataOne[8].tavg}</td>
                    <td>{climateDataTwo[8].tavg}</td>
                </tr>
                <tr>
                    <td>Oct</td>
                    <td>{climateDataOne[9].tavg}</td>
                    <td>{climateDataTwo[9].tavg}</td>
                </tr>
                <tr>
                    <td>Nov</td>
                    <td>{climateDataOne[10].tavg}</td>
                    <td>{climateDataTwo[10].tavg}</td>
                </tr>
                <tr>
                    <td>Dec</td>
                    <td>{climateDataOne[11].tavg}</td>
                    <td>{climateDataTwo[11].tavg}</td>
                </tr>
            </tbody>
        </table>
    )
}

MonthlyAvgT.propTypes = {
    climateDataOne: PropTypes.array, 
    climateDataTwo: PropTypes.array, 
    one: PropTypes.string, 
    two: PropTypes.string
}

export default MonthlyAvgT
