import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { parseFrontmatter } from '../utils/mdParser';

// Use Vite's glob import to read the raw strings of all .md files in the /posts folder
// We append ?raw to get them as text
const modules = import.meta.glob('../posts/*.md', { query: '?raw', eager: true });

const postsData = Object.keys(modules).map(key => {
    const rawContent = modules[key].default;
    const { data, content } = parseFrontmatter(rawContent);
    return { ...data, content };
});

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = postsData.find(p => p.slug === slug);
        setPost(foundPost);
    }, [slug]);

    if (!post) {
        return (
            <div className="page-content container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '10rem' }}>
                <h2>Post not found</h2>
            </div>
        );
    }

    return (
        <div className="blog-post-container page-content" style={{ paddingBottom: '6rem' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    <ArrowLeft size={18} /> Back to Writing
                </Link>

                <div className="blog-header" style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.date}</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>{post.title}</h1>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{post.readTime}</span>
                </div>

                <div className="markdown-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                    {/* Render the actual Markdown passed via content */}
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 style={{ marginTop: '3rem', marginBottom: '1rem', fontSize: '2.5rem' }} {...props} />,
                            h2: ({ node, ...props }) => <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '2rem' }} {...props} />,
                            h3: ({ node, ...props }) => <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }} {...props} />,
                            p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                            ul: ({ node, ...props }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
                            li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
