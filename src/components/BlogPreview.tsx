import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Últimas Noticias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas tendencias y noticias del mercado inmobiliario
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-orange-600 text-sm font-semibold">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Ver todas las noticias
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}