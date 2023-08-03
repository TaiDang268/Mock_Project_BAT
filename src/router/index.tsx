import { useRoutes } from 'react-router'
import Layout from '~/pages/Layout'
import Blog from '~/components/Blog'
import NotFound from '~/components/NotFound'

const routers = [
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
