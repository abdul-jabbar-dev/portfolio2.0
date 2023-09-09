import TProject from "@/types/documents/project";
import Image from "next/image";
import React from "react";

export default function Project({
  project,
  id,
}: {
  project: TProject;
  id: number;
}) {
  return (
    <div className="flex md:flex-row gap-x-6 flex-col my-6 w-full items-center p-6  ">
      <div className={"md:w-5/12   ".concat(id % 2 == 0 ? "" : "  order-1")}>
        <div className="w-[90%]">
          <h2 className="font-bold text-slate-700 text-2xl">{project.title}</h2>
          <div className="flex justify-start my-5 gap-x-8">
            {project.technologies.map((usedTech) => (
              <span key={usedTech} className=" text-slate-500 font-semibold ">
                {usedTech}
              </span>
            ))}
          </div>
          <p className="my-3 text-slate-500 font-semibold text-lg ">
            {project.description}
          </p>

          <div className="flex space-x-6 justify-start ">
            <div
              onClick={() => window.open(project.live_link, "_blank")}
              className="flex cursor-pointer  px-2 my-3 rounded-lg justify-end items-center space-x-2"
            >
              <Image
                width="36"
                height="36"
                src="https://img.icons8.com/ios-glyphs/50/github.png"
                alt="github"
              />
              <p className="font-bold text-gray-700 ">Github link</p>
            </div>
            <div
              onClick={() => window.open(project.github_link, "_blank")}
              className="flex cursor-pointer   px-2 my-3 rounded-lg justify-end items-center space-x-2"
            >
              <Image
                width="36"
                height="36"
                src="https://img.icons8.com/material-sharp/50/link--v1.png"
                alt="link--v1"
              />
              <p className="font-bold text-gray-700 ">Live link</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"md:w-7/12 w-full h-96 overflow-hidden screen".concat(
          id % 2 == 0 ? " order-2" : " "
        )}
      >
        <Image
          width={900}
          height={800}
          style={{ width: "100%" }}
          src={project.image}
          alt={project.title}
        />
      </div>
    </div>
  );
}
