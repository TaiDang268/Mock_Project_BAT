import JobBanner from './JobBanner'
import { useEffect, useState } from 'react'
import { IJob } from '~/@types/types'
import { get } from '~/API/api'
import JobItem from './JobItem'
import { useLocation } from 'react-router-dom'
import JobFormRegister from './JobFormRegister'
import { useTranslation } from 'react-i18next'
const JobDetail = () => {
  const { t } = useTranslation()
  const [jobs, setJobs] = useState<IJob[] | []>([]) // jobs
  const location = useLocation()
  const JobDetail = location.state
  useEffect(() => {
    get('jobs', { _page: 1, _limit: 3 }, setJobs)
  }, [])

  return (
    <>
      <JobBanner />
      <div className='max-w-[1200px]  mx-auto  '>
        <div className='flex mt-32 max-xl:px-4 max-lg:flex-col'>
          <div className='w-2/3 pr-10 max-lg:w-full max-lg:px-10 max-lg:pb-10'>
            <div dangerouslySetInnerHTML={{ __html: JobDetail.description_2 || '' }}></div>
          </div>
          <div className='w-1/3 max-lg:w-full max-lg:px-10   '>
            <JobFormRegister />
            <div className='  border-BAT-primary border rounded-[10px]  my-4'>
              <div className='p-5'>
                <p className='uppercase font-bold  text-[24px]'>{t('job_page.detail.similar_job')} </p>
              </div>
              <div className='border-t border-BAT-primary px-3'>
                {jobs.map((item, index) => (
                  <div key={index}>
                    <JobItem {...item} showButton={false} backgroundColor='bg-white' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default JobDetail
