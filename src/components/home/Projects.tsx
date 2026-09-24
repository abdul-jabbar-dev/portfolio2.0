import TProject from "@/types/documents/project";
import React from "react";
import Project from "./Project";
import ProjectList from "./ProjectList";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";

export default async function Projects() {
    let projectList: TProject[] = [];
    try {
        const data = await clientServer.request(API.Query.PROJECTS);
        projectList = (data as any)?.projects || [];
    } catch (err) {
        console.error("Failed to fetch projects section:", err);
    }

    return (
        <section className="py-20 bg-gray-50/30 border-t border-gray-100">
            <div className="container mx-auto px-6 sm:px-12 max-w-5xl">
                <div className="mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Selected Works</h2>
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-800">Projects</h3>
                </div>

                <ProjectList projects={projectList} />
            </div>
        </section>
    );
}
