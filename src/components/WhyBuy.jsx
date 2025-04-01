import React from "react";

const WhyBuy = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-3 w-full md:w-80">
      <h3 className=" text-lg text-left">Why you should buy <br/> <span className="font-semibold">Kalpataru Vivant?</span></h3>

    
      <div className=" text-left items-left bg-gray-200 px-2 py-1 rounded-md text-xs mt-2">
        <span className="italic text-left font-semibold text-lg">
          🏷 NEW LAUNCH
        </span>
        <span className="text-lg italic">  Benefits</span>
        <br/>
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
