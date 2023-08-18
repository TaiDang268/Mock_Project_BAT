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
import routePaths from '~/constant/routePaths'

const routers = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: routePaths.home,
    element: <HomePage />
  },
  {
    path: routePaths.about_us,
    element: <DescriptionPage />
  },
  {
    path: routePaths.news,
    children: [
      {
        index: true,
        path: '',
        element: <NewsPage />
      },
      {
        path: 'detail_news',
        element: <NewsDetail />
      }
    ]
  },

  {
    path: routePaths.job_opportunity,
    children: [
      {
        index: true,
        path: '',
        element: <JobPage />
      },
      {
        path: routePaths.detail_job,
        element: <JobDetail />
      }
    ]
  },

  {
    path: routePaths.contact,
    element: <ContactPage />
  },
  {
    path: routePaths.create_news,
    element: <CreateNews />
  }
]

export default function Routers() {
  const routing = useRoutes(routers)
  return <Layout>{routing}</Layout>
}
