import './App.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTopLibrary from 'react-scroll-to-top'

import ScrollToTop from './config/ScrollToTop'
import Routers from './router'
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
            backgroundColor: 'gray',
            fontWeight: 'bold'
          }}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
