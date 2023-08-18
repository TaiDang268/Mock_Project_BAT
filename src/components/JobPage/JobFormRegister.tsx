import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import images from '~/assets/images'

import { emailValidation, nameValidation, phoneValidation } from '../../validate_rule/yupGlobal'
import Button from '../common/Button'

type Inputs = {
  name: string
  email: string
  phone: string
  cv: string
  facebook: string
  know_by: string
}

const JobFormRegister = () => {
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    name: nameValidation(t),
    email: emailValidation(t),
    phone: phoneValidation(t),
    cv: nameValidation(t),
    facebook: nameValidation(t),
    know_by: nameValidation(t)
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
      <div className='p-5  border-BAT-primary border rounded-[10px]'>
        <p className='font-bold text-[24px]'>{t('job_page.detail.title')} </p>
        {/* Họ tên */}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'>{t('job_page.detail.name')} </p>
            <p className={`my-auto pl-1 text-red-500 `}>*</p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_acount} placeholder='Bui Van A' />
            </div>
            <input className='h-[42px] w-full' {...register('name')} placeholder='Bui Van A' />
          </div>
          {errors.name && <p className='text-red-500 pl-4 text-[14px]'>{`${errors.name.message}`}</p>}
        </div>
        {/* Email*/}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'>Email</p>
            <p className={`my-auto pl-1 text-red-500 `}>*</p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_email} />
            </div>
            <input className='h-[42px] w-full' {...register('email')} placeholder='123@gmail.com' />
          </div>
          {errors.email && <p className='text-red-500 pl-4 text-[14px]'>{`${errors.email.message}`}</p>}
        </div>
        {/* số điện thoại */}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'>{t('job_page.detail.phone')} </p>
            <p className={`my-auto pl-1 text-red-500 `}>*</p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_phone} />
            </div>
            <input className='h-[42px] w-full' {...register('phone')} placeholder='0123456789' />
          </div>
          {errors.phone && <p className='text-red-500 pl-4 text-[14px]'>{`${errors.phone.message}`}</p>}
        </div>
        {/* CV */}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'> {t('job_page.detail.CV')} </p>
            <p className={`my-auto pl-1 text-red-500 `}>*</p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_pdf} />
            </div>
            <div className='m-auto flex justify-center items-center'>
              <input className='h-[42px] w-full' type='file' {...register('cv')} />
            </div>
            {errors.cv && <p className='text-red-500 pl-4 text-[14px]'>{`${errors.cv.message}`}</p>}
          </div>
        </div>
        {/* facebook */}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'>{t('job_page.detail.fb')} </p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_a_icon} />
            </div>
            <input className='h-[42px] w-full' placeholder='facebook.com' />
          </div>
        </div>
        {/* know_by */}
        <div className='py-1'>
          <div className='flex'>
            <p className='py-1'>{t('job_page.detail.know_by')}</p>
          </div>
          <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
            <div className='pr-1'>
              <img src={images.job_detait_hoi_icon} />
            </div>
            <input placeholder={`${t('job_page.detail.placeholder.know_by')}`} className='h-[42px] w-full' />
          </div>
        </div>
        <div className=' my-4 '>
          <textarea
            className='w-full rounded p-2 border-gray-200 border '
            placeholder={`${t('job_page.detail.placeholder.note')}`}
          ></textarea>
        </div>
        <Button
          children={`${t('job_page.detail.button')}`}
          className='rounded w-full'
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  )
}
export default JobFormRegister
