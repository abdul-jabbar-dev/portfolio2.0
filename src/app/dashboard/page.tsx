"use client";
import React, { useState } from 'react';
import HeroForm from './components/HeroForm';
import AboutForm from './components/AboutForm';
import ExperienceManager from './components/ExperienceManager';
import TechStackManager from './components/TechStackManager';
import SocialLinksManager from './components/SocialLinksManager';
import ResumeManager from './components/ResumeManager';
import ProjectsManager from './components/ProjectsManager';

import ContactManager from './components/ContactManager';
import TechnicalSkillsManager from './components/TechnicalSkillsManager';

import { 
    IoPersonOutline, 
    IoBriefcaseOutline, 
    IoCodeWorkingOutline, 
    IoShareSocialOutline, 
    IoDocumentTextOutline, 
    IoAlbumsOutline,
    IoStarOutline,
    IoMailOutline,
    IoLayersOutline
} from 'react-icons/io5';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('hero');

    const tabs = [
        { id: 'hero', label: 'Hero Section', icon: <IoStarOutline size={20} /> },
        { id: 'about', label: 'About Section', icon: <IoPersonOutline size={20} /> },
        { id: 'experience', label: 'Experience', icon: <IoBriefcaseOutline size={20} /> },
        { id: 'technicalskills', label: 'Technical Skills', icon: <IoLayersOutline size={20} /> },
        { id: 'projects', label: 'Projects', icon: <IoAlbumsOutline size={20} /> },
        { id: 'techstack', label: 'Tech Stack', icon: <IoCodeWorkingOutline size={20} /> },
        { id: 'sociallinks', label: 'Social Links', icon: <IoShareSocialOutline size={20} /> },
        { id: 'resume', label: 'Resume', icon: <IoDocumentTextOutline size={20} /> },
        { id: 'contact', label: 'Contact', icon: <IoMailOutline size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'hero': return <HeroForm />;
            case 'about': return <AboutForm />;
            case 'experience': return <ExperienceManager />;
            case 'technicalskills': return <TechnicalSkillsManager />;
            case 'projects': return <ProjectsManager />;
            case 'techstack': return <TechStackManager />;
            case 'sociallinks': return <SocialLinksManager />;
            case 'resume': return <ResumeManager />;
            case 'contact': return <ContactManager />;
            default: return <HeroForm />;
        }
    };

    return (
        <div className="container mx-auto mt-28 mb-32 px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-72 flex flex-col space-y-2">
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
                        <h1 className="text-2xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Dashboard
                        </h1>
                        <nav className="flex flex-col space-y-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 text-left px-5 py-3.5 rounded-2xl transition-all duration-300 font-bold ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-[1.02]'
                                            : 'bg-transparent hover:bg-blue-50 text-gray-600 hover:text-blue-600 hover:scale-[1.01]'
                                        }`}
                                >
                                    <span className={activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-500'}>
                                        {tab.icon}
                                    </span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] min-h-[600px] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10 translate-y-1/3 -translate-x-1/3"></div>
                    
                    <div className="animate-fadeIn relative z-10">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
