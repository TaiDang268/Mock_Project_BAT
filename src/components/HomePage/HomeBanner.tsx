import images from '~/assets/images'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

const HomeBanner = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full  h-638 bg-home-gradent flex'>
        <div className='w-1/2 box-border p-32'>
          <div className='mb-8 '>
            <p style={{ color: 'rgba(245, 122, 33, 1)', fontSize: '40px' }} className='font-bold '>
              BATTECH ERP
            </p>
          </div>
          <div className='mb-4'>
            <p className='font-bold text-2xl'> {t('homepage.banner.solution')}</p>
          </div>
          <div>
            <p style={{ color: 'rgba(96, 96, 96, 1)' }} className='mb-20 h-36'>
              {t('homepage.banner.description')}
            </p>
          </div>
          <div>
            <Button children={t('homepage.banner.button')} className='h-12 px-8 text-2xl font-semibold' />
          </div>
        </div>
        <div className='w-1/2'>
          <img src={images.image_home_1}></img>
        </div>
      </div>
    </>
  )
}
export default HomeBanner
