"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import clientServer from '@/lib/apolloClient';
import { getToken } from '@/utils/storage';
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';

import MediaPicker from './MediaPicker';

const ResumeManager = () => {
    const [resumeUrl, setResumeUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: any = await clientServer.request(API.Query.SHORT_DYN_DES);
                if (data?.hero?.resume) {
                    setResumeUrl(data.hero.resume);
                }
            } catch (err) {
                console.error("Error fetching hero resume:", err);
            }
        };
        fetchData();
    }, []);

    const saveUrl = async (url: string) => {
        setLoading(true);
        setMessage('');
        try {
            const token = getToken();
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
                credentials: "include",
                headers: { Authorization: `Bearer ${token}` }
            });
            await client.request(API.Mutation.SET_RESUME, { resume: url });
            setResumeUrl(url);
            setFile(null);
            setMessage('Resume updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update resume.');
        } finally {
            setLoading(false);
        }
    };

    const handleSelectMedia = (url: string) => {
        setShowPicker(false);
        saveUrl(url);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let finalUrl = resumeUrl;
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("folder", "resume");
                const uploadRes = await fetch(CONFIG.BACKEND_ENDPOINT+"/upload", {
                    method: "POST",
                    body: formData,
                });
                if (!uploadRes.ok) throw new Error("File upload failed");
                const uploadData = await uploadRes.json();
                finalUrl = uploadData.url;
            }

            if (!finalUrl) {
                setMessage("Please select a file first.");
                setLoading(false);
                return;
            }

            await saveUrl(finalUrl);
        } catch (err) {
            console.error(err);
            setMessage('Failed to upload and update resume.');
            setLoading(false);
        }
    };
 
    return (
        <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Resume Upload</h2>
                    <p className="text-sm font-medium text-gray-500 mt-2">Upload your latest resume (PDF or Image) to store in the database.</p>
                </div>
                <button
                    onClick={() => setShowPicker(true)}
                    className="px-5 py-2.5 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                    Choose from Library
                </button>
            </div>

            {message && (
                <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                    {message}
                </p>
            )}

            {showPicker && (
                <MediaPicker 
                    onSelect={handleSelectMedia}
                    onCancel={() => setShowPicker(false)}
                    filterType="all"
                />
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 tracking-wide">Upload New Resume</label>
                    <input
                        type="file"
                        accept="application/pdf,image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-300 sm:text-sm"
                    />
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        {loading ? 'Uploading...' : 'Save Resume'}
                    </button>
                </div>
            </form>

            {resumeUrl && (
                <div className="pt-10 border-t border-gray-100 mt-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Current Resume</h3>
                    <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-200 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                        {resumeUrl.match(/\.(jpeg|jpg|gif|png)$/i) ? (
                            <img src={resumeUrl} alt="Resume" className="max-w-full h-auto rounded-2xl shadow-sm border border-gray-200" />
                        ) : (
                            <div className="flex items-center gap-4">
                                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-bold text-lg flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    View Current PDF Document
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeManager;
