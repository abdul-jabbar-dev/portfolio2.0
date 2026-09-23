
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import React from "react";
import ProjectIconLink from "@/components/home/ProjectIconLink";
import { TechStack } from "@/types/documents/project";
const RootFooter = async ({ children }: { children: React.ReactNode }) => {
  // const [links, setLinks] = React.useState<TLink[]>([]);
  // React.useEffect(() => {
  //   fetch("/api/links.json")
  //     .then((res) => res.json())
  //     .then((data) => setLinks(data));
  // });

  let footerLinks: TechStack[] = [];

  try {
    const data = await clientServer.request(API.Query.FOOTER_SECTION_LINKS);
    footerLinks = (data as any)?.footerLinks || [];
  } catch (err) {
    console.error("Failed to fetch footerLinks section:", err);
  }

  return (
    <>
      {children}
      <div className="py-16 bg-zinc-800">
        <div className="max-w-5xl px-6 sm:px-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-y-6">
          <h2 className="font-semibold text-lg text-slate-300 text-center md:text-left">
            Copyright © 2025. All rights are reserved
          </h2>
          <div className="flex gap-x-4">
            {footerLinks.map((link, i) => (
              <div key={i}
                className=" rounded-full text-white  hover:scale-110  cursor-pointer p-1"
              >
                {<ProjectIconLink tech={link} elementStyle={{ isTitle: false, iconStyle: "!text-white !p-0", parentStyle: " !p-0 !m-0  " }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default RootFooter;
// 01918043284
