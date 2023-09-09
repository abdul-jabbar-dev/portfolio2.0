import TLink from "@/types/documents/link";
import Image from "next/image";
import React from "react";
export default function ShortDescription({ links }: { links: TLink[] }) {
  return (
    <div className="xl:w-content container h-screen flex flex-col justify-center mx-auto">
      <div className="flex flex-col md:flex-row my-6   justify-center items-center mx-auto">
        <div className=" xl:w-1/2 md:w-[50%] w-[80%] order-1 xl:order-2  ">
          <Image
            className="rounded-full  mx-auto xl:ml-auto"
            alt="Abdul jabbar"
            width={300}
            height={300}
            style={{ width: "70%" }}
            src={"https://avatars.githubusercontent.com/u/76696749?v=4"}
          ></Image>
        </div>

        <div className=" xl:w-1/2 md:w-[50%] w-[80%] order-2 xl:order-1">
          <h1 className="text-5xl my-5 mx-auto text-slate-900 font-extrabold">
            Full Stack Web Developer
          </h1>
          <h1 className="text-lg mx-auto  text-slate-700 text-justify">
            Hi I am Abdul Jabbar i&lsquo;m a MERN stack developer with a passion
            for building responsive and intuitive web applications.
          </h1>
          <span className="flex gap-x-2 my-3 opacity-80">
            {links.map((ALink, i) => {
              return (
                <Image
                  onClick={() => window.open(ALink.link, "_blank")}
                  key={i}
                  width="30"
                  className="w-7 cursor-pointer hover:rounded-full hover:bg-gray-300 "
                  height="30"
                  src={ALink.link_icon}
                  alt="fiverr"
                />
              );
            })}
          </span>
        </div>
      </div>
      <div className="flex items-center md:flex-row my-10 justify-center md:justify-start flex-col ">
        <div>
          <h3 className="text-blue-800  min-w-max text-lg font-bold uppercase">
            Tech stack &nbsp;&nbsp;&nbsp;&nbsp;|
          </h3>
        </div>
        <div className=" flex gap-x-6 px-6 w-full justify-center md:justify-start">
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/fluency/38/nextjs.png"
            alt="nextjs"
          />
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/ios/38/express-js.png"
            alt="express-js"
          />
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/fluency/38/tailwind_css.png"
            alt="tailwind_css"
          />
          <Image
            width="38"
            height="38"
            src="https://img.icons8.com/color/38/postgreesql.png"
            alt="postgreesql"
          />
        </div>
      </div>
    </div>
  );
}
