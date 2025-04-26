import React from "react";

interface userPreviewTileProps {
  title: string;
  imageUrl: string;
  description: string;
}

const userPreviewTile: React.FC<userPreviewTileProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative w-80 h-96">
      <img src={imageUrl} alt={title} className="w-full h-2/3 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default userPreviewTile;
