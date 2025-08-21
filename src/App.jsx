import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import RootLayout from './components/layouts/RootLayout'
// pages
import HomePage from './pages/Home'
import VehiclesPage from './pages/Vehicles'
import CarDetail from './pages/CarDetail'

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
          element: <CarDetail />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
