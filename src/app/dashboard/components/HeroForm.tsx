"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import clientServer from '@/lib/apolloClient';
import { getToken } from '@/utils/storage';
import { GraphQLClient } from 'graphql-request';
import CONFIG from '@/config';
import ImageCropper from './ImageCropper';
import MediaPicker from './MediaPicker';

const HeroForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [myImage, setMyImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [cropTargetImage, setCropTargetImage] = useState<string | null>(null);
    const [showMediaPicker, setShowMediaPicker] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: any = await clientServer.request(API.Query.SHORT_DYN_DES);
                if (data?.hero) {
                    setTitle(data.hero.title || '');
                    setDescription(data.hero.description || '');
                    setSelectedImage(data.hero.image || null);
                }
            } catch (err) {
                console.error("Error fetching hero:", err);
            }
        };
        fetchData();
    }, []);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setCropTargetImage(url);
            e.target.value = '';
        }
    };

    const handleCropComplete = (croppedFile: File) => {
        setMyImage(croppedFile);
        setSelectedImage(URL.createObjectURL(croppedFile));
        setCropTargetImage(null);
    };

    const handleCropCancel = () => {
        setCropTargetImage(null);
    };

    const handleSelectMedia = (url: string) => {
        setShowMediaPicker(false);
        setSelectedImage(url);
        setMyImage(null);
    };

    const handleRemove = () => {
        setSelectedImage(null);
        setMyImage(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let finalUrl = selectedImage;
            if (myImage) {
                const formData = new FormData();
                formData.append("file", myImage, myImage.name || "hero-image.jpg");
                formData.append("folder", "hero");
                const uploadRes = await fetch(CONFIG.BACKEND_ENDPOINT+"/upload", {
                    method: "POST",
                    body: formData,
                });
                if (!uploadRes.ok) throw new Error("File upload failed");
                const uploadData = await uploadRes.json();
                finalUrl = uploadData.url;
            }

            if (!finalUrl) {
                setMessage("Please select an image first.");
                setLoading(false);
                return;
            }

            const token = getToken();
            const client = new GraphQLClient(CONFIG.BACKEND_GRAPHQL_ENDPOINT, {
                credentials: "include",
                headers: { Authorization: `Bearer ${token}` }
            });

            await client.request(API.Mutation.SET_HERO_SECTION, {
                title,
                description,
                image: finalUrl
            });
            
            setMyImage(null);
            setMessage('Hero section updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('Failed to update hero section.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Edit Hero Section</h2>
                <p className="text-sm font-medium text-gray-500 mt-2">This is the main introduction on your portfolio.</p>
            </div>

            {message && (
                <p className={`p-4 rounded-xl font-medium mt-4 ${message.includes('successfully') ? 'text-green-700 bg-green-50 border border-green-200 shadow-sm' : 'text-red-700 bg-red-50 border border-red-200 shadow-sm'}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                    <label className="block text-sm font-bold text-gray-700 tracking-wide">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3.5 px-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:bg-white transition-all duration-300 sm:text-sm resize-none"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-end mb-3">
                        <label className="block text-sm font-bold text-gray-700 tracking-wide">Profile Image</label>
                        <button
                            type="button"
                            onClick={() => setShowMediaPicker(true)}
                            className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            Choose from Library
                        </button>
                    </div>
                    
                    <div className={(selectedImage?.length ?? 0) > 1 ? `flex justify-center items-center p-6 relative bg-gray-50/50 border border-dashed border-gray-300 rounded-3xl mb-4` : `hidden`}>
                        {myImage && <span className='absolute rounded-full right-4 top-4 bg-red-500 text-white w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors shadow-md' onClick={handleRemove}>
                            ×
                        </span>}
                        {selectedImage && <img src={selectedImage} className='w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white' alt="Hero Profile" />}
                    </div>
                    
                    <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={onSelectFile}
                        className="block w-full bg-gray-50/50 border border-gray-200 rounded-2xl shadow-sm py-3 px-4 text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-300 sm:text-sm"
                        required={!selectedImage}
                    />
                </div>

                {showMediaPicker && (
                    <MediaPicker 
                        onSelect={handleSelectMedia}
                        onCancel={() => setShowMediaPicker(false)}
                        filterType="image"
                    />
                )}

                {cropTargetImage && (
                    <ImageCropper
                        imageSrc={cropTargetImage}
                        onCropComplete={handleCropComplete}
                        onCancel={handleCropCancel}
                    />
                )}

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(37,99,235,0.2)] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HeroForm;
