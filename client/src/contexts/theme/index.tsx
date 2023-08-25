import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

interface Theme {
    body: string;
    fontColor: string;
}

interface ThemeContextProviderProps {
    children: React.ReactNode;
  }

export interface ThemeContextType {
    theme: boolean;
    toggleTheme: () => void;
}

const lightTheme = {
    body: "white",
    fontColor: "black"
}

const darkTheme = {
    body: "black",
    fontColor: "whitesmoke"
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const getMode = () => {
        //@ts-ignore
        return JSON.parse(localStorage.getItem("theme")) || false;
    }
    const [theme, setTheme] = useState(getMode);

    const toggleTheme = () => {
        setTheme((prev: boolean) => !prev)
    };

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}