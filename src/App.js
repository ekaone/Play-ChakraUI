import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
// components
import { Button, ThemeToggler, Alert, FormContact } from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <FormContact />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
