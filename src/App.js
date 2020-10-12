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
  Card,
  Drawer,
  Header
} from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Header />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
