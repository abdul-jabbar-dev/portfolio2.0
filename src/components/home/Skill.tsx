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
                const url = await getValidIconUrl(skill.icon, "link", { size: 40, theme: "color", iconStr: skill.iconStr });
                setIcons(prev => ({ ...prev, [skill.id]: url }));
            } catch (e) {
                // ignore
            }
        });
    }, [category.techStack]);

    if (!category) return null;

    return (
        // @ts-ignore - name attribute is valid in HTML5 for exclusive accordions but missing in older React types
        <details name="skills-accordion" open={id === 0} className="group bg-white border border-gray-100 rounded-2xl transition-shadow duration-300 open:shadow-sm">
            <summary className="cursor-pointer list-none flex justify-between items-center px-6 py-5 select-none">
                <span className="font-semibold text-lg text-slate-800 group-open:text-blue-600 transition-colors uppercase tracking-wide">
                    {category.fieldName}
                </span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </summary>
            
            <div className="px-6 pb-6 text-base text-gray-500">
                <p className="mb-6 font-light leading-relaxed max-w-2xl">{category.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {category.techStack?.slice(0, toggle).map(skill => (
                        <div key={skill.id} className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer" onClick={() => window.open(skill.url, "_blank")}>
                                <Image
                                    width={32}
                                    height={32}
                                    src={icons[skill.id] || "https://img.icons8.com/ios-glyphs/50/link.png"}
                                    alt={skill.title}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-slate-700">{skill.title}</span>
                                    <span className="text-xs font-semibold text-gray-400">{skill.skillsPercentage}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-1">
                                    <div className="bg-blue-200 h-1 rounded-full transition-all duration-1000" style={{ width: skill.skillsPercentage + "%" }} />
                                </div>
                                {skill.desc && <p className="mt-2 text-xs text-gray-400 font-light">{skill.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                
                {category.techStack?.length > 2 && (
                    <button 
                        onClick={() => setToggle(toggle === 2 ? 99 : 2)}
                        className="mt-6 flex items-center gap-1 mx-auto text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                        {toggle === 2 ? 'View More' : 'View Less'}
                    </button>
                )}
            </div>
        </details>
    );
}
