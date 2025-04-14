import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/wishlistSlice";
import { useNavigate } from "react-router-dom";




const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inside component

  if (wishlist.length === 0)
    return <p className="text-center">Your wishlist is empty.</p>;

  const handleBuyNow = (property) => {
    // Replace this with navigation or payment logic
    alert(`Proceeding to buy: ${property.name}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {wishlist.map((property) => (
          <div key={property.id} className="border p-4 rounded shadow-md">
            <img
              src={property?.hero_images?.[0]}
              alt={property.name}
              className="h-40 w-full object-cover mb-3 rounded"
            />
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p className="text-sm text-gray-500">{property.location}</p>
            <p className="text-blue-600 font-bold">₹ {property.price_range}</p>

            <div className="mt-3 flex justify-between items-center">
              <button
                onClick={() => dispatch(removeFromWishlist(property.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>

              <button
              onClick={() => navigate("/proceed-to-pay", { state: { property } })}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
