import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import images from '~/assets/images'

const links = ['home', 'about_us', 'news', 'job_opportunity', 'contact']
const Header = () => {
  const [isHidenOptionLanguage, setIsHidenOptionLanguage] = useState<boolean>(false) // đóng/mở option language
  const [isSelectedLanguage, setIsSelectedLanguage] = useState<boolean>(true) //ngôn ngữ được chọn
  const [isItemMenuSelected, setItemMenuSelected] = useState<string>('home') // item menu được chọn
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  //ẩn hiện ngôn ngữ thứ 2
  const handleOpenFlag = () => {
    setIsHidenOptionLanguage(!isHidenOptionLanguage)
  }
  //khi user click vào chọn ngôn ngữ khác
  const handleChangeLanguage = () => {
    i18n.changeLanguage(!isSelectedLanguage ? 'vn' : 'en')
    setIsHidenOptionLanguage(false)
    setIsSelectedLanguage(!isSelectedLanguage)
  }
  //xử lý onclick vào item  của header redirect page
  const handleClickItemHeader = (link: string) => {
    if (links.includes(link)) {
      navigate(`${link}`)
      setItemMenuSelected(link)
    }
  }
  return (
    <div className='px-6 py-4'>
      <div className='flex items-center justify-between '>
        <div style={{ backgroundImage: `url(${images.BAT_logo})` }} className='w-40 h-16  bg-no-repeat'></div>
        <div className='flex '>
          {links.map((link, index) => (
            <p
              key={index}
              className={clsx(
                'mr-8 text-xl font-normal cursor-pointer hover:text-green-600 uppercase',
                isItemMenuSelected === link ? 'text-green-600 ' : 'text-black '
              )}
              onClick={() => handleClickItemHeader(link)}
            >
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
