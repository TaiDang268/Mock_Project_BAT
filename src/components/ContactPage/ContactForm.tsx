import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
import * as Yup from 'yup'

import { successMessage } from '~/toast-message/Toast'

import { emailValidation, nameValidation, phoneValidation } from '../../validate_rule/yupGlobal'
import Button from '../common/Button'
type Inputs = {
  name: string
  email: string
  phone: string
}
const ContactForm = () => {
  const { t } = useTranslation()
  const validationSchema = Yup.object().shape({
    name: nameValidation(t),
    email: emailValidation(t),
    phone: phoneValidation(t)
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    successMessage()
    console.log(data)
  }
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
            <div className='flex gap-1'>
              <p className='font-medium '>{t('contact_page.placeholder_name')}</p>
              <p className='text-red-500'>*</p>
            </div>
            <input
              className=' w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder={`${t('contact_page.placeholder_name')}`}
              {...register('name')}
            />
            {errors.name && <p className='text-red-500 pl-3 text-[14px]'>{`${errors.name.message}`}</p>}
          </div>
          <div className='w-[30%] max-md:w-full'>
            <div className='flex gap-1'>
              <p className='font-medium'>Email</p>
              <p className='text-red-500'>*</p>
            </div>
            <input
              className=' w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className='text-red-500 pl-3 text-[14px]'>{`${errors.email.message}`}</p>}
          </div>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium '>{t('contact_page.placeholder_phone')}</p>

            <input
              className=' w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder={`${t('contact_page.placeholder_phone')}`}
              {...register('phone')}
            />
            {errors.phone && <p className='text-red-500 pl-3 text-[14px]'>{`${errors.phone.message}`}</p>}
          </div>
        </div>
        <div className='my-3'>
          <textarea
            className='w-full  border border-gray-400 rounded-lg p-3 h-40'
            placeholder={`${t('contact_page.placeholder_content')}`}
          />
        </div>
        <motion.div whileHover={{ scale: 1.1 }} className='flex justify-center items-center my-10'>
          <Button children={`${t('contact_page.button')}`} className='w-[276px]' onClick={handleSubmit(onSubmit)} />
        </motion.div>
        <ToastContainer />
      </div>
    </>
  )
}
export default ContactForm
