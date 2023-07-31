interface IPropsButton {
  backgroundColor?: string
  children?: any
  width?: string
  onClick?: () => void
  className?: string
}
const Button = (props: IPropsButton) => {
  const { backgroundColor, children, width, onClick, className } = props
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        width
      }}
      className={`${className} rounded h-9 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 flex justify-center items-center`}
    >
      {children}
    </button>
  )
}
export default Button
