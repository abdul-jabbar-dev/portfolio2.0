"use client";
import React, { useState } from 'react';
import HeroForm from './components/HeroForm';
import AboutForm from './components/AboutForm';
import ExperienceManager from './components/ExperienceManager';
import TechStackManager from './components/TechStackManager';
import SocialLinksManager from './components/SocialLinksManager';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('hero');

    const tabs = [
        { id: 'hero', label: 'Hero Section' },
        { id: 'about', label: 'About Section' },
        { id: 'experience', label: 'Experience' },
        { id: 'techstack', label: 'Tech Stack' },
        { id: 'sociallinks', label: 'Social Links' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'hero': return <HeroForm />;
            case 'about': return <AboutForm />;
            case 'experience': return <ExperienceManager />;
            case 'techstack': return <TechStackManager />;
            case 'sociallinks': return <SocialLinksManager />;
            default: return <HeroForm />;
        }
    };

    return (
        <div className="container mx-auto mt-32 mb-32 flex flex-col md:flex-row gap-8 px-4">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex flex-col space-y-2">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-left px-5 py-3 rounded-xl transition-all font-medium ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-100 shadow-sm'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[500px]">
                {renderContent()}
            </div>
        </div>
    );
};

export default Dashboard;
