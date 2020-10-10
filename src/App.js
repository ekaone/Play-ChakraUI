import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
// components
import {
  Button,
  ThemeToggler,
  Alert,
  FormContact,
  Box,
  FormSignUp,
  FormSignIn,
  FormTabs,
  Card
} from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Card />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
