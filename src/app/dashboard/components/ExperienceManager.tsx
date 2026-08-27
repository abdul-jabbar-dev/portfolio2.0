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
    const [companyName, setCompanyName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [desc, setDesc] = useState('');
    const [companyLink, setCompanyLink] = useState('');
    const [order, setOrder] = useState(0);

    const fetchData = async () => {
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
        try {
            const data: any = await client.request(API.Query.EXPERIANCE_SECTION);
            if (data?.experience) {
                setExperiences(data.experience);
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
            setMessage('Experience added successfully!');
            // Reset form
            setCompanyName('');
            setJobPosition('');
            setLocation('');
            setStartDate('');
            setEndDate('');
            setDesc('');
            setCompanyLink('');
            setOrder(0);

            // Refresh list
            fetchData();
        } catch (err) {
            console.error(err);
            setMessage('Failed to add experience.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Experience</h2>
                    <p className="text-sm text-gray-500 mt-1">Add a new role to your portfolio.</p>
                </div>

                {message && <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 font-medium mt-4">{message}</p>}

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Job Position</label>
                            <input
                                type="text"
                                value={jobPosition}
                                onChange={(e) => setJobPosition(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Company Link (Optional)</label>
                            <input
                                type="text"
                                defaultValue={experiences.length + 1}
                                value={companyLink}
                                onChange={(e) => setCompanyLink(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Start Date</label>
                            <input
                                type="text"
                                placeholder="e.g. Jan 2020"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">End Date (or Present)</label>
                            <input
                                type="text"
                                placeholder="e.g. Present"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={3}
                            className="mt-2 block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Order (Number)</label>
                        <input
                            type="number"
                            value={order}
                            onChange={(e) => setOrder(Number(e.target.value))}
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
                            {loading ? 'Adding...' : 'Add Experience'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Existing Experiences</h3>
                {experiences.length === 0 ? (
                    <p className="text-gray-500">No experiences found.</p>
                ) : (
                    <div className="space-y-4">
                        {experiences.sort((a, b) => a.order - b.order).map((exp) => (
                            <div key={exp._id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative">
                                <div className="absolute top-4 right-4 flex justify-center items-center gap-2">
                                    <h4 className="font-bold text-lg text-gray-600 ">  {exp.order + 1}</h4>
                                    <div className="flex flex-col justify-center items-center"><button className='cursor-pointer hover:bg-blue-600 p-1 rounded-md hover:text-white transition-all text-gray-500'> <IoIosArrowUp size={20} /> </button> <button className='cursor-pointer hover:bg-blue-600 p-1 rounded-md hover:text-white transition-all text-gray-500'><IoIosArrowDown size={20} /></button></div>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">{exp.jobPosition} at {exp.companyName}</h4>

                                <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate} | {exp.location}</p>
                                <p className="text-gray-700 mt-2 text-sm">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceManager;
