import { useEffect, useState } from "react";

const HeroSection = ({ images }) => {
  const [selectedImage, setSelectedImage]  = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }
  , [images]);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-4 gap-4">
      
      <div className="col-span-3">
        <img
          src={selectedImage}
          alt="Main Property"
          className="w-full h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

   
      <div className="h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-full h-[100px] object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-blue-500 scale-105"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;