export interface Property {
  id: number;
  type: 'House' | 'Flat' | 'Cottage';
  image: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  address: string;
  rent: number;
  date: string;
  available: boolean;
}

export interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
