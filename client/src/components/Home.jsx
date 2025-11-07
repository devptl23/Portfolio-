import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Software Developer", "Full Stack Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Dev Patel</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate about building intelligent, scalable software that solves real-world problems.
            Specialized in full-stack development, cloud architecture (AWS), and DevOps with expertise 
            in React, Node.js, Kubernetes, and modern web technologies.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection("projects")}>
              View My Work
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                window.location.href = "mailto:2000dev.p@gmail.com";
              }}
            >
              Get in Touch
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/devptl23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/devpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:2000dev.p@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection("about")}>
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer based in Toronto, ON, with a strong foundation in computer science and 
              hands-on experience building full-stack applications. I specialize in creating scalable, cloud-based solutions 
              using modern technologies and frameworks.
            </p>
            <p>
              My expertise includes developing web applications with React and Node.js, implementing serverless architectures 
              on AWS, and managing containerized applications with Kubernetes. I'm proficient in multiple programming languages 
              including JavaScript, Python, C#, Java, with experience in both SQL and NoSQL databases.
            </p>
            <div className="skills-preview">
              <div className="skill-badge">React</div>
              <div className="skill-badge">Node.js</div>
              <div className="skill-badge">AWS</div>
              <div className="skill-badge">Python</div>
              <div className="skill-badge">C#</div>
              <div className="skill-badge">Kubernetes</div>
            </div>
            <button className="btn-outline" onClick={() => scrollToSection("projects")}>
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-items">
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">C#</span>
              <span className="skill-item">Java</span>
              
              <span className="skill-item">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Technologies</h3>
            <div className="skill-items">
              <span className="skill-item">React</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3</span>
              <span className="skill-item">REST APIs</span>
              <span className="skill-item">Express</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <div className="skill-items">
              <span className="skill-item">AWS</span>
              <span className="skill-item">Lambda</span>
              <span className="skill-item">DynamoDB</span>
              <span className="skill-item">EKS</span>
              <span className="skill-item">Kubernetes</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">CDK</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases & Tools</h3>
            <div className="skill-items">
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">MySQL</span>
              <span className="skill-item">PostgreSQL</span>
              <span className="skill-item">Git</span>
              <span className="skill-item">Agile</span>
              <span className="skill-item">VS Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Technical Administrative Support</h3>
              <p className="company">Uber</p>
              <p className="date">March 2019 - August 2019</p>
              <ul className="responsibilities">
                <li>Resolved P1-P3 incidents using ServiceNow and Salesforce following ITIL/ITSM best practices</li>
                <li>Collaborated with backend teams to troubleshoot issues and maintain accurate ticketing records</li>
                <li>Managed queues with Amazon Connect, created user guides, and implemented process improvements</li>
                <li>Produced knowledge-base articles to standardize troubleshooting and reduce repeated incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-image-placeholder">
                <i className="fas fa-satellite"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href="https://github.com/devptl23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View Code"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">OrbitalSync</h3>
              <span className="project-badge">NASA Space Apps Challenge Winner</span>
              <span className="project-date">Oct 2025</span>
              <ul className="project-description">
                <li>Built a real-time 3D satellite visualization platform using Flask, Python, and Three.js with live NASA TLE data integration.</li>
                <li>Simulated global satellite motion and rendered dynamic orbit paths for improved LEO traffic awareness.</li>
              </ul>
              <div className="project-technologies">
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Three.js</span>
                <span className="tech-tag">NASA TLE</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-image-placeholder">
                <i className="fas fa-truck"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href="https://github.com/devptl23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View Code"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">DashFleet</h3>
              <span className="project-subtitle">Predictive Fleet Maintenance Dashboard</span>
              <ul className="project-description">
                <li>Developed full-stack fleet monitoring system using React, Node.js, Express, Three.js, Recharts, and REST APIs.</li>
                <li>Designed condition-based maintenance workflows reducing unplanned downtime by up to 30%.</li>
              </ul>
              <div className="project-technologies">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Three.js</span>
                <span className="tech-tag">Recharts</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-image-placeholder">
                <i className="fas fa-cloud-sun-rain"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href="https://github.com/devptl23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View Code"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Weather Prediction System</h3>
              <span className="project-subtitle">Forecast vs Observed Analysis</span>
              <ul className="project-description">
                <li>Developed Python ETL pipeline using pandas, NumPy, and Matplotlib to merge multi-source climate data.</li>
                <li>Automated feature generation and visual insights, improving forecast-vs-actual review efficiency by 40%+.</li>
              </ul>
              <div className="project-technologies">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">pandas</span>
                <span className="tech-tag">NumPy</span>
                <span className="tech-tag">Matplotlib</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-image-placeholder">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href="https://github.com/devptl23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View Code"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Serverless Web Application</h3>
              <ul className="project-description">
                <li>Built serverless app using AWS Lambda, API Gateway, DynamoDB, Cognito, and Amplify with secure authentication flow.</li>
                <li>Implemented modular serverless architecture designed for horizontal scalability and 99.9% uptime availability.</li>
              </ul>
              <div className="project-technologies">
                <span className="tech-tag">AWS Lambda</span>
                <span className="tech-tag">API Gateway</span>
                <span className="tech-tag">DynamoDB</span>
                <span className="tech-tag">Cognito</span>
                <span className="tech-tag">Amplify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href="mailto:2000dev.p@gmail.com">2000dev.p@gmail.com</a>
            </div>

           

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Location</h3>
              <p>Toronto, ON</p>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/devptl23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/devpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:2000dev.p@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="form-title">Send Me a Message</h3>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! I'll get back to you soon.");
            }}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName" 
                  placeholder="Your Name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Your message here..." 
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2025 Dev Patel. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default Home;
