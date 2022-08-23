import { useState, useContext, createContext } from "react";

type themeProps = {
    theme : string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext({} as themeProps);

type childProps = {
    children: React.ReactNode
}

const ThemeProvider = (props: childProps) => {

    const [theme, setTheme] = useState<string>('dark');

    return <ThemeContext.Provider value={{ theme, setTheme }} >{props.children}</ThemeContext.Provider>

}

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider }

