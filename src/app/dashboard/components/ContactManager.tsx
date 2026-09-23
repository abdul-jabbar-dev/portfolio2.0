"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import { getToken } from '@/utils/storage';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import * as MdIcons from "react-icons/md";

const ContactManager = () => {
    const [contacts, setContacts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form state for new contact
    const [id, setId] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [link, setLink] = useState('');
    const [icon, setIcon] = useState('');
    const [order, setOrder] = useState(0);

    const handleEdit = (contact: any) => {
        setId(contact.id || contact._id);
        setTitle(contact.title);
        setDesc(contact.desc);
        setLink(contact.link || '');
        setIcon(contact.icon || '');
        setOrder(contact.order || 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const fetchData = async () => {
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT);
        try {
            const data: any = await client.request(API.Query.CONTACT_SECTION);
            if (data?.contact) {
                const sorted = data.contact.sort((a: any, b: any) => b.order - a.order);
                setContacts(sorted);
            }
        } catch (err) {
            console.error("Error fetching contacts:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!id) {
            setOrder(contacts.length);
        }
    }, [contacts, id]);

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
            await client.request(API.Mutation.SET_CONTACT_SECTION, {
                contactSection: {
                    id: id ? id : null,
                    title,
                    desc,
                    link,
                    icon,
                    iconStr: icon,
                    order: Number(order)
                }
            });
            setMessage(id ? 'Contact updated successfully!' : 'Contact added successfully!');
            handleReset();
            fetchData();
        } catch (err) {
            console.error(err);
            setMessage('Failed to save contact.');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setId(null);
        setTitle('');
        setDesc('');
        setLink('');
        setIcon('');
        setOrder(contacts.length + 1);
    };

    const handleSwap = async (index1: number, index2: number) => {
        const sorted = [...contacts].sort((a, b) => a.order - b.order);
        if (index1 < 0 || index2 < 0 || index1 >= sorted.length || index2 >= sorted.length) return;

        const c1 = sorted[index1];
        const c2 = sorted[index2];

        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.SET_CONTACT_SECTION, {
                contactSection: { id: c1.id, title: c1.title, desc: c1.desc, link: c1.link, icon: c1.icon, iconStr: c1.icon, order: -1 }
            });

            await client.request(API.Mutation.SET_CONTACT_SECTION, {
                contactSection: { id: c2.id, title: c2.title, desc: c2.desc, link: c2.link, icon: c2.icon, iconStr: c2.icon, order: c1.order }
            });

            await client.request(API.Mutation.SET_CONTACT_SECTION, {
                contactSection: { id: c1.id, title: c1.title, desc: c1.desc, link: c1.link, icon: c1.icon, iconStr: c1.icon, order: c2.order }
            });

            fetchData();
        } catch (err) {
            console.error("Failed to swap:", err);
            alert("Failed to swap order. Please try again.");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;
        
        const token = getToken();
        const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` }
        });

        try {
            await client.request(API.Mutation.DELETE_CONTACT_SECTION, { id });
            fetchData();
        } catch (err) {
            console.error("Failed to delete contact:", err);
            alert("Failed to delete contact");
        }
    };

    return (
        <div className="space-y-12">
            <div>
                <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{id ? 'Edit Contact' : 'Add New Contact'}</h2>
                    <p className="text-sm font-medium text-gray-500 mt-2">Manage your contact links and information.</p>
                </div>
                {message && (
                    <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">React Icon Name (e.g. MdEmail)</label>
                            <input
                                type="text"
                                value={icon}
                                onChange={(e) => setIcon(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700 tracking-wide">Link URL</label>
                            <input
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm"
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
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={3}
                            className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm resize-none"
                            required
                        />
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            {loading ? (id ? 'Updating...' : 'Adding...') : (id ? 'Update Contact' : 'Add Contact')}
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
                <h3 className="text-xl font-bold text-gray-800 mb-6">Existing Contacts</h3>
                {contacts.length === 0 ? (
                    <p className="text-gray-500 font-medium">No contacts found.</p>
                ) : (
                    <div className="space-y-6">
                        {contacts.sort((a, b) => b.order - a.order).map((contact, index) => {
                            const IconComponent = (MdIcons as Record<string, React.ElementType>)[contact.icon];
                            return (
                                <div key={contact.id || index} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-200 relative hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                                        {IconComponent ? <IconComponent size={24} className="text-blue-600" /> : <span className="text-xs text-red-500">?</span>}
                                    </div>
                                    <div className="flex-1 pr-32">
                                        <h4 className="font-black text-xl text-gray-900 cursor-pointer hover:text-blue-600 transition-colors inline-block" onClick={() => handleEdit(contact)}>
                                            {contact.title}
                                        </h4>
                                        <p className="text-sm font-bold text-blue-600 mt-1">{contact.link || 'No link provided'}</p>
                                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{contact.desc}</p>
                                    </div>
                                    <div className="absolute top-6 right-6 flex justify-center items-center gap-4">
                                        <button 
                                            onClick={() => handleDelete(contact.id)}
                                            className="text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                                        >
                                            Delete
                                        </button>
                                        <div className="flex justify-center items-center gap-2 border-l border-gray-300 pl-4">
                                            <h4 className="font-bold text-lg text-gray-500">#{contact.order}</h4>
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
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactManager;
