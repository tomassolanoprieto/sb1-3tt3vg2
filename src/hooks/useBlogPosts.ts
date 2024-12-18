import { useState, useEffect } from 'react';
import { getBlogPosts } from '../lib/api/content';
import type { BlogPost } from '../types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Error al cargar los artículos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, error };
}
