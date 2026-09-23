import clientServer from "@/lib/apolloClient";
import Image from "next/image";
import API from "../../../api/gql";
import { getValidIconUrl } from "@/sheard/server_component/checkIUrl";

export default async function ShortDes() {
    const data = await clientServer.request(API.Query.SHORT_DYN_DES);
    const { hero } = data as any;
    const socialLinks = await Promise.all(
        (hero.socialLinks || []).map(async (link: any) => ({
            ...link,
            iconUrl: await getValidIconUrl(link?.icon, "link", { size: 40, theme: "stroke", iconStr: link?.iconStr }),
        }))
    );

    const techStack = await Promise.all(
        (hero.techStack || []).map(async (stack: any) => ({
            ...stack,
            iconUrl: await getValidIconUrl(stack?.icon, "link", { size: 60, theme: "color", iconStr: stack?.iconStr }),
        }))
    );

    return (
        <div className="2xl:w-content container flex flex-col justify-center mx-auto mb-20 px-6 sm:px-12">
            {/* Hero Section */}
            <div className="mt-16 md:mt-24 lg:mt-32 flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto w-full">
                {/* Text & Socials */}
                <div className="w-full md:w-3/5 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 font-semibold tracking-tight mb-4">{hero.title}</h1>
                    <p className="text-base text-gray-500 leading-relaxed max-w-2xl">{hero.description}</p>

                    {/* Social Links & Resume */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
                        {socialLinks.map((link, i) => (
                            <a href={link.url} target="_blank" key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={link.iconUrl}
                                    alt={link.title}
                                    width={24}
                                    height={24}
                                    className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </a>
                        ))}

                        <div className="w-px h-6 bg-gray-200 hidden sm:block mx-2"></div>

                        {/* Resume */}
                        <a
                            download
                            target="_blank"
                            href={hero.resume}
                            className="text-sm font-medium text-slate-600 border border-gray-200 px-5 py-2 rounded-full hover:bg-gray-50 hover:text-slate-900 transition-all duration-300"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end mt-6 md:mt-0">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                        <Image
                            className="rounded-full object-cover shadow-sm ring-1 ring-gray-100"
                            alt={hero.title}
                            src={hero.image}
                            fill
                            sizes="(max-width: 768px) 192px, 256px"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-20 flex flex-col items-center">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                    Tech Stack
                </h3>
                <div className="flex flex-wrap gap-6 justify-center max-w-3xl opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {techStack.map((stack, i) => (
                        <div key={i} className="group relative">
                            <Image
                                src={stack.iconUrl}
                                alt={stack.title}
                                width={28}
                                height={28}
                                className="grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
