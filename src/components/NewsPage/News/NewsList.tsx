import { useEffect, useState } from 'react'

import { IItemNewsProps } from '~/@types/types'
import { get, getTotalRecords } from '~/API/api'
import ItemNewsCommon from '~/components/common/ItemNews'
import Pagination from '~/components/common/Pagination'
const filterCategories = ['All', 'Metaverse', 'Blockchain', 'Game NFT']
const NewList = () => {
  const [dataRender, setDataRender] = useState<IItemNewsProps[] | []>() //data render các bài news
  const [activeCategory, setActiveCategory] = useState<string>('All') //active color
  const [pageCount, setPageCount] = useState<number>() //số trang
  //render lần đầu
  useEffect(() => {
    get('/news', { _page: 1, _limit: 8 }, setDataRender)
    getTotalRecords('/news', null, setPageCount)
  }, [])
  //filter theo thể loại
  const handleClickFilterCategories = (item: string) => {
    setActiveCategory(item)
    if (item === 'All') {
      get('/news', { _page: 1, _limit: 8 }, setDataRender)
      getTotalRecords('/news', null, setPageCount)
    } else {
      get('/news', { category: item, _limit: 8 }, setDataRender)
      getTotalRecords('/news', { category: item, _limit: 8 }, setPageCount)
    }
  }
  //onclick pagination
  const handlePageChange = ({ selected }: { selected: number }): void => {
    if (activeCategory === 'All') {
      get('/news', { _page: selected + 1, _limit: 8 }, setDataRender)
    } else {
      get('/news', { _page: selected + 1, _limit: 8, category: activeCategory }, setDataRender)
    }
  }

  return (
    <>
      <div className='w-full max-w-[1200px] mx-auto min-h-[500px] '>
        {/* filter theo thể loại */}
        <div className='w-full flex px-2 max-md:block max-md:px-10'>
          {filterCategories.map((item, index) => (
            <div key={index} className='mr-10 my-5 cursor-pointer' onClick={() => handleClickFilterCategories(item)}>
              <p
                className={`uppercase font-bold text-[24px]  ${
                  activeCategory === item ? 'text-BAT-primary' : 'text-[#7A7A7A]'
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        {/* 8 item */}
        <div className='grid [400px]:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 min-h[600px] '>
          {dataRender?.map((item, index) => (
            <div key={index}>
              <ItemNewsCommon {...item} />
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className='w-full  my-10'>
          <Pagination pageCount={pageCount as number} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}
export default NewList
