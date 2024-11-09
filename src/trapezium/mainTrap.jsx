import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppTrap from "./AppTrap";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppTrap/>
    </StrictMode>
)