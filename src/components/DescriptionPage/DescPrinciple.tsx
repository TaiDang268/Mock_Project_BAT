import { useTranslation } from 'react-i18next'

import images from '~/assets/images'
const arr = [
  {
    name: 'principle_1',
    img: images.principle_1
  },
  {
    name: 'principle_2',
    img: images.principle_2
  },
  {
    name: 'principle_3',
    img: images.principle_3
  },
  {
    name: 'principle_4',
    img: images.principle_4
  },
  {
    name: 'principle_5',
    img: images.principle_5
  },
  {
    name: 'principle_6',
    img: images.principle_6
  }
]
const DescPrinciple = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='w-full'>
        <div className='max-w-[1200px] mx-auto'>
          {/* title */}
          <div className='mb-10'>
            <p className='text-center font-bold text-[24px]'> {t('description_page.working_principle.title')}</p>
          </div>
          {/* 6 card item */}
          <div className=' grid grid-cols-12 gap-4 '>
            {arr.map((item, index) => (
              <div
                key={index}
                className='col-span-4  shadow-lg rounded-2xl py-8 mx-4 px-2 max-lg:col-span-6 max-sm:col-span-12 '
              >
                <div className='min-h-[100px] flex justify-center'>
                  <img src={item.img} />
                </div>
                <div>
                  <p className='text-center font-bold text-[24px]'>
                    {t(`description_page.working_principle.${item.name}.title`)}
                  </p>
                </div>
                <div>
                  <p className='text-center font-medium text-[#444444]'>
                    {' '}
                    {t(`description_page.working_principle.${item.name}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default DescPrinciple
