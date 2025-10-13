
import TProject from "@/types/documents/project";
import React from "react";
import Project from "./Project";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
export default async function Projects() {
  let projectList: TProject[] = []; 
  try {
    const data = await clientServer.request(API.Query.PROJECTS);
    projectList = (data as any)?.projects || [];
 
  } catch (err) {
    console.error("Failed to fetch experience section:", err);
  }
 
  return (
    <div className="2xl:w-content container mx-auto my-24">
      <div className="">
        <h3 className="  mb-6 text-blue-800/50 text-5xl font-bold relative uppercase">

          PORTFOLIO
        </h3>
        <div className="flex  px-4 flex-col gap-y-10">
          {projectList.map((project, i) => (
            <Project key={i}   project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
