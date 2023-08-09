import { useEffect, useState } from 'react'
import NewBanner from './NewsBanner'
import NewsItem, { INewsProp } from './NewsItem'
import axios from 'axios'
import NewList from './NewsList'

const url = 'http://localhost:3002'

const NewsPage = () => {
  const [data, setData] = useState<Array<INewsProp>>([])
  useEffect(() => {
    axios
      .get(`${url}/newsPage`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <>
      {/* banner */}
      <NewBanner />
      {/* 3 card tin tức */}
      <div className='w-full h-full my-32   mx-auto max-w-[1200px] max-xl:px-5 '>
        <p className='my-5 px-2 font-bold text-[20px] text-[#606060]'> Tin tức mới</p>
        <div className='flex max-md:block '>
          <div className='w-7/12 h-[560px]  mr-8 rounded-xl max-xl:mr-3 max-md:w-full max-md:mr-0'>
            <NewsItem data={data[0]} />
          </div>
          <div className='w-5/12 min-h-[560px] max-md:w-full'>
            <div className='h-1/2 w-full  pb-8 max-xl:pb-3 max-md:h-[560px] max-md:py-6'>
              <NewsItem data={data[1]} />
            </div>
            <div className='h-1/2 max-md:w-full max-md:h-[560px]'>
              <NewsItem data={data[2]} />
            </div>
          </div>
        </div>
      </div>
      {/* list tin tức pagination */}
      <NewList />
    </>
  )
}
export default NewsPage
