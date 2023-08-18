import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineMenu } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

import images from '~/assets/images'

const links = ['home', 'about_us', 'news', 'job_opportunity', 'contact']
const Header = () => {
  const [isHidenOptionLanguage, setIsHidenOptionLanguage] = useState<boolean>(false) // đóng/mở option language
  const [isSelectedLanguage, setIsSelectedLanguage] = useState<boolean>(true) //ngôn ngữ được chọn
  const [isItemMenuSelected, setItemMenuSelected] = useState<string>('home') // item menu được chọn
  const [showMenuResponsive, setShowMenuResponsive] = useState<boolean>(false)
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  //ẩn hiện ngôn ngữ thứ 2
  const handleOpenFlag = () => {
    setShowMenuResponsive(false)

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
    setShowMenuResponsive(false)
  }
  //navigate page thì active item của header
  useEffect(() => {
    location.pathname.split('/')[1] === ''
      ? setItemMenuSelected('home')
      : setItemMenuSelected(location.pathname.split('/')[1])
  }, [location.pathname])
  //onclick icon hidden menu ở breakpoin < 1280px
  const handleOpenMenuIcon = () => {
    setShowMenuResponsive(!showMenuResponsive)
    setIsHidenOptionLanguage(false)
  }
  //onclick logo
  const handleClickLogo = () => {
    navigate('home')
  }

  return (
    <div className='px-6 py-4 max-xl:relative'>
      <div className='flex justify-between items-center '>
        {/* logo */}
        <div
          style={{ backgroundImage: `url(${images.BAT_logo})` }}
          className='w-40 h-16  bg-no-repeat cursor-pointer '
          onClick={handleClickLogo}
        ></div>
        {/* menu */}

        <div className='flex items-center  '>
          <div
            className={clsx(
              'flex   ',
              'max-xl:flex-col max-xl:absolute max-xl:top-[96px] max-xl:left-0 max-xl:px-8  max-xl:bg-white max-xl:w-full '
            )}
          >
            {links.map((link, index) => (
              <p
                key={index}
                className={clsx(
                  'mr-8 text-xl font-normal cursor-pointer hover:text-green-600 uppercase',
                  'max-xl:text-[16px] max-xl:font-bold max-xl:z-20 max-xl:hover:bg-slate-500 max-xl:hover:text-white max-xl:rounded   max-xl:mr-0  max-xl:px-2 max-xl:py-2',
                  isItemMenuSelected === link ? 'text-green-600 ' : 'text-black ',
                  showMenuResponsive ? 'block' : 'max-xl:hidden'
                )}
                onClick={() => handleClickItemHeader(link)}
              >
                {t(`header.${link}`)}
              </p>
            ))}
          </div>
          <div className={clsx('h-8 border-gray-400 border-solid border-l mr-7 max-xl:hidden ')}></div>
          {/* flag+menu icon */}
          <div className='flex justify-center items-center'>
            {/* flag */}
            <div>
              <div className='flex cursor-pointer w-20' onClick={handleOpenFlag}>
                <div
                  style={{ backgroundImage: `url(${isSelectedLanguage ? images.VN_Flag : images.US_flag})` }}
                  className='w-8 bg-no-repeat  bg-center '
                ></div>
                <span className='ml-2  text-2xl font-normal '>{isSelectedLanguage ? 'VN' : 'EN'}</span>
              </div>
              {isHidenOptionLanguage ? (
                <div
                  className='flex  absolute cursor-pointer w-20 rounded hover:bg-BAT-primary '
                  onClick={handleChangeLanguage}
                >
                  <div
                    style={{ backgroundImage: `url(${!isSelectedLanguage ? images.VN_Flag : images.US_flag})` }}
                    className='w-8 bg-no-repeat  bg-center '
                  ></div>
                  <span className='ml-2  text-2xl font-normal '>{!isSelectedLanguage ? 'VN' : 'EN'}</span>
                </div>
              ) : null}
            </div>
            {/* hiden menu icon */}
            <div
              className=' xl:hidden cursor-pointer w-[50px] h-[50px] rounded flex justify-center items-center hover:bg-blue-300 '
              onClick={handleOpenMenuIcon}
            >
              <AiOutlineMenu
                style={{
                  width: '35px',
                  height: '35px',
                  color: 'green',
                  border: '1px solid green'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
