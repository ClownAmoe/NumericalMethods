import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRect from "./AppRect";
import "./mainRect.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRect/>
    </StrictMode>
)
