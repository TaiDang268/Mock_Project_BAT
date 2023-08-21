import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
import * as Yup from 'yup'
import 'react-toastify/dist/ReactToastify.css'

import { successMessage } from '~/toast-message/Toast'

import Button from './Button'
import { emailValidation, nameValidation } from '../../validate_rule/yupGlobal'
type Inputs = {
  name: string
  email: string
}

const FormRegister = () => {
  const { t } = useTranslation()
  const validationSchema = Yup.object().shape({
    name: nameValidation(t),
    email: emailValidation(t)
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    successMessage()
    reset()
  }
  return (
    <>
      <div className='w-full min-h-[388px] bg-[#E9F9D6] mt-28 px-4 py-4'>
        <div>
          <p className='font-bold text-[24px] text-center pt-8'>{t('homepage.form_register.title')}</p>
        </div>
        <form>
          <div className='flex flex-col my-4 '>
            <div className='flex flex-col justify-center  mx-auto my-4 '>
              <input
                {...register('name', { required: true })}
                className='w-[580px] h-[48px] rounded-xl   px-4 max-md:w-[400px] max-[420px]:w-[300px]'
                placeholder={t(`homepage.form_register.name_placeholder`)}
              />
              {errors.name && <p className='text-red-500 pl-4 text-[14px]'>{`${errors.name.message}`}</p>}
            </div>

            <div className='flex flex-col  mx-auto  '>
              <input
                {...register('email', { required: true })}
                className='w-[580px] h-[48px] rounded-xl px-4 max-md:w-[400px] max-[420px]:w-[300px] '
                placeholder={t(`homepage.form_register.email_placeholder`)}
              />
              {errors.email && <p className='text-red-500 pl-4 text-[14px]  '>{`${errors.email.message}`}</p>}
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className='flex justify-center items-center mt-14'>
            <Button children={t(`homepage.form_register.button`)} onClick={handleSubmit(onSubmit)} className='px-6' />
          </motion.div>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
export default FormRegister
