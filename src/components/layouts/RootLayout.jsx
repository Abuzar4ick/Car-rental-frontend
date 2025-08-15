import { Outlet } from "react-router-dom";
// Navbar & Footer
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const RootLayout = () => {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout
