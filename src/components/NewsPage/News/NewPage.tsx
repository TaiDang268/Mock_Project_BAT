import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IItemNewsProps } from '~/@types/types'
import { get } from '~/API/api'
import images from '~/assets/images'
import Banner from '~/components/common/Banner'
import routePaths from '~/router/routePaths'

import NewList from './NewsList'
import NewsThreeItemImage from './NewsThreeItemImage'

const NewsPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<IItemNewsProps[] | []>([])
  useEffect(() => {
    get('news', null, setData)
  }, [])
  const handleClickItem = (data: IItemNewsProps) => {
    navigate(`${routePaths.detail_news}`, { state: data })
  }
  return (
    <>
      {/* banner */}
      <Banner
        img1={images.news_banner_1}
        img2={images.news_banner_2}
        text1='news_page.title'
        text2='news_page.description'
      />
      {/* 3 card tin tức */}
      <div className='w-full h-full my-32   mx-auto max-w-[1200px] max-xl:px-5 '>
        <p className='my-5 px-2 font-bold text-[20px] text-[#606060]'> Tin tức mới</p>
        <div className='flex max-md:block '>
          <div
            className='w-7/12 h-[560px]  mr-8 rounded-xl max-xl:mr-3 max-md:w-full max-md:mr-0'
            onClick={() => handleClickItem(data[0])}
          >
            <NewsThreeItemImage {...data[0]} />
          </div>
          <div className='w-5/12 min-h-[560px] max-md:w-full'>
            <div
              className='h-1/2 w-full  pb-8 max-xl:pb-3 max-md:h-[560px] max-md:py-6'
              onClick={() => handleClickItem(data[1])}
            >
              <NewsThreeItemImage {...data[1]} />
            </div>
            <div className='h-1/2 max-md:w-full max-md:h-[560px]' onClick={() => handleClickItem(data[2])}>
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
