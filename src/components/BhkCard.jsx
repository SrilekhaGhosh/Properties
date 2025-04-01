import { Card, CardContent, Typography, Box } from "@mui/material";

const BHKCard = ({ bhk, isSelected, onSelect }) => {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 border-[1.5px] rounded-lg 
        ${isSelected ? "border-red-500 shadow-lg scale-105" : "border-gray-300 hover:border-gray-500"}`}
      onClick={() => onSelect(bhk)}
      sx={{
        minWidth: 240, // Matches image width
        maxWidth: 320, // Prevents excessive expansion
        height: 150, // Matches image height
        padding: 0, // Removed unnecessary padding
        borderRadius: "8px",
        display: "inline-block", // Ensures it stays in a line
        boxShadow: isSelected ? "0px 0px 8px rgba(255, 0, 0, 0.5)" : "none", // Adds shadow to selected card
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%", // Ensures proper alignment
          padding: "10px", // Adjusted padding for tighter layout
        }}
      >
        {/* BHK Type Box */}
        <Box
          sx={{
            backgroundColor: "#FEE2E2", // Light Pink Background
            padding: "6px 10px",
            borderRadius: "6px",
            textAlign: "left",
            display: "inline-block",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000", // **Black text** as per the image
            }}
          >
            {bhk.type} Apartment
          </Typography>
        </Box>

             {/* Carpet Area */}
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#000000", // **Black text** as in the image
            textAlign: "left",
          }}
        >
          Carpet Area: <br/>
          {bhk.carpet_area} 
        </Typography>
        {/* Price */}
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#3D3D3D",
            marginTop: "4px",
            textAlign: "left",
          }}
        >
        <span className="font-bold">₹ {bhk.price}</span>
        <span className="text-orange-500"> + Charges</span>
        </Typography>

        {/* Divider */}
       

       
      </CardContent>
    </Card>
  );
};

export default BHKCard;
