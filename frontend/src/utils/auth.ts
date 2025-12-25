// Authentication utilities for frontend

/**
 * Get the current auth token from localStorage
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

/**
 * Set the auth token in localStorage
 */
export const setAuthToken = (token: string): void => {
  localStorage.setItem('token', token);
};

/**
 * Remove the auth token from localStorage
 */
export const removeAuthToken = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const token = getAuthToken();
  return token !== null && token !== '';
};

/**
 * Get current user data from localStorage
 */
export const getCurrentUser = (): any | null => {
  const userData = localStorage.getItem('user');
  try {
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

/**
 * Make authenticated API request
 */
export const makeAuthenticatedRequest = async (
  url: string, 
  options: RequestInit = {}
): Promise<Response> => {
  const token = getAuthToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  // Don't add Content-Type for FormData (multipart/form-data)
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  return fetch(url, {
    ...options,
    headers
  });
};

/**
 * Handle authentication errors
 */
export const handleAuthError = (error: any): void => {
  console.error('Authentication error:', error);
  
  // If it's an authentication error, clear tokens and redirect
  if (error.status === 401 || error.message?.includes('token')) {
    removeAuthToken();
    window.location.href = '/kidsdistrict/auth/login';
  }
};