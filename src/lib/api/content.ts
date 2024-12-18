import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogPost } from '../types/blog';
import type { Property } from '../types/property';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/.netlify/functions/get-content/blog');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const posts = await response.json();
    
    return posts.map((post: any) => ({
      id: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: marked(post.body),
      author: {
        name: post.author,
        avatar: undefined
      },
      category: post.category,
      image: post.image,
      date: post.date,
      tags: post.tags || [],
      slug: post.slug,
      publishedAt: new Date(post.date)
    }));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    throw error;
  }
}

export async function getProperties(): Promise<Property[]> {
  try {
    const response = await fetch('/.netlify/functions/get-content/properties');
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    const properties = await response.json();
    
    return properties.map((property: any) => ({
      id: property.slug,
      title: property.title,
      description: property.description,
      price: property.price,
      location: property.location,
      type: property.type,
      category: property.category,
      features: property.features,
      images: property.images,
      tags: property.tags || [],
      featured: property.featured || false,
      createdAt: new Date(property.date || Date.now()),
      updatedAt: new Date(property.date || Date.now())
    }));
  } catch (error) {
    console.error('Error loading properties:', error);
    throw error;
  }
}
