import React from "react";
import "../styles/App.css";

const App = () => {
  // Define an array of project objects
  const projects = [
    { name: "E-commerce", description: "A platform to buy and sell products online." },
    { name: "Social Media App", description: "A network to connect with friends and share updates." },
    { name: "Task Manager", description: "An app to manage tasks and boost productivity." }
  ];

  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
