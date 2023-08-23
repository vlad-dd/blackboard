import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    body: "white",
    fontColor: "black"
}

const darkTheme = {
    body: "black",
    fontColor: "whitesmoke"
}

export const ThemeContext: any = createContext(null);

export const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
    const getMode = () => {
        // @ts-ignore
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