import React from "react";

interface UserPreviewTileProps {
  title: string;
  imageUrl: string;
  description: string;
  gender?: string;
  age?: number;
  height?: string;
  weight?: string;
}

const UserPreviewTile: React.FC<UserPreviewTileProps> = ({ 
  title, 
  imageUrl, 
  description,
  gender = "Not specified",
  age = 25,
  height = "175 cm",
  weight = "70 kg" 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg relative w-[800px] flex flex-row h-[533px] transition-transform duration-300 hover:shadow-xl">
      {/* Image on the left side (30% width) */}
      <div className="relative w-1/3 h-full">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>
      
      {/* Content area on the right side */}
      <div className="w-2/3 p-4 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        
        {/* Info section with details - more compact */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-base mt-3">
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 mr-1">Gender:</span>
            <span className="text-gray-800">{gender}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 mr-1">Age:</span>
            <span className="text-gray-800">{age}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 mr-1">Height:</span>
            <span className="text-gray-800">{height}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 mr-1">Weight:</span>
            <span className="text-gray-800">{weight}</span>
          </div>
        </div>
        
        {/* Description at the bottom - truncated */}
        <p className="text-gray-600 text-base mt-4 line-clamp-2 italic">"{description}"</p>
      </div>
    </div>
  );
};

export default UserPreviewTile;