import React from 'react';
import { motion } from 'framer-motion';
import { Home, Calculator, Megaphone, Scale, Banknote, Hammer } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';

const services = [
  {
    icon: Home,
    title: 'Intermediación Inmobiliaria',
    description: 'Facilitamos la compra y venta de propiedades, conectando compradores y vendedores de manera eficiente y profesional.'
  },
  {
    icon: Calculator,
    title: 'Valoración y Tasación',
    description: 'Evaluación profesional y precisa del valor de mercado de tu propiedad, respaldada por análisis detallados del mercado actual.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Inmobiliario',
    description: 'Estrategias efectivas y modernas para promocionar tu propiedad, incluyendo marketing digital y tradicional.'
  },
  {
    icon: Scale,
    title: 'Asesoramiento Legal',
    description: 'Gestión completa de trámites y documentación legal, asegurando transacciones seguras y transparentes.'
  },
  {
    icon: Banknote,
    title: 'Financiamiento',
    description: 'Asesoramiento experto en opciones de financiación inmobiliaria, trabajando con los mejores bancos y entidades financieras.'
  },
  {
    icon: Hammer,
    title: 'Gestión de Reformas',
    description: 'Coordinación y supervisión profesional de proyectos de reforma, garantizando calidad y cumplimiento de plazos.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nuestros Servicios
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ofrecemos una gama completa de servicios inmobiliarios diseñados para 
              satisfacer todas tus necesidades en el mercado de bienes raíces.
            </motion.p>
          </div>
        </ScrollReveal>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-orange-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="/contacto" 
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Solicita más información
          </a>
        </motion.div>
      </div>
    </section>
  );
}