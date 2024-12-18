import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { HeroSection } from '../components/ui/HeroSection';
import { PropertySearch } from '../components/ui/PropertySearch';
import { PropertyCard } from '../components/ui/PropertyCard';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useProperties } from '../hooks/useProperties';

export function PropertiesPage() {
  const { properties, loading, error } = useProperties();

  return (
    <div>
      <SEO 
        title="Propiedades"
        description="Explora nuestra selección de propiedades exclusivas en Valencia. Pisos, chalets, áticos y más opciones para encontrar tu hogar ideal."
        canonical="/propiedades"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Propiedades en Valencia",
          "description": "Listado de propiedades disponibles en Valencia y alrededores",
          "provider": {
            "@type": "RealEstateAgent",
            "name": "Gesttiona Inmobiliaria"
          }
        }}
      />
      
      <HeroSection
        title="Descubre Tu Próximo Hogar"
        subtitle="Explora nuestra selección de propiedades exclusivas en las mejores zonas de Valencia"
        backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Rest of the component remains the same */}
    </div>
  );
}