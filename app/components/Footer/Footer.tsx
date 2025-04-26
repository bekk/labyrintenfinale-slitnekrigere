import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto text-center text-gray-600 space-y-4">
        <div className="flex justify-center gap-6">
          <NavLink to="/about" className="hover:text-orange-600 transition-colors">
            About
          </NavLink>
          <NavLink to="/browse" className="hover:text-orange-600 transition-colors">
            Browse
          </NavLink>
          <NavLink to="/contact" className="hover:text-orange-600 transition-colors">
            Contact
          </NavLink>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} CASTMATCH. All rights reserved.</p>
      </div>
    </footer>
  );
}
