import Image from "next/image";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import React from "react";

export default async function AboutMe() {
  let about;

  try {
    const data = await clientServer.request(API.Query.ABOUT_SECTION);
    about = data?.about;
    console.log(about)
  } catch (err) {
    console.error("Failed to fetch about section:", err);
  }

  // ✅ Fallback content if API fails or about is undefined
  const imgSrc = about?.img || "/defaultAbout.png"; // put a default image in /public
  const name = "Abdul Jabbar";
  const title = "A dedicated Front-end Developer based in Dhaka, Bangladesh 📍";
  const description = about?.description || `
    🚀 Hi, I'm Abdul Jabbar, a results-driven MERN Stack Developer
    hailing from the vibrant tech scene of Bangladesh 🇧🇩. With over 2
    years of dedicated experience, I'm your go-to partner for building
    dynamic and user-friendly web applications. My passion lies in
    translating ideas into elegant, efficient, and scalable solutions
    that make an impact. Let's collaborate to bring your digital dreams to life!
  `;

  return (
    <div className="2xl:w-content container mx-auto">
      <div className="flex gap-x-8 my-16 flex-col md:flex-row">
        {/* Profile Image */}
        <div className="xl:w-1/2 md:w-[50%] w-[80%] my-auto mx-auto">
          <Image
            height={600}
            width={600}
            className="rounded-2xl"
            style={{ width: "100%" }}
            src={imgSrc}
            alt={name}
          />
        </div>

        {/* Text */}
        <div className="xl:w-1/2 md:w-[50%] w-[80%] md:my-auto my-8 mx-auto">
          <h3 className="text-blue-800/50 text-5xl font-bold uppercase">ABOUT ME</h3>
          <h2 className="text-2xl font-semibold text-slate-800 my-3">{title}</h2>


          <div className=" pt-0">
            <a
              className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-blue-500"
              href={about?.link}
            >
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                {about?.linkTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
          <p className="text-slate-600 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
}
