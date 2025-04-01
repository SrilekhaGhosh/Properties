
import BHKCard from './BhkCard';
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useState } from "react";

const BHKOptions = ({ bhkOptions, onSelectBHK }) => {
  const [selectedBHK, setSelectedBHK] = useState(bhkOptions[0]);

    return (
      <div
        className="max-w-7xl mx-auto p-4 t+py-4 overflow-x-auto whitespace-nowrap"
        style={{
          display: "flex",
          gap: "16px", // Space between cards
          overflowX: "auto", // Enables horizontal scrolling
          whiteSpace: "nowrap", // Keeps all cards in a single line
          paddingBottom: "10px", // Prevents scrollbar overlap
        }}
      >
        {bhkOptions.map((bhk, index) => (
          <BHKCard
            key={index}
            bhk={bhk}
            isSelected={selectedBHK === bhk}
            onSelect={(bhk) => {
              setSelectedBHK(bhk);
              onSelectBHK(bhk);
            }}
          />
        ))}
      </div>
    );
  };
export default BHKOptions;
