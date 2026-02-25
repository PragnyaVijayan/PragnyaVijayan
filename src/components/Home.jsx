import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        if (heroRef.current) {
            heroRef.current.classList.add('active');
        }
    }, []);

    return (
        <div className="home-container" style={{ paddingBottom: '6rem' }}>
            <section className="hero-section reveal" ref={heroRef} style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* Bento grid layout for a highly modern look */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>

                    {/* Main Intro Block */}
                    <div className="glass-card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                Pragnya Vijayan
                            </p>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                                Software Engineer<br />
                                <span style={{ color: 'var(--text-secondary)' }}>& Problem Solver.</span>
                            </h1>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <Link to="/about" className="btn" style={{
                                background: 'var(--text-primary)',
                                color: 'var(--bg-primary)',
                                padding: '1rem 2rem',
                                borderRadius: '100px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: 500
                            }}>
                                More about me <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Picture / Object Block 1 */}
                    <div className="image-placeholder" style={{ gridColumn: 'span 4', minHeight: '400px', padding: 0 }}>
                        <img src={`${import.meta.env.BASE_URL}ai_network.png`} alt="AI Network Abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Secondary Info Block */}
                    <div className="glass-card" style={{ gridColumn: 'span 4', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Currently Building</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Using computer science, ML, and data science as toolkits to solve complex problems.</p>
                    </div>

                    {/* Picture / Object Block 2 */}
                    <div className="image-placeholder" style={{ gridColumn: 'span 8', minHeight: '250px', padding: 0, borderRadius: '24px', overflow: 'hidden' }}>
                        <img src={`${import.meta.env.BASE_URL}workspace.png`} alt="Clean Desk Setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Home;
