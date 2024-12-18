import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

const adminSections = [
  {
    title: 'Propiedades',
    description: 'Gestiona el catálogo de propiedades',
    icon: Building2,
    actions: [
      {
        label: 'Añadir Propiedad',
        path: '/admin/properties/new',
        primary: true
      },
      {
        label: 'Ver Propiedades',
        path: '/admin/properties'
      }
    ]
  },
  {
    title: 'Blog',
    description: 'Gestiona los artículos del blog',
    icon: FileText,
    actions: [
      {
        label: 'Añadir Artículo',
        path: '/admin/blog/new',
        primary: true
      },
      {
        label: 'Ver Artículos',
        path: '/admin/blog'
      }
    ]
  }
];

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO 
        title="Panel de Administración"
        description="Panel de administración de Gesttiona Inmobiliaria"
        canonical="/admin"
      />
      
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <p className="text-gray-600 mt-2">Gestiona el contenido de tu sitio web</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <section.icon className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{section.description}</p>
              
              <div className="space-y-3">
                {section.actions.map((action) => (
                  <Link
                    key={action.path}
                    to={action.path}
                    className={`flex items-center justify-center w-full py-2 px-4 rounded-lg transition-colors ${
                      action.primary
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {action.primary && <Plus className="w-4 h-4 mr-2" />}
                    {action.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}