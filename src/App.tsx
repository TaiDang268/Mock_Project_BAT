import './App.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import ScrollToTopLibrary from 'react-scroll-to-top'
import { BrowserRouter } from 'react-router-dom'

import Routers from './router'
import ScrollToTop from './config/ScrollToTop'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-blue-900'>
      <BrowserRouter>
        <ScrollToTop />
        <Routers />
        <ScrollToTopLibrary
          smooth
          width='20'
          height='20'
          style={{
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray'
          }}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
