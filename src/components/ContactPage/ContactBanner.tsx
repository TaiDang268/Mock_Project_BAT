import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import images from '~/assets/images'

const ContactBanner = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='w-full h-[334px] bg-[#E9F9D6] grid grid-cols-12 '
      >
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] left-[100px] '>
            <img src={images.contact_banner_1} />
          </div>
        </div>
        <div className='xl:col-span-4 my-auto col-span-12 max-xl:mx-auto  max-xl:px-10'>
          <p className='font-bold text-[32px] text-[#008345] uppercase text-center '>{t('contact_page.title_1')}</p>
          <p className='text-center text-[#444444]'>{t('contact_page.title_2')}</p>
        </div>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] right-[100px] '>
            <img src={images.contact_banner_2} />
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default ContactBanner
