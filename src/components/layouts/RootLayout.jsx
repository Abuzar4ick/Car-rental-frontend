import { Outlet } from "react-router-dom";
// Navbar & Footer
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
