import React from 'react'

const Filters = ({regions}) => {
    console.log(regions)
  return (
    <div className='flex justify-between items-center px-20'>
        <div className='shadow-md w-1/3 p-4 rounded-md' >
            <input type="search" name="country" id="" placeholder='Search for a country...' />
        </div>
        <select name="countries" id="" className='appearance-auto w-1/5 shadow-md p-4 rounded-md focus:outline-none'>
            <option value="">Filter by Region</option>
            {
                regions && regions.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                    )) 
                }
        </select>
    </div>
  )
}

export default Filters