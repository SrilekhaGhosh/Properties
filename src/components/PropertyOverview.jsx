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

     
      <div className="grid grid-cols-3 gap-y-6 gap-x-8">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="text-gray-700">
            <p className="font-medium text-gray-900 capitalize">{key.replace(/_/g, " ")}:</p>
            <p className="text-gray-600">{value}</p>
          </div>
        ))}
      </div>

    
      <div className="mt-6 flex gap-4">
        <IconButton className="text-gray-700 hover:text-gray-900">
          <ShareOutlinedIcon />
        </IconButton>
        <IconButton className="text-gray-700 hover:text-red-500">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default PropertyOverview;
