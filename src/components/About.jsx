import React from 'react';

const About = () => {
    return (
        <div className="about-container page-content">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className="text-gradient" style={{ marginBottom: '3rem', fontSize: '3.5rem' }}>About Me</h1>

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                    {/* Left Column: Text Content */}
                    <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1rem' }}>
                                "At the end of the day, I like building things that work."
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                I recently graduated with a degree in Computer Science, and while I started in biology thinking I’d stay in research, I got pulled into tech and machine learning. Now, I’m navigating the space as a Software Engineer and AI/ML enthusiast working on systems that actually ship.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                I care less about hype and more about usefulness. Clean systems. Thoughtful tradeoffs. Models that solve real problems, not just demos. Still very curious. Still learning. Just building in a different lab now.
                            </p>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Skills & Technologies</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {['Data Engineering', 'Data Pipelines', 'AWS Architecture', 'NLP', 'LLMs', 'Python', 'SQL', 'Databricks', 'Machine Learning'].map(skill => (
                                    <span key={skill} className="tech-badge" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Honors & Awards</h3>
                            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                                    <strong style={{ display: 'block' }}>Best Hack by Women-In-Tech</strong>
                                </li>
                                <li style={{ borderLeft: '2px solid var(--accent-secondary)', paddingLeft: '1rem' }}>
                                    <strong style={{ display: 'block' }}>Second Place in INRIX Hack</strong>
                                </li>
                                <li style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                                    <strong style={{ display: 'block' }}>Third Place in AWS x INRIX Hack</strong>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                        {/* Profile Image / Object Block */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            {/* Replace this src with your actual photo (e.g., /pragnya.jpg) */}
                            <img src="/profile.png" alt="Pragnya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'var(--glass-bg)', backdropFilter: 'blur(16px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Pragnya Vijayan</span><br />
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>AI/ML Enthusiast</span>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Professional Experience</h3>

                            <div className="experience-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>UKG</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Oct 2025 - Present</span>
                                </div>
                                <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.5rem' }}>AI Software Engineer II</div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Building intelligent enterprise systems in the Greater Boston area.</p>
                            </div>

                            <div className="experience-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>Corcentric</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Jul 2023 - Sep 2024</span>
                                </div>
                                <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.5rem' }}>Data Science Intern</div>
                                <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>Contributed to enterprise entity resolution across 7 products using Zingg within a Databricks medallion architecture.</li>
                                    <li>Improved defect triage accuracy from 20% to 90% by developing and finetuning an LLM classifier, increasing productivity by 60%.</li>
                                    <li>Built and deployed AI applications including a Rasa NLU chatbot and Streamlit tools.</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>Berkeley Pharma Tech</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>May 2022 - Aug 2022</span>
                                </div>
                                <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.5rem' }}>Biomedical Research Intern & Team Lead</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Led a student research team and authored a $250K NSF grant proposal to advance proposed therapeutic interventions for Alzheimer’s Disease.</p>
                            </div>

                        </div>

                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Education</h3>

                            <div className="experience-item" style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>Santa Clara University</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2021 - 2025</span>
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Bachelor's degree, Computer Science</div>
                            </div>

                            <div className="experience-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                    <strong style={{ fontSize: '1.1rem' }}>Irvington High School</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2017 - 2021</span>
                                </div>
                            </div>

                        </div>

                    </div> {/* End of right column wrapper */}
                </div>
            </div>
        </div>
    );
};

export default About;
