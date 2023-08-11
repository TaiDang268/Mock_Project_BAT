import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { get, getTotalRecords } from '~/API/api'
import images from '~/assets/images'
import ItemNews, { IItemNewsProps } from '../../common/ItemNews'
const filterCategories = ['Phát triển phần mềm', 'Blockchain', 'Game NFT']
const NewList = () => {
  const [data, setData] = useState<IItemNewsProps[] | []>() //data render
  const [totalRecord, setTotalRecord] = useState<number>() //total record
  const [activeCategory, setActiveCategory] = useState<string>('Phát triển phần mềm') //active class
  //get tổng số trang
  useEffect(() => {
    getTotalRecords('news', setTotalRecord)
  }, [])

  const pageCount = Math.ceil((totalRecord as number) / 8)
  //get 8 item
  useEffect(() => {
    get('news', { _page: 1, _limit: 7 }, setData)
  }, [])
  //call api pagination
  const handlePageClick = ({ selected }: { selected: number }): void => {
    get('news', { _page: selected + 1, _limit: 6 }, setData)
  }
  //filter theo categories
  const handleClickFilterCategories = (item: string) => {
    setActiveCategory(item)
    get('/news', { category: item, _limit: 8 }, setData)
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
          {data?.map((item, index) => (
            <div key={index} className='flex justify-center'>
              <ItemNews {...item} />
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className='w-full  my-10'>
          <ReactPaginate
            className='flex justify-center'
            pageClassName='mx-1 bg-[#7A7A7A] w-[33px] h-[40px] flex justify-center items-center rounded-lg text-[20px] text-white font-bold'
            activeClassName='bg-[#008345] '
            breakLinkClassName='w-full h-full'
            breakLabel='...'
            nextLabel={<img src={images.next_pagination} />}
            previousLabel={<img src={images.prev_pagination} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            nextClassName='flex justify-center items-center mx-2 text-[24px] text-[#008345] '
            previousClassName='flex justify-center items-center mx-2 text-[24px] text-[#008345] '
            disabledClassName='fill-[#7A7A7A] '
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  )
}
export default NewList
