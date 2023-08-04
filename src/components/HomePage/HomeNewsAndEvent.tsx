import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ItemNews from '../ItemNews'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../../css/Custom.css'
const url = 'http://localhost:3002'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const HomeNewsAndEvent = () => {
  const [data, setData] = useState<[]>()
  useEffect(() => {
    axios
      .get(`${url}/news`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className='w-full mt-20 mb-4'>
        <div className=''>
          <p className='font-bold text-2xl leading-7 text-center'>Tin tức và sự kiện</p>
        </div>
        <div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition='all .5'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style '
            itemClass='carousel-item-padding-20-px'
          >
            {data?.map((item) => <ItemNews data={item} />)}
            <div></div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
export default HomeNewsAndEvent
