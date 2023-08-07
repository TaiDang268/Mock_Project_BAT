import { useTranslation } from 'react-i18next'

const DescPrinciple = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='w-full'>
        <div className='w-1200 mx-auto'>
          <p className='text-center font-bold text-[24px]'> {t('description_page.working_principle.title')}</p>
          <div className='flex flex-wrap box-border'>
            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>
            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>

            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>

            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>
            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>

            <div className='w-[30%] h-[300px] bg-red-500 mx-4 my-4'></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DescPrinciple
