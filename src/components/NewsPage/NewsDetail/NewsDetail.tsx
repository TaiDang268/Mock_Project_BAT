import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { INews } from '~/@types/types'
import { get } from '~/API/api'
import routePaths from '~/router/routePaths'

import Item from './Item'

const NewsDetail = () => {
  const navigate = useNavigate()
  const [dataNew, setDataNew] = useState<INews[] | []>([]) //tin tức mới
  const [dataConnection, setDataConnection] = useState<INews[] | []>([]) //tin tức liên quan
  const [itemRender, setItemRender] = useState<INews | null>()
  const location = useLocation()
  const data = location.state
  useEffect(() => {
    setItemRender(data)
    get('news', { _page: 1, _limit: 3 }, setDataNew)
    get('news', { _page: 2, _limit: 3 }, setDataConnection)
  }, [])

  const handleOnclickItem = (item: INews) => {
    setItemRender(item)
  }
  const handleClickTextNew = () => {
    navigate(`${routePaths.news}`)
  }
  return (
    <>
      <div className='max-w-[1200px] mx-auto my-14 '>
        <div className='px-6 flex gap-1 mb-2'>
          <p className='text-BAT-primary cursor-pointer  uppercase' onClick={handleClickTextNew}>
            Tin tức
          </p>
          <p>/</p>
          <p className='text-BAT-primary cursor-pointer uppercase'>{itemRender?.category}</p>
          <p>/</p>
          <p className='cursor-pointer'>{itemRender?.title}</p>
        </div>
        <div className='flex max-lg:block'>
          <div className='w-2/3  px-6 max-xl:w-[60%] max-lg:w-full'>
            <div>
              <p className='font-bold text-[32px] leading-9 mb-10'>{itemRender?.title}</p>
            </div>
            <div>
              <p
                className='font-medium left-6 mb-10'
                dangerouslySetInnerHTML={{ __html: itemRender?.description || '' }}
              ></p>
            </div>
            <div className='w-full'>
              <img src={itemRender?.image} className='rounded-[20px] w-full' />
            </div>
          </div>
          <div className='w-1/3 max-xl:w-[40%] max-lg:w-full '>
            <div>
              <p className='font-bold text-[20px] max-lg:w-[95%] mx-auto max-lg:pt-10'>Tin tức mới</p>
            </div>
            <div>
              {dataNew.map((item, index) => (
                <div
                  onClick={() => {
                    handleOnclickItem(item)
                  }}
                  key={index}
                >
                  <Item {...item} />
                </div>
              ))}
            </div>
            <div className='mt-10'>
              <p className='font-bold text-[20px] max-lg:w-[95%] mx-auto'>Bài viết liên quan</p>
            </div>
            <div>
              {dataConnection.map((item) => (
                <div
                  onClick={() => {
                    handleOnclickItem(item)
                  }}
                >
                  <Item {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsDetail
