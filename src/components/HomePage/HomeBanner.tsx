import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

import Button from '../Button'

const HomeBanner = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full  min-h-[638px] bg-home-gradent grid grid-cols-12'>
        <div className='xl:col-span-6 col-span-12 box-border xl:p-32 lg:p-[180px]  p-[100px] pt-[180px]  '>
          <div className='mb-8 '>
            <p style={{ color: 'rgba(245, 122, 33, 1)', fontSize: '40px' }} className='font-bold '>
              BATTECH ERP
            </p>
          </div>
          <div className='mb-4'>
            <p className='font-bold text-2xl'> {t('homepage.banner.solution')}</p>
          </div>
          <div>
            <p style={{ color: 'rgba(96, 96, 96, 1)' }} className='mb-20 h-36'>
              {t('homepage.banner.description')}
            </p>
          </div>
          <div>
            <Button children={t('homepage.banner.button')} className='h-12 px-8 text-xl font-semibold' />
          </div>
        </div>
        <div className='xl:col-span-6  xl:block hidden'>
          <img src={images.image_home_1}></img>
        </div>
      </div>
    </>
  )
}
export default HomeBanner
