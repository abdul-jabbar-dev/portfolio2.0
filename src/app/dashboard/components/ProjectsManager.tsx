"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ProjectsManager = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form state for new/edit project
    const [id, setId] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [section, setSection] = useState('Projects');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [myFile, setMyFile] = useState<File | null>(null);
    const [projectToolsStr, setProjectToolsStr] = useState('');
    const [order, setOrder] = useState<number>(0);

    const fetchData = async () => {
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
        try {
            const data: any = await client.request(API.Query.PROJECTS);
            if (data?.projects) {
                const sorted = data.projects.sort((a: any, b: any) => b.order - a.order);
                setProjects(sorted);
            }
        } catch (err) {
            console.error("Error fetching projects:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!id) {
            setOrder(projects.length + 1);
        }
    }, [projects, id]);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setMyFile(file);
            const url = URL.createObjectURL(file);
            setImg(url); // preview
        }
    };

    const handleRemoveFile = () => {
        setImg('');
        setMyFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let finalUrl = img;

            // Upload to our backend which handles S3
            if (myFile) {
                const formData = new FormData();
                formData.append("file", myFile);
                formData.append("folder", "project");
                
                const uploadRes = await fetch(CONFIG.BACKEND_ENDPOINT+"/upload", {
                    method: "POST",
                    body: formData,
                });
                
                if (!uploadRes.ok) throw new Error("File upload failed");
                const uploadData = await uploadRes.json();
                finalUrl = uploadData.url;
            }

            if (!finalUrl || finalUrl.startsWith('blob:')) {
                setMessage("Please select a valid project image.");
                setLoading(false);
                return;
            }

            const token = getToken();
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
                credentials: "include",
                headers: { Authorization: `Bearer ${token}` }
            });

            // Parse comma separated strings into array
            const toolsArray = projectToolsStr
                .split(',')
                .map(t => t.trim())
                .filter(t => t.length > 0);

            await client.request(API.Mutation.SET_PROJECT, {
                project: {
                    id: id ? id : null,
                    title,
                    section,
                    desc,
                    img: finalUrl,
                    projectTools: toolsArray,
                    techStackIds: [],
                    order: Number(order)
                }
            });
            setMessage('Project saved successfully!');
            
            // Reset form
            handleReset();

            // Refresh list
            fetchData();
        } catch (err) {
            console.error(err);
            setMessage('Failed to save project.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (proj: any) => {
        setId(proj.id);
        setTitle(proj.title);
        setSection(proj.section || 'Projects');
        setDesc(proj.desc);
        setImg(proj.img);
        setMyFile(null);
        setProjectToolsStr(proj.projectTools ? proj.projectTools.join(', ') : '');
        setOrder(proj.order || 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setId(null);
        setTitle('');
        setSection('Projects');
        setDesc('');
        setImg('');
        setMyFile(null);
        setProjectToolsStr('');
        setOrder(projects.length + 1);
    };

    const handleSwap = async (index1: number, index2: number) => {
        const sorted = [...projects].sort((a, b) => a.order - b.order);
        if (index1 < 0 || index2 < 0 || index1 >= sorted.length || index2 >= sorted.length) return;

        const proj1 = sorted[index1];
        const proj2 = sorted[index2];

        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.SET_PROJECT, {
                project: {
                    id: proj1.id,
                    title: proj1.title,
                    section: proj1.section,
                    desc: proj1.desc,
                    img: proj1.img,
                    projectTools: proj1.projectTools || [],
                    techStackIds: [],
                    order: proj2.order
                }
            });

            await client.request(API.Mutation.SET_PROJECT, {
                project: {
                    id: proj2.id,
                    title: proj2.title,
                    section: proj2.section,
                    desc: proj2.desc,
                    img: proj2.img,
                    projectTools: proj2.projectTools || [],
                    techStackIds: [],
                    order: proj1.order
                }
            });

            fetchData();
        } catch (err) {
            console.error("Failed to swap projects:", err);
            alert("Failed to swap order");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        
        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.DELETE_PROJECT, { id });
            fetchData();
        } catch (err) {
            console.error("Failed to delete project:", err);
            alert("Failed to delete project");
        }
    };

    return (
        <div className="space-y-12">
            {/* Form Section */}
            <div>
                <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{id ? 'Edit Project' : 'Add New Project'}</h2>
                        <p className="text-sm font-medium text-gray-500 mt-2">Manage your portfolio projects showcase.</p>
                    </div>
                    {id && (
                        <button onClick={handleReset} className="text-sm font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl transition-all duration-300">
                            Cancel Edit
                        </button>
                    )}
                </div>

                {message && (
                    <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Project Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Section (e.g. Projects, Freelance)</label>
                            <input
                                type="text"
                                value={section}
                                onChange={(e) => setSection(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide mb-2">Project Thumbnail Image</label>
                        {img && (
                            <div className="mb-4 relative w-48 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                                <img src={img} alt="Thumbnail preview" className="w-full h-auto object-cover" />
                                <button type="button" onClick={handleRemoveFile} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 text-xs hover:bg-red-600 transition-colors shadow-md">✕</button>
                            </div>
                        )}
                        {!img && (
                            <input
                                type="file"
                                accept="image/*"
                                multiple={false}
                                onChange={onSelectFile}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-300 sm:text-sm"
                                required={!img}
                            />
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Project Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={4}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm resize-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Project Tools (Comma separated)</label>
                            <input
                                type="text"
                                value={projectToolsStr}
                                onChange={(e) => setProjectToolsStr(e.target.value)}
                                placeholder="React, Next.js, TailwindCSS"
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Display Order / Index</label>
                            <input
                                type="number"
                                value={order}
                                onChange={(e) => setOrder(Number(e.target.value))}
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
                            {loading ? 'Saving...' : (id ? 'Update Project' : 'Add Project')}
                        </button>
                    </div>
                </form>
            </div>

            {/* List Section */}
            <div className="mt-12 pt-10 border-t border-gray-100">
                <div className="pb-4 mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Existing Projects</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.sort((a, b) => b.order - a.order).map((proj, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col group">
                            <div className="h-56 w-full bg-gray-100 relative overflow-hidden">
                                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 font-bold text-xs px-3 py-1.5 rounded-xl shadow-sm">
                                    {proj.section}
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0 bg-white/90 backdrop-blur-md p-1.5 rounded-xl shadow-lg">
                                    <button 
                                        onClick={() => handleSwap(idx, idx - 1)}
                                        className="p-1.5 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-gray-600 transition-colors"
                                        title="Move Up"
                                    >
                                        <IoIosArrowUp size={20} />
                                    </button>
                                    <div className="text-center text-xs font-black text-gray-400 py-1 border-y border-gray-200">
                                        {proj.order || (idx + 1)}
                                    </div>
                                    <button 
                                        onClick={() => handleSwap(idx, idx + 1)}
                                        className="p-1.5 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-gray-600 transition-colors"
                                        title="Move Down"
                                    >
                                        <IoIosArrowDown size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col relative bg-white">
                                <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">{proj.title}</h4>
                                <p className="text-sm font-medium text-gray-500 line-clamp-3 mb-6 flex-1 leading-relaxed">{proj.desc}</p>
                                
                                {proj.projectTools && proj.projectTools.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.projectTools.map((t: string, i: number) => (
                                            <span key={i} className="text-[11px] font-bold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100">{t}</span>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="flex gap-3 w-full mt-auto">
                                    <button 
                                        onClick={() => handleEdit(proj)}
                                        className="flex-1 py-3 text-sm font-bold text-gray-700 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300"
                                    >
                                        Edit Project
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(proj.id)}
                                        className="py-3 px-5 text-sm font-bold text-red-500 bg-red-50 hover:bg-red-500 hover:text-white rounded-xl transition-all duration-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && (
                        <div className="col-span-full py-16 text-center text-gray-500 font-medium bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200">
                            No projects found. Add your first project above!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsManager;
