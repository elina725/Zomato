const defaultApiUrl = 'https://zomato-backend-production-cf7a.up.railway.app/api';

// Set VITE_API_URL in each frontend environment instead of changing source files.
export const API_URL = (import.meta.env.VITE_API_URL || defaultApiUrl).replace(/\/$/, '');
export const API_ORIGIN = API_URL.replace(/\/api$/, '');
