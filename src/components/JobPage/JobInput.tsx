import { useTranslation } from 'react-i18next'

import Button from '../common/Button'
interface IJobInput {
  onInputChange: (value: string) => void
  onSearchClick: () => void
}
const JobInput = (props: IJobInput) => {
  const { t } = useTranslation()
  const { onInputChange, onSearchClick } = props
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value)
  }
  return (
    <>
      <div className='w-full '>
        <div>
          <p className='uppercase font-bold text-[20px] my-8 text-center'>{t('job_page.title_3')} </p>
        </div>
        <div className='max-w-[1200px] mx-auto relative'>
          <input
            onChange={handleChange}
            placeholder='Tên công việc'
            className='w-full rounded-xl pl-2 pr-10 mb-10 border h-[48px] border-BAT-primary  '
          />
          <Button
            children={`${t('job_page.button')}`}
            className='absolute right-0 top-0  w-32'
            height='48px'
            onClick={onSearchClick}
          />
        </div>
      </div>
    </>
  )
}
export default JobInput
