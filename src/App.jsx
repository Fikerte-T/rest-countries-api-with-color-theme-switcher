import { useState, useEffect } from 'react'
import './App.css'
import './Components/TopSection'
import { CountriesContext } from './Components/Contexts/CountriesContext.js'
import HomePage from './Components/HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CountryDetail from './Components/CountryDetail.jsx'
import TopSection from './Components/TopSection'


function App() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([])
  const [currentItems, setCurrentItems] = useState([])  
  const [currentPage, setCurrentPage] = useState(1)
  const [isDarkMode, setIsDarkMode] = useState(false)


  

  // console.log(countries)
  const fetchCountries = () => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch((err) => {
      setError(err)
      setLoading(false)
    })
  }
  const filterRegions = () => {
    const array = countries.map(c => c.region)
    const filterArray = [...new Set(array)].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    return filterArray
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    if(countries.length > 0) {
      const result = filterRegions()
      setFilteredCountries(countries)
      setRegions(result)
      setLoading(false)
    } 
  }, [countries])

  // console.log(regions)
  return (
    <CountriesContext.Provider value={{isDarkMode, setIsDarkMode, error, countries, setCountries, loading, setLoading, regions, setRegions, filteredCountries, setFilteredCountries, currentItems, setCurrentItems, currentPage, setCurrentPage}}>
    <Router>
      <TopSection />
      <Routes>
        <Route path= '/' element={<HomePage />} />
        <Route path='/detail/:name' element = {<CountryDetail />}/>
      </Routes>
    </Router>
    </CountriesContext.Provider>
  )
}

export default App
