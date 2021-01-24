import React, { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar/NavbarComponent";
import { Switch, Route } from "react-router-dom";
// @ts-ignore
import { CloudinaryContext } from "cloudinary-react";
import GlobalStyle from "./styles/globalStyles";
import { UploadButton } from "./components/UploadComponent";
//import { TransitionGroup, CSSTransition } from "react-transition-group";
import SpinnerComponent from "./components/SpinnerComponent";
//import Particles from "react-particles-js";
const HomeComponent = lazy(() => import("./components/HomeComponent"));
const ContactComponent = lazy(() => import("./components/ContactComponent"));
const CertificationsComponent = lazy(
  () => import("./components/CertificationsComponent")
);
const AboutComponent = lazy(() => import("./components/AboutComponent"));
function App() {
  return (
    <>
      <CloudinaryContext cloudName="chichaswan">
        <GlobalStyle />
        <Navbar></Navbar>
        <main>
          {/*<Particles
            params={{
              particles: {
                number: {
                  value: 10,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 2,
                  },
                },
                lineLinked: {
                  enable: false,
                },
              },
            }}
            />*/}
          <Switch>
            <Route path="/contact">
              <Suspense fallback={SpinnerComponent}>
                <ContactComponent />
              </Suspense>
            </Route>
            <Route path="/certifications">
              <Suspense fallback={SpinnerComponent}>
                <CertificationsComponent />
              </Suspense>
            </Route>
            <Route path="/about">
              <Suspense fallback={SpinnerComponent}>
                <AboutComponent />
              </Suspense>
            </Route>
            <Route path="/upload233">
              <UploadButton />
            </Route>
            <Route path="/">
              <Suspense fallback={SpinnerComponent}>
                <HomeComponent />
              </Suspense>
            </Route>
          </Switch>
        </main>
      </CloudinaryContext>
    </>
  );
}

export default App;
