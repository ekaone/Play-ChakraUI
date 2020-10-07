import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from "@chakra-ui/core";
// components
import { Button } from "./components";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Button />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
