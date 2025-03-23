import { CheckCircle, LocationOn, KingBed, Bathtub, CropSquare } from "@mui/icons-material";

const PropertyDetails = ({ property }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mt-6">
      {/* Property Name & Location */}
      <h1 className="text-2xl font-bold text-left">{property.name}</h1>

      
      {/* Beds, Baths, Sq Ft */}
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
          {/* <CropSquare fontSize="small" /> */}
          <span className="ml-1">{property.sqft} sqft</span>
        </div>
      </div>
      <div className="flex items-center text-gray-600 text-sm mt-1">
        <LocationOn fontSize="small" className="text-blue-500" />
        <span className="ml-1">{property.location}</span>
      </div>


      {/* Verified & Amenities Count */}
      <div className="flex items-center space-x-6 mt-4 text-gray-700">
        <div className="flex items-center">
          <CheckCircle fontSize="small" className={`text-${property.verified ? "green" : "red"}-500`} />
          <span className="ml-1">{property.verified ? "Verified" : "Not Verified"}</span>
        </div>
        <div className="text-gray-600">{property.amenities}+ Amenities</div>
      </div>

      {/* Construction Status */}
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
  <h6 className="text-xs font-semibold text-gray-600 text-left">CONSTRUCTION STATUS</h6>
  <p className="text-lg font-medium text-blue-700 text-left">{property.status}</p>
</div>

      {/* Price Range */}
      <div className="mt-4">
  <h6 className="text-xs font-semibold text-gray-600 uppercase text-left">PRICE RANGE</h6>
  <p className="text-xl font-semibold text-gray-800 text-left">
    {property.price_range} <span className="text-sm text-gray-500">+ Tax</span>
  </p>
  
</div>
<div className="mt-4">
  <h6 className="text-xs font-semibold text-gray-600  text-left">2,3,4 BHK Apartment</h6>
  
</div>

    </div>
  );
};

export default PropertyDetails;


 
