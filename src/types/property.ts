export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'venta' | 'alquiler';
  category: 'pisos' | 'casas' | 'chalets' | 'aticos' | 'locales' | 'oficinas' | 'naves' | 'edificios';
  features: {
    bedrooms: number;
    bathrooms: number;
    size: number;
    parking?: boolean;
    garden?: boolean;
    pool?: boolean;
    terrace?: boolean;
    storage?: boolean;
    furnished?: boolean;
  };
  images: string[];
  tags: string[];
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFormData extends Omit<Property, 'id' | 'createdAt' | 'updatedAt'> {}