import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Potery from '../components/Potery.jsx'
import Contact from '../components/Contact.jsx'
import Crochet from '../components/Crochet.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/potery/',
    element: <Potery />,
  },
  {
    path: '/crochet/',
    element: <Crochet />,
  },
  {
    path: '/contact/',
    element: <Contact />,
  },
  {
    path: '*',
    element: <App />,
  },
])

export default router
