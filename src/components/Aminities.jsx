import React from "react";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ElevatorIcon from "@mui/icons-material/Elevator";
import PowerIcon from "@mui/icons-material/Power";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import ParkIcon from "@mui/icons-material/Park";

const Amenities = () => {
  const amenitiesList = [
    { name: "Car Parking", icon: <LocalParkingIcon fontSize="small" /> },
    { name: "Lift", icon: <ElevatorIcon fontSize="samll" /> },
    { name: "Power Backup", icon: <PowerIcon fontSize="small" /> },
    { name: "Gymnasium", icon: <FitnessCenterIcon fontSize="small" /> },
    { name: "Swimming Pool", icon: <PoolIcon fontSize="small" /> },
    { name: "Park", icon: <ParkIcon fontSize="small" /> }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-left border-b-2 border-gray-300 pb-2 mb-4">
        Amenities
      </h2>

      {/* Single-row layout */}
      <div className="flex justify-between items-center gap-6">
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full shadow-md">{amenity.icon}</div>
            <span className="text-gray-700 mt-2 text-sm">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;