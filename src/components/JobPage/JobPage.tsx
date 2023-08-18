import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { IAddress, IJob, ITypeOfWork, IWorkGroup } from '~/@types/types'
import { get, getTotalRecords } from '~/API/api'

import JobBanner from './JobBanner'
import JobInput from './JobInput'
import JobItem from './JobItem'
import JobRadioButton from './JobRadioButton'
import Button from '../common/Button'
import Pagination from '../common/Pagination'
const JobPage = () => {
  const [jobs, setJobs] = useState<IJob[] | []>([]) // jobs
  const [workGroup, setWorkGroup] = useState<IWorkGroup[] | []>() //nhóm công việc
  const [address, setAddress] = useState<IAddress[] | []>() //địa điểm
  const [typeOfWork, setTypeOfWork] = useState<ITypeOfWork[] | []>() //loại công việc
  const [pageCount, setPageCount] = useState<number>()
  const [inputValue, setInputValue] = useState<string>('')
  //state lưu các option filter
  const [selectedWorkGroup, setSelectedWorkGroup] = useState<string>('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const [selectedTypeOfWork, setSelectedTypeOfWork] = useState<string>('')

  const { t } = useTranslation()
  useEffect(() => {
    get('jobs', { _page: 1, _limit: 8 }, setJobs)
    get('work_groups', null, setWorkGroup)
    get('address', null, setAddress)
    get('type_of_work', null, setTypeOfWork)
    getTotalRecords('/jobs', null, setPageCount)
  }, [])

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
  const handleChangeWorkGroup = (name: string) => {
    name === 'Tất cả' ? setSelectedWorkGroup('') : setSelectedWorkGroup(name)
  }
  const handleChangeAddress = (name: string) => {
    name === 'Tất cả' ? setSelectedAddress('') : setSelectedAddress(name)
  }
  const handleChangeTypeOfWork = (name: string) => {
    name === 'Tất cả' ? setSelectedTypeOfWork('') : setSelectedTypeOfWork(name)
  }
  const handleClickButtonFilter = () => {
    const params: { address?: string; type_of_work?: string; work_group?: string; _limit?: number } = {}

    if (selectedAddress) {
      params.address = selectedAddress
    }

    if (selectedTypeOfWork) {
      params.type_of_work = selectedTypeOfWork
    }
    if (selectedWorkGroup) {
      params.work_group = selectedWorkGroup
    }
    params._limit = 8
    get('/jobs', params, setJobs)
    getTotalRecords('jobs', params, setPageCount)
  }
  return (
    <>
      <JobBanner />
      <div className='max-w-[1200px] mx-auto my-10 max-xl:w-[90%]'>
        <JobInput onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
        <div className='flex max-md:flex-col '>
          <div className='w-1/4 mr-10 min-h-[600px] max-lg:mr-0 max-lg:border-none max-md:w-full'>
            <div className=' border-r-2  border-BAT-primary'>
              <div>
                <p className='font-bold text-[20px]'>{t('job_page.title_4')}</p>
                <div>
                  {workGroup?.map((item, index) => (
                    <div key={index}>
                      <JobRadioButton {...item} onClick={() => handleChangeWorkGroup(item.name)} />
                    </div>
                  ))}
                </div>
              </div>
              <div className='my-10'>
                <p className='font-bold text-[20px]'>{t('job_page.title_5')}</p>
                <div>
                  {address?.map((item, index) => (
                    <div key={index}>
                      <JobRadioButton {...item} onClick={() => handleChangeAddress(item.name)} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className='font-bold text-[20px]'>{t('job_page.title_6')}</p>
                <div>
                  {typeOfWork?.map((item, index) => (
                    <div key={index}>
                      <JobRadioButton {...item} onClick={() => handleChangeTypeOfWork(item.name)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=' max-md:w-full max-md:my-10 w-[90%]'>
              <Button children='Áp dụng bộ lọc' className='mt-14 w-full' onClick={handleClickButtonFilter} />
            </div>
          </div>
          <div className='w-3/4 max-md:w-full max-md:my-10'>
            {jobs.length !== 0 ? (
              jobs?.map((job, index) => (
                <div key={index}>
                  <JobItem {...job} showButton={true} backgroundColor='bg-[#eeeeee]' />
                </div>
              ))
            ) : (
              <p className='text-center'>{t('job_page.no_job')}</p>
            )}
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
