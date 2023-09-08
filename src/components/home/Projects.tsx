import Image from "next/image";
import React from "react";
export default function Projects() {
  return (
    <div className="xl:w-content container mx-auto my-32 ">
      <div className="">
        <h3 className="text-blue-800 text-lg font-bold uppercase">PORTFOLIO</h3>
        <div className="flex md:flex-row flex-col my-6 w-full items-center p-6 border rounded-xl shadow-xl">
          <div className="md:w-1/2 w-[80%]">
            <div className="w-[90%]">
              <h2 className="font-bold text-slate-700 text-xl text-center">
                MIST
              </h2>
              <p className=" text-slate-500 font-semibold text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sit nostrum fugiat quas ut est, ducimus possimus minus
                soluta dicta. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eum, eligendi.
              </p>
              <div className="flex justify-evenly my-5 px-5">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                  <span className="relative text-white">Reactjs</span>
                </span>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                  <span className="relative text-white">tailwindcss</span>
                </span>
              </div>
              <div className="flex space-x-6 justify-center ">
                <span className="flex hover:text-blue-600 justify-end items-center space-x-2">
                  <Image
                    width="36"
                    height="36"
                    src="https://img.icons8.com/ios-glyphs/50/github.png"
                    alt="github"
                  />
                  <p className="font-bold text-gray-700 ">Github link</p>
                </span>
                <div className="flex border px-2 my-3 rounded-lg justify-end items-center space-x-2">
                  <Image
                    width="36"
                    height="36"
                    src="https://img.icons8.com/material-sharp/50/link--v1.png"
                    alt="link--v1"
                  />
                  <p className="font-bold text-gray-700 ">Live link</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  md:w-1/2 w-[80%]">
            <Image
              width={1000}
              height={800}
              style={{ width: "100%" }}
              src={"/web.jpg"}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
