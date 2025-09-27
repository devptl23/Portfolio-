import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Welcome to Dev Patel's Portfolio</h1>
      <p>Mission: To build intelligent, scalable software that solves real-world problems.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </section>
  );
};

export default Home;
