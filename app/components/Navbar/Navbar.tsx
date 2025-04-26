import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white shadow-md z-10 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-orange-600">
          CASTMATCH
        </NavLink>
        <div className="flex items-center gap-6">
          {[
            { to: "/about", label: "About" },
            { to: "/browse", label: "Browse" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive } : { isActive:boolean}) =>
                `text-gray-700 hover:text-orange-600 transition-colors ${
                  isActive ? "font-semibold text-orange-600" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
