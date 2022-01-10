import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from "../../Context"

function MonthlyWspd({ climateDataOne, climateDataTwo, one, two }) {
    const { theme } = useContext(Context);
    const tbodyClass = () => theme === 'dark' ? 'tbody-dark' : '';

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Average Wind Speed (mi/hr)</th>
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
                    <td>{climateDataOne[0].wspd}</td>
                    <td>{climateDataTwo[0].wspd}</td>
                </tr>
                <tr>
                    <td>Feb</td>
                    <td>{climateDataOne[1].wspd}</td>
                    <td>{climateDataTwo[1].wspd}</td>
                </tr>
                <tr>
                    <td>Mar</td>
                    <td>{climateDataOne[2].wspd}</td>
                    <td>{climateDataTwo[2].wspd}</td>
                </tr>
                <tr>
                    <td>Apr</td>
                    <td>{climateDataOne[3].wspd}</td>
                    <td>{climateDataTwo[3].wspd}</td>
                </tr>
                <tr>
                    <td>May</td>
                    <td>{climateDataOne[4].wspd}</td>
                    <td>{climateDataTwo[4].wspd}</td>
                </tr>
                <tr>
                    <td>Jun</td>
                    <td>{climateDataOne[5].wspd}</td>
                    <td>{climateDataTwo[5].wspd}</td>
                </tr>
                <tr>
                    <td>Jul</td>
                    <td>{climateDataOne[6].wspd}</td>
                    <td>{climateDataTwo[6].wspd}</td>
                </tr>
                <tr>
                    <td>Aug</td>
                    <td>{climateDataOne[7].wspd}</td>
                    <td>{climateDataTwo[7].wspd}</td>
                </tr>
                <tr>
                    <td>Sep</td>
                    <td>{climateDataOne[8].wspd}</td>
                    <td>{climateDataTwo[8].wspd}</td>
                </tr>
                <tr>
                    <td>Oct</td>
                    <td>{climateDataOne[9].wspd}</td>
                    <td>{climateDataTwo[9].wspd}</td>
                </tr>
                <tr>
                    <td>Nov</td>
                    <td>{climateDataOne[10].wspd}</td>
                    <td>{climateDataTwo[10].wspd}</td>
                </tr>
                <tr>
                    <td>Dec</td>
                    <td>{climateDataOne[11].wspd}</td>
                    <td>{climateDataTwo[11].wspd}</td>
                </tr>
            </tbody>
        </table>
    )
}

MonthlyWspd.propTypes = {
    climateDataOne: PropTypes.array, 
    climateDataTwo: PropTypes.array, 
    one: PropTypes.string, 
    two: PropTypes.string
}

export default MonthlyWspd
