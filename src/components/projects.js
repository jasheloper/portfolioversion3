import React from "react";
import recipe from "../images/recipegen.png";
import tvguide from "../images/tvguide.png";
import portfolio from "../images/portfoliosite.png";
import personal from "../images/personal.png";
import api from '../images/apiwithauth.png'

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 id="projects">Projects & Code </h1>

        <div className="all-work">
          <div className="single-project">
            <div className="project-info">
              <h2>API with Authentication</h2>
              <h3>Tools: Express, Node, SQL</h3>
              <img src={api} alt="Personal Website Project" />
            </div>

            <div className="project-info description">
            Delivered a RESTful Web-based API using Node, Express, and SQL that allows users to register, login, and perform CRUD operations.  Implemented JSON Web Token authentication for security and added restricted middleware to prevent access to unauthorized endpoints. Built automated unit tests using jest.

              <br />
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://restaurant-passport-5.herokuapp.com/api/restaurants"
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Build-Week-Restaurant-Passport-5/backend"
                >
                  GitHub Code
                </a>{" "}
                | {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/BsUcEXAyY_M">
                  Video Demo
                </a>
              </h4>
              <div className="category">
                <span className="category-span">Category:</span> Back End
              </div>
            </div>
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>Personal Website</h2>
              <h3>Tools: HTML, LESS</h3>
              <img src={personal} alt="Personal Website Project" />
            </div>

            <div className="project-info description">
            Built, coded, and designed a fully responsive personal website using HTML5 & CSS3 to showcase my online presence which includes my work in web development and content creation.  Implemented LESS preprocessing for styling.
              <br />
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jasheletillman.me/"
                >
                  Live Demo
                </a>
              </h4>
              <div className="category">
                <span className="category-span">Category:</span> Front End
              </div>
            </div>
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>Portfolio Website</h2>
              <h3>Tools: React, LESS</h3>
              <img src={portfolio} alt="Project" />
            </div>

            <div className="project-info description">
            Built, coded, and designed a fully responsive portfolio website using React.js to display recent projects and updates in web development.  Structured the site using React functional components.  Implemented LESS preprocessing for styling. 

              <br />
              <h4>
                <a>Live Demo</a> |{" "}
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
              <h3>Tools: React, Redux, Axios</h3>
              <img src={recipe} alt="Project" />
            </div>

            <div className="project-info description">
              A React app that generates a different recipe on button click.  Implemented Redux for state management.  Used Axios to GET data from 3rd party API endpoints. 
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
              <h3>Tools: React, Class Components</h3>
              <img src={tvguide} alt="Project" />
            </div>

            <div className="project-info description">
            A React app that displays a list of TV shows airing today and updates automatically each day.  Implemented React class components and incorporated lifecycle methods to render data from a 3rd party API.
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
