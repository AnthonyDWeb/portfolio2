import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");

    const ThemeContextValue = { theme, setTheme };
    return <ThemeContext.Provider value={ThemeContextValue} {...props} />
};