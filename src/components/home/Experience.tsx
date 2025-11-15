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
    <div className="2xl:w-content container mx-auto my-24">
      <h3 className="mb-3 text-blue-700">{"{ Web Dev Portfolio }"}</h3>
      <h3 className="  mb-6 text-blue-800/50 text-5xl font-bold relative uppercase">
        Experience
      </h3>

      <div className="flex flex-col gap-y-12">
        {experiences.length === 0 && (
          <p className="text-gray-500 text-lg text-center">
            No experience found.
          </p>
        )}

        {experiences
          .sort((a, b) => b.order - a.order)
          .map((exp, i) => (
            <div
              className="flex border-b-[1px] md:pb-16 pb-8 gap-x-2 md:items-center items-start px-8 pr-0 md:flex-row flex-col justify-between"
              key={i}
            >
              <div className="order-0 max-w-[320px] w-full">
                <h2 className="text-3xl  text-slate-700">{exp.jobPosition}</h2>
                <h2 className="text-md text-gray-800/80 font-normal mt-[6px] ">{exp.companyName}</h2>
                <br />
                <h3 className="text-xl w-fit order-1 md:order-2  text-slate-700">
                  {exp.startDate} - {exp.endDate}
                </h3>
              </div>

              <p className="text-lg  text-slate-700 whitespace-pre-line order-2 py-4 md:order-1  w-full font-normal md:py-0">
                {exp.desc}
              </p>


            </div>
          ))}
      </div>
    </div>
  );
}
