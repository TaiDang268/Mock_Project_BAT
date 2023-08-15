interface IJobRadioButton {
  name: string
  onClick?: () => void
}
const JobRadioButton = (props: IJobRadioButton) => {
  const { name, onClick } = props
  return (
    <>
      <div className='flex '>
        <input type='radio' onClick={onClick} name='radio' value={name} className='mr-2 accent-BAT-primary' />
        <p>{name}</p>
      </div>
    </>
  )
}
export default JobRadioButton
