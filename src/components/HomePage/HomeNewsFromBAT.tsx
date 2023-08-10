import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

import Button from '../common/Button'

const HomeNewsFromBAT = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full bg-[#E9F9D6] min-h-[430px]'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-12 px-4'>
        {/* text */}
        <div className='col-span-7 mt-10 max-[700px]:col-span-12 max-[700px]:px-5 '>
          <div className='mb-4'>
            <p className='font-medium leading-6 text-[#606060] '> {t('homepage.news.title')}</p>
          </div>
          <div className='mb-3'>
            <p className='font-bold text-[24px] leading-7'> {t('homepage.news.solution')}</p>
          </div>
          <div className='h-40 '>
            <p className='font-medium leading-6 text-[#606060]'> {t('homepage.news.description')}</p>
          </div>
          <div className='mt-10'>
            <Button children={t('homepage.news.button')} className='h-12 px-8 text-xl font-semibold' />
          </div>
        </div>
        {/* image */}
        <div className='  relative col-span-5 max-[700px]:hidden'>
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
