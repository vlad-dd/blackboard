import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextProviderProps, ThemeContextType } from "../interfaces";
import { useThemeWidget } from "./use-theme-widget";
import { DARK_THEME_CONFIGURATION, LIGHT_THEME_CONFIGURATION } from "./constants";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const { theme, toggleTheme } = useThemeWidget();
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === false ? DARK_THEME_CONFIGURATION : LIGHT_THEME_CONFIGURATION}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;