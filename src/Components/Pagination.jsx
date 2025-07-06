import React, { useContext, useState, useEffect } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const Pagination = () => {
    const {filteredCountries, setCurrentItems, setCurrentPage, currentPage} = useContext(CountriesContext)
    const pageSize = 8
    const totalPages = Math.ceil(filteredCountries.length / pageSize )
    
    useEffect(() => {
        const start = (currentPage - 1) * pageSize
        const end = start + pageSize
        setCurrentItems(filteredCountries.slice(start, end))
    }, [currentPage, filteredCountries])


  return (
    <div className='flex justify-center items-center py-10 dark:text-lm-bg '>
        <button 
        onClick={() => setCurrentPage(prev => Math.max(prev -1, 1))}
        disabled={currentPage === 1}
        className='rounded-lg w-25 m-3 p-2 hover:bg-dm-bg hover:text-custom-white dark:bg-dm-elements dark:text-custom-white'
        >Previous</button>

        <span>{currentPage} of {totalPages}</span>

        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className='rounded-lg w-25 m-3 p-2 hover:bg-dm-bg hover:text-custom-white dark:bg-dm-elements dark:text-custom-white'
        >Next</button>

    </div>
  )
}

export default Pagination