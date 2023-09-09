import React from "react";
import TSkill from "@/types/documents/skills";
import Skill from "./Skill";
import TCategory from "@/types/documents/category";

export default function Skills() {
  const [allSkills, setAllskills] = React.useState<TSkill[]>([]);
  const [allCategories, setAllCategories] = React.useState<string[]>([]);
  const [categories, setCategories] = React.useState<TCategory[]>([]);
  React.useEffect(() => {
    fetch("/api/allskills.json")
      .then((res) => res.json())
      .then((data: TSkill[]) => {
        setAllskills(data);

        const setOfCategories: Set<string> = new Set(
          data.map((d: TSkill) => d.category)
        );
        const arrayOfCategories: string[] = Array.from(setOfCategories);
        setAllCategories(arrayOfCategories);
      });

    fetch("/api/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="xl:w-content container mx-auto relative ">
      <h3 className="text-blue-800 text-lg font-bold uppercase">
        technical skills
      </h3>
      {allCategories.map((category, i) => (
        <Skill
          key={i}
          id={i}
          category={categories.find((c) => c.name === category)}
          skills={allSkills.filter((sk) => sk.category === category)}
        />
      ))}
    </div>
  );
}
