import TProject from "@/types/documents/project";
import Image from "next/image";
import React from "react";
import ProjectIconLink from "./ProjectIconLink";

export default function Project({
  project,
  index
}: {
  project: TProject,
  index: number
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="group flex flex-col md:flex-row gap-8 lg:gap-12 w-full items-center">
      <div
        className={`w-full md:w-5/12 flex flex-col ${isEven ? 'md:order-1' : 'md:order-2'}`}
      >
        <h3 className="text-xs font-semibold text-gray-400 mb-1">{project.section}</h3>
        <h4 className="font-semibold text-xl text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h4>
        
        <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line mb-6 font-light">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.projectTools && project.projectTools.map((usedTech) => (
            <span key={usedTech} className="text-xs font-medium text-slate-500 bg-gray-100 px-2.5 py-1 rounded-md">
              {usedTech}
            </span>
          ))}
        </div>

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex gap-4 items-center">
            {project.techStack.map((tech, i) => (
              <ProjectIconLink tech={tech} key={i} />
            ))}
          </div>
        )}
      </div>

      <div
        className={`w-full md:w-7/12 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-100 bg-gray-100 ${isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          src={project.img}
          alt={project.title}
        />
      </div>
    </div>
  );
}
