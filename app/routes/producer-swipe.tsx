import React, { useState } from "react";
import { useParams } from "react-router";
import UserPreviewTile from "../components/userPreviewTile/userPreviewTile";

const SwipePage: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  const [tiles, setTiles] = useState([
    {
      title: `1`,
      imageUrl: "https://placekitten.com/400/300",
      description: "A cute little animal!",
    },
    {
      title: `2`,
      imageUrl: "https://placekitten.com/401/300",
      description: "Another cute moment!",
    },
    {
      title: `3`,
      imageUrl: "https://placekitten.com/402/300",
      description: "More adorable moments!",
    },
  ]);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = ["Cute", "Funny", "Serious", "Adventurous", "Sleepy"];

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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      
      {/* Filter Button */}
      <div className="absolute top-6 right-6">
        <button
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
          onClick={() => setShowFilter(!showFilter)}
        >
          {/* TODO add filter */}
          {/* <Filter className="h-6 w-6 text-gray-600" /> */}
        </button>
      </div>
      <h1 className="mb-4 text-2xl text-black">Velg deltakere til {title}:</h1>
      {/* Filter Panel */}
      {showFilter && (
        <div className="absolute top-20 right-6 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
          <h3 className="text-md font-bold text-gray-700 mb-2">Filter Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-full text-sm ${
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

      {/* Stack of Big Tiles */}
      <div className="relative w-80 h-96">
        {tiles.map((tile, index) => (
          <div
            key={tile.title}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `translateY(${index * 10}px)`, zIndex: tiles.length - index }}
          >
            <UserPreviewTile {...tile} />
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      {tiles.length > 0 && (
        <div className="flex justify-between w-60 mt-8">
          <button
            onClick={() => {handleTileAction("red")}}
            className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-red-600"
          >
            ❌
          </button>
          <button
            onClick={() => {handleTileAction("yellow")}}
            className="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-yellow-500"
          >
            ❓
          </button>
          <button
            onClick={() => {handleTileAction("green")}}
            className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-green-600"
          >
            ✅
          </button>
        </div>
      )}
    </div>
  );
};

export default SwipePage;
