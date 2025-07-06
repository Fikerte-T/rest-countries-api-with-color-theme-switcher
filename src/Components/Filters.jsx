import React, { useContext, useEffect, useState, useRef } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const Filters = () => {
    const {regions, countries, setFilteredCountries, setCurrentPage, isDarkMode} = useContext(CountriesContext)
    const [selectedRegion, setSelectedRegion] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

      const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            if(filtered.length === 0) {
                setCurrentPage(0)
            }
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
                <div ref={dropdownRef} className='relative cursor-pointer w-3xs shadow-md  rounded-md text-lm-text  dark:text-custom-white dark:bg-dm-elements mt-10 md:m-0'>
                    <div className='flex items-center justify-between p-4' type='button' onClick={() => setIsOpen(prev => !prev)}>
                        <span className=''>{selected ||  "Filter by Region"}</span>
                        <img className='w-4 h-4 ml-8' src={isDarkMode ? '/dropdown-white.svg' : '/dropdown-black.svg'} alt="" />
                    </div>
                   
                        {isOpen && (
                         <ul className='list-none z-50 absolute bg-lm-bg w-full dark:bg-dm-elements mt-2 rounded-md'>
                             {
                                regions && regions.map((c, i) => (
                                    <li  className='list-none px-4 py-1 hover:bg-dm-bg hover:text-custom-white dark:hover:bg-lm-bg dark:hover:text-lm-text' key={i}
                                        onClick={() => {
                                        setSelected(c)
                                        setSelectedRegion(c)
                                        setIsOpen(false)
                                        }}
                                    >{c}</li>
                                )) 
                             }
                         </ul>
                        )}
                </div>
            </div>
        </form>
    </div>
  )
}

export default Filters