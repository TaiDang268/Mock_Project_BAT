import ItemNews from '../ItemNews'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import '../../css/Custom.css'
import { useTranslation } from 'react-i18next'

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
        <div>
          <Swiper
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true
            }}
            navigation={true}
            loop={true}
            className='mySwiper'
          >
            {data?.map((item) => (
              <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ItemNews data={item} key={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default HomeNewsAndEvent
