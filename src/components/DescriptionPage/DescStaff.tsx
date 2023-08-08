import { useTranslation } from 'react-i18next'
import images from '~/assets/images'
const DescStaff = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full my-20'>
        <div className='max-w-[1200px] min-h-[406px] m-auto  grid grid-cols-12'>
          <div className='col-span-6  m-auto max-lg:col-span-12'>
            <img src={images.desc_banner_5} />
          </div>
          <div className=' col-span-6 m-auto px-2 py-3 max-lg:col-span-12 max-lg:px-10'>
            <p className='font-bold text-[24px] uppercase max-lg:text-center'>{t('description_page.staff.title')}</p>
            <p className='font-medium text-[#444444] my-4'>{t('description_page.staff.description.1')}</p>
            <p className='font-medium text-[#444444] my-4'>{t('description_page.staff.description.2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default DescStaff
