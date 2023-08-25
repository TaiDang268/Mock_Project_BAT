import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'

import { INews } from '~/@types/types'
import { fetchData, fetchNumberPage } from '~/API/api'
import ItemNewsCommon from '~/components/common/ItemNews'
import Pagination from '~/components/common/Pagination'
const filterCategories = ['All', 'Metaverse', 'Blockchain', 'Game NFT']
const NewList = () => {
  const queryClient = useQueryClient()
  const [activeCategory, setActiveCategory] = useState<string>('All') //active color
  const { data: dataNews } = useQuery<INews[]>({
    queryKey: 'news-newspage',
    queryFn: () => fetchData('/news', { _page: 1, _limit: 8 }),
    staleTime: 6000,
    cacheTime: 7000
  })
  const { data: numberOfPage } = useQuery({
    queryKey: 'numberOfPage-newspage',
    queryFn: () => fetchNumberPage('/news', null),
    staleTime: 6000,
    cacheTime: 7000
  })
  const handlePageChange = async ({ selected }: { selected: number }) => {
    const params: { _page?: number; _limit?: number; category?: string } = {}
    params._page = selected + 1
    params._limit = 8
    if (activeCategory !== 'All') {
      params.category = activeCategory
    }

    const newData = await fetchData('/news', params)
    queryClient.setQueryData('news-newspage', newData)
  }
  const handleClickFilterCategories = async (item: string) => {
    setActiveCategory(item)
    if (item === 'All') {
      const newData = await fetchData('/news', { _page: 1, _limit: 8 })
      queryClient.setQueryData('news-newspage', newData)
      const newNumber = await fetchNumberPage('/news', null)
      queryClient.setQueryData('numberOfPage-newspage', newNumber)
    } else {
      const newData = await fetchData('/news', { category: item, _limit: 8 })
      queryClient.setQueryData('news-newspage', newData)
      const newNumber = await fetchNumberPage('/news', { category: item })
      queryClient.setQueryData('numberOfPage-newspage', newNumber)
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
        <div className='grid [400px]:grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 min-h[600px] mx-auto '>
          {dataNews?.map((item, index) => (
            <div key={index} className='flex justify-center'>
              <ItemNewsCommon {...item} />
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className='w-full  my-10'>
          <Pagination pageCount={numberOfPage as number} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}
export default NewList
