# ALX Listing App

An Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project demonstrates modern web development practices and creates a foundation for a property listing platform.

## Project Goals

- Build a scalable and maintainable property listing application  
- Implement responsive design with TailwindCSS  
- Ensure type safety with TypeScript  
- Follow React and Next.js best practices  
- Create reusable components for consistency  

## Project Structure

```
alx-listing-app/
├── components/          # Reusable UI components
│   └── common/          # Common components used across the app
├── interfaces/          # TypeScript interfaces and types
├── constants/           # Application constants and configuration
├── pages/               # Next.js pages
├── public/              # Static files
│   └── assets/          # Images, icons, and other assets
└── styles/              # Global styles
```

### Key Directories

- **components/**: Contains all reusable React components  
  - `common/`: Shared components like Card, Button, etc.  
- **interfaces/**: TypeScript type definitions for type safety  
- **constants/**: Centralized constants for easy maintenance  
- **public/assets/**: Static assets like images and SVGs  

## Getting Started

### Prerequisites

- Node.js 16+ installed  
- npm or yarn package manager  

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd alx-listing-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development

### Available Scripts

- `npm run dev` - Start the development server  
- `npm run build` - Build the production application  
- `npm run start` - Start the production server  
- `npm run lint` - Run ESLint for code quality  

## Technology Stack

- **Next.js** - React framework for production  
- **TypeScript** - Type safety and better developer experience  
- **TailwindCSS** - Utility-first CSS framework  
- **ESLint** - Code quality and consistency  

## Contributing

- Create a feature branch  
- Make your changes  
- Run linting and tests  
- Submit a pull request  

## License

This project is part of the ALX Software Engineering program.
