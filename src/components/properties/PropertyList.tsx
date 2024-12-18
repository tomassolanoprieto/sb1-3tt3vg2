import React from 'react';
import { motion } from 'framer-motion';
import { PropertyCard } from '../ui/PropertyCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';
import { useProperties } from '../../hooks/useProperties';

export function PropertyList() {
  const { properties, loading, error } = useProperties();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!properties.length) return <ErrorMessage message="No hay propiedades disponibles." />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PropertyCard property={property} />
        </motion.div>
      ))}
    </div>
  );
}