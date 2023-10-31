import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@configs/index.ts";
import { AuthProvider } from "@contexts/auth/AuthContext.tsx";
import { ThemeContextProvider } from "@contexts/theme/ThemeContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={config.publicRuntime.CLIENT_ID}>
            <AuthProvider>
                <ThemeContextProvider>
                    <CssBaseline />
                    <App />
                </ThemeContextProvider>
            </AuthProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
