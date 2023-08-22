import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router'

import routePaths from '~/router/routePaths'

const HomePage = lazy(() => import('~/components/HomePage/HomePage'))
const DescriptionPage = lazy(() => import('~/components/DescriptionPage/DescriptionPage'))
const NewsPage = lazy(() => import('~/components/NewsPage/News/NewPage'))
const NewsDetail = lazy(() => import('~/components/NewsPage/NewsDetail/NewsDetail'))
const JobPage = lazy(() => import('~/components/JobPage/JobPage'))
const JobDetail = lazy(() => import('~/components/JobPage/JobDetail'))
const ContactPage = lazy(() => import('~/components/ContactPage/ContactPage'))
const CreateNews = lazy(() => import('~/components/NewsPage/CreateNews/CreateNews'))
const Layout = lazy(() => import('~/components/Layout/Layout'))

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
        path: routePaths.detail_news,
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>{routing}</Layout>
    </Suspense>
  )
}
