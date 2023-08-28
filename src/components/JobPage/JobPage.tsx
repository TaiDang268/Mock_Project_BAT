import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from 'react-query'

import { IAddress, IJob, ITypeOfWork, IWorkGroup } from '~/@types/types'
import { fetchData, fetchNumberPage } from '~/API/api'
import { endpoints } from '~/API/endpoint'
import { queryKeys } from '~/API/querykey'
import images from '~/assets/images'

import JobInput from './JobInput'
import JobItem from './JobItem'
import JobRadioButton from './JobRadioButton'
import Banner from '../common/Banner'
import Button from '../common/Button'
import Pagination from '../common/Pagination'
const JobPage = () => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [selectedWorkGroup, setSelectedWorkGroup] = useState<string>('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const [selectedTypeOfWork, setSelectedTypeOfWork] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')

  const { data: jobs } = useQuery<IJob[]>({
    queryKey: queryKeys.job_page.jobs,
    queryFn: () => fetchData(endpoints.jobs, { _page: 1, _limit: 8 }),
    staleTime: 100 * 1000
  })
  const handlePageChange = async ({ selected }: { selected: number }) => {
    const newData = await fetchData(endpoints.jobs, { _page: selected + 1, _limit: 8 })
    queryClient.setQueryData(queryKeys.job_page.jobs, newData)
  }

  const { data: workGroup } = useQuery<IWorkGroup[]>({
    queryKey: queryKeys.job_page.workGroup,
    queryFn: () => fetchData(endpoints.work_groups, null),
    staleTime: 100 * 1000
  })
  const { data: address } = useQuery<IAddress[]>({
    queryKey: queryKeys.job_page.address,
    queryFn: () => fetchData(endpoints.address, null),
    staleTime: 100 * 1000
  })
  const { data: typeOfWork } = useQuery<ITypeOfWork[]>({
    queryKey: queryKeys.job_page.typeOfWork,
    queryFn: () => fetchData(endpoints.type_of_work, null),
    staleTime: 100 * 1000
  })
  const handleChangeWorkGroup = (name: string) => {
    name === 'Tất cả' ? setSelectedWorkGroup('') : setSelectedWorkGroup(name)
  }
  const handleChangeAddress = (name: string) => {
    name === 'Tất cả' ? setSelectedAddress('') : setSelectedAddress(name)
  }
  const handleChangeTypeOfWork = (name: string) => {
    name === 'Tất cả' ? setSelectedTypeOfWork('') : setSelectedTypeOfWork(name)
  }
  const { data: pageCount } = useQuery<number>({
    queryKey: queryKeys.job_page.numberOfPagination,
    queryFn: () => fetchNumberPage(endpoints.jobs, null),
    staleTime: 100 * 1000
  })
  const handleInputChange = async (value: string) => {
    setInputValue(value)
    if (value.trim() === '') {
      const newData = await fetchData(endpoints.jobs, null)
      queryClient.setQueryData(queryKeys.job_page.jobs, newData)
    } else {
      const newData = await fetchData(endpoints.jobs, { name_like: inputValue })
      queryClient.setQueryData(queryKeys.job_page.jobs, newData)
    }
  }
  const handleClickButtonFilter = async () => {
    const params: { address?: string; type_of_work?: string; work_group?: string; _limit?: number; _page?: number } = {}

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
    params._page = 1
    console.log(params)
    const newData = await fetchData(endpoints.jobs, params)
    queryClient.setQueryData(queryKeys.job_page.jobs, newData)
    const newPageCount = await fetchNumberPage(endpoints.jobs, params)
    queryClient.setQueryData(queryKeys.job_page.numberOfPagination, newPageCount)
  }
  return (
    <>
      {/* <JobBanner /> */}
      <Banner img1={images.job_banner_1} img2={images.job_banner_2} text1='job_page.title_1' text2='job_page.title_2' />
      <div className='max-w-[1200px] mx-auto my-10 max-xl:w-[90%]'>
        <JobInput onInputChange={handleInputChange} />
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
              <Button
                children='Áp dụng bộ lọc'
                className='mt-14 w-full text-[20px] '
                height='48px'
                onClick={handleClickButtonFilter}
              />
            </div>
          </div>
          <div className='w-3/4 max-md:w-full max-md:my-10'>
            {jobs?.length !== 0 ? (
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
