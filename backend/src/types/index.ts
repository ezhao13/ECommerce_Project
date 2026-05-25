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

export interface SearchRequest {
  message: string;
  history: { role: 'user' | 'assistant'; content: string }[];
}

export interface SearchResponse {
  message: string;
  matchingIds: number[];
}
