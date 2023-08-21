import '../../css/Custom.css'

import { Link } from 'react-router-dom'

import { IItemNewsProps } from '~/@types/types'
import images from '~/assets/images'
import routePaths from '~/router/routePaths'

const ItemNewsCommon = (props: IItemNewsProps) => {
  const { image, author, date, title, description } = props

  return (
    <>
      <Link
        to={`${routePaths.news}/${routePaths.detail_news}`}
        state={props}
        className='w-276 h-430 shadow-lg my-2 rounded-2xl max-sm:w-[90%] cursor-pointer'
      >
        {/* image */}
        <div className='h-52'>
          <img className='rounded-2xl  h-full w-full object-cover' src={`${image}`} />
        </div>
        {/* author and date */}
        <div className='flex justify-between my-2 px-2'>
          <div className='flex'>
            <img src={images.acount_icon} />
            <p className='font-medium ml-2'>{author}</p>
          </div>
          <div className='flex'>
            <img src={images.calendar_gray} />
            <p className='font-medium text-[#929292] pl-2'>{date}</p>
          </div>
        </div>
        {/* title of news */}
        <div>
          <p className='font-bold text-[18px] px-2'>{title}</p>
        </div>
        {/* description of news */}
        <div>
          <p
            className='px-2 mt-3 text-[#929292]  cut-text '
            dangerouslySetInnerHTML={{ __html: description || '' }}
          ></p>
        </div>
      </Link>
    </>
  )
}
export default ItemNewsCommon
