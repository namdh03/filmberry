import { createTheme, PaletteMode } from "@mui/material";
import React, { useEffect } from "react";
import config from "@configs/index";
import { getDesignTokens } from "@themes/index";
import { useLocalStorage } from ".";

export default function useColorTheme() {
    const [theme, setTheme] = useLocalStorage<PaletteMode>(
        config.localStorages.theme,
        config.localStorages.light
    );
    const [mode, setMode] = React.useState<PaletteMode>(theme);

    if (
        theme !== config.localStorages.light &&
        theme !== config.localStorages.dark
    )
        setTheme(config.localStorages.light);

    useEffect(() => {
        setTheme(mode);
    }, [setTheme, mode]);

    const toggleColorMode = () => {
        setMode((prevMode) =>
            prevMode === config.localStorages.light
                ? config.localStorages.dark
                : config.localStorages.light
        );
    };

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
}
