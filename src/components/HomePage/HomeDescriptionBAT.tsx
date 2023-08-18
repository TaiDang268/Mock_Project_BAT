import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import { variants } from '~/animation/variants'
import images from '~/assets/images'
const HomeDescriptionBAT = () => {
  const { t } = useTranslation()

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={variants}
        className='max-w-[1190px]  mx-auto my-20 grid grid-cols-12'
      >
        <div className='xl:col-span-6 xl:block hidden'>
          <img src={images.image_home_2}></img>
        </div>
        <div className='xl:col-span-6 col-span-12 max-xl:px-[100px] max-lg:px-[20px]'>
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
      </motion.div>
    </>
  )
}
export default HomeDescriptionBAT
