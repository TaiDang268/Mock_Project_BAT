interface IPropsButton {
  backgroundColor?: string
  children?: string
  width?: string
  height?: string
  onClick?: () => void
  className?: string
}
const Button = (props: IPropsButton) => {
  const { backgroundColor, children, width, onClick, className, height } = props
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        width,
        height
      }}
      className={`${className} rounded-xl h-9 bg-BAT-bg-button hover:bg-green-600   text-white font-semibold py-2 px-2 flex justify-center items-center`}
    >
      {children}
    </button>
  )
}
export default Button
