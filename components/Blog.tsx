import React, { useState } from 'react';
import Section from './Section';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { Calendar, FileText, Tag, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

const BlogCard: React.FC<{ post: BlogPost; onClick: () => void; index: number }> = ({ post, onClick, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="p-6">
      <div className="flex items-center text-sm text-slate-400 mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        {post.date}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-600 mb-4 line-clamp-2">
        {post.summary}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="inline-flex items-center text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <div className="text-primary font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
        阅读全文 <FileText className="w-4 h-4 ml-1" />
      </div>
    </div>
  </motion.div>
);

const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{post.title}</h2>
            <div className="flex items-center text-slate-500 text-sm mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="markdown-body prose prose-slate max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <Section 
        id="blog" 
        title="技术博客" 
        subtitle="分享技术见解，记录成长点滴。"
        lightBackground
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index}
              onClick={() => setSelectedPost(post)} 
            />
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;