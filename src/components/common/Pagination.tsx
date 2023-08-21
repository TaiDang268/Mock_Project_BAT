import ReactPaginate from 'react-paginate'

import images from '~/assets/images'
interface IPagination {
  pageCount: number
  onPageChange?: ({ selected }: { selected: number }) => void
}
const Pagination = (props: IPagination) => {
  const { pageCount, onPageChange } = props
  return (
    <ReactPaginate
      className='flex justify-center'
      pageClassName='mx-1 w-[30px] h-[30px] flex justify-center items-center rounded-lg text-[20px] text-gray-700 font-bold border border-[#7a7a7a]'
      activeClassName='bg-green-700  '
      activeLinkClassName='text-white'
      breakLinkClassName='breakLinkClassName '
      breakLabel='...'
      nextLabel={<img src={images.next_pagination} />}
      previousLabel={<img src={images.prev_pagination} />}
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      nextClassName='mx-1 bg-[#7A7A7A]   w-[30px] h-[30px] flex justify-center items-center rounded-lg text-[20px] text-white font-bold'
      previousClassName='mx-1 bg-[#7A7A7A] w-[30px] h-[30px] flex justify-center items-center rounded-lg text-[20px] text-white font-bold '
      disabledClassName='bg-[#7A7A7A] '
      renderOnZeroPageCount={null}
      initialPage={0}
    />
  )
}
export default Pagination
