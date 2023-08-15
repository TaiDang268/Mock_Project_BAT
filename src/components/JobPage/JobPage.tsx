import { useEffect, useState } from 'react'
import { get, getTotalRecords } from '~/API/api'
import JobInput from './JobInput'
import JobItem from './JobItem'
import JobRadioButton from './JobRadioButton'
import { IAddress, IJob, ITypeOfWork, IWorkGroup } from '~/@types/types'
import JobBanner from './JobBanner'
import Pagination from '../common/Pagination'
import { useTranslation } from 'react-i18next'
import Button from '../common/Button'
const JobPage = () => {
  const [jobs, setJobs] = useState<IJob[] | []>([]) // jobs
  const [workGroup, setWorkGroup] = useState<IWorkGroup[] | []>() //nhóm công việc
  const [address, setAddress] = useState<IAddress[] | []>() //địa điểm
  const [typeOfWork, setTypeOfWork] = useState<ITypeOfWork[] | []>() //loại công việc
  const [pageCount, setPageCount] = useState<number>()
  const [inputValue, setInputValue] = useState<string>('')
  const { t } = useTranslation()
  useEffect(() => {
    get('jobs', { _page: 1, _limit: 8 }, setJobs)
    get('work_groups', null, setWorkGroup)
    get('address', null, setAddress)
    get('type_of_work', null, setTypeOfWork)
    getTotalRecords('/jobs', null, setPageCount)
  }, [])
  const handleClickRadioButton = (name: string) => {
    const nameIsChecked = name.toLowerCase()
    if (nameIsChecked === 'tất cả') {
      get('/jobs', { _page: 1, _limit: 8 }, setJobs)
      getTotalRecords('/jobs', null, setPageCount)
    } else {
      get('/jobs', { work_group: nameIsChecked }, setJobs)
      getTotalRecords('/jobs', { work_group: nameIsChecked }, setPageCount)
    }
  }
  const handlePageChange = ({ selected }: { selected: number }): void => {
    get('jobs', { _page: selected + 1, _limit: 8 }, setJobs)
  }
  const handleInputChange = (value: string) => {
    setInputValue(value)
    if (value.trim() === '') {
      get('jobs', null, setJobs)
    } else {
      get('jobs', { name_like: inputValue }, setJobs)
    }
  }
  const handleSearchClick = () => {
    get('jobs', { name_like: inputValue }, setJobs)
  }

  return (
    <>
      <JobBanner />
      <div className='max-w-[1200px] mx-auto my-10 max-xl:w-[90%]'>
        <JobInput onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
        <div className='flex max-md:flex-col '>
          <div className='w-1/4 border-r-2  border-BAT-primary mr-10 min-h-[600px] max-lg:mr-0 max-lg:border-none max-md:w-full'>
            <div>
              <p className='font-bold text-[20px]'>{t('job_page.title_4')}</p>
              <div>
                {workGroup?.map((item, index) => (
                  <div key={index}>
                    <JobRadioButton {...item} onClick={() => handleClickRadioButton(item.name)} />
                  </div>
                ))}
              </div>
            </div>
            <div className='my-10'>
              <p className='font-bold text-[20px]'>{t('job_page.title_5')}</p>
              <div>
                {address?.map((item, index) => (
                  <div key={index}>
                    <JobRadioButton {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='font-bold text-[20px]'>{t('job_page.title_6')}</p>
              <div>
                {typeOfWork?.map((item, index) => (
                  <div key={index}>
                    <JobRadioButton {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className='max-lg:w-[90%] max-md:w-full max-md:my-10'>
              <Button children='Áp dụng bộ lọc' className='mt-14 w-full' />
            </div>
          </div>
          <div className='w-3/4 max-md:w-full max-md:my-10'>
            {jobs?.map((job, index) => (
              <div key={index}>
                <JobItem {...job} showButton={true} backgroundColor='bg-[#eeeeee]' />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full  my-10'>
          <Pagination pageCount={pageCount as number} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}
export default JobPage
