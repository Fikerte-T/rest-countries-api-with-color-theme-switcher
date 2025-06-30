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
    <div className='my-14 '>
        <form action="" className=''>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:m-0 px-5 md:px-20'>

                <div className='w-full md:w-sm lg:w-xl shadow-md  p-4 rounded-md relative text-lm-input dark:text-custom-white dark:bg-dm-elements' >
                    <div className="absolute inset-y-0 start-6 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-custom-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input className='ml-18 focus:outline-none' type="search" name="country" id="" placeholder='Search for a country...'
                    onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
                <div className=' w-fit shadow-md p-4 rounded-md text-lm-input  dark:text-custom-white dark:bg-dm-elements mt-10 md:m-0'>

                    <select name="country" id="countries" className='pr-10 focus:outline-none dark:text-custom-white dark:bg-dm-elements'
                    onChange={e => setSelectedRegion(e.target.value)}
                    >
                        <div className='p-4 bg-green-600 border-2 border-amber-300'>
                            <option className='hidden' value="">Filter by Region</option>
                            {
                                regions && regions.map((c, i) => (
                                    <div className='border-2 border-amber-300'>
                                        <option className='m-20' key={i} value={c}>{c}</option>
                                    </div>
                                )) 
                            }
                        </div>
                    </select>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Filters