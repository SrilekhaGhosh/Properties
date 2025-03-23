import React from "react";

const WhyBuy = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-3">
      <h3 className="font-bold text-lg">Why you should buy <br/> <span className="text-orange-500">Kalpataru Vivant?</span></h3>

    
      <div className="flex items-center bg-gray-200 px-2 py-1 rounded-md text-xs mt-2">
        <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm mr-2">
          🏷 NEW LAUNCH
        </span>
        <span>Best Prices • Unit of Choice • Easy Payment Plans</span>
      </div>

    
      <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
        <li>Just 5 mins to Western Express Highway</li>
        <li>C.S.M. International Airport located just 5.4km away</li>
        <li>Panoramic podium amenity views from deck</li>
        <li>Established social ecosystem with proximity</li>
      </ul>

      
      <button className="border border-orange-500 text-orange-500 px-2 py-0 rounded-lg mt-3 w-1/3">
         Brochure
      </button>
    </div>
  );
};

export default WhyBuy;
