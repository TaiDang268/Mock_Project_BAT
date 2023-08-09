import { useTranslation } from 'react-i18next'
import images from '~/assets/images'
const NewBanner = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full h-[334px] bg-[#E9F9D6] grid grid-cols-12 '>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] left-[100px] '>
            <img src={images.news_banner_1} />
          </div>
        </div>
        <div className='xl:col-span-4 my-auto col-span-12 max-xl:mx-auto '>
          <p className='font-bold text-[32px] text-[#008345] uppercase text-center '>{t('news_page.title')}</p>
          <p className='text-center text-[#444444]'>{t('news_page.description')}</p>
        </div>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] right-[100px] '>
            <img src={images.news_banner_2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default NewBanner
