import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center pt-[200px]  '>
      <ReactLoading type='spin' color='#008345' width={200} />
    </div>
  )
}

export default Loading
