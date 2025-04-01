import { 
  CheckCircle, 
  LocationOn, 
  KingBed, 
  Bathtub, 
  FavoriteBorder, 
  Favorite, 
  Share 
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SellIcon from '@mui/icons-material/Sell';


const PropertyDetails = ({ property }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mt-6 relative">
      {/* Like & Share Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {/* Like Button */}
        <IconButton 
          onClick={() => setLiked(!liked)} 
          className="shadow-md rounded-full"
          style={{ 
            width: "40px", 
            height: "40px", 
            backgroundColor: liked ? "#FFEBEE" :"#FCE4EC"  // Light red when active
          }}
        >
          {liked ? (
            <Favorite className="text-[#E88873]" />
          ) : (
            <FavoriteBorder className="text-[#E88873]" />
          )}
        </IconButton>

        {/* Share Button (Pink Background) */}
        <IconButton 
          className="shadow-md rounded-full"
          style={{ 
            width: "40px", 
            height: "40px", 
            backgroundColor: "#FCE4EC" // Pink background
          }}
        >
          <IosShareIcon className="text-[#E88873]"/>
        </IconButton>
      </div>

      {/* Property Name */}
      <h1 className="text-2xl font-bold text-left">{property.name}</h1>

      {/* Property Details */}
      <div className="flex items-center space-x-4 mt-2 text-gray-700">
        <div className="flex items-center">
          <KingBed fontSize="small" />
          <span className="ml-1">{property.beds} Beds</span>
        </div>
        <div className="flex items-center">
          <Bathtub fontSize="small" />
          <span className="ml-1">{property.baths} Baths</span>
        </div>
        <div className="flex items-center">
          <span className="ml-1">{property.sqft} sqft</span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 text-sm mt-1">
        <LocationOn fontSize="small" className="text-blue-500" />
        <span className="ml-1">{property.location}</span>
      </div>

      {/* Verified & Amenities */}
      {/* <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
        <Box sx={{ backgroundColor: "white", padding: "6px 30px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, color: "black", border: "1px solid #2E7D32" }}>For Sale</Box>
        <Box sx={{ backgroundColor: "#2E7D32", padding: "6px 40px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, color: "white", display: "flex", alignItems: "center" }}>
          <CheckCircle fontSize="small" sx={{ color: "white", marginRight: "4px" }} /> RERA
        </Box>
        <Box sx={{ backgroundColor: "#2E7D32", padding: "6px 20px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, color: "white", display: "flex", alignItems: "center" }}>
          <CheckCircle fontSize="small" sx={{ color: "white", marginRight: "4px" }} /> Verified Listing
        </Box>
        <Box sx={{ backgroundColor: "#2E7D32", padding: "6px 20px", borderRadius: "12px", fontSize: "12px", fontWeight: 500, color: "white" }}>25+ Amenities</Box>
      </Box> */}

<Box sx={{ display: "flex", gap: "12px", marginTop: "8px" }}>
      
      {/* For Sale Tag */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: "6px 16px",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#3D3D3D",
          display: "flex",
          alignItems: "center",
          border: "1px solid #E0E0E0",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#008000", marginRight: "6px" }} />
        For Sale
      </Box>

      {/* Verified Listing Tag */}
      <Box
        sx={{
          backgroundColor: "#00A884",
          padding: "6px 16px",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: 500,
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ShieldOutlinedIcon fontSize="small" sx={{ marginRight: "6px" }} />
        Verified Listing
      </Box>

      {/* RERA Tag */}
      <Box
        sx={{
          backgroundColor: "#00A884",
          padding: "6px 16px",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: 500,
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CheckCircleIcon fontSize="small" sx={{ marginRight: "6px" }} />
        RERA
        <InfoOutlinedIcon fontSize="small" sx={{ marginLeft: "6px" }} />
      </Box>

      {/* Amenities Tag */}
      <Box
        sx={{
          backgroundColor: "#00A884",
          padding: "6px 16px",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: 500,
          color: "white",
        }}
      >
        25+ Amenities
      </Box>
      
    </Box>


      {/* Construction Status */}
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h6 className="text-xs font-semibold text-gray-600 text-left">CONSTRUCTION STATUS</h6>
        <p className="text-lg font-medium text-blue-700 text-left">{property.status}</p>
      </div>
      <div className="flex items-start p-2 mt-2">
  <SellIcon className="mr-2" />
</div>

      {/* Price Range */}
      <div className="mt-2 p-4">
        <h6 className="text-xs font-semibold text-gray-600 uppercase text-left">PRICE RANGE</h6>
        <p className="text-xl font-semibold text-gray-800 text-left">
          {property.price_range} <span className="text-sm text-orange-500">+ Gov Tax</span>
        </p>
      </div>

      {/* BHK Info */}
      <div className="mt-4">
        <h1 className="text-xs font-semibold text-gray-1000 text-left">2,3,4 BHK Apartment</h1>
      </div>
    </div>
  );
};

export default PropertyDetails;
