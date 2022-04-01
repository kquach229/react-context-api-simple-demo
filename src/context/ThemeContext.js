import { createContext, useState } from "react";

export const ThemeContext = createContext('dark');

const themes = {
  lightTheme: {
    backgroundColor: '#fff',
    color: 'black'
  },
  darkTheme: {
    backgroundColor: '#000',
    color: 'white'
  }
}

export const ThemeProvider = ({ children }) => {
  
const [theme, setTheme] = useState('dark');

const toggleTheme = (arg) => {
  setTheme(arg);
}

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}