import clsx from 'clsx'
import '../../i18n/config'

import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

const footerLinkUseful = [
  'Terms_of_use',
  'Warranty_policy',
  'Partner_program',
  'Recruitment',
  'Help_center',
  'Digital_marketing_solutions'
]
const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full h-min-460 bg-BAT-primary md:px-20 py-20 px-1 '>
      <div className={clsx('grid grid-cols-1  lg:grid-cols-3 gap-4', 'md:grid-cols-1 ')}>
        {/* column 1 */}
        <div className='   p-3 text-white  w-full max-lg:border-b-2 max-lg:border-white max-lg:pb-8'>
          <div className='h-16'>
            <img src={images.BAT_logo_white} alt='BAT logo' />
          </div>
          <div>
            <p className='text-base font-medium'>{t('footer.description')}</p>
          </div>
          <div className='flex mt-14'>
            <img src={images.fb_icon} alt='Facebook icon' className='mr-4' />
            <img src={images.twitter_icon} alt='Twitter icon' className='mr-4' />
            <img src={images.youtobe_icon} alt='Youtube icon' className='mr-4' />
            <img src={images.instagram_icon} alt='Instagram icon' className='mr-4' />
            <img src={images.github_icon} alt='Github icon' />
          </div>
        </div>
        {/* column 2 */}
        <div className='   p-3 text-white  w-full text-base font-medium max-lg:border-b-2 max-lg:border-white'>
          <div className='h-16 flex center'>
            <p className='text-2xl font-bold'>{t('footer.contact.tilte')} </p>
          </div>

          <div className='flex mb-4'>
            <img src={images.phone_icon} className='mr-2' />
            <p>{t('footer.contact.phone')}</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.email_icon} className='mr-2' />
            <p>{t('footer.contact.email')}</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.home_icon} className='mr-2' />
            <p>{t('footer.contact.address')}</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.nameBAT_icon} className='mr-2' />
            <p>{t('footer.contact.name')}</p>
          </div>
        </div>
        {/* column 3 */}
        <div className='   p-3 text-white  w-full'>
          <div className='h-16 flex center'>
            <p className='text-2xl font-bold'>{t('footer.linkUsefull.tilte')} </p>
          </div>
          <div>
            {footerLinkUseful.map((link, index) => (
              <div key={index} className='flex text-base font-medium mb-2'>
                <img src={images.bigger_icon} className='mr-2' />
                <p>{t(`footer.linkUsefull.${link}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
