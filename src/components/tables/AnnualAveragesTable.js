import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from "../../Context"

function AnnualAveragesTable({ locations, averagesOne, averagesTwo }) {
    const {one, two} = locations;
    const { theme } = useContext(Context);
    const tbodyClass = () => theme === 'dark' ? 'tbody-dark' : '';

    return (
        <div>
            <h3>Annual Averages</h3>
            <div className="flex-container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{one}</th>
                            <th>{two}</th>
                        </tr>
                    </thead>
                    <tbody className={tbodyClass()}>
                        <tr>
                            <td>Average T (°F)</td>
                            <td>{averagesOne.tavg}</td>
                            <td>{averagesTwo.tavg}</td>
                        </tr>
                        <tr>
                            <td>Min T (°F)</td>
                            <td>{averagesOne.tmin}</td>
                            <td>{averagesTwo.tmin}</td>
                        </tr>
                        <tr>
                            <td>Max T (°F)</td>
                            <td>{averagesOne.tmax}</td>
                            <td>{averagesTwo.tmax}</td>
                        </tr>
                        <tr>
                            <td>Precip (in)</td>
                            <td>{averagesOne.prcp}</td>
                            <td>{averagesTwo.prcp}</td>
                        </tr>
                        <tr>
                            <td>Wind (mi/hr)</td>
                            <td>{averagesOne.wspd}</td>
                            <td>{averagesTwo.wspd}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

AnnualAveragesTable.propTypes = {
    locations: PropTypes.object, 
    averagesOne: PropTypes.object, 
    averagesTwo: PropTypes.object
}

export default AnnualAveragesTable
