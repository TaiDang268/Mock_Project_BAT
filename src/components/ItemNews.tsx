import images from '~/assets/images'
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
      <div className='w-276 h-430 shadow-2xl my-16 rounded-2xl'>
        {/* image */}
        <div>
          <img className='rounded-2xl' src={`${image}`} />
        </div>
        {/* author and date */}
        <div className='flex'>
          <div>
            <img src={images.acount_icon} />
            <p className='font-medium'>{author}</p>
          </div>
          <div>
            <p className='font-medium text-[#929292]'>{date}</p>
          </div>
        </div>
        {/* title of news */}
        <div>
          <p>{title}</p>
        </div>
        {/* description of news */}
        <div>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
export default ItemNews
