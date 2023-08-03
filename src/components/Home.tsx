import images from '~/images'
import Button from './Button'
const Home = () => {
  return (
    <>
      <div className='w-full  h-638 bg-home-gradent flex'>
        <div className='w-1/2 box-border p-32'>
          <div className='mb-8'>
            <p style={{ color: 'rgba(245, 122, 33, 1)', fontSize: '40px' }} className='font-bold '>
              BATTECH ERP
            </p>
          </div>
          <div className='mb-4'>
            <p className='font-bold text-2xl'>GIẢI PHÁP QUẢN TRỊ NGUỒN LỰC DOANH NGHIỆP</p>
          </div>
          <div>
            <p style={{ color: 'rgba(96, 96, 96, 1)' }} className='mb-20'>
              Hỗ trợ Ban lãnh đạo hoạch định và điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài
              chính - Truyền thống và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy trình được
              thiết kế theo quy chuẩn quốc tế.
            </p>
          </div>
          <div>
            <Button children='Đăng ký nhận tư vấn ' className='h-12 w-276 text-2xl font-semibold' />
          </div>
        </div>
        <div className='w-1/2'>
          <img src={images.image_home_1}></img>
        </div>
      </div>
    </>
  )
}

export default Home
