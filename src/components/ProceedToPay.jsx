import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProceedToPay = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  if (!property) {
    return <p className="text-center text-red-500">No property selected for payment.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Proceed to Pay</h2>
      <div className="border rounded-lg p-4 shadow-md">
        <img src={property.hero_images?.[0]} alt={property.name} className="w-full h-56 object-cover rounded mb-3" />
        <h3 className="text-xl font-semibold">{property.name}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">Price: ₹ {property.price_range}</p>

        <div className="mt-4">
          <button
            onClick={() => alert("Payment Completed!")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm & Pay
          </button>
          <button
            onClick={() => navigate(-1)}
            className="ml-3 text-white-500 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPay;
