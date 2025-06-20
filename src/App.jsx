import { useState, useEffect } from 'react'
import './App.css'
import './Components/TopSection'
import TopSection from './Components/TopSection'
import Filters from './Components/Filters'
import Countries from './Components/Countries'
import { CountriesContext } from './Components/Contexts/CountriesContext.js'


function App() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([])
  
  console.log(filteredCountries)
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
    <CountriesContext.Provider value={{countries, setCountries, loading, setLoading, regions, setRegions, filteredCountries, setFilteredCountries}}>
      <main className='font-hanken min-h-screen bg-lm-bg text-lm-text  grid gap-14'>
        {error && <p>{error}</p>}
        <TopSection />
        <Filters />
        <Countries />
      </main>
    </CountriesContext.Provider>
  )
}

export default App
