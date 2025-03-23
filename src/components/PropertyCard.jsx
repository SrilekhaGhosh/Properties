import React from "react";

const PropertyCard = ({ property, selectProperty }) => {
  return (
    <div
      className="border rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105"
      onClick={() => selectProperty(property)}
    >
    
      <img
        src={property.hero_images[0]} 
        alt={property.name}
        className="w-full h-36 object-cover rounded-t-lg"
      />
      
     
      <div className="p-3">
        <h3 className="text-md font-semibold truncate">{property.name}</h3>
        <p className="text-sm text-gray-500 truncate">{property.location}</p>
        <p className="text-md font-semibold text-blue-600">{property.price_range}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
