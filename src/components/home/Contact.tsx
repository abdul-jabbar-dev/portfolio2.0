import React from "react";
import * as MdIcons from "react-icons/md";
import clientServer from "@/lib/apolloClient";
import API from "../../../api/gql";

export default async function Contact() {
    let contacts: any[] = [];

    try {
        const data = await clientServer.request(API.Query.CONTACT_SECTION);
        contacts = (data as any)?.contact || [];
    } catch (err) {
        console.error("❌ Failed to fetch contact section:", err);
    }

    return (
        <section className="py-20 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-6 sm:px-12 max-w-4xl text-center">
                <div className="mb-12">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Get in touch</h2>
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-800">Contact</h3>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto">Don&apos;t be shy! Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 mt-12">
                    {contacts.map((item) => {
                        const IconComponent = (MdIcons as Record<string, React.ElementType>)[item.icon];

                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                className="group flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors duration-300 shadow-sm">
                                    {IconComponent ? (
                                        <IconComponent size={24} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
                                    ) : (
                                        <span className="text-red-500 text-xs">⚠️ {item.icon}</span>
                                    )}
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg text-slate-800">{item.title}</h4>
                                    <p className="text-sm font-light text-gray-500 mt-1">{item.desc}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
