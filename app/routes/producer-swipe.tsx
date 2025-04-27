import React, { useState } from "react";
import { useParams } from "react-router";
import UserPreviewTile from "../components/userPreviewTile/userPreviewTile";

const SwipePage: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  const [tiles, setTiles] = useState([
    {
      title: "John Doe",
      imageUrl: "https://placekitten.com/400/300",
      description: "Loves mountain hiking and quiet evenings.",
      gender: "Male",
      age: 28,
      height: "183 cm",
      weight: "76 kg"
    },
    {
      title: "Jane Smith",
      imageUrl: "https://placekitten.com/401/300",
      description: "Professional chef with a passion for travel.",
      gender: "Female",
      age: 31,
      height: "168 cm",
      weight: "62 kg"
    },
    {
      title: "Alex Johnson",
      imageUrl: "https://placekitten.com/402/300",
      description: "Tech enthusiast and amateur photographer.",
      gender: "Non-binary",
      age: 25,
      height: "175 cm",
      weight: "70 kg"
    },
  ]);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = ["Adventurous", "Funny", "Sleepy", "Male", "Female", "Short", "Tall"];

  // 👉 Removes the top tile when any button is clicked
  const handleTileAction = (color: string) => {
    if (color === "yellow") {
      // sent tile to the back
      setTiles((prevTiles) => {
        if (prevTiles.length === 0) return prevTiles;
        const [first, ...rest] = prevTiles;
        return [...rest, first];
      });
    } else {
      // remove top tile
      setTiles((prevTiles) => prevTiles.slice(1));
    }
  };

  // 👉 Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* Filter Button */}
      <div className="absolute top-4 right-4">
        <button
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
          onClick={() => setShowFilter(!showFilter)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>
      
      {/* Page Title */}
      <h1 className="mb-6 text-2xl font-bold text-black">Velg deltakere til <span className="text-blue-600">{title}</span>:</h1>
      
      {/* Filter Panel */}
      {showFilter && (
        <div className="absolute top-16 right-4 bg-white shadow-xl rounded-lg p-3 w-56 z-50">
          <h3 className="text-base font-bold text-gray-700 mb-2">Filter Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-full text-xs ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stack of Tiles - Reduced size for better fit */}
      <div className="relative w-[750px] h-[500px] mb-6">
        {tiles.map((tile, index) => (
          <div
            key={tile.title}
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transform: `translateY(${index * 8}px) scale(${1 - index * 0.03})`, 
              zIndex: tiles.length - index,
              opacity: index === 0 ? 1 : 0.9 - index * 0.1
            }}
          >
            <UserPreviewTile {...tile} />
          </div>
        ))}
      </div>

      {/* Bottom Buttons - Smaller size */}
      {tiles.length > 0 && (
        <div className="flex justify-center gap-6 mt-2">
          <button
            onClick={() => {handleTileAction("red")}}
            className="w-20 h-20 rounded-full bg-white border-4 border-red-500 text-red-500 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-red-50"
            aria-label="Dislike"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            onClick={() => {handleTileAction("yellow")}}
            className="w-20 h-20 rounded-full bg-white border-4 border-yellow-400 text-yellow-400 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-yellow-50"
            aria-label="Stash for later"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          
          <button
            onClick={() => {handleTileAction("green")}}
            className="w-20 h-20 rounded-full bg-white border-4 border-green-500 text-green-500 flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-green-50"
            aria-label="Like"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      )}

      {/* Empty state message */}
      {tiles.length === 0 && (
        <div className="text-center mt-8">
          <h3 className="text-xl font-bold text-gray-700">No more profiles!</h3>
          <p className="text-gray-500 mt-2">Check back later for more options.</p>
        </div>
      )}
    </div>
  );
};

export default SwipePage;
