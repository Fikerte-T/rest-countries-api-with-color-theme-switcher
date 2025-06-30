import React, {useContext, useEffect} from 'react'
import { CountriesContext } from './Contexts/CountriesContext'

const TopSection = () => {
  const {isDarkMode, setIsDarkMode} = useContext(CountriesContext)
  const toggleDarkMode =() => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark')
    } else
      document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <div className='flex justify-between items-center px-5 w-full bg-custom-white dark:bg-dm-elements dark:text-custom-white shadow md:px-20 py-8'>
        <h1 className='text-lg md:text-3xl font-bold'>Where in the world?</h1>
        <button className='flex justify-around items-center gap-2 scale-95 hover:scale-100'
        onClick={toggleDarkMode}
        >
          <img src={isDarkMode ? "/moon-day.svg" : "/moon-night.svg"} className='w-4 h-4' alt="light mode icon" />
          Dark Mode
        </button>
    </div>
  )
}

export default TopSection