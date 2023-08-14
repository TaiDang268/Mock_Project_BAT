import Button from '../common/Button'

const ContactForm = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <p className='font-bold text-[24px] text-center'>Sẵn sàng để bắt đầu </p>
        <div className='flex items-center justify-center gap-1 mb-10'>
          <p className='text-center'>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc đánh dấu </p>
          <p className='text-red-500'>*</p>
        </div>
        <div className='flex justify-between max-md:block'>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium '>Tên</p>
            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder='Nhập tên'
            />
          </div>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium'>Email</p>
            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder='Nhập email'
            />
          </div>
          <div className='w-[30%] max-md:w-full'>
            <p className='font-medium'>Số điện thoại</p>
            <input
              className='outline-none w-full  border border-gray-400 rounded-lg h-[48px] px-3 my-2 '
              placeholder='Nhập số điện thoại '
            />
          </div>
        </div>
        <div className='my-3'>
          <textarea className='w-full  border border-gray-400 rounded-lg p-3 h-40' placeholder='Nhâp nội dung ' />
        </div>
        <div className='flex justify-center items-center my-10'>
          <Button children='Gửi tin nhắn ' className='w-[276px]' />
        </div>
      </div>
    </>
  )
}
export default ContactForm
