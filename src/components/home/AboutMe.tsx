import Image from "next/image";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";
import React from "react";

export default async function AboutMe() {
  let about;

  try {
    const data = await clientServer.request(API.Query.ABOUT_SECTION);
    console.log(data)
    about = (data as any)?.about;
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
        <section className="py-20 bg-gray-50/30 border-y border-gray-100">
            <div className="container mx-auto px-6 sm:px-12 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Profile Image */}
                    <div className="w-full md:w-2/5 flex justify-center md:justify-end">
                        <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-100">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                                src={imgSrc}
                                alt={name}
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">About Me</h2>
                        <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-6 leading-snug">{title}</h3>

                        <div className="text-base text-gray-500 leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                            {description}
                        </div>

                        {about?.link && (
                            <a
                                href={about?.link}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors group"
                            >
                                {about?.linkTitle}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
