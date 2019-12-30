import React from "react";
import recipe from "../images/recipegen.png";
import tvguide from "../images/tvguide.png";
import portfolio from "../images/portfoliosite.png";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 id="projects">Projects & Code </h1>

        <div className="all-work">
          <div className="single-project">
            <div className="project-info">
              <h2>Portfolio Website</h2>
              <h3>Tools: React, LESS</h3>
              <img src={portfolio} alt="Project" />
            </div>

            <div className="project-info description">
              Portfolio site built solely for the purpose of displaying my work
              in web development, writing, and content creation. A tool that is
              utilized for professional networking with others in the software
              (or similiar) fields including employers & a centralized location
              to share my knowledge and what I'm learning.
              <br />
              <h4>
                <a
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/portfolioversion3"
                >
                  GitHub Code
                </a>
              </h4>

              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>

         

          
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>Recipe Generator</h2>
              <h3>Tools: React, Axios, Redux</h3>
              <img src={recipe} alt="Project" />
            </div>

            <div className="project-info description">
              This React app allows users to generate a random meal on button
              click. 3rd party API data was implemented using Axios and the
              selected data that users see on each request is:{" "}
              <code>title, photo, instructions, category,</code> and{" "}
              <code>area</code>.
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://what-should-i-eat.netlify.com/"
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/React-Redux-App/tree/jashele-tillman"
                >
                  GitHub Code
                </a>
              </h4>

              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>
          
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>TV Guide</h2>
              <h3>Tools: React, Hooks, AJAX</h3>
              <img src={tvguide} alt="Project" />
            </div>

            <div className="project-info description">
              This React app allows users to see the latest episodes on
              television. The data is generated from a live 3rd party API and is
              automatically updated each day. Each request gets{" "}
              <code>image, overview, country, language,</code> and{" "}
              <code>vote average</code>.
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jasheletv.netlify.com/"
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/jashele-tv"
                >
                  GitHub Code
                </a>
              </h4>
              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>
          </div>
       

           <div className="button-div">
            <button>More Coming Soon!</button>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Projects;
