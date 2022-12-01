import React, { useState, useEffect, useRef } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  // const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState({
    one: '',
    two: '',
  })
  const [latLongOne, setLatLongOne] = useState({
    lat: '',
    lng: '',
  })
  const [latLongTwo, setLatLongTwo] = useState({
    lat: '',
    lng: '',
  })
  const [climateDataOne, setClimateDataOne] = useState([
    {
      month: 1,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 2,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 3,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 4,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 5,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 6,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 7,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 8,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 9,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 10,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 11,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 12,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
  ])
  const [climateDataTwo, setClimateDataTwo] = useState([
    {
      month: 1,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 2,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 3,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 4,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 5,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 6,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 7,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 8,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 9,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 10,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 11,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
    {
      month: 12,
      prcp: 0,
      pres: 0,
      tavg: 0,
      tmax: 0,
      tmin: 0,
      tsun: null,
      wspd: 0,
    },
  ])
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState('light')

  const initialRenderOne = useRef(true)
  const initialRenderTwo = useRef(true)

  function handleChange(e) {
    const { name, value } = e.target
    setLocations((prevLocations) => {
      return {
        ...prevLocations,
        [name]: value,
      }
    })
  }

  const baseGeocodeUrl =
    'https://www.mapquestapi.com/geocoding/v1/address?key=' +
    process.env.REACT_APP_GEOCODE_API_KEY +
    '&location='

  function prepGeocodeUrl(base, location) {
    const editedLocation = location.replace(/\s+/g, '').toLowerCase()
    const url = base + editedLocation
    return url
  }

  function prepClimateUrl(lat, lng) {
    const baseWeatherStationURL =
      'https://meteostat.p.rapidapi.com/point/normals?lat='
    const dateRangeUrl = '&start=1991&end=2020&units=imperial'
    const url = `${baseWeatherStationURL}${lat}&lon=${lng}${dateRangeUrl}`
    return url
  }

  // Fetching Geocode data when button is clicked ==============================================================================
  function handleSubmit(e) {
    e.preventDefault()
    const firstGeocodeUrl = prepGeocodeUrl(baseGeocodeUrl, locations.one)
    const secondGeocodeUrl = prepGeocodeUrl(baseGeocodeUrl, locations.two)
    if (locations.one) {
      fetch(firstGeocodeUrl)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => {
          setLatLongOne(data.results[0].locations[0].displayLatLng)
        })
        .catch((error) => {
          console.error('Error fetching data: ', error)
          setError(error)
        })
    }
    if (locations.two) {
      fetch(secondGeocodeUrl)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => {
          setLatLongTwo(data.results[0].locations[0].displayLatLng)
        })
        .catch((error) => {
          console.error('Error fetching data: ', error)
          setError(error)
        })
    }
  }

  // Fetching Point Climate data from Location 1 using Lat/Long ==============================================================================
  useEffect(() => {
    if (initialRenderOne.current) {
      initialRenderOne.current = false
    } else {
      fetch(prepClimateUrl(latLongOne.lat, latLongOne.lng), {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'meteostat.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_METEOSTAT_API_KEY,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => {
          setClimateDataOne(data.data)
        })
        .catch((err) => {
          console.error(err)
          setError(err.statusText)
        })
    }
  }, [latLongOne])

  // Fetching Point Climate data from Location 2 using Lat/Long ==============================================================================
  useEffect(() => {
    if (initialRenderTwo.current) {
      initialRenderTwo.current = false
    } else {
      fetch(prepClimateUrl(latLongTwo.lat, latLongTwo.lng), {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'meteostat.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_METEOSTAT_API_KEY,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => {
          setClimateDataTwo(data.data)
        })
        .catch((err) => {
          console.error(err)
          setError(err.statusText)
        })
      // .finally(() => {
      //     setLoading(false);
      // });
    }
  }, [latLongTwo])

  // Theme Toggler Function =================================================================================================================
  function themeToggler() {
    if (theme === 'light') {
      setTheme('dark')
      document.body.classList.add('body-dark')
    } else {
      setTheme('light')
      document.body.classList.remove('body-dark')
    }
  }

  return (
    <Context.Provider
      value={{
        locations,
        latLongOne,
        latLongTwo,
        // loading,
        climateDataOne,
        climateDataTwo,
        error,
        theme,
        handleChange,
        handleSubmit,
        themeToggler,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
