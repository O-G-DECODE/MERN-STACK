import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/abouts")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching about:", err));

    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div id="container">
      <div className="name">
        <span id="head">
          <a id="a" href="#name"><span><p>Home</p></span></a>
          <a id="a" href="#aboutme"><span><p>About Me</p></span></a>
          <a id="a" href="#projects"><span><p>Projects</p></span></a>
          <a id="a" href="#contact"><span><p>Contact</p></span></a>
        </span>

        <h1 id="name">
          {about ? `Hello, I’m ${about.name}` : "Loading..."}
        </h1>
        <span>
          <p id="subhead">
            {about ? about.title : "Junior Software Developer / Guitarist / Athlete"}
          </p>
        </span>
      </div>

      <div id="aboutme">
        <h1>About Me</h1>
        <h3 id="content">
          {about
            ? about.about
            : "Hi, I’m Anand, a web developer passionate about building user-friendly apps..."}
        </h3>
        <h4>{about?.education}</h4>
      </div>

      <div id="projects">
        <h1>My Projects</h1>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <>
            <div id="one"><h3>HELP-LINE</h3></div>
            <div id="two"><h3>HOTEL BILLING SYSTEM</h3></div>
            <div id="three"><h3>ATTENDANCE SHEET MANAGER</h3></div>
          </>
        )}
      </div>

      {about && (
        <>
          <a id="a1" href={about.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <div id="instagram">
              <h3>Click to View on Instagram</h3>
            </div>
          </a>

          <a id="a1" href={about.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <div id="instagram">
              <h3>Click to View on GitHub</h3>
            </div>
          </a>
        </>
      )}

      <div id="contact">
        <div id="contact-form">
          <form id="Form" method="post">
            <h2>Contact Me</h2>

            <span>Name:</span>
            <input type="text" id="cname" />

            <span>Email:</span>
            <input type="text" id="email" />

            <span>Subject:</span>
            <input type="text" id="subject" />

            <span>Description:</span>
            <input type="text" id="description" />

            <div id="submit">
              <button type="button" id="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
