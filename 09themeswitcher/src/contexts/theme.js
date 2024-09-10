import { createContext, useContext } from "react";

// step-1 create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// step-2 create context Provider (ThemeContext)
export const ThemeProvider = ThemeContext.Provider

// step-3 create hook and export 
export default function useTheme(){
    return useContext(ThemeContext)
}