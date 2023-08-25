import { INews } from '~/@types/types'
import images from '~/assets/images'

const Item = (props: INews) => {
  const { image, author, date, title } = props

  return (
    <>
      <div className='w-[380px] h-[113px] shadow-lg my-4 rounded-2xl  cursor-pointer relative max-lg:w-[95%]  max-lg:mx-auto'>
        <div className='flex h-full '>
          {/* image */}
          <div className='w-1/3 h-full'>
            <div className='w-full h-full'>
              <img className='rounded-l-2xl  h-full w-full object-cover' src={`${image}`} />
            </div>
          </div>
          <div className='w-2/3'>
            {/* title of news */}
            <div>
              <p className='font-medium text-[16px] px-2 leading-5'>{title}</p>
            </div>
            {/* author and date */}
            <div className='flex w-2/3  justify-between my-2 px-2 absolute bottom-0 '>
              <div className='flex '>
                <img src={images.acount_icon} />
                <p className='font-normal text-[11px] ml-2 '>{author}</p>
              </div>
              <div className='flex'>
                <img src={images.calendar_gray} />
                <p className='font-normal text-[11px] text-[#929292] pl-2'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Item
