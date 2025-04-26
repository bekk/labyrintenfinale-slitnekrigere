import React from "react";
import { Link } from "react-router";

interface BoxProps {
  title: string;
  imageUrl: string;
}

const ShowBox: React.FC<BoxProps> = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4 text-center">
        <Link to={`/swipe/${encodeURIComponent(title)}`} className="text-lg font-bold text-gray-800 hover:text-blue-500">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ShowBox;
