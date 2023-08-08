import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const DescBATTECH = () => {
  const { t } = useTranslation()
  return (
    <>
      {/* component giới thiệu về BATTECh */}
      <div className='w-full my-36'>
        <div className='max-w-[1200px] min-h-[406px] m-auto  grid grid-cols-12'>
          <div className='col-span-6  m-auto max-lg:col-span-12'>
            <img src={images.desc_banner_3} />
          </div>
          <div className=' col-span-6 m-auto px-2 py-3 max-lg:col-span-12 max-lg:px-10'>
            <p className='font-bold text-[24px] uppercase max-lg:text-center'>
              {t('description_page.introduce_about_BATTECH.title')}
            </p>
            {['1', '2', '3'].map((item) => (
              <p key={item} className='font-medium text-[#444444] my-4'>
                {t(`description_page.introduce_about_BATTECH.description.${item}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* component tầm nhìn và sứ mệnh */}
      <div className='w-full my-36'>
        <div className='max-w-[1200px] min-h-[406px] m-auto  grid grid-cols-12'>
          <div className=' col-span-6 m-auto px-2 py-3 max-lg:col-span-12 max-lg:px-10'>
            <p className='font-bold text-[24px] uppercase text-right'>
              {t('description_page.vision_and_mission.title')}
            </p>
            <p className='font-medium italic my-4  text-right'>
              {t('description_page.vision_and_mission.description.1')}
            </p>
            {['1', '2'].map((item) => (
              <p key={item} className='font-medium text-[#444444] my-4 text-right'>
                {t(`description_page.introduce_about_BATTECH.description.${item}`)}
              </p>
            ))}
          </div>
          <div className='col-span-6  m-auto max-lg:col-span-12'>
            <img src={images.desc_banner_4} />
          </div>
        </div>
      </div>
      {/* component giá trị cốt lõi  */}
      <div className='w-full my-36'>
        <p className='text-center font-bold text-[24px] mb-10 uppercase'>Giá trị cốt lõi</p>
        <div className='max-w-[1200px] min-h-[406px] mx-auto  flex max-lg:flex-col max-lg:items-center'>
          <div className='w-1/2 flex max-lg:w-full max-lg:px-16'>
            <div className='w-1/2 mr-6 max-lg:w-full '>
              <p className='font-bold text-[20px] text-[#F57A21]'>BAT</p>

              {['1', '2', '3'].map((item) => (
                <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg min-h-[42px] flex items-center'>
                  <p className='pl-4'> {t(`description_page.core_values.BAT.${item}`)}</p>
                </div>
              ))}
            </div>
            <div className='w-1/2 mr-6 max-lg:w-full '>
              <p className='font-bold text-[20px] text-[#F57A21]'>TECH</p>
              {['1', '2', '3', '4'].map((item) => (
                <div className='rounded-lg my-4 bg-[#ffffff] shadow-lg min-h-[42px] flex items-center'>
                  <p className='pl-4'> {t(`description_page.core_values.TECH.${item}`)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-1/2 px-14  py-14 bg-[#E9F9D6] rounded-[20px] max-lg:w-full max-lg:px-16'>
            {['1', '2'].map((item) => (
              <p className='font-medium text-[#444444] my-4'>{t(`description_page.core_values.description.${item}`)}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default DescBATTECH
