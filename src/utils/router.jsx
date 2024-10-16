import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <App />,
  },
])

export default router
