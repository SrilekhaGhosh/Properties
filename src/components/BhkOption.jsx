import { useState } from "react";
import BHKCard from './BhkCard';

const BHKOptions = ({ bhkOptions, onSelectBHK }) => {
    //console.log(bhkOptions);
  const [selectedBHK, setSelectedBHK] = useState(bhkOptions[0]);

  return (
    <div className="max-w-7xl mx-auto p-4">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </div>
  );
};

export default BHKOptions;
