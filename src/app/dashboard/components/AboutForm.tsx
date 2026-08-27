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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-bold text-gray-800">Update About Section</h2>
                <p className="text-sm text-gray-500 mt-1">Manage the content for your personal about area.</p>
            </div>

            {message && <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 font-medium">{message}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                        required
                    />
                </div> 
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700">Full Description</label>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows={5}
                    className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Button Link URL</label>
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700">Button Link Title</label>
                    <input
                        type="text"
                        value={linkTitle}
                        onChange={(e) => setLinkTitle(e.target.value)}
                        className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    />
                </div>
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-all"
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </form>
    );
};

export default AboutForm;
