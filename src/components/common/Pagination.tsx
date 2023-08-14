import ReactPaginate from 'react-paginate'
import images from '~/assets/images'
interface IPagination {
  pageCount: number
  onPageChange?: ({ selected }: { selected: number }) => void
}
const Pagination = (props: IPagination) => {
  const { pageCount, onPageChange } = props
  console.log(onPageChange)
  return (
    <ReactPaginate
      className='flex justify-center'
      pageClassName='mx-1 bg-[#7A7A7A] w-[33px] h-[40px] flex justify-center items-center rounded-lg text-[20px] text-white font-bold'
      activeClassName='bg-green-700 '
      breakLinkClassName='w-full h-full'
      breakLabel='...'
      nextLabel={<img src={images.next_pagination} />}
      previousLabel={<img src={images.prev_pagination} />}
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      nextClassName='flex justify-center items-center mx-2 text-[24px] text-[#008345] '
      previousClassName='flex justify-center items-center mx-2 text-[24px] text-[#008345] '
      disabledClassName='fill-[#7A7A7A] '
      renderOnZeroPageCount={null}
      initialPage={0}
    />
  )
}
export default Pagination
