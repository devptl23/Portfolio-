import React from "react";

export default function Projects() {
  return (
    <section>
      <h1>My Projects</h1>

      <div className="project-text">
        <h2>GPA Calculator</h2>
        <p>
          Created a Grade Point Average calculator using C#, allowing users to enter weighted grades and receive accurate GPA calculations.
        </p>
      </div>

      <div className="project-text">
        <h2>Serverless Web App</h2>
        <p>
          Developed an Uber-like ride request app using AWS Lambda, API Gateway, DynamoDB, and Cognito with an HTML-based interface.
        </p>
      </div>

      <div className="project-text">
        <h2>Kubernetes Cluster</h2>
        <p>
          Built a Kubernetes cluster with EC2 worker nodes using Amazon EKS and CDK. Implemented Infrastructure-as-Code to automate deployments.
        </p>
      </div>
    </section>
  );
}
