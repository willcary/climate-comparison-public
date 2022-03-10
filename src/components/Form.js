import React, { useContext } from 'react'
import { Context } from '../Context.js'

function Form(props) {
    const { locations, handleChange, handleSubmit, theme } = useContext(Context);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="location-1">1st Location: </label>
                <input 
                    type="text" 
                    placeholder="city, state" 
                    onChange={handleChange} 
                    name="one" 
                    value={locations.one}
                />
            </div>
            <div className="form-group">
                <label htmlFor="location-2">2nd Location:</label>
                <input 
                    type="text" 
                    placeholder="city, state" 
                    onChange={handleChange} 
                    name="two" 
                    value={locations.two}
                />
            </div>
            <button className={theme === "light" ? "btn" : "btn btn-dark"}>Search</button>
        </form>
    )
}

export default Form

