import React, {useEffect, useState} from 'react'

const TopSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
    <div className='flex justify-between items-center bg-custom-white dark:bg-dm-elements dark:text-custom-white shadow px-20 py-8'>
        <h1 className='text-3xl font-bold'>Where in the world?</h1>
        <button className='flex justify-between items-center text-lg scale-95 hover:scale-100'
        onClick={toggleDarkMode}
        >
          <img src={isDarkMode ? "/moon-day.svg" : "/moon-night.svg"} className='w-5 h-5 mr-3' alt="light mode icon" />
          Dark Mode
        </button>
    </div>
  )
}

export default TopSection