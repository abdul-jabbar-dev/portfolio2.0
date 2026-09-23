"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';

const SocialLinksManager = () => {
    const [links, setLinks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
            try {
                const data: any = await client.request(API.Query.SHORT_DYN_DES);
                if (data?.hero?.socialLinks) {
                    setLinks(data.hero.socialLinks.map((link: any) => ({
                        title: link.title || '',
                        section: link.section || '',
                        desc: link.desc || '',
                        url: link.url || '',
                        icon: link.icon || '',
                        iconStr: link.iconStr || ''
                    })));
                }
            } catch (err) {
                console.error("Error fetching social links:", err);
            }
        };
        fetchData();
    }, []);

    const handleAdd = () => {
        setLinks([...links, { title: '', section: '', desc: '', url: '', icon: '', iconStr: '' }]);
    };

    const handleRemove = (index: number) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const newLinks = [...links];
        newLinks[index][field] = value;
        setLinks(newLinks);
    };

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
            await client.request(API.Mutation.SET_LINKS, {
                links: links.map(link => ({
                    title: link.title,
                    desc: link.desc,
                    url: link.url,
                    icon: link.icon,
                    iconStr: link.iconStr
                }))
            });
            setMessage('Social links updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update social links.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Manage Social Links</h2>
                    <p className="text-sm font-medium text-gray-500 mt-2">Add or update your social media links and icons.</p>
                </div>
                <button
                    type="button"
                    onClick={handleAdd}
                    className="py-2.5 px-5 rounded-xl shadow-[0_4px_12px_rgb(16,185,129,0.2)] text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 focus:outline-none hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                    + Add Link
                </button>
            </div>
            
            {message && (
                <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                    {message}
                </p>
            )}

            <div className="space-y-6">
                {links.map((link, index) => (
                    <div key={index} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-200 relative hover:shadow-lg hover:border-emerald-100 transition-all duration-300">
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                        >
                            Remove
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Title</label>
                                <input
                                    type="text"
                                    value={link.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    className="block w-full bg-white border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">URL</label>
                                <input
                                    type="text"
                                    value={link.url}
                                    onChange={(e) => handleChange(index, 'url', e.target.value)}
                                    className="block w-full bg-white border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Icon URL</label>
                                <input
                                    type="text"
                                    value={link.icon}
                                    onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                    className="block w-full bg-white border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Icon String (Optional)</label>
                                <input
                                    type="text"
                                    value={link.iconStr}
                                    onChange={(e) => handleChange(index, 'iconStr', e.target.value)}
                                    className="block w-full bg-white border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {links.length === 0 && <p className="text-gray-500 text-center py-8 font-medium">No links added yet.</p>}
            </div>

            <div className="pt-6 border-t border-gray-100">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                    {loading ? 'Saving...' : 'Save All Links'}
                </button>
            </div>
        </form>
    );
};

export default SocialLinksManager;
