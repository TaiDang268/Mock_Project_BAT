import { useRoutes } from 'react-router'

import ContactPage from '~/components/ContactPage/ContactPage'
import DescriptionPage from '~/components/DescriptionPage/DescriptionPage'
import HomePage from '~/components/HomePage/HomePage'
import JobDetail from '~/components/JobPage/JobDetail'
import JobPage from '~/components/JobPage/JobPage'
import Layout from '~/components/Layout/Layout'
import CreateNews from '~/components/NewsPage/CreateNews/CreateNews'
import NewsPage from '~/components/NewsPage/News'
import NewsDetail from '~/components/NewsPage/NewsDetail/NewsDetail'

const routers = [
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/',
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
    path: '/detail_news',
    element: <NewsDetail />
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
