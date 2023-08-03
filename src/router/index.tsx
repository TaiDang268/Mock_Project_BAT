import { useRoutes } from 'react-router'
import Layout from '~/components/Layout'
import HomePage from '~/components/HomePage/HomePage'
import NotFound from '~/components/NotFound'

const routers = [
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/about_us',
    element: <NotFound />
  },
  {
    path: '/news',
    element: <HomePage />
  },
  {
    path: '/job_opportunity',
    element: <NotFound />
  },
  {
    path: '/contact',
    element: <HomePage />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
