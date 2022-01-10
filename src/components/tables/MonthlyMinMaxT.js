import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from "../../Context"

function MonthlyMinMaxT({ climateDataOne, climateDataTwo, one, two }) {
    const { theme } = useContext(Context);
    const tbodyClass = () => theme === 'dark' ? 'tbody-dark' : '';

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Min / Max T (°F)</th>
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
                    <td>{climateDataOne[0].tmin} / {climateDataOne[0].tmax}</td>
                    <td>{climateDataTwo[0].tmin} / {climateDataTwo[0].tmax}</td>
                </tr>
                <tr>
                    <td>Feb</td>
                    <td>{climateDataOne[1].tmin} / {climateDataOne[1].tmax}</td>
                    <td>{climateDataTwo[1].tmin} / {climateDataTwo[1].tmax}</td>
                </tr>
                <tr>
                    <td>Mar</td>
                    <td>{climateDataOne[2].tmin} / {climateDataOne[2].tmax}</td>
                    <td>{climateDataTwo[2].tmin} / {climateDataTwo[2].tmax}</td>
                </tr>
                <tr>
                    <td>Apr</td>
                    <td>{climateDataOne[3].tmin} / {climateDataOne[3].tmax}</td>
                    <td>{climateDataTwo[3].tmin} / {climateDataTwo[3].tmax}</td>
                </tr>
                <tr>
                    <td>May</td>
                    <td>{climateDataOne[4].tmin} / {climateDataOne[4].tmax}</td>
                    <td>{climateDataTwo[4].tmin} / {climateDataTwo[4].tmax}</td>
                </tr>
                <tr>
                    <td>Jun</td>
                    <td>{climateDataOne[5].tmin} / {climateDataOne[5].tmax}</td>
                    <td>{climateDataTwo[5].tmin} / {climateDataTwo[5].tmax}</td>
                </tr>
                <tr>
                    <td>Jul</td>
                    <td>{climateDataOne[6].tmin} / {climateDataOne[6].tmax}</td>
                    <td>{climateDataTwo[6].tmin} / {climateDataTwo[6].tmax}</td>
                </tr>
                <tr>
                    <td>Aug</td>
                    <td>{climateDataOne[7].tmin} / {climateDataOne[7].tmax}</td>
                    <td>{climateDataTwo[7].tmin} / {climateDataTwo[7].tmax}</td>
                </tr>
                <tr>
                    <td>Sep</td>
                    <td>{climateDataOne[8].tmin} / {climateDataOne[8].tmax}</td>
                    <td>{climateDataTwo[8].tmin} / {climateDataTwo[8].tmax}</td>
                </tr>
                <tr>
                    <td>Oct</td>
                    <td>{climateDataOne[9].tmin} / {climateDataOne[9].tmax}</td>
                    <td>{climateDataTwo[9].tmin} / {climateDataTwo[9].tmax}</td>
                </tr>
                <tr>
                    <td>Nov</td>
                    <td>{climateDataOne[10].tmin} / {climateDataOne[10].tmax}</td>
                    <td>{climateDataTwo[10].tmin} / {climateDataTwo[10].tmax}</td>
                </tr>
                <tr>
                    <td>Dec</td>
                    <td>{climateDataOne[11].tmin} / {climateDataOne[11].tmax}</td>
                    <td>{climateDataTwo[11].tmin} / {climateDataTwo[11].tmax}</td>
                </tr>
            </tbody>
        </table>
    )
}

MonthlyMinMaxT.propTypes = {
    climateDataOne: PropTypes.array, 
    climateDataTwo: PropTypes.array, 
    one: PropTypes.string, 
    two: PropTypes.string
}

export default MonthlyMinMaxT
