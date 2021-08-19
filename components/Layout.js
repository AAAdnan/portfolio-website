import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
    <>
      <Navigation />
      <main className="pt-16">{children}</main>
    </>
  )
}

export default Layout
