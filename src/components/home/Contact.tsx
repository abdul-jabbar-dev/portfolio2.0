import React from "react";
import * as MdIcons from "react-icons/md";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";

export default async function Contact() {
  let contacts: any[] = [];

  try {
    const data = await clientServer.request(API.Query.CONTACT_SECTION);
    contacts = data?.contact || [];
  } catch (err) {
    console.error("❌ Failed to fetch contact section:", err);
  }

  return (
    <div className="2xl:w-content container xl:mx-auto py-16 mx-3">
      <h3 className="mb-6 text-blue-800/50 text-5xl font-bold relative uppercase">
        CONTACT
      </h3>
      <h2 className="my-2 font-bold text-2xl text-slate-700">
        Don&apos;t be shy! Hit me up! 👇
      </h2>

      <div className="flex flex-col md:flex-row gap-6 my-10">
        {/* Dynamic Contact */}
        {contacts.map((item) => {
          const IconComponent = (MdIcons as Record<string, React.ElementType>)[item.icon];

          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="flex gap-x-3"
            >
              {IconComponent ? (
                <IconComponent size={40} className="text-slate-700" />
              ) : (
                <span className="text-red-500">⚠️ {item.icon} not found</span>
              )}
              <div>
                <h3 className="font-bold text-2xl text-slate-700">{item.title}</h3>
                <p className="text-lg my-2 hover:text-indigo-700 text-slate-500">
                  {item.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
