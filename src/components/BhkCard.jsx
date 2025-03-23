import { Card, CardContent, Typography, Box } from "@mui/material";

const BHKCard = ({ bhk, isSelected, onSelect }) => {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 border-[1.5px] rounded-lg 
      ${isSelected ? "border-red-500 shadow-lg scale-105" : "border-gray-300 hover:border-gray-500"}`}
      onClick={() => onSelect(bhk)}
      sx={{
        minWidth: 180,
        padding: "12px",
        borderRadius: "8px",
      }}
    >
      <CardContent className="p-2">
        {/* BHK Type with Background */}
        <Box
          sx={{
            backgroundColor: "#FEE2E2", // Light red/pinkish shade (similar to image)
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "6px",
          }}
        >
          <Typography
            variant="body1"
            className="font-bold text-gray-800"
            sx={{ fontSize: "16px", fontWeight: 600, color: "#B91C1C" }} // Darker red text
          >
            {bhk.type} Apartment
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          variant="body2"
          className="text-gray-600 mt-1"
          sx={{ fontSize: "14px", fontWeight: 500 }}
        >
          ₹ {bhk.price} Cr
        </Typography>

        {/* Divider */}
        <Box
          className="w-full bg-gray-300 my-2"
          sx={{ height: "1px", backgroundColor: "#E0E0E0" }}
        />

        {/* Area */}
        <Typography
          variant="body2"
          className="text-gray-700"
          sx={{ fontSize: "12px", fontWeight: 500 }}
        >
          Carpet Area: {bhk.carpet_area} sqft
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BHKCard;
