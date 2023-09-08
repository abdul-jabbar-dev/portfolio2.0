import ShortDescription from "@/components/home/ShortDescription";
import RootNav from "@/sheard/navbar/RootNav";
import { PageWithLayout } from "@/types/components/PageWithLayout";

import { ReactNode } from "react";
 
const Home: PageWithLayout = () => {
  return <>
  <ShortDescription/>

  </>;
};





Home.getLayout = (containe: ReactNode) => {
  return (
    <>
      <RootNav>{containe}</RootNav>
    </>
  );
};

export default Home;
