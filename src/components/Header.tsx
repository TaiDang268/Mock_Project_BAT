import images from '~/images'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const links = ['home', 'about_us', 'news', 'job_opportunity', 'contact']
const Header = () => {
  const [isHidenOptionLanguage, setIsHidenOptionLanguage] = useState<boolean>(false) // đóng/mở option language
  const [isSelectedLanguage, setIsSelectedLanguage] = useState<boolean>(true) //ngôn ngữ được chọn
  const { i18n, t } = useTranslation()
  //ẩn hiện ngôn ngữ thứ 2
  const handleOpenFlag = () => {
    setIsHidenOptionLanguage(!isHidenOptionLanguage)
  }
  //khi user click vào chọn ngôn ngữ khác
  const handleChangeLanguage = () => {
    i18n.changeLanguage(!isSelectedLanguage ? 'vn' : 'en')
    setIsHidenOptionLanguage(false)
    setIsSelectedLanguage(!isSelectedLanguage)
    console.log(i18n.language)
  }
  return (
    <div className='px-6 py-4'>
      <div className='flex items-center justify-between '>
        <div style={{ backgroundImage: `url(${images.BAT_logo})` }} className='w-40 h-16  bg-no-repeat'></div>
        <div className='flex '>
          {links.map((link, index) => (
            <p key={index} className='mr-8 text-2xl font-normal'>
              {t(`header.${link}`)}
            </p>
          ))}
          <div className='h-8 border-gray-400 border-solid border-l mr-7'></div>
          <div className='relative'>
            <div className='flex cursor-pointer w-20' onClick={handleOpenFlag}>
              <div
                style={{ backgroundImage: `url(${isSelectedLanguage ? images.VN_Flag : images.US_flag})` }}
                className='w-8 bg-no-repeat  bg-center '
              ></div>
              <span className='ml-2  text-2xl font-normal '>{isSelectedLanguage ? 'VN' : 'EN'}</span>
            </div>
            {isHidenOptionLanguage ? (
              <div className='flex absolute cursor-pointer ' onClick={handleChangeLanguage}>
                <div
                  style={{ backgroundImage: `url(${!isSelectedLanguage ? images.VN_Flag : images.US_flag})` }}
                  className='w-8 bg-no-repeat  bg-center '
                ></div>
                <span className='ml-2  text-2xl font-normal '>{!isSelectedLanguage ? 'VN' : 'EN'}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
