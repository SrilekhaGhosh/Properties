import React from "react";
import { Button } from "@mui/material";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const AgentCard = ({details}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full">
      <div className="flex items-center">
        <img
          src={details.profileImage}
          alt={details.name}
          className="rounded-full w-12 h-12"
        />
        <div className="ml-3">
          <h3 className="font-bold">{details.name}</h3>
          <p className="text-sm text-gray-500">{details.designation}</p>
        </div>
      </div>


<div className="flex gap-2 mt-3">
  {/* Call Button */}
  <button className="flex items-center justify-center bg-teal-700 text-white px-4 py-2 rounded-md flex-1 text-sm font-semibold shadow-md">
  <FaPhoneAlt className="text-white mr-2" />  {/* White phone icon */}
    Call
  </button>

  {/* Email Button */}
  <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md flex-1 text-sm font-semibold shadow-md">
    <span className="material-icons text-white mr-2">✉️</span> {/* Email icon */}
    Email
  </button>

  {/* WhatsApp Button */}
  <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md flex-1 text-sm font-semibold shadow-md">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-5 h-5 mr-2"
    /> {/* WhatsApp logo */}
   
  </button>
</div>
    
     
      <div className="text-blue-500 text-right mt-3 text-sm cursor-pointer">
        View all properties ➝
      </div>
    </div>
  );
};

export default AgentCard;