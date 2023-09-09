import TProject from "@/types/documents/project"; 
import React from "react";
import Project from "./Project";
export default function Projects() {
  const [projectList, setProjectList] = React.useState<TProject[]>([]);
  React.useEffect(() => {
    fetch("/api/projects.json")
      .then((res) => res.json())
      .then((data: TProject[]) => {
        setProjectList(data);
      });
  }, []); 
  return (
    <div className="xl:w-content container mx-auto my-32 ">
      <div className="">
        <h3 className="text-blue-800 text-lg font-bold uppercase">PORTFOLIO</h3>
        {projectList.map((project, i) => (
          <Project key={i} id={i} project={project} />
        ))}
      </div>
    </div>
  );
}
