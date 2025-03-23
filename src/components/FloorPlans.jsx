import { React, useEffect, useState } from "react";

const FloorPlans = ({ plans }) => {
  const [selected, SetSelected] = useState(plans[0] || {});

  useEffect(() => {
    SetSelected(plans[0]);
  }, [plans]);

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md bg-white max-w-lg"> 
      {/* Title */}
      <h3 className="text-lg font-semibold text-left mb-2">Floor Plan</h3>

      {/* Buttons Container */}
      <div className="flex space-x-2 mb-4">
        {plans.map((plan, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded ${
              selected === plan ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => SetSelected(plan)}
          >
            {plan.type}
          </button>
        ))}
      </div>

      {/* Fixed Size Floor Plan Display */}
      <div className="w-full h-[300px] flex items-center justify-center border rounded-lg overflow-hidden bg-gray-100">
        {selected.image && (
          <div className="w-full h-full flex flex-col items-center">
            <img
              src={selected.image}
              alt={`${selected.bhk} Floor Plan`}
              className="w-full h-full object-contain"
            />
            <p className="text-center text-sm mt-2">{selected.bhk} Floor Plan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlans;
