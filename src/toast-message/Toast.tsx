import { toast } from 'react-toastify'
export const successMessage = () => {
  toast.success('Success  !', {
    position: toast.POSITION.TOP_RIGHT
  })
}
