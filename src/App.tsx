import React from "react";
import { HomeComponent } from "./components/HomeComponent";
import { Contact } from "./components/ContactComponent";
import { Certifications } from "./components/CertificationsComponent";
import { About } from "./components/AboutComponent";
import { Navbar } from "./components/Navbar/NavbarComponent";
import { Switch, Route } from "react-router-dom";
// @ts-ignore
import { CloudinaryContext } from "cloudinary-react";
import GlobalStyle from "./styles/globalStyles";
import { UploadButton } from "./components/UploadComponent";
//import Particles from "react-tsparticles";
import Particles from "react-particles-js";
function App() {
  return (
    <>
      <CloudinaryContext cloudName="chichaswan">
        <GlobalStyle />
        <Navbar></Navbar>
        <main>
          <Particles
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "pink",
                  },
                },
              },
            }}
          />
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
            <Route path="/upload233">
              <UploadButton />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </main>
      </CloudinaryContext>
    </>
  );
}

export default App;
