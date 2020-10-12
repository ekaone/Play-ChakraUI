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
              <Route path="/form-contact" component={FormContact} />
              <Route path="/form-signin" component={FormSignIn} />
              <Route path="/form-signup" component={FormSignUp} />
              <Route path="/tabs" component={FormTabs} />
              <Route path="/button" component={Button} />
              <Route path="/alert" component={Alert} />
            </Switch>
          </ColorModeProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
