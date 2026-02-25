import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { parseFrontmatter } from '../utils/mdParser';

// Use Vite's glob import to read the raw strings of all .md files in the /posts folder
const modules = import.meta.glob('../posts/*.md', { query: '?raw', eager: true });

const blogPosts = Object.keys(modules).map(key => {
    const rawContent = modules[key].default;
    const { data } = parseFrontmatter(rawContent);
    return data;
}).filter(post => post.title && post.slug);

// Sort posts (optional, you could parse dates to sort by newest)
// For now we just list them in whatever file order they imported
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

const Blog = () => {
    return (
        <div className="blog-container page-content">

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Writing & Thoughts</h1>
                <p style={{ marginBottom: '4rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    A collection of essays on technology, artificial intelligence, and personal growth.
                </p>

                <div className="blog-list" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--glass-border)', borderRadius: '24px', overflow: 'hidden' }}>
                    {blogPosts.map(post => (
                        <Link
                            to={`/blog/${post.slug}`}
                            key={post.slug}
                            className="reveal active"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                background: 'var(--bg-primary)',
                                padding: '3rem',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-primary)'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.date}</span>
                            </div>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>{post.title}</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{post.readTime}</span>
                                <ArrowRight size={20} style={{ opacity: 0.5, color: 'var(--text-primary)' }} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
