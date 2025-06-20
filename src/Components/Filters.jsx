import React, { useContext, useEffect, useState } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const Filters = () => {
    const {regions, countries, setFilteredCountries} = useContext(CountriesContext)
    const [selectedRegion, setSelectedRegion] = useState('')
    // console.log(regions)
    useEffect(() => {
        if(selectedRegion === '') {
            setFilteredCountries(countries)
        } else {
            const filtered = countries.filter(c => c.region === selectedRegion)
            setFilteredCountries(filtered)
        }
    }, [selectedRegion])
    // console.log()
  return (
    <div className='flex justify-between items-center px-20'>
        <div className='shadow-md w-1/3 p-4 rounded-md' >
            <input type="search" name="country" id="" placeholder='Search for a country...' />
        </div>
        <form action="" className='max-w-sm'>
            {/* <label htmlFor="countries"></label> */}
            <select name="country" id="countries" className=' w-full shadow-md p-4 rounded-md focus:outline-none'
            // value={selectedRegion}
            onChange={e => setSelectedRegion(e.target.value)}
            >
                <option value="">Filter by Region</option>
                {
                    regions && regions.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                    )) 
                }
            </select>
        </form>
    </div>
  )
}

export default Filters