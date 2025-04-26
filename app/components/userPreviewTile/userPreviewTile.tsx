import React from "react";

interface UserPreviewTileProps {
  title: string;
  imageUrl: string;
  description: string;
}

const UserPreviewTile: React.FC<UserPreviewTileProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl relative w-80 h-96 transition-transform duration-300 hover:scale-102">
      {/* Image with gradient overlay */}
      <div className="relative h-2/3">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Content area */}
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default UserPreviewTile;