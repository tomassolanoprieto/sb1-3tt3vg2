import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { HeroSection } from '../components/ui/HeroSection';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';

export function BlogPage() {
  const { posts, loading, error } = useBlogPosts();

  return (
    <div>
      <SEO 
        title="Blog"
        description="Mantente informado sobre el mercado inmobiliario en Valencia. Noticias, consejos, tendencias y análisis del sector inmobiliario."
        canonical="/blog"
        type="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de Gesttiona Inmobiliaria",
          "description": "Noticias y artículos sobre el mercado inmobiliario en Valencia",
          "publisher": {
            "@type": "Organization",
            "name": "Gesttiona Inmobiliaria"
          },
          "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.publishedAt,
            "author": {
              "@type": "Person",
              "name": post.author.name
            }
          }))
        }}
      />
      <HeroSection
        title="Nuestro Blog"
        subtitle="Mantente informado sobre las últimas tendencias y noticias del mercado inmobiliario"
        backgroundImage="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Rest of the component remains the same */}
    </div>
  );
}