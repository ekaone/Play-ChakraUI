import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <Header />
            <Switch>
              <Route exact path="/" component={Box} />
              <Route path="/card" component={Card} />
            </Switch>
          </ColorModeProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
