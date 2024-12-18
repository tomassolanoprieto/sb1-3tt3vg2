import { Property } from '../../../types/property';
import { PropertyApiError, PropertyApiResponse } from './types';
import { createPropertyError } from './errors';
import { API_URL } from '../../constants/config';

export async function fetchProperties(): Promise<Property[]> {
  try {
    const response = await fetch(`${API_URL}/content/properties`);
    
    if (!response.ok) {
      throw createPropertyError('FETCH_ERROR', response.status);
    }
    
    const data: PropertyApiResponse = await response.json();
    
    if (!data.success || !data.data) {
      throw createPropertyError('PARSE_ERROR');
    }
    
    return transformProperties(data.data);
  } catch (error) {
    console.error('Error fetching properties:', error);
    
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw createPropertyError('NETWORK_ERROR');
    }
    
    if ((error as PropertyApiError).code) {
      throw error as PropertyApiError;
    }
    
    throw createPropertyError('UNKNOWN_ERROR');
  }
}

function transformProperties(data: any[]): Property[] {
  return data.map(property => ({
    id: property.slug || property.id,
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    type: property.type,
    category: property.category,
    features: {
      bedrooms: property.features?.bedrooms || 0,
      bathrooms: property.features?.bathrooms || 0,
      size: property.features?.size || 0,
      parking: property.features?.parking || false,
      garden: property.features?.garden || false,
      pool: property.features?.pool || false,
      terrace: property.features?.terrace || false
    },
    images: property.images || [],
    tags: property.tags || [],
    featured: property.featured || false,
    createdAt: new Date(property.date || Date.now()),
    updatedAt: new Date(property.date || Date.now()),
  }));
}