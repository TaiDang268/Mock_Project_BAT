import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from './router'
// import { useEffect, useState } from 'react'
// import Button from './components/Button'

function App() {
  // const [theme, setTheme] = useState('light')
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [theme])
  // const toggleDarkMode = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }
  return (
    <div className='h-screen bg-white dark:bg-blue-900'>
      {/* <Button onClick={toggleDarkMode} className='bg-slate-400'>
        Togle theme
      </Button> */}

      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  )
}

export default App
