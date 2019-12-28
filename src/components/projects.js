import React from "react";
import pancakes from "../images/pancakes.jpg";
import recipe from "../images/recipegen.png";
import tvguide from '../images/tvguide.png';

function Projects() {
  return (
    <>
      <div className="projects">
        <h1>Recent Projects</h1>

        <div className="all-work">
          <div className="single-project">
            <div className="project-info">
            <h2>Portfolio Website</h2>
              <h3>Technologies: React, LESS</h3>
              <img src={pancakes} alt="Project" />
            </div>

            <div className="project-info">
            
             Portfolio site built solely for the purpose of displaying my work in web development, writing, and content creation.  A tool that is utilized for networking with others in the field including employers and a way to share my knowledge.
              <br />
              <h4>Demo | GitHub</h4>
            </div>
          </div>

          <div className="single-project">
            <div className="project-info">
            <h2>Recipe Generator</h2>
              <h3>Technologies: React, Axios, Redux</h3>
              <img src={recipe} alt="Project" />
            </div>

            <div className="project-info">
             
              This React app allows users to generate a random meal on button click.  3rd party API data was implemented using Axios and the chosen data that users get on each request is: <code>meal photo, instructions, category,</code> and <code>area</code>.

              <h4>Demo | GitHub</h4>
            </div>
          </div>

          <div className="single-project">
            <div className="project-info">
            <h2>TV Guide</h2>
              <h3>Technologies: React, React Hooks, AJAX</h3>
              <img src={tvguide} alt="Project" />
            </div>

            <div className="project-info">
           
              This React app allows users to see the latest episodes on television.  The data is generated from a live 3rd party API and is automatically updated each day.  Each request gets <code>tv image, overview, country, language,</code> and <code>vote average</code>.

              <h4>Demo | GitHub</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
