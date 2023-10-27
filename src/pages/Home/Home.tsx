import { useThemeContext } from "@hooks/index";
import { Button } from "@mui/material";

const Home = () => {
    const { toggleColorMode } = useThemeContext();

    return (
        <Button variant="contained" onClick={toggleColorMode}>
            Click me!
        </Button>
    );
};

export default Home;
