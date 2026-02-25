import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        title: 'GapLens',
        description: 'An intelligent multi-agent system for analyzing skill gaps and providing team optimization recommendations.',
        tech: ['Python', 'Multi-Agent Systems', 'AI'],
        github: 'https://github.com/PragnyaVijayan/GapLens',
        link: null
    },
    {
        title: 'AWS_Hack_2024',
        description: 'Freelancer-focused AI tool that analyzes market rates, summarizes contracts, and drafts negotiation emails using AWS services, Hugging Face, GPT-3, and visual dashboards.',
        tech: ['AWS', 'Hugging Face', 'GPT-3', 'Dashboards'],
        github: 'https://github.com/PragnyaVijayan/AWS_Hack_2024',
        link: null
    },
    {
        title: 'INRIX23',
        description: 'Mobile app that monitors teen driver behavior—such as harsh acceleration and speeding—and alerts parents in real time.',
        tech: ['Mobile SDK', 'Location Data', 'Real-time Alerts'],
        github: 'https://github.com/PragnyaVijayan/INRIX23',
        link: null
    },
    {
        title: 'Halfway',
        description: 'A habit-tracking app that uses image recognition, location data, and AI-powered coaching to boost accountability and support personal growth.',
        tech: ['Image Recognition', 'Location Data', 'AI Coaching'],
        github: 'https://github.com/PragnyaVijayan/Halfway',
        link: null
    },
    {
        title: 'Drug-to-Drug-Interactions',
        description: 'A web-scraping tool that builds a drug interaction database from Drugs.com, visualized with graphs and accessible through a simple user interface.',
        tech: ['Python', 'Web Scraping', 'Graph Visualization'],
        github: 'https://github.com/PragnyaVijayan/Drug-to-Drug-Interactions',
        link: null
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="glass-card project-card reveal active">
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
                {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projects-container page-content">
            <h1 style={{ marginBottom: '1rem' }} className="text-gradient">Open Source & Projects</h1>
            <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                A selection of my recent works across engineering, AI and data.
            </p>

            <div className="projects-grid">
                {projectsData.map(p => <ProjectCard key={p.title} project={p} />)}
            </div>
        </div>
    )
}

export default Projects;
