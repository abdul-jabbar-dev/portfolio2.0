"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';

const AboutForm = () => {
    const [title, setTitle] = useState('');
     const [desc, setDesc] = useState('');
    const [link, setLink] = useState('');
    const [linkTitle, setLinkTitle] = useState('');

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch existing data
        const fetchData = async () => {
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
            try {
                const data: any = await client.request(API.Query.ABOUT_SECTION);
                if (data?.about) {
                    setTitle(data.about.title || '');
                    setDesc(data.about.desc || '');
                    // shortDesc isn't returned by the current about query, but we need it for input
                     setLink(data.about.link || '');
                    setLinkTitle(data.about.linkTitle || '');
                }
            } catch (err) {
                console.error("Error fetching about:", err);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {

            await client.request(API.Mutation.SET_ABOUT_SECTION, {
                aboutSection: {
                    title,
                     desc,
                    link,
                    linkTitle
                }
            });
            setMessage('About section updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update about section.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Update About Section</h2>
                <p className="text-sm font-medium text-gray-500 mt-2">Manage the content for your personal about area.</p>
            </div>

            {message && (
                <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 tracking-wide">Full Description</label>
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        rows={5}
                        className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm resize-none"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Button Link URL</label>
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Button Link Title</label>
                        <input
                            type="text"
                            value={linkTitle}
                            onChange={(e) => setLinkTitle(e.target.value)}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AboutForm;
