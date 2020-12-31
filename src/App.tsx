import React from "react";
import "./styles.scss";
import { HomeComponent } from "./components/HomeComponent";
import { Contact } from "./components/ContactComponent";
import { Certifications } from "./components/CertificationsComponent";
import { About } from "./components/AboutComponent";
import { Navbar } from "./components/NavbarComponent";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/certifications">
            <Certifications />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
