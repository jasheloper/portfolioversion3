import React from "react";
import learning from "../images/learning.PNG";

function Growth() {
  return (
    <div className="growth">
      <h1>Growth & Development</h1>

      <div className="learning">
        <div className="learning-info">
          <h2>Learning</h2>
          I'm constantly learning and growing my skills at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lambdaschool.com/courses/full-stack-web-development"
          >
            Lambda School
          </a>{" "}
          studying Full Stack Web Development. So, I'm staying up to date and in
          the know of the world of programming by building projects with a team
          and consistently applying new skills learned. Technology is always
          changing and there is always a lot to learn, which is one of the
          reasons I love it.
        </div>

        <div className="learning-info">
          <img
            src={learning}
            alt="Learning and Development - Jashele Tillman"
          />
        </div>

        <div className="learning-info">
          <h2>Leadership</h2>I am also currently serving in Lambda School's
          internship program as a Team Lead where I am leading a team of 6
          Software Engineering students providing group and one-on-one guidance
          & support, code review, and feedback. I also serve as Project lead for
          build weeks helping students to understand their role in the project,
          set up tools for organizing the project, and host daily standups to
          discuss the team's work progress.
        </div>
      </div>
    </div>
  );
}

export default Growth;
