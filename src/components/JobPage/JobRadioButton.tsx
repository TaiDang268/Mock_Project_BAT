import { IWorkGroup } from '~/@types/types'

const JobRadioButton = (props: IWorkGroup) => {
  const { name } = props
  return (
    <>
      <div className='flex'>
        <input type='radio' className='mr-2 accent-BAT-primary' />
        <p>{name}</p>
      </div>
    </>
  )
}
export default JobRadioButton
