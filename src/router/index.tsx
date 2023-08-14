import { useRoutes } from 'react-router'
import Layout from '~/components/Layout/Layout'
import HomePage from '~/components/HomePage'
import DescriptionPage from '~/components/DescriptionPage'
import NewsPage from '~/components/NewsPage/News'
import NewsDetail from '~/components/NewsPage/NewsDetail/NewsDetail'
import JobPage from '~/components/JobPage'
import JobDetail from '~/components/JobPage/JobDetail'
import ContactPage from '~/components/ContactPage'
import CreateNews from '~/components/NewsPage/CreateNews/CreateNews'

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
    element: <JobPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/detailNews',
    element: <NewsDetail />
  },
  {
    path: '/detailJob',
    element: <JobDetail />
  },
  {
    path: '/create_news',
    element: <CreateNews />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
