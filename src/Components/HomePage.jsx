import React, { useContext } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'
import Filters from './Filters'
import Countries from './Countries'
import Pagination from './Pagination'

const HomePage = () => {
    const {error} = useContext(CountriesContext)
  return (
    <>
        {error && <p>{error}</p>}
        <Filters />
        <Countries />
        <Pagination />
    </>
      // </main>
  )
}

export default HomePage