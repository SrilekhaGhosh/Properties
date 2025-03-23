const SimilarProperties = ({ properties, OnSelect }) => {
  if (!properties || properties.length === 0) {
    return <p className="text-center text-gray-500">No similar properties found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left">Similar Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105"
            onClick={() => OnSelect(property)} 
          >
            <img
              src={property?.hero_images?.[0]}
              alt={property.name}
              className="w-full h-36 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h3 className="text-md font-semibold truncate">{property.name}</h3>
              <p className="text-sm text-gray-500 truncate">{property.location}</p>
              <p className="text-md font-semibold text-blue-600">
                ₹ {property.price_range}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
