import { useTranslation } from 'react-i18next'
interface IBanner {
  img1: any
  img2: any
  text1: string
  text2: string
}
const Banner = (props: IBanner) => {
  const { img1, img2, text1, text2 } = props
  const { t } = useTranslation()
  return (
    <>
      <div className='w-full h-[334px] bg-[#E9F9D6] grid grid-cols-12 '>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] left-[100px] '>
            <img src={img1} />
          </div>
        </div>
        <div className='xl:col-span-4 my-auto col-span-12 max-xl:mx-auto  max-xl:px-10'>
          <p className='font-bold text-[32px] text-[#008345] uppercase text-center '>{t(`${text1}`)}</p>
          <p className='text-center text-[#444444]'>{t(`${text2}`)}</p>
        </div>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] right-[100px] '>
            <img src={img2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner
