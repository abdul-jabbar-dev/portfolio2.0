'use client'
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
    <div className="2xl:w-content container mx-auto my-16">
      <div className="">
        <h3 className=" text-blue-800/50 text-5xl font-bold relative uppercase">
          
          PORTFOLIO
        </h3>
        <div className="flex  px-4 flex-col gap-y-10">
          {projectList.map((project, i) => (
            <Project key={i} id={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
