import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IItemNewsProps } from '~/@types/types'
import { useState } from 'react'
import axios from 'axios'

interface Inputs extends IItemNewsProps {}
const CreateNews = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const [textCkEditor, setTextCkEditor] = useState<string>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post('http://localhost:3002/jobs', {
        id: data.id,
        author: data.author,
        image: data.image,
        category: data.category,
        date: data.date,
        title: data.title,
        description: textCkEditor
      })
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <div className='max-w-[1200px] p-5 flex mx-auto'>
        <div className='w-3/4'>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setTextCkEditor(editor.getData())
            }}
          />
        </div>
        <div className='w-1/4 ml-3'>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Id</p>
              <input {...register('id', { required: true })} className='border border-gray-400' />
              <p>Title</p>
              <input {...register('title', { required: true })} className='border border-gray-400' />
              <p>Category</p>
              <input {...register('category', { required: true })} className='border border-gray-400' />
              <p>Author</p>
              <input {...register('author', { required: true })} className='border border-gray-400' />
              <p>Date</p>
              <input {...register('date', { required: true })} className='border border-gray-400' />
              <p>Image</p>
              <input {...register('image', { required: true })} className='border border-gray-400' />
              <input type='submit' className='border border-gray-400' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateNews
