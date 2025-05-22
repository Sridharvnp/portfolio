import React from "react";
import Redesign from "../Projectsgroup/Uiredesign"; // Make sure this path is correct

function ProjectName() {
  const Pname = [
    { name: "TURF GAMING" },
    { name: "UI Designs" },
    { name: "Graphic Designs" },
  ];
  
  return (
    <div className="flex flex-row gap-8 justify-center items-center flex-wrap">
      {Pname.map((project, index) => (
        <Redesign key={index} projectName={project.name} />
      ))}
    </div>
  );
}

export default ProjectName;
