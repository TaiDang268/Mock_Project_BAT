import { useRoutes } from 'react-router'
import Layout from '~/components/Layout/Layout'
import HomePage from '~/components/HomePage'
import NotFound from '~/components/common/NotFound'
import DescriptionPage from '~/components/DescriptionPage'
import NewsPage from '~/components/NewsPage/News'
import NewsDetail from '~/components/NewsPage/NewsDetail/NewsDetail'

const routers = [
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/about_us',
    element: <DescriptionPage />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/job_opportunity',
    element: <NotFound />
  },
  {
    path: '/contact',
    element: <HomePage />
  },
  {
    path: '/detail',
    element: <NewsDetail />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
