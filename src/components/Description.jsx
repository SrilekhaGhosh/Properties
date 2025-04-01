import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const Description = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Price per sqft */}
      <div className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-6">
        <FaRegFileAlt className="text-lg" />
        <span>Price/sqft</span>
        <span className="text-black text-lg font-bold">60,000</span>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-300 mb-6">
        <div className="flex gap-6 text-gray-500 font-medium text-sm">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">
            Description
          </span>
          <span className="hover:text-blue-600 cursor-pointer">Overview</span>
          <span className="hover:text-blue-600 cursor-pointer">Amenities</span>
          <span className="hover:text-blue-600 cursor-pointer">Floor Plans</span>
          <span className="hover:text-blue-600 cursor-pointer">Property Info</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-left">Description</h2>
        <div className="text-gray-600 border-b border-gray-300 pb-2">
          <p className={`leading-relaxed ${expanded ? "h-auto" : "h-32 overflow-hidden"}`}>
            {text}
          </p>
          {/* Read More / Read Less */}
          <div
            className="text-blue-600 font-medium cursor-pointer flex items-center gap-1 mt-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span className="text-lg">↑</span> Read Less
              </>
            ) : (
              <>
                <span className="text-lg">↓</span> Read More
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
