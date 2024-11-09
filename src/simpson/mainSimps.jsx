import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppSimps from "./AppSimps";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppSimps/>
    </StrictMode>
)