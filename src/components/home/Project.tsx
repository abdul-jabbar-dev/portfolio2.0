import TProject from "@/types/documents/project";
import Image from "next/image";
import React from "react";
import ProjectIconLink from "./ProjectIconLink";

export default function Project({
  project,
}: {
  project: TProject
}) {
  return (
    <div className="flex md:flex-row gap-x-6 flex-col my-6 w-full items-center ">
      <div
        className={"py-6 md:py-0 md:w-5/12  ".concat(Number(project.id) % 2 == 0 ? "" : "  md:order-1")}>
        <div className="w-[90%]">
          <h2 className="font-bold text-2xl text-slate-700">{project.title}</h2>
          <div className="flex justify-start my-5 gap-x-8">
            {project.projectTools.map((usedTech) => (
              <span key={usedTech} className=" text-slate-500 font-semibold ">
                {usedTech}
              </span>
            ))}
          </div>
          <p className="my-3 text-slate-500 font-semibold text-lg ">
            {project.desc}
          </p>

          <div className="flex space-x-6 justify-start">

            {project.techStack.length > 0 && project.techStack.map((tech, i) => <ProjectIconLink tech={tech} key={i} />)}
          </div>

        </div>
      </div>
      <div
        className={"md:w-7/12 w-full h-96 overflow-hidden screen".concat(Number(project.id) % 2 == 0 ? " md:order-2" : " ")}>
        <Image
          width={900}
          height={800}
          style={{ width: "100%" }}
          src={project.img}
          alt={project.title}
        />
      </div>
    </div>
  );
}
