import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import { variants } from '~/animation/variants'
import images from '~/assets/images'
const arr = [
  { id: 1, image: images.clock_icon, name: 'quick_response' },
  { id: 2, image: images.setting_icon, name: 'development_system' },
  { id: 3, image: images.padlock_icon, name: 'information_security' },
  { id: 4, image: images.security_icon, name: 'automation' }
]
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
              {arr.map((item, index) => (
                <div
                  key={index}
                  className='col-span-3 max-md:col-span-6 max-sm:col-span-12 h-144  border  four_icon   '
                >
                  <div className='h-1/2 flex items-center justify-center'>
                    <img src={item.image} />
                  </div>
                  <div className=' h-1/2 mx-auto text-center px-4 flex items-center justify-center'>
                    <p className='font-semibold'>{t(`homepage.descriptionBAT.${item.name}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </motion.div>
    </>
  )
}
export default HomeDescriptionBAT
