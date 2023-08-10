import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'
import { IItemNewsProps } from '~/components/common/ItemNews'
const NewsDetail = () => {
  const [dataNew, setDataNew] = useState<IItemNewsProps[] | []>([]) //tin tức mới
  // const [dataConnection, setDataConnection] = useState<[IItemNewsProps] | []>([]) //tin tức liên quan s

  const location = useLocation()
  const data = location.state
  useEffect(() => {
    axios
      .get('http://localhost:3002/news', { params: { _page: 1, _limit: 3 } })
      .then(function (response) {
        setDataNew(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3002/news', { params: { _page: 2, _limit: 3 } })
  //     .then(function (response) {
  //       setDataConnection(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }, [])
  return (
    <>
      <div className='max-w-[1200px] mx-auto my-14 '>
        <div className='flex'>
          <div className='w-2/3 bg-red-300'>
            <div>
              <p className='font-bold text-[32px] leading-9 mb-10'>{data.title}</p>
            </div>
            <div>
              <p className='font-medium left-6 mb-10'>{data.description}</p>
            </div>
            <div>
              <img src={data.image} className='rounded-[20px]' />
            </div>
          </div>
          <div className='w-1/3 bg-green-300'>
            <div>
              <p className='font-bold text-[20px]'>Tin tức mới</p>
            </div>
            <div>
              {dataNew.map((item) => (
                <Item {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsDetail
