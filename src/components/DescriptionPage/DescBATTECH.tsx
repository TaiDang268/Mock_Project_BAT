import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const DescBATTECH = () => {
  const { t } = useTranslation()
  return (
    <>
      {/* component giới thiệu về BATTECh */}
      <div className='w-full my-36'>
        <div className='w-1200 h-[406px] mx-auto  flex'>
          <div className='w-1/2'>
            <img src={images.desc_banner_3} />
          </div>
          <div className=' w-1/2 px-2 py-3'>
            <p className='font-bold text-[24px] uppercase'>{t('description_page.introduce_about_BATTECH.title')}</p>
            <p className='font-medium text-[#444444] my-4'>
              {t('description_page.introduce_about_BATTECH.description.1')}
            </p>
            <p className='font-medium text-[#444444] my-4'>
              {t('description_page.introduce_about_BATTECH.description.2')}
            </p>
            <p className='font-medium text-[#444444] my-4'>
              {t('description_page.introduce_about_BATTECH.description.3')}
            </p>
          </div>
        </div>
      </div>
      {/* component tầm nhìn và sứ mệnh */}
      <div className='w-full my-36'>
        <div className='w-1200 h-[406px] mx-auto  flex'>
          <div className=' w-1/2 px-2 py-3'>
            <p className='font-bold text-[24px] uppercase text-right'>
              {t('description_page.vision_and_mission.title')}
            </p>
            <p className='font-medium italic my-4  text-right'>
              {t('description_page.vision_and_mission.description.1')}
            </p>
            <p className='font-medium text-[#444444] my-4  text-right'>
              {t('description_page.vision_and_mission.description.2')}
            </p>
            <p className='font-medium text-[#444444] my-4  text-right'>
              {t('description_page.vision_and_mission.description.3')}
            </p>
          </div>
          <div className='w-1/2'>
            <img src={images.desc_banner_4} />
          </div>
        </div>
      </div>
      {/* component giá trị cốt lõi  */}
      <div className='w-full my-36'>
        <p className='text-center font-bold text-[24px] mb-10 uppercase'>Giá trị cốt lõi</p>
        <div className='w-1200 h-[406px] mx-auto  flex'>
          <div className='w-1/2 flex'>
            <div className='w-1/2 mr-6 '>
              <p className='font-bold text-[20px] text-[#F57A21]'>BAT</p>

              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.BAT.1')}</p>
              </div>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.BAT.2')}</p>
              </div>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.BAT.3')}</p>
              </div>
            </div>
            <div className='w-1/2 mr-6 '>
              <p className='font-bold text-[20px] text-[#F57A21]'>TECH</p>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.TECH.1')}</p>
              </div>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.TECH.2')}</p>
              </div>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.TECH.3')}</p>
              </div>
              <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg h-[42px] flex items-center'>
                <p className='pl-4'> {t('description_page.core_values.TECH.4')}</p>
              </div>
            </div>
          </div>
          <div className=' w-1/2 px-14  py-14 bg-[#E9F9D6] rounded-[20px]'>
            <p className='font-medium text-[#444444] my-4'>{t('description_page.core_values.description.1')}</p>
            <p className='font-medium text-[#444444] my-4'>{t('description_page.core_values.description.2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default DescBATTECH
