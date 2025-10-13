'use client';
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TechStack } from "@/types/documents/project";
import { getValidIconUrl } from "@/sheard/server_component/checkIUrl";

type ElementStyle = {
    parentStyle?: string;
    iconStyle?: string;
    titleStyle?: string;

    isTitle?: boolean;
};

const ProjectIconLink = ({
    tech,
    elementStyle,
}: {
    tech: TechStack;
    elementStyle?: ElementStyle;
}) => {
    const isTitle = elementStyle?.isTitle !== false;
    const fallbackIcon: string = `https://img.icons8.com/ios-glyphs/50/github.png`

    const [validIcon, setValidIcon] = useState<string>(
        tech?.icon && tech?.icon.startsWith("http") ? tech.icon : fallbackIcon
    );

    useEffect(() => {
        const fetchIcon = async () => {
            try {
                const newIcon = await getValidIconUrl(
                    tech?.icon || "link",
                    "link",
                    { size: 40, theme: "stroke", iconStr: tech.iconStr }
                );
                if (newIcon?.startsWith("http")) setValidIcon(newIcon);
            } catch {
                setValidIcon(fallbackIcon);
            }
        };
        fetchIcon();
    }, [tech?.icon, tech?.iconStr]); 
    return (
        <div
            onClick={() => window.open(tech?.url, "_blank")}
            className={clsx(
                "flex cursor-pointer text-slate-600 px-2 my-3 rounded-lg justify-end items-center space-x-2",
                elementStyle?.parentStyle
            )}
        >
            <Image
                width={36}
                height={36}
                className={clsx("opacity-80", elementStyle?.iconStyle)}
                src={validIcon}
                alt={tech?.title}
            />
            {isTitle && (
                <p className={clsx("font-bold", elementStyle?.titleStyle)}>
                    {tech?.title}
                </p>
            )}
        </div>
    );
};

export default ProjectIconLink;
