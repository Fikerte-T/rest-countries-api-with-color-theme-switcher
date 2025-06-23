import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { CountriesContext } from './Contexts/CountriesContext'

const CountryDetail = () => {
    const {name} = useParams()
    const {countries} = useContext(CountriesContext)
    const [country, setCountry] = useState(null)
    
    const borders = country && country.borders 
    const result = borders ? borders.map(b => countries.find(c => c.alpha3Code === b)).filter(Boolean) : []

    useEffect(() => {
        const country= countries.find(c => c.name === name)
        setCountry(country)
    }, [name, countries])
  return (
    <div>
        <Link to={'/'}>Back</Link>
        <div>
            {country ? (
<>
            <div>
                <img src={country.flags.svg} alt="" />
            </div>
            <div>
                <h2>{country.name}</h2>
                <h2>{country.currencies.name}</h2>

                <div>
                    <p>Native Name: <span>{country.nativeName}</span></p>
                    <p>Population <span>{country.population}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Sub Region: <span>{country.subregion}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                    <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                    <p>Currencies: <span>{country.currencies[0].name}</span></p>
                    <p>Languages: 
                        {country.languages.map((l, i) => (
                            <span key={i}>
                                {l.name}{i < country.languages.length - 1 ? ',' : ''}
                            </span>
                        ))}
                    </p>
                    {/* <p>{c.alpha3Code}</p> */}
                </div>
                <div>
                    <p>Border Countries:
                     {result.length > 0 ? result.map((r, i) => (
                        <Link to={`/detail/${r.name}`} className='p-3 h-12 border-1 rounded-lg' key={i}>{r.name}</Link>
                     )) : 'No boders'}
                    </p>
                </div>
            </div>
</>
            ) : <p>No match found</p>
            }
        </div>
    </div>
  )
}

export default CountryDetail