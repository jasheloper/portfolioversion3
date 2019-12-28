import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import "./css/index.css";

function App() {
  return (
    <>
      <div className="everythingwrapped">
        <Nav />
        <Header />
        <Intro />
        <br />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
