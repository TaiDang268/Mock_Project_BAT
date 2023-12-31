import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import { variants } from '~/animation/variants'
import images from '~/assets/images'

import Button from '../common/Button'

const HomeNewsFromBAT = () => {
  const { t } = useTranslation()
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={variants}
      className='w-full bg-[#E9F9D6] min-h-[430px]'
    >
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
            <Button children={t('homepage.news.button')} className=' px-8 text-[24px] font-semibold' height='48px' />
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
    </motion.div>
  )
}
export default HomeNewsFromBAT
