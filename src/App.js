import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Growth from './components/growth';
import Network from './components/network'
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
        <Growth />
        <Network />
      </div>
    </>
  );
}

export default App;
