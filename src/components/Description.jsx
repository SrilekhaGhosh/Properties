import React from 'react';

const Description = ({ text }) => {
  return (
    <div className="p-4">
  <h2 className="text-2xl font-bold text-left">Description</h2>
  <div className="text-gray-600 h-32 overflow-y-auto border-b border-gray-300 pb-2">
    {text}
  </div>
</div>


  );
};

export default Description;
