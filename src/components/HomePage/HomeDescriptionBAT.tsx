import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const HomeDescriptionBAT = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='max-w-[1190px]  mx-auto my-20 grid grid-cols-12'>
        <div className='xl:col-span-6 xl:block hidden'>
          <img src={images.image_home_2}></img>
        </div>
        <div className='xl:col-span-6 col-span-12 max-xl:px-[180px] max-lg:px-[100px]'>
          <div>
            <p className='font-bold text-2xl'>{t('homepage.descriptionBAT.title')}</p>
          </div>
          <div className='mt-4'>
            <p className='font-medium'>{t('homepage.descriptionBAT.description')}</p>
          </div>
          <div className='mt-8'>
            <div className='grid grid-cols-12 gap-5'>
              {/* clock icon */}
              <div className='col-span-3 max-md:col-span-6 max-sm:col-span-12 h-144  border  four_icon   '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.clock_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.quick_response')}</p>
                </div>
              </div>
              {/* setting icon */}
              <div className='col-span-3 max-md:col-span-6 max-sm:col-span-12  h-144 border  four_icon  '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.setting_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.development_system')}</p>
                </div>
              </div>
              {/* padlock icon */}
              <div className='col-span-3 max-md:col-span-6 max-sm:col-span-12  h-144 border  four_icon  '>
                <div className='h-1/2 flex items-center justify-center'>
                  <img src={images.padlock_icon} />
                </div>
                <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                  <p className='font-semibold'>{t('homepage.descriptionBAT.information_security')}</p>
                </div>
              </div>
              {/* security icon */}
              <div className='col-span-3 max-md:col-span-6 max-sm:col-span-12  h-144 border  four_icon  '>
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
