import { PaletteMode, PaletteOptions } from "@mui/material";

export const lightTheme: PaletteOptions = {
    primary: {
        main: "#6F5CF1",
    },
    secondary: {
        main: "rgb(203 213 225)",
    },
    success: {
        main: "#47D764",
    },
    info: {
        main: "#2F86EB",
    },
    warning: {
        main: "#FFC021",
    },
    error: {
        main: "#FF355B",
    },
    background: {
        default: "rgba(0, 0, 0, 0.2)",
        paper: "#FFFFFF",
    },
    text: {
        primary: "#0D0C11",
        secondary: "#6F5CF1",
        disabled: "rgba(0,0,0,0.3)",
    },
};

export const darkTheme: PaletteOptions = {
    primary: {
        main: "#6F5CF1",
    },
    secondary: {
        main: "#1E293B",
    },
    success: {
        main: "#47D764",
    },
    info: {
        main: "#2F86EB",
    },
    warning: {
        main: "#FFC021",
    },
    error: {
        main: "#FF355B",
    },
    background: {
        default: "rgba(0, 0, 0, 0.5)",
        paper: "#0F172A",
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        disabled: "rgba(0,0,0,0.3)",
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  ...lightTheme,
              }
            : {
                  // palette values for dark mode
                  ...darkTheme,
              }),
    },
});
