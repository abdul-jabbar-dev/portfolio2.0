import React from "react";
import { ExperienceType } from "@/types/documents/experience";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";

export default async function Experience() {
  let experiences: ExperienceType[] = [];

  try {
    const data = await clientServer.request(API.Query.EXPERIANCE_SECTION);
    experiences = (data as any)?.experience || [];
  } catch (err) {
    console.error("Failed to fetch experience section:", err);
  }

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 sm:px-12 max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">My Journey</h2>
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-800">Experience</h3>
                </div>

                <div className="flex flex-col gap-y-12">
                    {experiences.length === 0 && (
                        <p className="text-gray-500 text-sm">
                            No experience found.
                        </p>
                    )}

                    {experiences
                        .sort((a, b) => b.order - a.order)
                        .map((exp, i) => (
                            <div
                                className="group relative border-l border-gray-200 pl-8 md:pl-12 py-2"
                                key={i}
                            >
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-4 group-hover:bg-slate-400 transition-colors duration-300"></div>
                                
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
                        ))}
                </div>
            </div>
        </section>
    );
}
