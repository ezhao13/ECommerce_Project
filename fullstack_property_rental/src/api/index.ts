import { Property, ChatMessage, GoogleUser } from '../types';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export const fetchProperties = async (): Promise<Property[]> => {
  const res = await fetch(`${BASE_URL}/api/properties`);
  if (!res.ok) throw new Error('Failed to fetch properties');
  return res.json();
};

export const searchProperties = async (
  message: string,
  history: ChatMessage[]
): Promise<{ message: string; matchingIds: number[] }> => {
  const res = await fetch(`${BASE_URL}/api/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
};

export const verifyGoogleToken = async (token: string): Promise<GoogleUser> => {
  const res = await fetch(`${BASE_URL}/api/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) throw new Error('Auth failed');
  const data = await res.json();
  return data.user;
};
