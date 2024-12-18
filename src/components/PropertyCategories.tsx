import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building, Store, Building2, Hotel, Warehouse, Castle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const categories = [
  {
    icon: Home,
    title: 'Pisos',
    description: 'Apartamentos y pisos en las mejores zonas',
    link: '/propiedades?categoria=pisos',
    color: 'bg-orange-100'
  },
  {
    icon: Building,
    title: 'Casas',
    description: 'Casas unifamiliares y adosados',
    link: '/propiedades?categoria=casas',
    color: 'bg-orange-100'
  },
  {
    icon: Castle,
    title: 'Chalets',
    description: 'Chalets y villas de lujo',
    link: '/propiedades?categoria=chalets',
    color: 'bg-orange-100'
  },
  {
    icon: Building2,
    title: 'Áticos',
    description: 'Áticos con terrazas y vistas panorámicas',
    link: '/propiedades?categoria=aticos',
    color: 'bg-orange-100'
  },
  {
    icon: Store,
    title: 'Locales',
    description: 'Locales comerciales en ubicaciones estratégicas',
    link: '/propiedades?categoria=locales',
    color: 'bg-orange-100'
  },
  {
    icon: Building2,
    title: 'Oficinas',
    description: 'Espacios de trabajo modernos y funcionales',
    link: '/propiedades?categoria=oficinas',
    color: 'bg-orange-100'
  },
  {
    icon: Warehouse,
    title: 'Naves',
    description: 'Naves industriales y almacenes',
    link: '/propiedades?categoria=naves',
    color: 'bg-orange-100'
  },
  {
    icon: Hotel,
    title: 'Edificios',
    description: 'Edificios completos para inversión',
    link: '/propiedades?categoria=edificios',
    color: 'bg-orange-100'
  }
];

export function PropertyCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Explora por Categorías</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia selección de propiedades organizadas por categorías
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group"
            >
              <Link to={category.link}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}