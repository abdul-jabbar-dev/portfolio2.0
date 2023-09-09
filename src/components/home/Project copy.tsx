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
  console.log(project);
  return (
    <div className="flex md:flex-row  flex-col my-6 w-full items-center p-6 border rounded-xl shadow-xl">
      <div
        className={"md:w-1/2 w-[80%] ".concat(id % 2 == 0 ? "" : "  order-1")}
      >
        <div className="w-[90%]">
          <h2 className="font-bold text-slate-700 text-xl text-center">
            {project.title}
          </h2>
          <p className="my-3 text-slate-500 font-semibold text-lg text-center">
            {project.description}
          </p>
          <div className="flex justify-center my-5 gap-x-8">
            {project.technologies.map((usedTech) => (
              <span
                key={usedTech}
                className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500   relative inline-block"
              >
                <span className="relative text-white">{usedTech}</span>
              </span>
            ))}
          </div>
          <div className="flex space-x-6 justify-center ">
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
        className={"md:w-1/2 w-[80%] ".concat(id % 2 == 0 ? " order-2" : " ")}
      >
        <Image
          width={1000}
          height={800}
          style={{ width: "100%" }}
          src={"/web.jpg"}
          alt={""}
        />
      </div>
    </div>
  );
}
