import Image from "next/image";
import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

export default function ShortDescription() {
  return (
    <div className="xl:w-content container mt-32  flex flex-col xl:flex-row justify-center items-center mx-auto">
      <div className=" xl:w-1/2 md:w-[50%] w-[80%] order-1 xl:order-2  ">
        <Image
          className="rounded-full  mx-auto xl:ml-auto"
          alt="Abdul jabbar"
          width={600}
          height={600}
          style={{ width: "70%" }}
          src={"https://avatars.githubusercontent.com/u/76696749?v=4"}
        ></Image>
      </div>

      <div className=" xl:w-1/2 md:w-[50%] w-[80%] order-2 xl:order-1">
        <h1 className="text-5xl my-5 mx-auto text-slate-900 font-extrabold">
          Full Stack Web Developer
        </h1>
        <p className="text-lg mx-auto  text-slate-700 text-justify">
          Hi I am Abdul Jabbar i&lsquo;m a MERN stack developer with a passion
          for building responsive and intuitive web applications.
        </p>
        <span className="flex gap-x-2 my-3">
          <a href="https://github.com/abdul-jabbar-dev" target="_blank">
            <TiSocialLinkedinCircular size={"2rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-jabbar-dev/"
            target="_blank"
          >
            <AiFillGithub size={"2rem"} />
          </a>
        </span>
      </div>
    </div>
  );
}
