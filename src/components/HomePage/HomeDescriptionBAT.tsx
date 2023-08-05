import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const HomeDescriptionBAT = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='w-1182  mx-auto my-20 flex'>
        <div className='w-1/2'>
          <img src={images.image_home_2}></img>
        </div>
        <div className='w-1/2 '>
          <div>
            <p className='font-bold text-2xl'>{t('homepage.descriptionBAT.title')}</p>
          </div>
          <div className='mt-4'>
            <p className='font-medium'>{t('homepage.descriptionBAT.description')}</p>
          </div>
          <div className='mt-8'>
            <div className='flex'>
              {/* clock icon */}
              <div className='w-123 h-144 border  four_icon mr-7  '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.clock_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.quick_response')}</p>
                </div>
              </div>
              {/* setting icon */}
              <div className='w-123 h-144 border  four_icon mr-7 '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.setting_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.development_system')}</p>
                </div>
              </div>
              {/* padlock icon */}
              <div className='w-123 h-144 border  four_icon mr-7 '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.padlock_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.information_security')}</p>
                </div>
              </div>
              {/* security icon */}
              <div className='w-123 h-144 border  four_icon mr-7 '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.security_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.automation')}</p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      {/*  */}
    </>
  )
}
export default HomeDescriptionBAT
