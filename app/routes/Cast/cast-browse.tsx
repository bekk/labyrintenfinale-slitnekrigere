import { useState, useEffect } from "react";

interface ShowCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isActive: boolean;
}

export default function CastBrowse() {
  const [shows, setShows] = useState<ShowCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setShows([
        {
          id: 1,
          title: "Paradise Hotel",
          description: "Looking for outgoing singles between 20-30 years for our tropical reality show. Must be comfortable on camera and in social settings.",
          image: "/images/paradise-hotel.jpg",
          tags: ["Dating", "Reality", "Competition"],
          isActive: true
        },
        {
          id: 2,
          title: "Kompani Lauritzen",
          description: "Seeking determined individuals with grit and resilience for a military-style reality program. Physical fitness required.",
          image: "/images/kompani-lauritzen.jpg",
          tags: ["Challenge", "Military", "Discipline"],
          isActive: true
        },
        {
          id: 3,
          title: "Ex on the Beach",
          description: "Casting singles with big personalities and interesting dating histories for a beach vacation with unexpected surprises.",
          image: "/images/ex-on-the-beach.jpg",
          tags: ["Dating", "Drama", "Beach"],
          isActive: true
        },
        {
          id: 4,
          title: "Farmen",
          description: "Can you live like they did in 1923? We're looking for contestants who can thrive in a traditional farm environment.",
          image: "/images/farmen.jpg",
          tags: ["Survival", "History", "Farm"],
          isActive: true
        },
        {
          id: 5, 
          title: "71° Nord",
          description: "Adventure-seekers wanted for Norway's ultimate outdoor challenge. Test your limits in the beautiful but harsh Norwegian wilderness.",
          image: "/images/71-nord.jpg",
          tags: ["Adventure", "Outdoor", "Challenge"],
          isActive: true
        },
        {
          id: 6,
          title: "Norske Talenter",
          description: "Got a special talent? Show Norway what you've got on our prestigious talent competition.",
          image: "/images/norske-talenter.jpg", 
          tags: ["Talent", "Performance", "Competition"],
          isActive: false
        },
        {
          id: 7,
          title: "Skal vi danse",
          description: "Looking for celebrities and public figures interested in learning ballroom dancing for our competitive dance show.",
          image: "/images/skal-vi-danse.jpg",
          tags: ["Dance", "Celebrity", "Competition"],
          isActive: false
        },
        {
          id: 8,
          title: "Love Island Norge",
          description: "Attractive singles wanted for a summer of love in our luxury villa. Must be single and looking for romance.",
          image: "/images/love-island.jpg",
          tags: ["Dating", "Romance", "Competition"],
          isActive: true
        }
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(shows.flatMap(show => show.tags))
  ).sort();

  const filteredShows = activeFilter
    ? shows.filter(show => show.tags.includes(activeFilter))
    : shows;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse TV Shows</h1>
        <p className="text-gray-600">Discover opportunities matching your profile and preferences</p>
      </div>

      {/* Tag filters */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Filter by category:</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === null
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            All Shows
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === tag
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Show loading state */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShows.map(show => (
            <div 
              key={show.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48 bg-gray-200">
                {/* In a real app, you'd use actual images */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/api/placeholder/400/320')` }}
                ></div>
                {show.isActive && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Active Casting
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{show.title}</h3>
                <p className="text-gray-600 mb-4">{show.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {show.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* No results message */}
      {!isLoading && filteredShows.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No shows found</h3>
          <p className="text-gray-600">Try changing your filter or check back later for new opportunities</p>
        </div>
      )}
    </div>
  );
}