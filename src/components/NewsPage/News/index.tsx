import { useEffect, useState } from 'react'

import { IItemNewsProps } from '~/@types/types'
import { get } from '~/API/api'

import NewBanner from './NewsBanner'
import NewList from './NewsList'
import NewsThreeItemImage from './NewsThreeItemImage'

const NewsPage = () => {
  const [data, setData] = useState<IItemNewsProps[] | []>([])
  useEffect(() => {
    get('newsPage', null, setData)
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
            <NewsThreeItemImage {...data[0]} />
          </div>
          <div className='w-5/12 min-h-[560px] max-md:w-full'>
            <div className='h-1/2 w-full  pb-8 max-xl:pb-3 max-md:h-[560px] max-md:py-6'>
              <NewsThreeItemImage {...data[1]} />
            </div>
            <div className='h-1/2 max-md:w-full max-md:h-[560px]'>
              <NewsThreeItemImage {...data[2]} />
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
