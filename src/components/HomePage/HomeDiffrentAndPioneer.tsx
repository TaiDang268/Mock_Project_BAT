import { useTranslation } from 'react-i18next'
const list = ['item1', 'item2', 'item3', 'item4']
const HomeDiffrentAndPioneer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='max-w-[1200px] mx-auto '>
        {/* tilte */}
        <div>
          <p className='uppercase font-bold text-2xl text-center'>{t('homepage.diffrent_pioneer.tilte')}</p>
        </div>
        {/* khối div chứa 4 div con */}
        <div className='grid grid-cols-12 gap-10  my-20 max-sm:gap-x-6 '>
          {list.map((item) => (
            <div
              key={item}
              className='xl:col-span-3 lg:col-span-6  col-span-12 rounded-2xl max-lg:mx-10  shadow-md shadow-slate-400	 py-5 relative'
            >
              <div className='absolute top-[-50px] ml-4'>
                <p className='font-bold text-[64px] text-[#008345]'>{t(`homepage.diffrent_pioneer.${item}.id`)}</p>
              </div>
              <div className='mt-[43px] text-center px-10 ml-3'>
                <p className='font-bold text-[20px] leading-6'> {t(`homepage.diffrent_pioneer.${item}.tilte`)}</p>
              </div>
              <div className='text-center px-2'>
                <p className='text-[#606060] leading-6 mt-3'>{t(`homepage.diffrent_pioneer.${item}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default HomeDiffrentAndPioneer
