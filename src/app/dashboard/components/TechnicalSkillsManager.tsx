"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

// Helper to render dynamic icon
const renderIcon = (iconStr: string) => {
    if (!iconStr) return <span className="text-xs text-red-500">?</span>;
    if (iconStr.startsWith('Md')) {
        const Icon = (MdIcons as any)[iconStr];
        return Icon ? <Icon size={20} /> : <span className="text-xs text-red-500">?</span>;
    }
    if (iconStr.startsWith('Fa')) {
        const Icon = (FaIcons as any)[iconStr];
        return Icon ? <Icon size={20} /> : <span className="text-xs text-red-500">?</span>;
    }
    if (iconStr.startsWith('Si')) {
        const Icon = (SiIcons as any)[iconStr];
        return Icon ? <Icon size={20} /> : <span className="text-xs text-red-500">?</span>;
    }
    if (iconStr.startsWith('Tb')) {
        const Icon = (TbIcons as any)[iconStr];
        return Icon ? <Icon size={20} /> : <span className="text-xs text-red-500">?</span>;
    }
    return <span className="text-xs text-red-500">?</span>;
};

const TechnicalSkillsManager = () => {
    const [sections, setSections] = useState<any[]>([]);
    const [allTechStacks, setAllTechStacks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form state
    const [id, setId] = useState<string | null>(null);
    const [fieldName, setFieldName] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [link, setLink] = useState('');
    const [order, setOrder] = useState(0);

    // TechStack items state
    const [selectedStacks, setSelectedStacks] = useState<any[]>([]);
    const [stackSelectId, setStackSelectId] = useState('');
    const [stackPercentage, setStackPercentage] = useState<number>(80);

    // New Tech Stack state
    const [isNewTech, setIsNewTech] = useState(false);
    const [newTechTitle, setNewTechTitle] = useState('');
    const [newTechIcon, setNewTechIcon] = useState('');

    const fetchData = async () => {
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
        try {
            // Fetch categories and tech stacks
            const data: any = await client.request(API.Query.TECHNICAL_SKILLS);
            const tsData: any = await client.request(API.Query.SHORT_DYN_DES);
            if (tsData?.hero?.techStack) {
                setAllTechStacks(tsData.hero.techStack);
            }
            if (data?.technicalSkills) {
                const sorted = data.technicalSkills.sort((a: any, b: any) => b.order - a.order);
                setSections(sorted);
                if (!tsData?.hero?.techStack) {
                    // Build list of all tech stacks from existing sections as fallback
                    const techSet = new Map<string, any>();
                    sorted.forEach((sec: any) => {
                      sec.techStack?.forEach((ts: any) => {
                        if (!techSet.has(ts.id)) {
                          techSet.set(ts.id, ts);
                        }
                      });
                    });
                    setAllTechStacks(Array.from(techSet.values()));
                }
            }
        } catch (err) {
            console.error("Error fetching technical skills:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!id) {
            setOrder(sections.length + 1);
        }
    }, [sections, id]);

    const handleEdit = (sec: any) => {
        setId(sec.id || sec._id);
        setFieldName(sec.fieldName);
        setDesc(sec.desc);
        setIcon(sec.icon || sec.iconStr || '');
        setLink(sec.link || '');
        setOrder(sec.order || 0);
        
        if (sec.techStack) {
            setSelectedStacks(sec.techStack.map((ts: any) => ({
                techStackId: ts.id,
                title: ts.title,
                iconStr: ts.iconStr || ts.icon,
                skillsPercentage: ts.skillsPercentage,
                order: ts.order
            })).sort((a: any, b: any) => a.order - b.order));
        } else {
            setSelectedStacks([]);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setId(null);
        setFieldName('');
        setDesc('');
        setIcon('');
        setLink('');
        setOrder(sections.length + 1);
        setSelectedStacks([]);
        setStackSelectId('');
        setStackPercentage(80);
    };

    const addTechStackToSelection = async () => {
        if (isNewTech) {
            if (!newTechTitle || !newTechIcon) {
                alert("Please enter title and icon for the new technology.");
                return;
            }
            const token = getToken();
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
                credentials: "include",
                headers: { Authorization: `Bearer ${token}` }
            });
            try {
                const res: any = await client.request(API.Mutation.SET_TECH_STACK, {
                    techStack: [{
                        title: newTechTitle,
                        icon: newTechIcon,
                        iconStr: newTechIcon,
                        section: 'technical_skills',
                        desc: '',
                        url: ''
                    }]
                });
                const inserted = res?.setTechStack?.[0];
                if (inserted) {
                    setSelectedStacks([...selectedStacks, {
                        techStackId: inserted.id,
                        title: inserted.title,
                        iconStr: inserted.iconStr || inserted.icon,
                        skillsPercentage: stackPercentage,
                        order: selectedStacks.length + 1
                    }]);
                    setNewTechTitle('');
                    setNewTechIcon('');
                    setIsNewTech(false);
                    fetchData(); // refresh dropdown
                }
            } catch (e) {
                console.error(e);
                alert("Failed to create new technology.");
            }
            return;
        }

        if (!stackSelectId) return;
        const ts = allTechStacks.find(t => t.id === stackSelectId);
        if (!ts) return;
        
        // check if already added
        if (selectedStacks.find(s => s.techStackId === ts.id)) {
            alert("Already added to this category");
            return;
        }

        setSelectedStacks([...selectedStacks, {
            techStackId: ts.id,
            title: ts.title,
            iconStr: ts.iconStr || ts.icon,
            skillsPercentage: stackPercentage,
            order: selectedStacks.length + 1
        }]);
    };

    const removeSelectedStack = (index: number) => {
        const newStacks = [...selectedStacks];
        newStacks.splice(index, 1);
        // reorder
        newStacks.forEach((s, i) => s.order = i + 1);
        setSelectedStacks(newStacks);
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
            await client.request(API.Mutation.SET_TECHNICAL_SKILLS_SECTION, {
                technicalSkillsSection: {
                    id: id ? id : null,
                    fieldName,
                    desc,
                    icon,
                    iconStr: icon,
                    link,
                    order: Number(order),
                    techStack: selectedStacks.map(s => ({
                        techStackId: s.techStackId,
                        order: s.order,
                        skillsPercentage: s.skillsPercentage
                    }))
                }
            });
            setMessage(id ? 'Technical Skills Category updated!' : 'Technical Skills Category added!');
            handleReset();
            fetchData();
        } catch (err) {
            console.error(err);
            setMessage('Failed to save Technical Skills Category.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (deleteId: string) => {
        if (!confirm("Are you sure you want to delete this category?")) return;
        
        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.DELETE_TECHNICAL_SKILLS_SECTION, { id: deleteId });
            fetchData();
        } catch (err) {
            console.error("Failed to delete category:", err);
            alert("Failed to delete category");
        }
    };

    const handleSwap = async (index1: number, index2: number) => {
        const sorted = [...sections].sort((a, b) => a.order - b.order);
        if (index1 < 0 || index2 < 0 || index1 >= sorted.length || index2 >= sorted.length) return;

        const c1 = sorted[index1];
        const c2 = sorted[index2];

        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            // Very simplified swap process. The actual backend uses unique constraints on 'order'.
            // To avoid unique constraint violations, we temp-change c1 to -1.
            await client.request(API.Mutation.SET_TECHNICAL_SKILLS_SECTION, {
                technicalSkillsSection: { ...c1, techStack: [], order: -1 }
            });

            await client.request(API.Mutation.SET_TECHNICAL_SKILLS_SECTION, {
                technicalSkillsSection: { ...c2, techStack: [], order: c1.order }
            });

            await client.request(API.Mutation.SET_TECHNICAL_SKILLS_SECTION, {
                technicalSkillsSection: { ...c1, techStack: [], order: c2.order }
            });

            fetchData();
        } catch (err) {
            console.error("Failed to swap:", err);
            alert("Failed to swap order. Note: If it fails, it may need to preserve tech stack data in swap.");
        }
    };

    return (
        <div className="space-y-12">
            <div>
                <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                        {id ? 'Edit Skill Category' : 'Add New Skill Category'}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 mt-2">Manage technical skill groups (e.g. Frontend, Backend) and assign specific technologies.</p>
                </div>
                {message && (
                    <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') || message.includes('updated') ? 'text-green-700 bg-green-50 border border-green-200' : 'text-red-700 bg-red-50 border border-red-200'} shadow-sm`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Category Details */}
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h3 className="font-bold text-lg text-gray-800 border-b border-gray-100 pb-2">Category Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Category Name</label>
                                <input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)} required placeholder="e.g. Frontend Development" className="block w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">React Icon (e.g. MdWeb)</label>
                                <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} required placeholder="e.g. MdWeb" className="block w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Order (Number)</label>
                                <input type="number" value={order} onChange={(e) => setOrder(Number(e.target.value))} required className="block w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Link</label>
                                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="e.g. https://..." className="block w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 text-sm" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Description</label>
                            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required rows={2} placeholder="Short description of this category" className="block w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 px-5 text-sm resize-none" />
                        </div>
                    </div>

                    {/* Tech Stacks Assignment */}
                    <div className="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 shadow-sm space-y-6">
                        <h3 className="font-bold text-lg text-gray-800 border-b border-blue-100 pb-2">Assign Tech Stacks</h3>
                        
                        <div className="flex gap-4 items-end">
                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-bold text-gray-700 tracking-wide">
                                        {isNewTech ? 'New Technology Details' : 'Select Technology'}
                                    </label>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsNewTech(!isNewTech)} 
                                        className="text-xs font-bold text-blue-600 hover:text-blue-700"
                                    >
                                        {isNewTech ? 'Select Existing' : '+ Add New'}
                                    </button>
                                </div>
                                {isNewTech ? (
                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            placeholder="Tech Name (e.g. React)" 
                                            value={newTechTitle}
                                            onChange={(e) => setNewTechTitle(e.target.value)}
                                            className="block w-1/2 bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm"
                                        />
                                        <input 
                                            type="text" 
                                            placeholder="Icon (e.g. FaReact)" 
                                            value={newTechIcon}
                                            onChange={(e) => setNewTechIcon(e.target.value)}
                                            className="block w-1/2 bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm"
                                        />
                                    </div>
                                ) : (
                                    <select 
                                        value={stackSelectId} 
                                        onChange={(e) => setStackSelectId(e.target.value)}
                                        className="block w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm"
                                    >
                                        <option value="">-- Select Tech Stack --</option>
                                        {allTechStacks.map(t => (
                                            <option key={t.id} value={t.id}>{t.title}</option>
                                        ))}
                                    </select>
                                )}
                            </div>
                            <div className="w-32 space-y-2">
                                <label className="block text-sm font-bold text-gray-700 tracking-wide">Proficiency (%)</label>
                                <input type="number" min="0" max="100" value={stackPercentage} onChange={(e) => setStackPercentage(Number(e.target.value))} className="block w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm" />
                            </div>
                            <button 
                                type="button" 
                                onClick={addTechStackToSelection}
                                className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors h-[46px]"
                            >
                                Add
                            </button>
                        </div>

                        {selectedStacks.length > 0 && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {selectedStacks.map((ts, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="text-blue-600">{renderIcon(ts.iconStr)}</div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-800">{ts.title}</p>
                                                <p className="text-xs text-gray-500 font-medium">{ts.skillsPercentage}%</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick={() => removeSelectedStack(index)} className="text-red-500 hover:text-red-700 font-bold text-xs bg-red-50 px-2 py-1 rounded">Remove</button>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedStacks.length === 0 && (
                            <p className="text-sm text-gray-500 italic">No technologies assigned to this category yet.</p>
                        )}
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button type="submit" disabled={loading} className="flex-1 py-4 px-6 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all">
                            {loading ? 'Saving...' : (id ? 'Update Category' : 'Create Category')}
                        </button>
                        {id && (
                            <button type="button" onClick={handleReset} className="px-6 py-4 border-2 border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="pt-10 border-t border-gray-100 mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Existing Categories</h3>
                {sections.length === 0 ? (
                    <p className="text-gray-500 font-medium">No categories found.</p>
                ) : (
                    <div className="space-y-6">
                        {sections.sort((a, b) => b.order - a.order).map((sec, index) => (
                            <div key={sec.id || index} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-200 relative hover:shadow-md transition-all flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 text-blue-600 shrink-0">
                                            {renderIcon(sec.iconStr || sec.icon)}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl text-gray-900 cursor-pointer hover:text-blue-600" onClick={() => handleEdit(sec)}>
                                                {sec.fieldName}
                                            </h4>
                                            <p className="text-gray-600 text-sm mt-1">{sec.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <button onClick={() => handleDelete(sec.id)} className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg">Delete</button>
                                        <div className="flex flex-col border-l border-gray-300 pl-4">
                                            <button onClick={() => handleSwap(index, index - 1)} className="text-gray-400 hover:text-blue-600"><IoIosArrowUp size={18} /></button>
                                            <button onClick={() => handleSwap(index, index + 1)} className="text-gray-400 hover:text-blue-600"><IoIosArrowDown size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <div className="flex flex-wrap gap-2">
                                        {sec.techStack && sec.techStack.length > 0 ? sec.techStack.map((ts: any, i: number) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2">
                                                {renderIcon(ts.iconStr || ts.icon)}
                                                {ts.title} <span className="text-blue-500 font-medium">({ts.skillsPercentage}%)</span>
                                            </span>
                                        )) : (
                                            <span className="text-xs text-gray-400">No tech stacks added.</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechnicalSkillsManager;
