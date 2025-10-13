 
export interface TechStack {
  section: string;
  desc: string | null;
  url: string;
  title: string;
  iconStr: string;
  order?: number;
  icon: string | null;
}

export interface TProject {
  id: string;
  title: string;
  section: string;
  desc: string;
  img: string;
  projectTools: string[];
  techStack: TechStack[];
}
export default TProject