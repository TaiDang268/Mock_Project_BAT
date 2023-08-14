import images from '~/assets/images'
import Button from '../common/Button'
import { IJob } from '~/@types/types'
import { useNavigate } from 'react-router-dom'
interface IJobItem extends IJob {
  showButton?: boolean
  backgroundColor?: string
}
const JobItem = (props: IJobItem) => {
  const { name, description, salary, address, deadline, showButton, backgroundColor } = props
  const navigate = useNavigate()
  const handleOnClickItem = () => {
    navigate('/detailJob', { state: props })
  }
  return (
    <>
      <div className='w-full  mb-4 cursor-pointer' onClick={handleOnClickItem}>
        <div className={`px-3 py-3  rounded-[5px]  relative ${backgroundColor}`}>
          <div className=''>
            <div>
              <p className='font-bold text-[20px]'>{name}</p>
            </div>
            <div>
              <p className='font-normal'>{description}</p>
            </div>
            <div className='flex  font-normal text-[#979797] text-[14px] mt-1'>
              <div className='flex mr-4 '>
                <img src={images.job_dolar} />
                <p className='ml-1'>{salary}</p>
              </div>
              <div className='flex mr-4'>
                <img src={images.job_address} />
                <p className='ml-1'>{address}</p>
              </div>
              <div className='flex mr-4'>
                <img src={images.job_clock} />
                <p className='ml-1'>{deadline}</p>
              </div>
            </div>
          </div>
          {showButton && (
            <Button children='Ứng tuyển' className='rounded-[5px] absolute right-4 bottom-2 text-[12px]' />
          )}
        </div>
      </div>
    </>
  )
}
export default JobItem
