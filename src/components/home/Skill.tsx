'use client'
import React, { useEffect, useState } from "react";
import TTecnhicalSkills from "@/types/documents/skills";
import Image from "next/image";
import { getValidIconUrl } from "@/sheard/server_component/checkIUrl";

export default function Skill({ category, id }: { category: TTecnhicalSkills; id: number }) {
    const [toggle, setToggle] = useState(2);
    const [icons, setIcons] = useState<Record<number, string>>({});

    useEffect(() => {
        category.techStack.forEach(async (skill) => {
            try {
                const url = await getValidIconUrl(skill.icon, "link", { size: 60, theme: "color", iconStr: skill.iconStr });
 
                setIcons(prev => ({ ...prev, [skill.id]: url }));
            } catch (e) {

            }
        });
    }, [category.techStack]);

    if (!category) return "loading";

    return (
        <div>
            <details open={id === 0} className="my-2 ring-1 ring-black/5 open:shadow-lg rounded-xl">
                <summary className="cursor-pointer leading-6 p-6 font-bold text-2xl text-slate-700 uppercase relative select-none">
                    <span>{category.fieldName}</span>
                </summary>
                <div className="mt-3 text-sm leading-6 text-slate-600 px-6">
                    <p className="my-3">{category.desc}</p>
                    <div className="flex flex-wrap py-5">
                        {category.techStack?.slice(0, toggle).map(skill => (
                            <div key={skill.id} className="w-1/2 flex items-start">
                                <Image
                                    onClick={() => window.open(skill.url, "_blank")}
                                    width={60}
                                    height={60}
                                    style={{ cursor: "pointer" }}
                                    src={icons[skill.id] || "https://img.icons8.com/ios-glyphs/50/link.png"}
                                    alt={skill.title}
                                />
                                <div className="w-full pt-2 px-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-blue-200 h-2.5 rounded-full" style={{ width: skill.skillsPercentage + "%" }} />
                                    </div>
                                    <p className="my-2">{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {category.techStack?.length > 2 && (
                        <div className="mx-auto block w-full" onClick={() => setToggle(toggle === 2 ? 99 : 2)}>
                            <Image
                                className="mx-auto pb-2 cursor-pointer"
                                width="24"
                                height="24"
                                src={toggle !== 2
                                    ? "https://img.icons8.com/material-rounded/24/chevron-up.png"
                                    : "https://img.icons8.com/material-rounded/24/chevron-down.png"}
                                alt="chevron-up"
                            />
                        </div>
                    )}
                </div>
            </details>
        </div>
    );
}
