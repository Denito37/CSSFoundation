import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState( () =>{
        const saved = localStorage.getItem('theme-preference')
        if(saved) return saved === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(()=>{
        const root = document.documentElement
        root.setAttribute('data-theme', isDark ? 'dark' : 'light')
        localStorage.setItem('theme-preference', isDark ? 'dark': 'light')
    }, [isDark])

    const handleTheme = () => {setIsDark(!isDark)}

    return(
        <ThemeContext.Provider value={{isDark, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) throw new Error("useTheme must be used within ThemeProvider")
    return context
}

export {ThemeProvider, useTheme}