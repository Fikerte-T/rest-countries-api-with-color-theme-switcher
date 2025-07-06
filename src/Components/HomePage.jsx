import React, { useContext } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'
import Filters from './Filters'
import Countries from './Countries'
import Pagination from './Pagination'

const HomePage = () => {
    const {error} = useContext(CountriesContext)
  return (
    <>
        {error ? 
        <p className='text-center m-10 font-bold text-xl text-red-500'>{error}</p> :
        <>
          <Filters />
          <Countries />
          <Pagination />
        </>
      }
    </>
  )
}

export default HomePage