import { useTranslation } from 'react-i18next'
import images from '~/assets/images'
const imageList: string[] = ['principle_1', 'principle_2', 'principle_3', 'principle_4', 'principle_5', 'principle_6']
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
            {imageList.map((item, index) => (
              <div
                key={index}
                className='col-span-4  shadow-lg rounded-2xl py-8 mx-4 px-2 max-lg:col-span-6 max-sm:col-span-12 '
              >
                <div className='min-h-[100px] flex justify-center'>
                  <img src={images[item]} />
                </div>
                <div>
                  <p className='text-center font-bold text-[24px]'>
                    {t(`description_page.working_principle.${item}.title`)}
                  </p>
                </div>
                <div>
                  <p className='text-center font-medium text-[#444444]'>
                    {' '}
                    {t(`description_page.working_principle.${item}.description`)}
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
