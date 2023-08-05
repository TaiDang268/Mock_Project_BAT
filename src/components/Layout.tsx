import Footer from '~/components/Footer'
import Header from '~/components/Header'

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
