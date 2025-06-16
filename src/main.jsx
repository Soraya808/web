import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Saludo from './Saludo.jsx'
import Despedida from './Despedida.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo></Saludo>
    <Despedida></Despedida>
  </StrictMode>,
)
