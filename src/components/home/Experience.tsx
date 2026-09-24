import React from "react";
import { ExperienceType } from "@/types/documents/experience";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import ExperienceList from "./ExperienceList";

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

                <ExperienceList experiences={experiences} />
            </div>
        </section>
    );
}
