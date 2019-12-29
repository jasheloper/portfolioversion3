import React from "react";
import jashele from "../images/jashele.PNG";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro-img">
          <img src={jashele} alt="Jashele Tillman" />
        </div>

        <h1>Jashele Tillman</h1>

        <h2>Full Stack Web Developer</h2>
      </div>
    </>
  );
}

export default Intro;
