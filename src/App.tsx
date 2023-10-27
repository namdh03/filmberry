import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";
import useThemeContext from "@hooks/useThemeContext";

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
