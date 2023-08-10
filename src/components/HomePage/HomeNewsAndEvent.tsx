import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '~/assets/images'

import ItemNews, { IItemNewsProps } from '../common/ItemNews'
import { api } from '~/API/api'

const HomeNewsAndEvent = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<IItemNewsProps[] | []>()

  useEffect(() => {
    api
      .getAll('/news')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <div className='w-full mt-20 mb-4 '>
        <div className=''>
          <p className='font-bold text-2xl leading-7 text-center uppercase my-10'>{t('homepage.new_and_event')}</p>
        </div>
        <div className='max-w-[1200px] mx-auto '>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              450: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 10 }
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
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
                <ItemNews {...item} />
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
