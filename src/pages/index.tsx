import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Projects from "@/components/home/Projects";
import ShortDescription from "@/components/home/ShortDescription";
import Skills from "@/components/home/Skills";
import RootFooter from "@/sheard/footer/RootFooter";
import RootNav from "@/sheard/navbar/RootNav";
import { PageWithLayout } from "@/types/components/PageWithLayout";
import Head from "next/head";
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
    <div id="landBody" className="bg-light">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Abdul Jabbar - MERN Stack Developer</title>
        <link
          rel="shortcut icon"
          href="/abdul jabbar.ico"
          type="image/x-icon"
        />
        <meta name="title" content="Abdul Jabbar - MERN Stack Developer" />
        <meta
          name="keywords"
          content="Abdul, Jabbar, Abdul Jabbar, Abdul Jabbar dev,Javascript developer, MERN Stack , Developer,Web Developer, Programmer, Full Stack Web Developer"
        />
        <meta name="author" content="Abdul Jabbar" />
        <meta
          name="description"
          content="Welcome to the portfolio of Abdul Jabbar, a MERN stack developer. Explore dynamic web apps and elegant solutions crafted using MongoDB, Express.js, React, and Node.js – witness innovation in action."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.facebook.com/abdul.jabbar.dev/"
        />
        <meta
          property="og:title"
          content="Abdul Jabbar - MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Abdul Jabbar, a MERN stack developer. Explore dynamic web apps and elegant solutions crafted using MongoDB, Express.js, React, and Node.js – witness innovation in action."
        />
        <meta
          property="og:image"
          content="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/352519807_1637824143328347_7777155772431074976_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHWZcgysg7ShRKHxTIC8vDdeZoi1G8w1q15miLUbzDWrZCzsQvnjlJSmWrruwvcHjLOZfJYbJ_Gz-o7l_G2gE44&_nc_ohc=gwZEmuO5VDIAX9L4nQb&_nc_ht=scontent.fdac99-1.fna&oh=00_AfD27MjP9tqd_Gy8Ein-TUzyAr9Wn2vj6lgKYfVlTrthDw&oe=650192CF"
        />

        {/* <!-- linkedin --> */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta
          property="linkedin:url"
          content="https://www.linkedin.com/in/abdul-jabbar-dev/"
        />
        <meta
          property="linkedin:title"
          content="Abdul Jabbar - MERN Stack Developer"
        />
        <meta
          property="linkedin:description"
          content="Welcome to the portfolio of Abdul Jabbar, a MERN stack developer. Explore dynamic web apps and elegant solutions crafted using MongoDB, Express.js, React, and Node.js – witness innovation in action."
        />
        <meta
          property="linkedin:image"
          content="https://media.licdn.com/dms/image/D5635AQFugmuTnYD68w/profile-framedphoto-shrink_200_200/0/1686497791148?e=1694887200&v=beta&t=dT-ZGSCWDKtsXTLSkMgUjllNavh0eUT0IqP-B_cSe_o"
        />
      </Head>
      <div className="">
        <ShortDescription links={links} />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

Home.getLayout = (contain: ReactNode) => {
  return (
    <>
      <RootNav>
        <RootFooter>{contain}</RootFooter>
      </RootNav>
    </>
  );
};

export default Home;
