import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from "../../Context"

function MonthlyPrcp({ climateDataOne, climateDataTwo, one, two }) {
    const { theme } = useContext(Context);
    const tbodyClass = () => theme === 'dark' ? 'tbody-dark' : '';

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Precipitation (inches)</th>
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
                    <td>{climateDataOne[0].prcp}</td>
                    <td>{climateDataTwo[0].prcp}</td>
                </tr>
                <tr>
                    <td>Feb</td>
                    <td>{climateDataOne[1].prcp}</td>
                    <td>{climateDataTwo[1].prcp}</td>
                </tr>
                <tr>
                    <td>Mar</td>
                    <td>{climateDataOne[2].prcp}</td>
                    <td>{climateDataTwo[2].prcp}</td>
                </tr>
                <tr>
                    <td>Apr</td>
                    <td>{climateDataOne[3].prcp}</td>
                    <td>{climateDataTwo[3].prcp}</td>
                </tr>
                <tr>
                    <td>May</td>
                    <td>{climateDataOne[4].prcp}</td>
                    <td>{climateDataTwo[4].prcp}</td>
                </tr>
                <tr>
                    <td>Jun</td>
                    <td>{climateDataOne[5].prcp}</td>
                    <td>{climateDataTwo[5].prcp}</td>
                </tr>
                <tr>
                    <td>Jul</td>
                    <td>{climateDataOne[6].prcp}</td>
                    <td>{climateDataTwo[6].prcp}</td>
                </tr>
                <tr>
                    <td>Aug</td>
                    <td>{climateDataOne[7].prcp}</td>
                    <td>{climateDataTwo[7].prcp}</td>
                </tr>
                <tr>
                    <td>Sep</td>
                    <td>{climateDataOne[8].prcp}</td>
                    <td>{climateDataTwo[8].prcp}</td>
                </tr>
                <tr>
                    <td>Oct</td>
                    <td>{climateDataOne[9].prcp}</td>
                    <td>{climateDataTwo[9].prcp}</td>
                </tr>
                <tr>
                    <td>Nov</td>
                    <td>{climateDataOne[10].prcp}</td>
                    <td>{climateDataTwo[10].prcp}</td>
                </tr>
                <tr>
                    <td>Dec</td>
                    <td>{climateDataOne[11].prcp}</td>
                    <td>{climateDataTwo[11].prcp}</td>
                </tr>
            </tbody>
        </table>
    )
}

MonthlyPrcp.propTypes = {
    climateDataOne: PropTypes.array, 
    climateDataTwo: PropTypes.array, 
    one: PropTypes.string, 
    two: PropTypes.string
}

export default MonthlyPrcp
