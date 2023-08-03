import { useRoutes } from 'react-router'
import Layout from '~/pages/Layout'
import Home from '~/components/Home'
import NotFound from '~/components/NotFound'

const routers = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about_us',
    element: <NotFound />
  },
  {
    path: '/news',
    element: <Home />
  },
  {
    path: '/job_opportunity',
    element: <NotFound />
  },
  {
    path: '/contact',
    element: <Home />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
