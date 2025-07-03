// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// UI Text Constants
export const UI_TEXT = {
  APP_NAME: 'ALX Listing App',
  HERO_TITLE: 'Find your perfect stay',
  HERO_SUBTITLE: 'Discover amazing places to stay around the world',
  SEARCH_PLACEHOLDER: 'Search destinations...',
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong',
  NO_RESULTS: 'No properties found',
};

// Property Categories
export const PROPERTY_CATEGORIES = [
  'Entire homes',
  'Apartments',
  'Unique stays',
  'Beachfront',
  'Cabins',
  'Villas',
];

// Amenities
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Air conditioning',
  'Washing machine',
  'Free parking',
  'Pool',
  'Hot tub',
  'Gym',
  'BBQ grill',
  'Beach access',
];

// Placeholder Images
export const PLACEHOLDER_IMAGE = '/assets/placeholder-property.jpg';
export const LOGO_IMAGE = '/assets/logo.svg';