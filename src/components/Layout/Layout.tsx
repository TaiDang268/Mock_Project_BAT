import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'

interface IPropsMain {
  children?: React.ReactNode
}
const Layout = ({ children }: IPropsMain) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
