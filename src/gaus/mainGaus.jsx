import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppGaus from './AppGaus'
import "./mainGaus.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppGaus/>
  </StrictMode>,
)
