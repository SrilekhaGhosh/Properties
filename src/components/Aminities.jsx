
import React from 'react';

const Amenities = ({ list }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left">Amenities</h2>
      <div className="flex flex-wrap gap-4">
        {list.map((amenity, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 rounded-md">
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
