// components/ShortDes.tsx
import clientServer from "@/lib/apolloClient";
import Image from "next/image";
import API from "../../../api/gql";
import { getValidIconUrl } from "@/sheard/server_component/checkIUrl";

export default async function ShortDes() {
    const data = await clientServer.request(API.Query.SHORT_DYN_DES);
    const { hero } = data as any;

    // ✅ Preprocess all icon URLs before render
    const socialLinks = await Promise.all(
        (hero.socialLinks || []).map(async (link: any) => ({
            ...link,
            iconUrl: await getValidIconUrl(link?.icon, "link", { size: 40, theme: "stroke" }),
        }))
    );

    const techStack = await Promise.all(
        (hero.techStack || []).map(async (stack: any) => ({
            ...stack,
            iconUrl: await getValidIconUrl(stack?.icon, "link", { size: 60, theme: "color" }),
        }))
    );

    return (
        <div className="2xl:w-content container flex flex-col justify-center mx-auto mb-32">
            {/* Hero Section */}
            <div className="-mt-12 md:mt-28 lg:mt-28 xl:mt-48 flex flex-col md:flex-row justify-center items-center mx-auto">
                {/* Profile Image */}
                <div className="xl:w-1/2 md:w-[50%] w-[80%] order-1 xl:order-2 mt-64 my-8 md:my-0">
                    <Image
                        className="rounded-full mx-auto xl:ml-auto"
                        alt={hero.title}
                        width={300}
                        height={300}
                        style={{ width: "70%" }}
                        src={hero.image}
                    />
                </div>

                {/* Text & Socials */}
                <div className="xl:w-1/2 md:w-[50%] w-[80%] order-2 xl:order-1">
                    <h1 className="text-5xl my-5 mx-auto text-slate-900 font-extrabold">{hero.title}</h1>
                    <p className="text-lg mx-auto text-slate-700 text-justify">{hero.description}</p>

                    {/* Social Links */}
                    <div className="flex gap-x-2 my-3 opacity-80">
                        {socialLinks.map((link, i) => (
                            <Image
                                key={i}
                                src={link.iconUrl}
                                alt={link.title}
                                width={60}
                                height={60}
                                className="cursor-pointer w-8 h-8 hover:rounded-full hover:bg-gray-300"
                            />
                        ))}

                        {/* Resume */}
                        <a
                            download
                            href={hero.resume}
                            className="text-slate-800 ml-6 hover:text-slate-900 hover:scale-105 active:scale-100 transition-all delay-150 text-lg font-bold uppercase"
                        >
                            My Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center md:flex-row my-10 justify-center md:justify-start flex-col">
                <h3 className="text-blue-800 min-w-max text-lg font-bold uppercase">
                    Tech stack &nbsp;&nbsp;&nbsp;&nbsp;|
                </h3>
                <div className="flex gap-x-6 px-6 w-full justify-center md:justify-start">
                    {techStack.map((stack, i) => (
                        <Image
                            key={i}
                            src={stack.iconUrl}
                            alt={stack.title}
                            width={38}
                            height={38}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
