import React from "react";
import profile from "./assets/profile.jpg";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profile} alt="Dev Patel" width="200" />
      <p>Hi, I'm Dev Patel, a Junior Software Developer passionate about full-stack development and cloud computing.</p>
      <a href="./assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a>
    </section>
  );
};

export default About;
