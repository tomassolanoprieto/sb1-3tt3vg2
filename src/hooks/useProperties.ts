import { useState, useEffect } from 'react';
import { fetchProperties } from '../lib/api/properties/propertiesApi';
import { featuredProperties } from '../data/properties';
import type { Property } from '../types/property';
import type { PropertyApiError } from '../lib/api/properties/types';

interface PropertiesState {
  properties: Property[];
  loading: boolean;
  error: PropertyApiError | null;
}

export function useProperties(useFallback = true) {
  const [state, setState] = useState<PropertiesState>({
    properties: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let mounted = true;

    async function loadProperties() {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await fetchProperties();
        
        if (mounted) {
          setState({
            properties: data,
            loading: false,
            error: null
          });
        }
      } catch (err) {
        console.error('Error loading properties:', err);
        
        if (mounted) {
          if (useFallback) {
            setState({
              properties: featuredProperties,
              loading: false,
              error: null
            });
          } else {
            setState(prev => ({
              ...prev,
              loading: false,
              error: err as PropertyApiError
            }));
          }
        }
      }
    }

    loadProperties();

    return () => {
      mounted = false;
    };
  }, [useFallback]);

  return state;
}