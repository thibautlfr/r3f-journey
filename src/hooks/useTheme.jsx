import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    // Avoid useState as possible because it will cause the component to re-render
    const [color, setColor] = useState("white");

    return (
      <ThemeContext.Provider value={{ color, setColor }}>
        {children}
      </ThemeContext.Provider>
    )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}