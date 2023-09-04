import { useEffect, useState } from "react";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../../utils";

export const useThemeWidget = () => {
    const getMode = () => {
        return JSON.parse(getItemFromLocalStorage("theme")!) || false;
    }
    const [theme, setTheme] = useState(getMode);

    const toggleTheme = () => {
        setTheme((prev: boolean) => !prev)
    };

    useEffect(() => {
        setItemToLocalStorage("theme", JSON.stringify(theme));
    }, [theme]);

    return {
        theme,
        toggleTheme
    };
}