import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useThemeContext } from "@/hooks/index";
import Router from "./routes";

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
