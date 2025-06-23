import React, { useContext } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'
import Filters from './Filters'
import Countries from './Countries'
import Pagination from './Pagination'

const HomePage = () => {
    const {error} = useContext(CountriesContext)
  return (
     <main className='font-hanken min-h-screen bg-lm-bg dark:bg-dm-bg text-lm-text  grid gap-14'>
        {error && <p>{error}</p>}
        <Filters />
        <Countries />
        <Pagination />
      </main>
  )
}

export default HomePage