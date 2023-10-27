import { useContext } from "react";
import { ThemeContext } from "@contexts/theme/ThemeContextProvider";

const useThemeContext = () => {
    return useContext(ThemeContext);
};

export default useThemeContext;
