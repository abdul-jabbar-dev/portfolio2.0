import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import ShortDescription from "@/components/home/ShortDescription";
import Skills from "@/components/home/Skills";
import RootNav from "@/sheard/navbar/RootNav";
import { PageWithLayout } from "@/types/components/PageWithLayout";
import React from "react";

import { ReactNode } from "react";

const Home: PageWithLayout = () => {
  const [links, setLinks] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/links.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));

  });
  return (
    <div className="bg-light">
      <ShortDescription links={links} />
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
