import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import TiendaApp from './TiendaApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiendaApp />
  </StrictMode>,
)
