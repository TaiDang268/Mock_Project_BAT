import Button from '../common/Button'
import { useTranslation } from 'react-i18next'
const ContactForm = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <p className='font-bold text-[24px] text-center'>{t('contact_page.ready_start_1')}</p>
        <div className='flex items-center justify-center gap-1 mb-10'>
          <p className='text-center'>{t('contact_page.ready_start_2')} </p>
          <p className='text-red-500'>*</p>
        </div>
        <div className='flex justify-between max-md:block'>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium '>{t('contact_page.placeholder_name')}</p>
            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder={`${t('contact_page.placeholder_name')}`}
            />
          </div>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium'>Email</p>
            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder='Email'
            />
          </div>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium '>{t('contact_page.placeholder_phone')}</p>

            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder={`${t('contact_page.placeholder_phone')}`}
            />
          </div>
        </div>
        <div className='my-3'>
          <textarea
            className='w-full  border border-gray-400 rounded-lg p-3 h-40'
            placeholder={`${t('contact_page.placeholder_content')}`}
          />
        </div>
        <div className='flex justify-center items-center my-10'>
          <Button children={`${t('contact_page.button')}`} className='w-[276px]' />
        </div>
      </div>
    </>
  )
}
export default ContactForm
