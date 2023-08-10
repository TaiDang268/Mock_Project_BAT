import images from '~/assets/images'
import { IItemNewsProps } from '~/components/common/ItemNews'

const NewsThreeItemImage = (props: IItemNewsProps) => {
  const { image, author, date, title, category } = props

  return (
    <>
      <div className=' w-full h-full '>
        <div
          style={{ backgroundImage: `url(${image})`, WebkitBorderRadius: '20px' }}
          className=' text-white w-full h-full relative  '
        >
          <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-t from-[#000000] to-[rgba(0, 0, 0, 1)] rounded-[20px]'></div>
          <div className='absolute bottom-0 px-4 py-4 '>
            <button className='rounded-lg px-2 mb-3  bg-[#FD4848] h-10 font-bold text-[20px]'>{category}</button>
            <p className='font-bold text-[20px] leading-7'>{title} </p>
            <div className='flex'>
              <div className='flex w-44'>
                <img src={images.acount_white} />
                <p className='ml-2'>{author}</p>
              </div>
              <div className='flex'>
                <img src={images.calendar} />
                <p className='ml-2'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsThreeItemImage
