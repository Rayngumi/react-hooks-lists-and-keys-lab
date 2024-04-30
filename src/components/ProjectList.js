import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{user.projects.map(projects => (
        <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/>
      ))}</div>
    </div>
  );
}

export default ProjectList;
