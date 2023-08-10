import './App.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { BrowserRouter } from 'react-router-dom'

import Routers from './router'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-blue-900'>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  )
}

export default App
