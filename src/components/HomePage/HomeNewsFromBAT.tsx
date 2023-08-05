import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

import Button from '../Button'

const HomeNewsFromBAT = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full bg-[#E9F9D6] h-430'>
      <div className='w-1200 mx-auto flex'>
        {/* text */}
        <div className='w-3/5 mt-10'>
          <div className='mb-4'>
            <p className='font-medium leading-6 text-[#606060] '> {t('homepage.news.title')}</p>
          </div>
          <div className='mb-3'>
            <p className='font-bold text-[24px] leading-7'> {t('homepage.news.solution')}</p>
          </div>
          <div className='h-32'>
            <p className='font-medium leading-6 text-[#606060]'> {t('homepage.news.description')}</p>
          </div>
          <div className='mt-10'>
            <Button children={t('homepage.news.button')} className='h-12 px-8 text-xl font-semibold' />
          </div>
        </div>
        {/* image */}
        <div className='  relative w-2/5 '>
          <div className=' absolute z-10 top-14 left-5'>
            <img src={images.image_home_3} />
          </div>
          <div className='absolute top-36 left-24'>
            <img src={images.image_home_4} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeNewsFromBAT
