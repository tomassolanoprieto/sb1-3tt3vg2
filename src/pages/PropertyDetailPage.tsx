import React from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice, formatArea } from '../lib/utils';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

export function PropertyDetailPage() {
  const { id } = useParams();

  // This would normally fetch from an API
  const property = {
    id: '1',
    title: 'Villa Moderna en Valencia',
    price: 450000,
    location: 'Valencia, España',
    description: 'Hermosa villa moderna con vistas panorámicas',
    bedrooms: 4,
    bathrooms: 3,
    size: 250,
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    type: 'venta'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          <p className="text-2xl font-bold text-orange-600 mb-4">
            {formatPrice(property.price)}
          </p>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            {property.location}
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2 text-orange-600" />
              <span>{property.bedrooms} Habitaciones</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2 text-orange-600" />
              <span>{property.bathrooms} Baños</span>
            </div>
            <div className="flex items-center">
              <Square className="w-5 h-5 mr-2 text-orange-600" />
              <span>{formatArea(property.size)}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{property.description}</p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}