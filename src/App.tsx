import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import {  useThemeContext } from "@/hooks/index";

const App = () => {
    const { theme } = useThemeContext();

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
