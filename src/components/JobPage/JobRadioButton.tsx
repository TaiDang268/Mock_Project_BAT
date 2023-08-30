interface IJobRadioButton {
  name: string
  common?: string
  id: string
  onClick?: () => void
}
const JobRadioButton = (props: IJobRadioButton) => {
  const { name, common, onClick } = props
  return (
    <>
      <div className='flex '>
        <input type='radio' value={name} onClick={onClick} name={common} className='mr-2 accent-BAT-primary' />
        {/* {!name ? <Skeleton count={1} baseColor='red' highlightColor='blue' /> : name} */}
        {name}
      </div>
    </>
  )
}
export default JobRadioButton
