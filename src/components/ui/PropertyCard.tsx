import React from 'react';
import { Bed, Bath, Square, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../../types/property';
import { formatPrice, formatArea, cn } from '../../lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured }: PropertyCardProps) {
  return (
    <Link to={`/propiedades/${property.id}`} className="block">
      <div className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg",
        featured && "border-2 border-orange-500"
      )}>
        <div className="relative h-48">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
              {property.type === 'venta' ? 'Venta' : 'Alquiler'}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600 mb-2">{property.location}</p>
          <p className="text-2xl font-bold text-orange-600 mb-4">
            {formatPrice(property.price)}
          </p>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{formatArea(property.size)}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}