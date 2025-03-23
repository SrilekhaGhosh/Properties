import React from "react";

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

      {/* Contact Buttons */}
      <div className="flex gap-2 mt-3">
        <button className="flex items-center justify-center bg-green-600 text-white px-4 py-0 rounded-md flex-1 text-sm font-semibold shadow-md">
          📞 Call
        </button>
        <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-0 rounded-md flex-1 text-sm font-semibold shadow-md">
          ✉️ Email
        </button>
        <button className="flex items-center justify-center bg-green-500 text-white px-4 py-0 rounded-md flex-1 text-sm font-semibold shadow-md">
          💬 WhatsApp
        </button>
      </div>

      {/* View More */}
      <div className="text-blue-500 text-center mt-3 text-sm cursor-pointer">
        View all properties ➝
      </div>
    </div>
  );
};

export default AgentCard;
