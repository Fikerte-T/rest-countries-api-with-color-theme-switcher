import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { CountriesContext } from './Contexts/CountriesContext'

const CountryDetail = () => {
    const {name} = useParams()
    const {countries, isDarkMode} = useContext(CountriesContext)
    const [country, setCountry] = useState(null)
    
    const borders = country && country.borders 
    const result = borders ? borders.map(b => countries.find(c => c.alpha3Code === b)).filter(Boolean) : []
    useEffect(() => {
        const country= countries.find(c => c.name === name)
        setCountry(country)
    }, [name, countries])
  return (
    <>
        <Link className='block w-fit h-10 my-14 mx-10 md:mx-20 px-5 py-2 shadow rounded-md text-lm-input dark:text-custom-white dark:bg-dm-elements  hover:text-dm-bg dark:hover:bg-lm-bg' to={'/'}>
        <img src={isDarkMode ? "/back-white.svg" : "/back.svg"} className='float-left w-5 h-5 mr-3' alt="back icon" />
        Back</Link>
        <div className='flex flex-col md:flex-row justify-between px-5 md:px-20 dark:text-custom-white '  >
            {country ? (
        <>
            <div className='w-full md:w-[60%] lg:w-[45%]'>
                <img className='h-full' src={country.flags.svg} alt="" />
            </div>
            <div className='w-full md:w-[30%] lg:w-[45%] py-10'>
                <h2 className='text-2xl font-bold mb-5'>{country.name}</h2>

                <div className='flex flex-col items-baseline space-y-10 lg:flex-row lg:justify-between '>
                    <div className='flex flex-col space-y-2'>
                        <p className='font-semibold'>Native Name: <span className='font-light'>{country.nativeName}</span></p>
                        <p className='font-semibold'>Population: <span className='font-light'>{country.population.toLocaleString()}</span></p>
                        <p className='font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
                        <p className='font-semibold'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
                        <p className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span></p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='font-semibold'>Top Level Domain: <span className='font-light'>{country.topLevelDomain}</span></p>
                        <p className='font-semibold'>Currencies: <span className='font-light'>{country.currencies[0].name}</span></p>        
                        <p className='font-semibold'>Languages: 
                            {country.languages.map((l, i) => (
                                <span key={i} className='font-light ml-1'>
                                    {l.name}{i < country.languages.length - 1 ? ',' : ''}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                
                <div className='mt-10'>
                    <p className='font-semibold flex flex-wrap gap-2'>Border Countries: 
                     {result.length > 0 ? result.map((r, i) => (
                        <Link to={`/detail/${r.name}`} className='px-3 shadow-md rounded-md hover:bg-dm-bg hover:text-lm-bg dark:bg-dm-elements dark:hover:text-lm-text dark:hover:bg-lm-bg 
                         font-light' key={i}>{r.name}</Link>
                     )) : 'No boders'}
                    </p>
                </div>
            </div>
        </>
            ) : <p>No match found</p>
            }
        </div>
    </>
  )
}

export default CountryDetail