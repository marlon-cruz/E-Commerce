import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormLogin from './Paginas/FormLogin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormLogin />
  </StrictMode>,
)
