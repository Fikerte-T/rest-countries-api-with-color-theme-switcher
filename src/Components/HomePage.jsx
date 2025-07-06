import React, { useContext } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'
import Filters from './Filters'
import Countries from './Countries'
import Pagination from './Pagination'

const HomePage = () => {
    const {error} = useContext(CountriesContext)
    console.log(error)
  return (
    <>
        {/* {<p>{error}</p>} */}
        {error ? 
        <p className='text-center m-10 font-bold text-xl text-red-500'>{error}</p> :
        <>
          <Filters />
          <Countries />
          <Pagination />
        </>
      }
    </>
      // </main>
  )
}

export default HomePage