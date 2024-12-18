export interface PropertyApiResponse {
  success: boolean;
  data?: any[];
  error?: {
    code: string;
    message: string;
  };
}

export type PropertyApiError = {
  code: 'FETCH_ERROR' | 'NETWORK_ERROR' | 'PARSE_ERROR' | 'UNKNOWN_ERROR';
  message: string;
  status?: number;
};