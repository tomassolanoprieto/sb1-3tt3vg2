import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { ShareExperienceButton } from './testimonials/ShareExperienceButton';
import type { Testimonial } from '../types/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María García',
    role: 'Compradora',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Excelente servicio y atención personalizada. Encontraron exactamente lo que buscábamos en tiempo récord.',
    rating: 5
  },
  {
    id: 2,
    name: 'Juan Martínez',
    role: 'Vendedor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Profesionalidad y eficiencia en todo el proceso de venta. Superaron nuestras expectativas.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Inversora',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    content: 'Su conocimiento del mercado y asesoramiento fueron clave para tomar las mejores decisiones de inversión.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para sus necesidades inmobiliarias
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ShareExperienceButton />
        </motion.div>
      </div>
    </section>
  );
}