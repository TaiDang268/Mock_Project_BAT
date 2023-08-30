import './App.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTopLibrary from 'react-scroll-to-top'

import { ReactComponent as ScrollIcon } from './assets/images/scrolltotop.svg'
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
          component={<ScrollIcon />}
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
