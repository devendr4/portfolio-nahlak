import React from "react";
import "./styles.scss";
import { HomeComponent } from "./components/HomeComponent";
import { Navbar } from "./components/NavbarComponent";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <HomeComponent></HomeComponent>
      </main>
    </>
  );
}

export default App;
