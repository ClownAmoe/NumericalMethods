import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppNewton from './AppNewton'
import "./mainNewton.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNewton/>
  </StrictMode>,
)
