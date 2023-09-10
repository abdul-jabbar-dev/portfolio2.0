import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdMap } from "react-icons/md";
export default function Contact() {
  return (
    <div className="xl:w-content container  my-32 md:mx-auto mx-3">
      <h3 className="text-blue-800 text-lg font-bold relative uppercase">
        CONTACT
      </h3>
      <h2 className="my-2   font-bold text-2xl text-slate-700  ">
        Don&apos;t be shy! Hit me up! 👇
      </h2>
      <div className="flex flex-col md:flex-row gap-6 my-10">
        <a
          href="https://goo.gl/maps/hYvBD2Z5zEFFMUUS9"
          target="_blank"
          className="flex gap-x-3"
        >
          <MdMap size="40" className="text-slate-700" />
          <div>
            <h3 className="font-bold text-2xl text-slate-700">Location</h3>
            <p className="text-lg my-2 hover:text-indigo-700 text-slate-500">
              Tongi gazipur Dhaka Bangladesh
            </p>
          </div>
        </a>
        <a
          href="mailto:abdul.jabbar.dev@gmail.com"
          target="_blank"
          className="flex gap-x-3"
        >
          <MdOutlineAlternateEmail size="40" className="text-slate-700" />
          <div>
            <h3 className="font-bold text-2xl text-slate-700">Mail</h3>

            <p className="text-lg my-2 hover:text-indigo-700 text-slate-500">
              abdul.jabbar.dev@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
