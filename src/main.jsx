import { StrictMode } from 'react'
import './styles/tailwind.css'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>,
)
