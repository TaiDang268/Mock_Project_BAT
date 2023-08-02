import images from '~/images'
import '../i18n/config'
import { useTranslation } from 'react-i18next'
const footerLinkUseful = [
  'Thỏa thuận sử dụng',
  'Chính sách bảo hành ',
  'Chương trình đối tác',
  'Tuyển dụng nhân sự',
  'Trung tâm hỗ trợ ',
  'Giải pháp marketing online'
]
const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full h-460 bg-BAT-primary px-20 py-20 '>
      <div className=' flex flex-row  w-full'>
        {/* column 1 */}
        <div className='  m-3 p-3 text-white  w-full'>
          <div className='h-16'>
            <img src={images.BAT_logo_white} alt='BAT logo' />
          </div>
          <div>
            <p className='text-base font-medium'>{t('footer')}</p>
          </div>
          <div className='flex mt-14'>
            <img src={images.fb_icon} alt='Facebook icon' className='mr-4' />
            <img src={images.twitter_icon} alt='Twitter icon' className='mr-4' />
            <img src={images.youtobe_icon} alt='Youtube icon' className='mr-4' />
            <img src={images.instagram_icon} alt='Instagram icon' className='mr-4' />
            <img src={images.github_icon} alt='Github icon' />
          </div>
        </div>
        {/* column 2 */}
        <div className='  m-3 p-3 text-white  w-full text-base font-medium'>
          <div className='h-16 flex center'>
            <p className='text-2xl font-bold'>Liên hệ </p>
          </div>

          <div className='flex mb-4'>
            <img src={images.phone_icon} className='mr-2' />
            <p>Điện thoại: 024 85 896 999</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.email_icon} className='mr-2' />
            <p>Email: info@batgroup.vn</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.home_icon} className='mr-2' />
            <p>Địa chỉ: Tòa HH02, Eco Lackeview, số 32 Đại Từ, phường Đại Kim, quân Hoàng Mai, Hà Nội</p>
          </div>
          <div className='flex mb-4'>
            <img src={images.nameBAT_icon} className='mr-2' />
            <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ BATTECH</p>
          </div>
        </div>
        {/* column 3 */}
        <div className='  m-3 p-3 text-white  w-full'>
          <div className='h-16 flex center'>
            <p className='text-2xl font-bold'>Liên kết hữu ích </p>
          </div>
          <div>
            {footerLinkUseful.map((link, index) => (
              <div key={index} className='flex text-base font-medium mb-2'>
                <img src={images.bigger_icon} className='mr-2' />
                <p>{link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
