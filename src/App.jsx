import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const darkTheme = {
    body: "#1b1c22",
    shadow: "#06070b",
    shadowb: " #ffffff1f",
    white: "#ffffff",
    previous: "#ffffffcc",
    screenBefore: "#ffffff1f",
    btnBackground: "#191a1f",
    btnTextColor: "#9aa9ae",
    btnBoxShadow: "#06070b",
    btnBoxShadowbefore: "#ffffff1f",
    operation: "#212121",
  };
  const lightTheme = {
    body: "#e5e5e5",
    shadow: "#06070b83",
    shadowb: " #ffffff75",
    white: "#000",
    previous: "#000000cc",
    screenBefore: "#d0d0d0",
    btnBackground: "#e5e5e5",
    btnTextColor: "#000",
    btnBoxShadow: "#333333a2",
    btnBoxShadowbefore: "#00000039",
    operation: "#212121",
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Calculator />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
