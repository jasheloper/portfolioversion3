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
      <h1 id="contact">Network</h1>

      <div className="all-network">
        <div className="network-item">
          <h2>Reach Out</h2>I am interested in learning about serious Full-Time
          opportunities and roles in Front End and Full Stack Web Development.
          Here's a list of ways to network and connect with me, let's chat!
          <ul>
            <li>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jashelet/"
              ><img src={linkedin} className="contact-icon" alt="LinkedIn" /></a>{" "}
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jashelet/"
              >
                LinkedIn
              </a>
            </li>

            <li>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jasheloper"
              > <img src={github} className="contact-icon" alt="GitHub" /></a> <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jasheloper"
              >
                GitHub
              </a>
            </li>

            <li>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/jasheloper"
              ><img src={twitter} className="contact-icon" alt="Twitter" /></a>{" "}
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/jasheloper"
              >
                Twitter
              </a>
            </li>

            <li>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jftjashele@gmail.com"
              > <img src={gmail} className="contact-icon" alt="Gmail" /></a> <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jftjashele@gmail.com"
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
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCtNPspkT5vNq9mMcmq4Rjkw"
              ><img src={youtube} className="media-icon" alt="Youtube" /></a> <br />
              YouTube - <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCtNPspkT5vNq9mMcmq4Rjkw"
              >
                JasheleTechTV
              </a>
            </div>

            <div className="media-box">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jashele.blog/"
              ><img src={wordpress} className="media-icon" alt="wordpress" /></a>{" "}
              <br />
              Articles - <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jashele.blog/"
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
