import { IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';

const SimilarProperties = ({ properties, OnSelect }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const isLiked = (id) => wishlist.some((item) => item.id === id);

  const handleLike = (property) => {
    if (isLiked(property.id)) {
      dispatch(removeFromWishlist(property.id));
    } else {
      dispatch(addToWishlist(property));
    }
  };

  if (!properties || properties.length === 0) {
    return <p className="text-center text-gray-500">No similar properties found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left mb-3">Similar Properties</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 min-w-[250px]"
              onClick={() => OnSelect(property)}
            >
              <div className="relative">
                <img
                  src={property?.hero_images?.[0]}
                  alt={property.name}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(property);
                  }}
                  className="text-left absolute top-2 right-2 bg-white rounded-full shadow-md"
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isLiked(property.id) ? (
                    <FavoriteIcon fontSize="small" className="text-red-500" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" className="text-gray-500" />
                  )}
                </IconButton>
              </div>

              <div className="p-3">
                <h3 className="text-left text-md font-semibold truncate">{property.name}</h3>
                <p className="text-left text-sm text-gray-500 truncate">{property.location}</p>
                <p className="text-left text-md font-semibold text-blue-600">
                  ₹ {property.price_range}
                </p>
              </div>

              <div className="px-3 pb-3">
                <Button
                  variant="outlined"
                  fullWidth
                  className="!border-gray-400 !text-black !rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    OnSelect(property);
                  }}
                >
                  View more details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperties;
