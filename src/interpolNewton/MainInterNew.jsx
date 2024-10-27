import { createRoot } from "react-dom/client"
import "./MainInterNew.css"
import { StrictMode } from "react"
import AppInterNew from "./AppInterNew"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppInterNew/>
    </StrictMode>
)