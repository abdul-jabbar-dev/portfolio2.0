"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';

const TechStackManager = () => {
    const [techStack, setTechStack] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
            try {
                const data: any = await client.request(API.Query.SHORT_DYN_DES);
                if (data?.hero?.techStack) {
                    setTechStack(data.hero.techStack.map((tech: any) => ({
                        title: tech.title || '',
                        section: tech.section || '',
                        desc: tech.desc || '',
                        url: tech.url || '',
                        icon: tech.icon || '',
                        iconStr: tech.iconStr || ''
                    })));
                }
            } catch (err) {
                console.error("Error fetching tech stack:", err);
            }
        };
        fetchData();
    }, []);

    const handleAdd = () => {
        setTechStack([...techStack, { title: '', section: '', desc: '', url: '', icon: '', iconStr: '' }]);
    };

    const handleRemove = (index: number) => {
        const newStack = [...techStack];
        newStack.splice(index, 1);
        setTechStack(newStack);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const newStack = [...techStack];
        newStack[index][field] = value;
        setTechStack(newStack);
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
            await client.request(API.Mutation.SET_TECH_STACK, {
                techStack: techStack.map(tech => ({
                    title: tech.title,
                    section: tech.section,
                    desc: tech.desc,
                    url: tech.url,
                    icon: tech.icon,
                    iconStr: tech.iconStr
                }))
            });
            setMessage('Tech Stack updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update tech stack.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Manage Tech Stack</h2>
                    <p className="text-sm text-gray-500 mt-1">Add or update the technologies you use.</p>
                </div>
                <button
                    type="button"
                    onClick={handleAdd}
                    className="py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all"
                >
                    + Add Tech
                </button>
            </div>

            {message && <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 font-medium">{message}</p>}

            <div className="space-y-6">
                {techStack.map((tech, index) => (
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
                                    value={tech.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">URL</label>
                                <input
                                    type="text"
                                    value={tech.url}
                                    onChange={(e) => handleChange(index, 'url', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Icon URL</label>
                                <input
                                    type="text"
                                    value={tech.icon}
                                    onChange={(e) => handleChange(index, 'icon', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Description (Optional)</label>
                                <input
                                    type="text"
                                    value={tech.desc}
                                    onChange={(e) => handleChange(index, 'desc', e.target.value)}
                                    className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {techStack.length === 0 && <p className="text-gray-500 text-center py-4">No technologies added yet.</p>}
            </div>

            <div className="pt-4 border-t border-gray-100">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-all"
                >
                    {loading ? 'Saving...' : 'Save All Tech Stack'}
                </button>
            </div>
        </form>
    );
};

export default TechStackManager;
