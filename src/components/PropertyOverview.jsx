import React from "react";
import { IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const PropertyOverview = ({ details }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-left border-b-2 border-gray-300 pb-2 mb-4">
        Property Overview
      </h2>

      {/* Three-column Grid Layout with Correct Order */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-8">
        {/* Column 1 */}
        <div>
          <p className="font-medium text-gray-900">Carpet Area:</p>
          <p className="text-gray-600">{details.carpet_area} sq.ft</p>
          <p className="font-medium text-gray-900 mt-4">Bathrooms:</p>
          <p className="text-gray-600">{details.bathrooms}</p>
          <p className="font-medium text-gray-900 mt-4">Property ID:</p>
          <p className="text-gray-600">{details.property_id}</p>
          <p className="font-medium text-gray-900 mt-4">Property Floor:</p>
          <p className="text-gray-600">{details.property_floor} out of 7</p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="font-medium text-gray-900">Bedrooms:</p>
          <p className="text-gray-600">{details.bedrooms}</p>
          <p className="font-medium text-gray-900 mt-4">Parking:</p>
          <p className="text-gray-600">{details.parking}</p>
          <p className="font-medium text-gray-900 mt-4">Rera Number:</p>
          <p className="text-gray-600">{details.rera_number}</p>
        </div>

        {/* Column 3 */}
        <div>
          <p className="font-medium text-gray-900">Balcony:</p>
          <p className="text-gray-600">{details.balcony}</p>
          <p className="font-medium text-gray-900 mt-4">Added:</p>
          <p className="text-gray-600">{details.added}</p>
          <p className="font-medium text-gray-900 mt-4">Possession Date:</p>
          <p className="text-gray-600">{details.possession_date}</p>
        </div>
      </div>

      {/* Buttons Section with Correct Colors */}
      <div className="mt-6 flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2 border rounded-lg text-[#E88873] border-[#E88873] bg-[#FBEAE5] hover:bg-[#F8D3C3]">
          <ShareOutlinedIcon className="text-[#E88873]" />
          Share
        </button>
        <button className="flex items-center gap-2 px-6 py-2 border rounded-lg text-[#E88873] border-[#E88873] bg-[#FBEAE5] hover:bg-[#F8D3C3]">
          <FavoriteBorderOutlinedIcon className="text-[#E88873]" />
          Save
        </button>
      </div>
    </div>
  );
};

export default PropertyOverview;
