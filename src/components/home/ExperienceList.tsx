"use client";

import React, { useState } from "react";
import { ExperienceType } from "@/types/documents/experience";

export default function ExperienceList({ experiences }: { experiences: ExperienceType[] }) {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 2);
    };

    const sortedExperiences = [...experiences].sort((a, b) => b.order - a.order);
    const hasMore = visibleCount < sortedExperiences.length;
    
    // We slice up to visibleCount + 1 if there's more, so we can show the 4th item faded
    const visibleExperiences = sortedExperiences.slice(0, hasMore ? visibleCount + 1 : visibleCount);

    return (
        <div className="relative">
            <div className="flex flex-col gap-y-12">
                {experiences.length === 0 && (
                    <p className="text-gray-500 text-sm">
                        No experience found.
                    </p>
                )}

                {visibleExperiences.map((exp, i) => {
                    const isFaded = hasMore && i === visibleCount;
                    
                    return (
                        <div
                            className={`group relative border-l border-gray-200 pl-8 md:pl-12 py-2 ${isFaded ? 'pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]' : ''}`}
                            key={i}
                        >
                            <div className={`absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-4 ${!isFaded ? 'group-hover:bg-slate-400' : ''} transition-colors duration-300`}></div>
                            
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-y-1">
                                <h4 className="text-lg font-semibold text-slate-800">{exp.jobPosition}</h4>
                                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    {exp.startDate} - {exp.endDate}
                                </span>
                            </div>
                            <h5 className="text-sm font-medium text-slate-500 mb-4">{exp.companyName}</h5>
                            
                            <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line font-light">
                                {exp.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

            {hasMore && (
                <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center pb-2 bg-gradient-to-t from-white via-white/80 to-transparent">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-2.5 text-sm font-medium text-slate-700 bg-white border border-gray-200 hover:bg-gray-50 hover:text-slate-900 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] pointer-events-auto"
                    >
                        See more
                    </button>
                </div>
            )}
        </div>
    );
}
