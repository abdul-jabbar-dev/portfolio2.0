import React from "react";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import TTecnhicalSkills from "@/types/documents/skills";
import Skill from "./Skill";

export default async function Skills() {
    let experiences: TTecnhicalSkills[] | [] = [];

    try {
        const data = await clientServer.request(API.Query.TECHNICAL_SKILLS);
        experiences = (data as any)?.technicalSkills || [];
    } catch (err) {
        console.error("Failed to fetch skills section:", err);
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 sm:px-12 max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">My Arsenal</h2>
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-800">Technical Skills</h3>
                </div>

                <div className="flex flex-col gap-4">
                    {experiences.map((category: TTecnhicalSkills, i: any) => (
                        <Skill
                            key={i}
                            id={i}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
