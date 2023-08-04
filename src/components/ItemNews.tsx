import images from '~/assets/images'
import '../css/Custom.css'
interface IItemNewsProps {
  image?: string
  author?: string
  date?: string
  title?: string
  description?: string
}
interface IDataItem {
  data: IItemNewsProps
}
const ItemNews = (dataItem: IDataItem) => {
  const { image, author, date, title, description } = dataItem.data
  console.log(image, author, date, title, description)
  return (
    <>
      <div className='w-276 h-430 shadow-lg my-16 rounded-2xl'>
        {/* image */}
        <div className='h-52'>
          {/* <div style={{ backgroundImage: `${image}` }}></div> */}
          <img className='rounded-2xl  h-full w-full object-cover' src={`${image}`} />
        </div>
        {/* author and date */}
        <div className='flex justify-between my-2 px-2'>
          <div className='flex'>
            <img src={images.acount_icon} />
            <p className='font-medium ml-2'>{author}</p>
          </div>
          <div>
            <p className='font-medium text-[#929292]'>{date}</p>
          </div>
        </div>
        {/* title of news */}
        <div>
          <p className='font-bold text-[18px] px-2'>{title}</p>
        </div>
        {/* description of news */}
        <div>
          <p className='px-2 mt-3 text-[#929292]  cut-text'>{description}</p>
        </div>
      </div>
    </>
  )
}
export default ItemNews
