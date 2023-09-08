import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import ShortDescription from "@/components/home/ShortDescription";
import Skills from "@/components/home/Skills";
import RootNav from "@/sheard/navbar/RootNav";
import { PageWithLayout } from "@/types/components/PageWithLayout";

import { ReactNode } from "react";

const Home: PageWithLayout = () => {
  return (
    <>
      <ShortDescription />
      <AboutMe />
      <Skills />
      <Projects />
    </>
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
