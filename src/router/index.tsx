import { useRoutes } from 'react-router'
import HomePage from '~/pages/HomePage'

const routers = [
  {
    path: '/',
    element: <HomePage />
  }
]

export default function Routers() {
  return useRoutes(routers)
}
