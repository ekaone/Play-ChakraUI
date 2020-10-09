import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
// components
import { Button, ThemeToggler, Alert } from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Alert />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
