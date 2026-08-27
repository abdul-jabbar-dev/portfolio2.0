"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql"; 
import clientServer from '@/lib/apolloClient';

const HeroForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch existing data
        const fetchData = async () => {
            try {
                const data: any = await clientServer.request(API.Query.SHORT_DYN_DES);
                if (data?.hero) {
                    setTitle(data.hero.title || '');
                    setDescription(data.hero.description || '');
                    setImage(data.hero.image || '');
                }
            } catch (err) {
                console.error("Error fetching hero:", err);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await clientServer.request(API.Mutation.SET_HERO_SECTION, {
                title,
                description,
                image
            });
            setMessage('Hero section updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update hero section.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-bold text-gray-800">Update Hero Section</h2>
                <p className="text-sm text-gray-500 mt-1">Manage the content for your landing page&apos;s hero area.</p>
            </div>

            {message && <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 font-medium">{message}</p>}

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

            <div>
                <label className="block text-sm font-semibold text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700">Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                    required
                />
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

export default HeroForm;
