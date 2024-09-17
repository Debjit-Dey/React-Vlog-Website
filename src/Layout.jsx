import React from 'react'
import { useEffect,useState } from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from "./components/context/theme";


function Layout() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const elem = document.querySelector("html");
    elem.classList.remove("light", "dark");
    elem.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Header/>
        <Outlet/>
        <Footer/>
      
        </ThemeProvider>
  )
}

export default Layout
