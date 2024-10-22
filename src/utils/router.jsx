import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Potery from '../components/Potery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/potery',
    element: <Potery />,
  },
])

export default router
