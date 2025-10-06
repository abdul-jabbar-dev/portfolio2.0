'use client'
import TLink from "@/types/documents/link";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const RootFooter = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = React.useState<TLink[]>([]);
  React.useEffect(() => {
    fetch("/api/links.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  });
  return (
    <>
      {children}
      <div className="py-16  bg-zinc-800">
        <div className="2xl:w-content container mx-auto flex justify-between">
          <h2 className="font-bold text-xl text-slate-300">
            Copyright © 2023. All rights are reserved
          </h2>
          <div className="flex gap-x-4">
            <div
              onClick={() =>
                window.open(
                  links.find((e) => e.link_name.toLowerCase() === "github")
                    ?.link
                )
              }
              className=" rounded-full hover:bg-slate-900   hover:scale-110  cursor-pointer p-1"
            >
              <AiOutlineGithub size={20} color="white" />
            </div>
            <div
              onClick={() =>
                window.open(
                  links.find((e) => e.link_name.toLowerCase() === "linkedin")
                    ?.link
                )
              }
              className=" rounded-full hover:bg-slate-900   hover:scale-110  cursor-pointer p-1"
            >
              <FaLinkedinIn size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RootFooter;
// 01918043284
