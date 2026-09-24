"use client";

import React, { useState } from "react";
import TProject from "@/types/documents/project";
import Project from "./Project";

export default function ProjectList({ projects }: { projects: TProject[] }) {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 2);
    };

    const sortedProjects = [...projects].sort((a, b) => b.order - a.order);
    const hasMore = visibleCount < sortedProjects.length;

    // Slice up to visibleCount + 1 to show the next item as faded
    const visibleProjects = sortedProjects.slice(0, hasMore ? visibleCount + 1 : visibleCount);

    return (
        <div className="relative">
            <div className="flex flex-col gap-y-16">
                {projects.length === 0 && (
                    <p className="text-gray-500 text-sm">
                        No projects found.
                    </p>
                )}
                {visibleProjects.map((project, i) => {
                    const isFaded = hasMore && i === visibleCount;
                    return (
                        <div key={i} className={isFaded ? 'pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]' : ''}>
                            <Project project={project} index={i} />
                        </div>
                    );
                })}
            </div>

            {hasMore && (
                <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center pb-8 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-2.5 text-sm font-medium text-slate-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-slate-900 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] pointer-events-auto"
                    >
                        See more
                    </button>
                </div>
            )}
        </div>
    );
}
