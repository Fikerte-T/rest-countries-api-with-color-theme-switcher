import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='font-hanken min-h-screen bg-lm-bg dark:bg-dm-bg'>
      <App />
    </main>
  </StrictMode>,
)
