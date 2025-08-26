import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import RootLayout from './components/layouts/RootLayout'
// pages
import HomePage from './pages/Home'
import VehiclesPage from './pages/Vehicles'
import CarDetailPage from './pages/CarDetail'
import AboutPage from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'vehicles',
          element: <VehiclesPage />
        },
        {
          path: 'vehicles/:id',
          element: <CarDetailPage />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
