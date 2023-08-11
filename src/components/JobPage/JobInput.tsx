import Button from '../common/Button'

const JobInput = () => {
  return (
    <>
      <div className='w-full '>
        <div>
          <p className='uppercase font-bold text-[20px] my-8 text-center'>Cơ hội việc làm hiện tại </p>
        </div>
        <div className='max-w-[1200px] mx-auto relative'>
          <input
            placeholder='Tên công việc'
            className='w-full rounded-xl pl-2 pr-10 mb-10 border h-[42px] border-BAT-primary outline-none'
          />
          <Button children='Tìm việc làm ' className='absolute right-0 top-0 h-[42px] w-32' />
        </div>
      </div>
    </>
  )
}
export default JobInput
