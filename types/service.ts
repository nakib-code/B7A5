export interface Service {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  rating?: number;
  category?: {
    id: string;
    name: string;
  };
}