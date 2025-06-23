import React, { useContext, useState, useEffect } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const Pagination = () => {
    const {filteredCountries, setCurrentItems, setCurrentPage, currentPage} = useContext(CountriesContext)
    const pageSize = 8
    const totalPages = Math.ceil(filteredCountries.length / pageSize )
    console.log(currentPage)
    // console.log(filteredCountries)
    
    useEffect(() => {
        const start = (currentPage - 1) * pageSize
        const end = start + pageSize
        setCurrentItems(filteredCountries.slice(start, end))
    }, [currentPage, filteredCountries])


  return (
    <div className='flex justify-center items-center mt-5 mb-10 '>
        <button 
        onClick={() => setCurrentPage(prev => Math.max(prev -1, 1))}
        disabled={currentPage === 1}
        className='border-1 border-lm-input rounded-lg w-25 m-3 p-2 hover:bg-dm-bg hover:text-custom-white'
        >Previous</button>

        <span>{currentPage} of {totalPages}</span>

        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className='border-1 border-lm-input rounded-lg w-25 m-3 p-2 hover:bg-dm-bg hover:text-custom-white'
        >Next</button>

    </div>
  )
}

export default Pagination