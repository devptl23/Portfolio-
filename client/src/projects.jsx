import React, { useState } from "react";
import "./styles/Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "GPA Calculator",
      description: "Created a Grade Point Average calculator using C#, allowing users to enter weighted grades and receive accurate GPA calculations.",
      category: "application",
      technologies: ["C#", ".NET", "Windows Forms"],
      github: "https://github.com/devptl23",
      demo: null
    },
    {
      id: 2,
      title: "Serverless Web App",
      description: "Developed an Uber-like ride request app using AWS Lambda, API Gateway, DynamoDB, and Cognito with an HTML-based interface.",
      category: "cloud",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "HTML"],
      github: "https://github.com/devptl23",
      demo: null
    },
    {
      id: 3,
      title: "Kubernetes Cluster",
      description: "Built a Kubernetes cluster with EC2 worker nodes using Amazon EKS and CDK. Implemented Infrastructure-as-Code to automate deployments.",
      category: "devops",
      technologies: ["Kubernetes", "AWS EKS", "CDK", "EC2", "IaC"],
      github: "https://github.com/devptl23",
      demo: null
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with cart functionality, payment integration, and admin dashboard.",
      category: "full-stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/devptl23",
      demo: null
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and dark mode support.",
      category: "frontend",
      technologies: ["React", "CSS3", "Vite"],
      github: "https://github.com/devptl23/portfolio",
      demo: null
    },
    {
      id: 6,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      category: "full-stack",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/devptl23",
      demo: null
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "full-stack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "cloud", label: "Cloud" },
    { id: "devops", label: "DevOps" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Here are some of my recent projects showcasing my skills and experience
        </p>
      </div>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="project-image-placeholder">
                <i className="fas fa-code"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Code"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
