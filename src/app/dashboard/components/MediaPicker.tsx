"use client";
import React, { useState, useEffect } from 'react';
import API from "../../../../api/gql";
import clientServer from '@/lib/apolloClient';

interface MediaPickerProps {
    onSelect: (url: string) => void;
    onCancel: () => void;
    filterType?: 'image' | 'pdf' | 'all';
}

const MediaPicker: React.FC<MediaPickerProps> = ({ onSelect, onCancel, filterType = 'all' }) => {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const data: any = await clientServer.request(API.Query.DOCUMENTS);
                if (data?.documents) {
                    setDocuments(data.documents);
                }
            } catch (err) {
                console.error("Error fetching documents:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDocs();
    }, []);

    const filteredDocs = documents.filter(doc => {
        if (filterType === 'all') return true;
        const isImage = doc.fileUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i);
        if (filterType === 'image') return isImage;
        if (filterType === 'pdf') return !isImage;
        return true;
    });

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col h-[85vh] animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-800">Media Library</h3>
                    <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors bg-white p-2 rounded-full shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : filteredDocs.length === 0 ? (
                        <div className="flex flex-col justify-center items-center h-full text-gray-500">
                            <p>No media found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {filteredDocs.map((doc: any) => (
                                <div 
                                    key={doc.id} 
                                    onClick={() => onSelect(doc.fileUrl)}
                                    className="group relative cursor-pointer border-2 border-transparent hover:border-blue-500 rounded-xl overflow-hidden bg-white shadow-sm transition-all aspect-square flex flex-col"
                                >
                                    <div className="flex-1 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                        {doc.fileUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                                            <img src={doc.fileUrl} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        ) : (
                                            <div className="text-blue-500 flex flex-col items-center">
                                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" /><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>
                                                <span className="text-xs font-semibold mt-2 px-2 text-center break-all">{doc.title}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaPicker;
