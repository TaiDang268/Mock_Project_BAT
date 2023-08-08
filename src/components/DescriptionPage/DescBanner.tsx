import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const DescBanner = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='w-full h-[334px] bg-[#E9F9D6] grid grid-cols-12 '>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] left-[100px] '>
            <img src={images.desc_banner_1} />
          </div>
        </div>
        <div className='xl:col-span-4 my-auto col-span-12 max-xl:mx-auto '>
          <p className='font-bold text-[32px] text-[#008345] uppercase flex '>
            {t('description_page.title')} <span className='text-[#F57A21] ml-3'> BATTECH</span>
          </p>
        </div>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] right-[100px] '>
            <img src={images.desc_banner_2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default DescBanner
