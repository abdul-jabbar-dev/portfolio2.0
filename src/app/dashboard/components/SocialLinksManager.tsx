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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Manage Social Links</h2>
                    <p className="text-sm text-gray-500 mt-1">Add or update your social media links and icons.</p>
                </div>
                <button
                    type="button"
                    onClick={handleAdd}
                    className="py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none transition-all"
                >
                    + Add Link
                </button>
            </div>
            
            {message && <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 font-medium">{message}</p>}

            <div className="space-y-6">
                {links.map((link, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative">
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="absolute top-4 right-4 text-red-500 hover:text-red-700 font-bold"
                        >
                            Remove
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Title</label>
                                <input
                                    type="text"
                                    value={link.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">URL</label>
                                <input
                                    type="text"
                                    value={link.url}
                                    onChange={(e) => handleChange(index, 'url', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Icon URL</label>
                                <input
                                    type="text"
                                    value={link.icon}
                                    onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Icon String (Optional)</label>
                                <input
                                    type="text"
                                    value={link.iconStr}
                                    onChange={(e) => handleChange(index, 'iconStr', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {links.length === 0 && <p className="text-gray-500 text-center py-4">No links added yet.</p>}
            </div>

            <div className="pt-4 border-t border-gray-100">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-all"
                >
                    {loading ? 'Saving...' : 'Save All Links'}
                </button>
            </div>
        </form>
    );
};

export default SocialLinksManager;
