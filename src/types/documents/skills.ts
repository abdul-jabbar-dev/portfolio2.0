// 🧩 Base Section group
export type TTecnhicalSkillsGroup = {
  id: number;
  fieldName: string;
  icon: string;
  desc: string;
  link: string;
  order: number;
};

// 🧩 Base tech stack
export type TTechStack = {
  id: number;
  title: string;
  section: string;
  desc: string;
  url: string;
  icon: string;
  iconStr?:string
};
// 🧩 Base tech stack
export type TTechStackInclude = {
  id: number;
  title: string;
  section: string;
  desc: string;
  url: string;
  icon: string;
  iconStr?:string;
  skillsPercentage: number;
    order: number;
};

// 🧩 Extended technical skill (section + its stacks)
type TTecnhicalSkills = TTecnhicalSkillsGroup & {
  techStack: (TTechStack & {
    skillsPercentage: number;
    order: number;
  })[];
};

export default TTecnhicalSkills;
