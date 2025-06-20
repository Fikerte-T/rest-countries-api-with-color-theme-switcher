import { useState, useEffect } from 'react'
import './App.css'
import './Components/TopSection'
import TopSection from './Components/TopSection'
import Filters from './Components/Filters'
import Countries from './Components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
      setRegions(result)
      setLoading(false)
    } 
  }, [countries])

  console.log(regions)
  return (
    <main className='font-hanken min-h-screen bg-lm-bg text-lm-text  grid gap-14'>
      {error && <p>{error}</p>}
      <TopSection />
      <Filters regions={regions} />
      <Countries countries={countries} loading={loading} />
    </main>
  )
}

export default App
