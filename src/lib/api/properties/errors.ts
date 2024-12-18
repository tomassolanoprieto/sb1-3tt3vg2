import { PropertyApiError } from './types';

export const PROPERTY_ERROR_MESSAGES = {
  FETCH_ERROR: 'Error al cargar las propiedades',
  NETWORK_ERROR: 'Error de conexión. Por favor, verifica tu conexión a internet',
  PARSE_ERROR: 'Error al procesar los datos',
  UNKNOWN_ERROR: 'Ha ocurrido un error inesperado'
} as const;

export function createPropertyError(code: PropertyApiError['code'], status?: number): PropertyApiError {
  return {
    code,
    message: PROPERTY_ERROR_MESSAGES[code],
    status
  };
}