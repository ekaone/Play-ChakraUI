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
  Header,
  Responsive
} from "./components";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <Header />
            <Switch>
              <Route exact path="/" component={Card} />
              <Route path="/box" component={Box} />
              <Route path="/form-contact" component={FormContact} />
              <Route path="/form-signin" component={FormSignIn} />
              <Route path="/form-signup" component={FormSignUp} />
              <Route path="/tabs" component={FormTabs} />
              <Route path="/button" component={Button} />
              <Route path="/alert" component={Alert} />
              <Route path="/responsive" component={Responsive} />
            </Switch>
          </ColorModeProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
