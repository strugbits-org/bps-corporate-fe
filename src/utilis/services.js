import axios from 'axios';

export const BASE_DOMAIN = (() => {
  if (window.location.hostname === 'localhost') return 'http://localhost:5001';
  else {
    
    return ""
  }
})();

export const BASE_URL = BASE_DOMAIN;
export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 240000,
  httpAgent: true,
});

// Request interceptor
API.interceptors.request.use((config) => {
  // Add logic or modify the request config before sending
  return config;
}, (error) => {
  // Handle request error
  return Promise.reject(error);
});

// Response interceptor
API.interceptors.response.use((response) => {
  // Add logic or modify the response data before resolving
  return response;
}, (error) => {
  // Handle response error
  return Promise.reject(error);
});

