import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import RootLayout from './components/layouts/RootLayout'
// pages
import HomePage from './pages/Home'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
