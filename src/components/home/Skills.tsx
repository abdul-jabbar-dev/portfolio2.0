import React from "react";
import TSkill from "@/types/documents/skills";
import AllSkills from "./Allskills";

export default function Skills() {
  const [allSkills, setAllskills] = React.useState<TSkill[]>([]);
  const [allCategories, setAllCategories] = React.useState<string[]>([]);
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
  }, []);
  return (
    <div className="xl:w-content container mx-auto relative ">
      {allCategories.map((category, i) => (
        <AllSkills
          key={i}
          id={i}
          skills={allSkills.filter((sk) => sk.category === category)}
        />
      ))}
    </div>
  );
}
