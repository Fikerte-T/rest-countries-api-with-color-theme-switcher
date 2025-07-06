import { useState, useEffect } from 'react'
import './App.css'
import './Components/Header.jsx'
import { CountriesContext } from './Components/Contexts/CountriesContext.js'
import HomePage from './Components/HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CountryDetail from './Components/CountryDetail.jsx'
import Header from './Components/Header.jsx'


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
  const fetchCountries = async () => {
    // fetch('./date.json')
    // .then(res => res.json())
    // .then(data => setCountries(data))
    // .catch((err) => {
    //   setError(err)
    //   setLoading(false)
    // })
    //  .catch(err => console.log('Failed to fetch JSON:', err.message))
    // const response = await fetch('./dat.json');
    // const text = await response.text();
    // console.log('Raw response:', text);
    try {
      const response = await fetch('/data.json')
      const contentType = response.headers.get('content-type')
      if(!response.ok || !contentType.includes('application/json')){
        const text = await response.text()
        throw new Error('Cannot find data')
      }
      const data = await response.json()
      setCountries(data)
      setLoading(false)
    } catch(error){
      console.log(error.message)
      setError(error.message)
    }
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

  console.log(error)
  return (
    <CountriesContext.Provider value={{isDarkMode, setIsDarkMode, error, countries, setCountries, loading, setLoading, regions, setRegions, filteredCountries, setFilteredCountries, currentItems, setCurrentItems, currentPage, setCurrentPage}}>
    <Router>
      <Header />
      <Routes>
        <Route path= '/' element={<HomePage />} />
        <Route path='/detail/:name' element = {<CountryDetail />}/>
      </Routes>
    </Router>
    </CountriesContext.Provider>
  )
}

export default App
