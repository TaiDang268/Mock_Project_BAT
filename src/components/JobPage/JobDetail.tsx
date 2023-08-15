import images from '~/assets/images'
import JobBanner from './JobBanner'
import Button from '../common/Button'
import { useEffect, useState } from 'react'
import { IJob } from '~/@types/types'
import { get } from '~/API/api'
import JobItem from './JobItem'
import { useLocation } from 'react-router-dom'

const arr = [
  {
    id: '1',
    name: 'Họ tên của bạn',
    icon: images.job_detait_acount,
    placeholder: 'Bùi Văn A ',
    required: true
  },
  {
    id: '2',
    name: 'Email',
    icon: images.job_detait_email,
    placeholder: '123@gmail.com',
    required: true
  },
  {
    id: '3',
    name: 'Số điện thoại',
    icon: images.job_detait_phone,
    placeholder: '0123456789',
    required: true
  },
  {
    id: '4',
    name: 'Đính kèm CV',
    icon: images.job_detait_pdf,
    placeholder: 'Bùi Văn A.pdf ',
    required: true
  },
  {
    id: '5',
    name: 'Địa chỉ FaceBook',
    icon: images.job_detait_a_icon,
    placeholder: 'facebook.com',
    required: false
  },
  {
    id: '6',
    name: 'Bạn biết đến BATTECH qua đâu?',
    icon: images.job_detait_hoi_icon,
    placeholder: 'qua bạn bè...',
    required: false
  }
]
const JobDetail = () => {
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
          <div
            className='w-2/3 pr-10 max-lg:w-full max-lg:px-10 max-lg:pb-10'
            dangerouslySetInnerHTML={{ __html: JobDetail.description_2 || '' }}
          ></div>
          <div className='w-1/3 max-lg:w-full max-lg:px-10   '>
            <div className='p-5  border-BAT-primary border rounded-[10px]'>
              <p className='font-bold text-[24px]'>Ứng tuyển trực tiếp </p>
              {arr.map((item, index) => (
                <div className='py-1  ' key={index}>
                  <div className='flex'>
                    <p className='py-1'>{item.name}</p>
                    <p className={`my-auto pl-1  ${item.required ? 'text-red-600' : 'hidden'}`}>*</p>
                  </div>
                  <div className='flex justify-center items-center bg-white rounded border-gray-200 border px-2'>
                    <div className='pr-1'>
                      <img src={item.icon} />
                    </div>
                    <input className='h-[42px]  w-full  outline-none' placeholder={item.placeholder} />
                  </div>
                </div>
              ))}
              <div className=' my-4 '>
                <textarea
                  className='w-full rounded p-2 border-gray-200 border outline-none'
                  placeholder='Ghi chú '
                ></textarea>
              </div>
              <Button children='Apply' className='rounded w-full' />
            </div>
            <div className='  border-BAT-primary border rounded-[10px]  my-4'>
              <div className='p-5'>
                <p className='uppercase font-bold  text-[24px]'>Công việc tương tự </p>
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
