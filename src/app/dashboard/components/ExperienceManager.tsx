"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ExperienceManager = () => {
    const [experiences, setExperiences] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form state for new experience
    const [id, setId] = useState<string | null>(null);
    const [companyName, setCompanyName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [desc, setDesc] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [order, setOrder] = useState(0);

    const handleEdit = (exp: any) => {
        setId(exp.id || exp._id);
        setCompanyName(exp.companyName);
        setJobPosition(exp.jobPosition);
        setLocation(exp.location);
        setStartDate(exp.startDate);
        setEndDate(exp.endDate || '');
        setDesc(exp.desc || '');
        setCompanyLink(exp.companyLink || '');
        setOrder(exp.order || 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const fetchData = async () => {
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
        try {
            const data: any = await client.request(API.Query.EXPERIANCE_SECTION);
            if (data?.experience) {
                const sorted = data.experience.sort((a: any, b: any) => b.order - a.order);
                setExperiences(sorted);
            }
        } catch (err) {
            console.error("Error fetching experiences:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setOrder(experiences.length);
    }, [experiences]);

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
            await client.request(API.Mutation.SET_EXPERIENCE_SECTION, {
                experianceSection: {
                    id: id ? id : null,
                    companyName,
                    jobPosition,
                    location,
                    startDate,
                    endDate,
                    desc,
                    companyLink,
                    order: Number(order)
                }
            });
            setMessage(id ? 'Experience updated successfully!' : 'Experience added successfully!');
            // Reset form
            handleReset();

            fetchData();
        } catch (err) {
            console.error(err);
            setMessage('Failed to save experience.');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setId(null);
        setJobPosition('');
        setCompanyName('');
        setDesc('');
        setLocation('');
        setStartDate('');
        setEndDate('');
        setCompanyLink('');
        setOrder(experiences.length + 1);
    };

    const handleSwap = async (index1: number, index2: number) => {
        const sorted = [...experiences].sort((a, b) => a.order - b.order);
        if (index1 < 0 || index2 < 0 || index1 >= sorted.length || index2 >= sorted.length) return;

        const exp1 = sorted[index1];
        const exp2 = sorted[index2];

        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            // 1. Temporarily change exp1's order to avoid unique constraint clash
            await client.request(API.Mutation.SET_EXPERIENCE_SECTION, {
                experianceSection: {
                    id: exp1.id,
                    jobPosition: exp1.jobPosition,
                    companyName: exp1.companyName,
                    desc: exp1.desc,
                    location: exp1.location,
                    startDate: exp1.startDate,
                    endDate: exp1.endDate,
                    companyLink: exp1.companyLink,
                    order: -1 // temporary
                }
            });

            // 2. Update exp2 to exp1's old order
            await client.request(API.Mutation.SET_EXPERIENCE_SECTION, {
                experianceSection: {
                    id: exp2.id,
                    jobPosition: exp2.jobPosition,
                    companyName: exp2.companyName,
                    desc: exp2.desc,
                    location: exp2.location,
                    startDate: exp2.startDate,
                    endDate: exp2.endDate,
                    companyLink: exp2.companyLink,
                    order: exp1.order
                }
            });

            // 3. Update exp1 to exp2's old order
            await client.request(API.Mutation.SET_EXPERIENCE_SECTION, {
                experianceSection: {
                    id: exp1.id,
                    jobPosition: exp1.jobPosition,
                    companyName: exp1.companyName,
                    desc: exp1.desc,
                    location: exp1.location,
                    startDate: exp1.startDate,
                    endDate: exp1.endDate,
                    companyLink: exp1.companyLink,
                    order: exp2.order
                }
            });

            fetchData();
        } catch (err) {
            console.error("Failed to swap:", err);
            alert("Failed to swap order. Please try again.");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this experience?")) return;
        
        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.DELETE_EXPERIENCE, { id });
            fetchData();
        } catch (err) {
            console.error("Failed to delete experience:", err);
            alert("Failed to delete experience");
        }
    };

    return (
        <div className="space-y-12">
            <div>
                <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{id ? 'Edit Experience' : 'Add New Experience'}</h2>
                    <p className="text-sm font-medium text-gray-500 mt-2">Manage your work history and roles.</p>
                </div>
                {message && (
                    <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Company Name</label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Job Position</label>
                            <input
                                type="text"
                                value={jobPosition}
                                onChange={(e) => setJobPosition(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Company Link (Optional)</label>
                            <input
                                type="text"
                                value={companyLink}
                                onChange={(e) => setCompanyLink(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Start Date</label>
                            <input
                                type="text"
                                placeholder="e.g. Jan 2020"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">End Date (or Present)</label>
                            <input
                                type="text"
                                placeholder="e.g. Present"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={4}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm resize-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Order (Number)</label>
                        <input
                            type="number"
                            value={order}
                            onChange={(e) => setOrder(Number(e.target.value))}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            {loading ? (id ? 'Updating...' : 'Adding...') : (id ? 'Update Experience' : 'Add Experience')}
                        </button>
                        {id && (
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-6 py-4 border-2 border-gray-200 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 focus:outline-none transition-all duration-300"
                            >
                                Cancel Edit
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="pt-10 border-t border-gray-100 mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Existing Experiences</h3>
                {experiences.length === 0 ? (
                    <p className="text-gray-500 font-medium">No experiences found.</p>
                ) : (
                    <div className="space-y-6">
                        {experiences.sort((a, b) => b.order - a.order).map((exp, index) => (
                            <div key={exp.id || exp._id || index} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-200 relative hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                                <div className="absolute top-6 right-6 flex justify-center items-center gap-4">
                                    <button 
                                        onClick={() => handleDelete(exp.id)}
                                        className="text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        Delete
                                    </button>
                                    <div className="flex justify-center items-center gap-2 border-l border-gray-300 pl-4">
                                        <h4 className="font-bold text-lg text-gray-500">#{exp.order}</h4>
                                        <div className="flex flex-col justify-center items-center">
                                            <button 
                                                onClick={() => handleSwap(index, index - 1)}
                                                className='cursor-pointer hover:bg-blue-600 p-1 rounded-md hover:text-white transition-all text-gray-400'
                                            > 
                                                <IoIosArrowUp size={18} /> 
                                            </button> 
                                            <button 
                                                onClick={() => handleSwap(index, index + 1)}
                                                className='cursor-pointer hover:bg-blue-600 p-1 rounded-md hover:text-white transition-all text-gray-400'
                                            >
                                                <IoIosArrowDown size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-32">
                                    <h4 className="font-black text-xl text-gray-900 cursor-pointer hover:text-blue-600 transition-colors inline-block" onClick={() => handleEdit(exp)}>
                                        {exp.jobPosition} <span className="text-gray-400 font-medium">at</span> {exp.companyName}
                                    </h4>

                                    <p className="text-sm font-bold text-blue-600 mt-1">{exp.startDate} - {exp.endDate} <span className="text-gray-300 mx-2">|</span> <span className="text-gray-500">{exp.location}</span></p>
                                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceManager;
