import React from "react";
import { projects } from "../data";
import Card from "./Card";

const ProjectsPage = () => (
  <div className="projects-container">
    <p className="work-title">My Projects</p>
    <hr className="landing-hr" />
    <div className="projects">
      {projects.map(project => {
        if (project.visible) {
          return (
            <a href={project.link}>
              <Card key={project.label} item={project} renderModal={false} />
            </a>
          );
        }
        return null;
      })}
    </div>
  </div>
);

export default ProjectsPage;
