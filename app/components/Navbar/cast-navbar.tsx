import { NavLink } from "react-router";
import { useState } from "react";

export default function CastNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <NavLink to="/cast" className="flex items-center">
              <span className="text-white font-bold text-xl">CASTMATCH</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/cast/browse" 
              className={({ isActive } : {isActive:boolean}) => 
                isActive 
                  ? "text-white font-bold border-b-2 border-white px-3 py-2" 
                  : "text-white hover:text-orange-200 px-3 py-2"
              }
            >
              Browse Shows
            </NavLink>
            <NavLink 
              to="/cast/profile" 
              className={({ isActive } : {isActive:boolean}) => 
                isActive 
                  ? "text-white font-bold border-b-2 border-white px-3 py-2" 
                  : "text-white hover:text-orange-200 px-3 py-2"
              }
            >
              My Profile
            </NavLink>
            <NavLink 
              to="/"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-100 transition ml-4">
                Logout
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/cast/browse" 
                className={({ isActive } : {isActive:boolean}) => 
                  isActive 
                    ? "text-white font-bold bg-orange-700 px-3 py-2 rounded" 
                    : "text-white hover:bg-orange-700 px-3 py-2 rounded"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Shows
              </NavLink>
              <NavLink 
                to="/cast/profile" 
                className={({ isActive } : {isActive:boolean}) => 
                  isActive 
                    ? "text-white font-bold bg-orange-700 px-3 py-2 rounded" 
                    : "text-white hover:bg-orange-700 px-3 py-2 rounded"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </NavLink>
              <button className="bg-white text-orange-600 px-3 py-2 rounded hover:bg-orange-100 transition text-left">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}