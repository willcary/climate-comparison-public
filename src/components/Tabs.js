import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from "../Context.js"

function Tabs() {
    const { theme } = useContext(Context)

    const activeStyle = {
        backgroundColor: '#005783',
        color: '#f7f3eb'
    }

    return (
        <nav>
            <NavLink 
                to="/" 
                style={({ isActive }) => isActive ? activeStyle : undefined} 
                className={theme === 'light' ? "nav-tab" : "nav-tab nav-tab-dark"}
            >
                    Summary
            </NavLink>
            <NavLink 
                to="/tables" 
                style={({ isActive }) => isActive ? activeStyle : undefined} 
                className={theme === 'light' ? "nav-tab" : "nav-tab nav-tab-dark"}
            >
                    Tables
            </NavLink>
            <NavLink 
                to="/graphs" 
                style={({ isActive }) => isActive ? activeStyle : undefined} 
                className={theme === 'light' ? "nav-tab" : "nav-tab nav-tab-dark"}
            >
                    Graphs
            </NavLink>
        </nav>
    )
}

export default Tabs
