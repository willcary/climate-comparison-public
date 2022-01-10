import React, { useContext } from 'react'

import { Context } from "../Context.js"

function Footer() {
    const { theme } = useContext(Context);

    return (
        <footer>
            <p className="footer-text">Note: annual averages were rounded to the nearest integer (temperatures and precipitation) or tenth (wind speed). Data is averaged from years 1991-2020. If data displays as zero, the data may be unavailable for that location.</p>
            <p className="footer-text">Data Source: <a href="https://meteostat.net/en/" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'a-dark' : undefined}>Meteostat</a></p>
        </footer>
    )
}

export default Footer
