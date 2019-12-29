import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import gmail from "../images/gmail.png";
import youtube from "../images/youtube.png";
import wordpress from "../images/wordpress.png";

function Network() {
  return (
    <div className="network">
      <h1>Network</h1>

      <div className="all-network">
        <div className="network-item">
          <h2>Reach Out</h2>I am interested in learning about serious Full-Time
          opportunities and roles in Front End and Full Stack Web Development.
          Here's a list of ways to network and connect:
          <ul>
            <li>
              <img src={linkedin} className="contact-icon" alt="LinkedIn" />{" "}
              Connect on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <img src={github} className="contact-icon" alt="GitHub" />
              Follow my work on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                GitHub
              </a>
            </li>

            <li>
              <img src={twitter} className="contact-icon" alt="Twitter" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                Tweet
              </a>{" "}
              me!
            </li>

            <li>
              <img src={gmail} className="contact-icon" alt="Gmail" />
              Shoot me an{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                Email
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="network-item">
          <h2>Media & Content</h2>
          My work extends in the dev community by way of blogging and video
          content creation. Every chance I get, I use my free time to post
          articles, show people what I'm working on and share knowledge.
          <br />


          <div className="media-info">
            <div className="media-box">
              <img src={youtube} className="media-icon" alt="Youtube" /> <br />
              YouTube -  <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                JasheleTechTV
              </a>
            </div>

            <div className="media-box">
              <img src={wordpress} className="media-icon" alt="wordpress" /> <br />
              Blog -  <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://example.com"
              >
                Jashele.Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
