import ItemNews from '../ItemNews'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import '../../css/Custom.css'
import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const url = 'http://localhost:3002'

const HomeNewsAndEvent = () => {
  const { t } = useTranslation()

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
          <p className='font-bold text-2xl leading-7 text-center uppercase'>{t('homepage.new_and_event')}</p>
        </div>
        <div
          className='w-1200 mx-auto'
          // onMouseMove={() => {
          //   setIsShowArrows(true)
          // }}
          // onMouseOut={() => {
          //   setIsShowArrows(false)
          // }}
        >
          <Swiper
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            loop={true}
            className='mySwiper'
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ItemNews data={item} />
              </SwiperSlide>
            ))}
            <>
              <div className='  arrow arrow-left  '>
                <button>
                  <img src={images.arrow_left} />
                </button>
              </div>
              <div className=' arrow arrow-right'>
                <button>
                  <img src={images.arrow_right} />
                </button>
              </div>
            </>
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default HomeNewsAndEvent
