import React, { useContext } from 'react'
import { CountriesContext } from './Contexts/CountriesContext'
import { Link } from 'react-router-dom'

const Countries = () => {
  const {loading, currentItems} = useContext(CountriesContext)
  // console.log(currentItems)
  return (
    <div className='z-0 relative'>
      {loading && <p>Loading</p>}
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 justify-center px-5 md:px-20'>
      {
        currentItems.length > 0 ? (currentItems.map((c, i) => (
          <li key={i}  className='list-none rounded-lg bg-custom-white dark:bg-dm-elements dark:text-lm-bg shadow text-left'>
            <Link to={`detail/${c.name}`} className=' cursor-pointer' 
            state={{c}}
            >
              <img src={c.flag} alt={`${c.name} flag`} className='w-full h-45 object-cover rounded-t-lg'/>
              <div className='p-4 h-50 '>
                <h2 className='font-bold text-xl py-4'>{c.name}</h2>
                <p className='font-semibold text-nowrap'>Population: <span className='font-light'>{c.population.toLocaleString()}</span></p>
                <p className='font-semibold'>Region: <span className='font-light'> {c.region}</span></p>
                <p className='font-semibold'>Capital: <span className='font-light'> {c.capital}</span></p>
              </div>
            </Link>
          </li>
        ))) :
        <li className=''>No Countries Found</li>
      }
      </ul>
    </div>
  )
}

export default Countries