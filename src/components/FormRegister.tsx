import { useTranslation } from 'react-i18next'

import Button from './Button'

const FormRegister = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='w-full h-[388px] bg-[#E9F9D6] mt-28 px-4'>
        <div>
          <p className='font-bold text-[24px] text-center pt-8'>{t('homepage.form_register.title')}</p>
        </div>
        <div className='flex flex-col my-4 '>
          <div className='flex justify-center items-center my-4'>
            <input
              className='w-[580px] h-[48px] rounded-xl outline-none  px-4'
              placeholder={t(`homepage.form_register.name_placeholder`)}
            />
          </div>

          <div className='flex justify-center items-center'>
            <input
              className='w-[580px] h-[48px] rounded-xl outline-none px-4'
              placeholder={t(`homepage.form_register.email_placeholder`)}
            />
          </div>
        </div>
        <div className='flex justify-center items-center mt-14'>
          <Button children={t(`homepage.form_register.button`)} />
        </div>
      </div>
    </>
  )
}
export default FormRegister
