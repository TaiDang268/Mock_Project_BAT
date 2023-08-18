import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import images from '~/assets/images'

import Button from '../common/Button'

const HomeBanner = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/contact')
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='w-full min-h-[638px] bg-home-gradent grid grid-cols-12'
      >
        <div className='xl:col-span-6 col-span-12 box-border xl:p-32 lg:p-[100px] p-[20px] pt-[180px]'>
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='mb-8'
          >
            <p style={{ color: 'rgba(245, 122, 33, 1)', fontSize: '40px' }} className='font-bold'>
              BATTECH ERP
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-4'
          >
            <p className='font-bold text-2xl'>{t('homepage.banner.solution')}</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p style={{ color: 'rgba(96, 96, 96, 1)' }} className='mb-20 h-36'>
              {t('homepage.banner.description')}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              children={t('homepage.banner.button')}
              className='h-12 px-8 text-base font-semibold'
              onClick={handleClick}
            />
          </motion.div>
        </div>
        <div className='xl:col-span-6 xl:block hidden'>
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            src={images.image_home_1}
            alt='Home Image'
          />
        </div>
      </motion.div>
    </>
  )
}
export default HomeBanner
