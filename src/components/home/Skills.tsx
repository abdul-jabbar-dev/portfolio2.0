
import React from "react";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import TTecnhicalSkills from "@/types/documents/skills";
import Skill from "./Skill";
export default async function Skills() {
  // const [allSkills, setAllSkills] = React.useState<TSkill[]>([]);
  // const [allCategories, setAllCategories] = React.useState<string[]>([]);
  // const [categories, setCategories] = React.useState<TCategory[]>([]);
  // Initialize as empty array to avoid undefined
  let experiences: TTecnhicalSkills[] | [] = [];

  try {
    const data = await clientServer.request(API.Query.TECHNICAL_SKILLS);
    experiences = (data as any)?.technicalSkills || []; 
  } catch (err) {
    console.error("Failed to fetch experience section:", err);
  }

  return (
    <div className="2xl:w-content py-10 container mx-auto  ">
      <h3 className="  mb-6 text-blue-800/50 text-5xl font-bold relative uppercase">
        technical skills
      </h3>
      {experiences.map((category: TTecnhicalSkills, i: any) => (
        <Skill
          key={i}
          id={i} 
          category={category}
        />
      ))}
    </div>
  );
}
