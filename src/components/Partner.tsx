// Import Swiper styles
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { useTranslation } from 'react-i18next'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '~/assets/images'

const listImage = [
  images.partner_1,
  images.partner_2,
  images.partner_3,
  images.partner_4,
  images.partner_1,
  images.partner_2,
  images.partner_3,
  images.partner_4
]
const Partner = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full'>
        <div className='max-w-[1200px]   mx-auto my-20'>
          <div>
            <p className='uppercase font-bold text-[24px] text-center mb-3'>{t('homepage.partner_title')}</p>
          </div>
          <div className=''>
            <Swiper
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                480: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 50 },
                1536: { slidesPerView: 4, spaceBetween: 150 }
              }}
              // slidesPerView={4}
              // spaceBetween={30}
              freeMode={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                clickable: true
              }}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className='mySwiper'
            >
              <div>
                {listImage.map((image) => (
                  <SwiperSlide key={image}>
                    <div className='   rounded-xl shadow-lg  '>
                      <img src={image} className='mx-auto' />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
export default Partner
