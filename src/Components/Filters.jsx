import React, { useContext, useEffect, useState } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const Filters = () => {
    const {regions, countries, setFilteredCountries, setCurrentPage} = useContext(CountriesContext)
    const [selectedRegion, setSelectedRegion] = useState('')
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if(selectedRegion === '' && searchValue === '' ) {
            setFilteredCountries(countries)
        } else {
            const filtered = countries.filter(c => c.region === selectedRegion)
            setFilteredCountries(filtered)
            setCurrentPage(1)
        } 
        if(searchValue !== '') {
            const filtered = countries.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()))
            console.log(filtered)
            setFilteredCountries(filtered)
        }
    }, [selectedRegion, searchValue])
    
  return (
    <div className=' '>
        <form action="" className=''>
            <div className='flex justify-between items-center px-20'>

                <div className='shadow-md w-1/3 p-4 rounded-md relative text-lm-input dark:text-custom-white dark:bg-dm-elements' >
                    <div className="absolute inset-y-0 start-6 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-custom-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input className='ml-18 focus:outline-none' type="search" name="country" id="" placeholder='Search for a country...'
                    onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
                <div>

                    <select name="country" id="countries" className=' shadow-md p-4 rounded-md focus:outline-none dark:text-custom-white dark:bg-dm-elements'
                    onChange={e => setSelectedRegion(e.target.value)}
                    >
                        <option value="">Filter by Region</option>
                        {
                            regions && regions.map((c, i) => (
                                    <option key={i} value={c}>{c}</option>
                            )) 
                        }
                    </select>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Filters