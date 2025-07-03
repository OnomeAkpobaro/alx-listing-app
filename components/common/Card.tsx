import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, image, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3">{description}</p>
        )}
        {price && (
          <p className="text-xl font-bold text-gray-900">${price}<span className="text-sm font-normal text-gray-600">/night</span></p>
        )}
      </div>
    </div>
  );
};

export default Card;