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

        <h2>Software Engineer</h2>
      </div>
    </>
  );
}

export default Intro;
