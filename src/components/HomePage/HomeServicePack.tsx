import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import images from '~/assets/images'

import Button from '../Button'

const listPack = ['pack_1', 'pack_2', 'pack_3']
const HomeServicePack = () => {
  const { t } = useTranslation()
  const [activePack, setActivePark] = useState<string>('pack_2')
  return (
    <>
      <div className='max-w-[1200px]  mx-auto '>
        {/* title */}
        <div>
          <p className='text-center font-bold text-[24px] uppercase mb-6'>{t('homepage.service_pack.title')}</p>
        </div>
        {/* 3 item */}
        {/* <div className='flex w-full'> */}
        {/* <div className='grid grid-cols-1 '> */}
        <div className='grid w-full grid-cols-12 gap-5  px-4   '>
          {listPack.map((item, index) => (
            <div
              key={index}
              className={` rounded-[20px] px-4 py-4  shadow-xl cursor-pointer lg:col-span-4 sm:col-span-6  col-span-full  ${
                activePack === item ? 'bg-[#f1f1f1]' : 'bg-white'
              }`}
              onClick={() => setActivePark(item)}
            >
              <div>
                <p className='font-bold text-[20px] mb-2'>{t(`homepage.service_pack.${item}.title`)}</p>
              </div>
              <div className='sm:h-[45px]'>
                <p className='font-medium text-[#7A7A7A] '>{t(`homepage.service_pack.${item}.for`)}</p>
              </div>
              <div className='my-8 w-full box-border'>
                <Button
                  children={t(`homepage.service_pack.button`)}
                  className={clsx(
                    'w-[80%] mx-auto box-border',
                    activePack === item ? 'bg-BAT-primary' : 'bg-[#7a7a7a]  '
                  )}
                />
              </div>
              <div>
                <div className='flex my-1'>
                  <img src={images.check_v_icon} />
                  <p className='font-medium ml-4 py-2'>{t(`homepage.service_pack.${item}.description.1`)}</p>
                </div>
                <div className='flex my-1'>
                  <img src={images.check_v_icon} />
                  <p className='font-medium ml-4 py-2'>{t(`homepage.service_pack.${item}.description.2`)}</p>
                </div>{' '}
                <div className='flex my-1'>
                  <img src={images.check_v_icon} />
                  <p className='font-medium ml-4 py-2'>{t(`homepage.service_pack.${item}.description.3`)}</p>
                </div>{' '}
                <div className='flex my-1'>
                  <img src={images.check_v_icon} />
                  <p className='font-medium ml-4 py-2'>{t(`homepage.service_pack.${item}.description.4`)}</p>
                </div>
                <div className='flex my-1'>
                  <img src={images.check_v_icon} />
                  <p className='font-medium ml-4 py-2'>{t(`homepage.service_pack.${item}.description.5`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* pagination three dots */}
        <div className='flex justify-center items-center mt-10'>
          {listPack.map((item) => (
            <button
              className={`rounded-[50%] w-[9px] h-[9px] mx-1 ${
                activePack === item ? 'bg-BAT-primary' : 'bg-slate-500'
              }`}
              key={item}
              onClick={() => setActivePark(item)}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}
export default HomeServicePack
