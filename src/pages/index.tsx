import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import ShortDescription from "@/components/home/ShortDescription";
import Skills from "@/components/home/Skills";
import RootNav from "@/sheard/navbar/RootNav";
import { PageWithLayout } from "@/types/components/PageWithLayout";

import { ReactNode } from "react";

const Home: PageWithLayout = () => {
  return (
    <div className="bg-light">
      <ShortDescription />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

Home.getLayout = (containe: ReactNode) => {
  return (
    <>
      <RootNav>{containe}</RootNav>
    </>
  );
};

export default Home;
