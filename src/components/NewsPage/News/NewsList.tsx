import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery, useQueryClient } from 'react-query'

import { INews } from '~/@types/types'
import { fetchData, fetchNumberPage } from '~/API/api'
import { queryKeys } from '~/API/querykey'
import ItemNewsCommon from '~/components/common/ItemNews'
import Pagination from '~/components/common/Pagination'
import routePaths from '~/router/routePaths'
const filterCategories = ['All', 'Metaverse', 'Blockchain', 'Game NFT']
const NewList = () => {
  const queryClient = useQueryClient()
  const [activeCategory, setActiveCategory] = useState<string>('All') //active color
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const { data: dataNews } = useQuery<INews[]>({
    queryKey: queryKeys.news_page.news,
    queryFn: () => fetchData(routePaths.news, { _page: 1, _limit: 8 }),
    staleTime: 6000,
    cacheTime: 7000
  })
  const { data: numberOfPage } = useQuery({
    queryKey: queryKeys.news_page.numberOfPagination,
    queryFn: () => fetchNumberPage(routePaths.news, null),
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

    setIsFetching(true)
    const newData = await fetchData(routePaths.news, params)
    queryClient.setQueryData(queryKeys.news_page.news, newData)
    setIsFetching(false)
  }
  const handleClickFilterCategories = async (item: string) => {
    setActiveCategory(item)
    setIsFetching(true)
    if (item === 'All') {
      const newData = await fetchData(routePaths.news, { _page: 1, _limit: 8 })
      queryClient.setQueryData(queryKeys.news_page.news, newData)
      const newNumber = await fetchNumberPage(routePaths.news, null)
      queryClient.setQueryData(queryKeys.news_page.numberOfPagination, newNumber)
    } else {
      const newData = await fetchData(routePaths.news, { category: item, _limit: 8 })
      queryClient.setQueryData(queryKeys.news_page.news, newData)
      const newNumber = await fetchNumberPage(routePaths.news, { category: item })
      queryClient.setQueryData(queryKeys.news_page.numberOfPagination, newNumber)
    }
    setIsFetching(false)
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
          {isFetching
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className='w-276   my-2 rounded-2xl max-sm:w-[90%] cursor-pointer'>
                  <Skeleton count={1} height={200} className='m-4 rounded-2xl' />

                  {[1, 2, 3, 4].map((item1) => (
                    <Skeleton key={item1} count={1} height={15} className='mx-4 rounded-2xl' />
                  ))}
                </div>
              ))
            : dataNews?.map((item, index) => (
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
