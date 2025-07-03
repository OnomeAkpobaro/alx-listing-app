// Card component props
export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  price?: number;
  className?: string;
}

// Button component props
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Property interface for listings
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  images: string[];
  amenities: string[];
  rating?: number;
  reviews?: number;
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}