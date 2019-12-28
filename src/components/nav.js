import React from "react";

function Nav() {
  return (
    <>
    
      <nav>
        <ul>
          <div className="title">
            <a href="/">Jashele.Dev</a>
          </div>

          <li>
            <a href="/projects/">Projects</a>
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="/media/">Media</a>
          </li>

          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
