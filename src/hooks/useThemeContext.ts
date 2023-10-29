import { useContext } from "react";
import { ThemeContext } from "@contexts/theme/ThemeContextProvider";

export default function useThemeContext() {
    return useContext(ThemeContext);
}
