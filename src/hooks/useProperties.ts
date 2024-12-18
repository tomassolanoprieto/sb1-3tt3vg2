import { useState, useEffect } from 'react';
import { getProperties } from '../lib/api/content';
import type { Property } from '../types/property';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProperties();
        setProperties(data);
      } catch (err) {
        console.error('Error loading properties:', err);
        setError('Error al cargar las propiedades. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  return { properties, loading, error };
}
