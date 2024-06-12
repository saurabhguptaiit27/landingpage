import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/GlobalStyle";
import LandingPage from "./components/LandingPage";
import ContactForm from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./components/TaskPage";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/taskpage" element={<TaskPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
