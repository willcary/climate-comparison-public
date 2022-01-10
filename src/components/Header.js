import React, {useContext} from 'react'

import { Context } from "../Context.js"

function Header() {
    const { theme, themeToggler } = useContext(Context)

    const themeButton = () => {
      if (theme === 'dark') {
        return <button onClick={themeToggler} className="theme-toggle-btn theme-btn-light"><i className="fas fa-sun"></i> light</button>
      } else {
        return <button onClick={themeToggler} className="theme-toggle-btn theme-btn-dark"><i className="fas fa-moon"></i> dark</button>
      }
    }

    return (
        <header className="app-header">
          <div className="app-header__top">
            <i className="fas fa-cloud-sun-rain logo"></i>
            {themeButton()}
          </div>
          <h1>Climate Comparison App</h1>
        </header>
    )
}

export default Header
