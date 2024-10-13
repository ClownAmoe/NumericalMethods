import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppIterative from './AppIterative.jsx'
import "./MainIterative.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppIterative/>
  </StrictMode>,
)
