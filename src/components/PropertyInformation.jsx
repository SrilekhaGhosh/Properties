import React from 'react';
const PropertyInformation = ({ mapUrl, googleMapLink }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold text-left">Property Location</h2>
        <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
          <iframe
            src={mapUrl}
            className="w-full h-60 rounded-lg border"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </a>
      </div>
    );
  };
  
export default PropertyInformation;
