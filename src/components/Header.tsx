import images from '~/images'
const links = ['Trang chủ', 'Giới thiệu', 'Tin tức', 'Cơ hội việc làm', 'Liên hệ']
const Header = () => {
  return (
    <div className='px-6 py-4'>
      <div className='flex items-center justify-between '>
        <div style={{ backgroundImage: `url(${images.BAT_logo})` }} className='w-40 h-16  bg-no-repeat'></div>
        <div className='flex '>
          {links.map((link, index) => (
            <p key={index} className='mr-8 text-2xl font-normal'>
              {link}
            </p>
          ))}
          <div className='h-8 border-gray-400 border-solid border-l mr-7'></div>
          <div className='relative'>
            <div className='flex cursor-pointer'>
              <div style={{ backgroundImage: `url(${images.VN_Flag})` }} className='w-8 bg-no-repeat  bg-center '></div>
              <span className='ml-2  text-2xl font-normal '>VN</span>
            </div>
            <div className='flex absolute cursor-pointer'>
              <div style={{ backgroundImage: `url(${images.VN_Flag})` }} className='w-8 bg-no-repeat  bg-center '></div>
              <span className='ml-2  text-2xl font-normal '>EN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
