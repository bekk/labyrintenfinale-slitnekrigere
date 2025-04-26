import { Routes, Route, Navigate } from "react-router";
import CastNavbar from "~/components/Navbar/cast-navbar";
import Footer from "~/components/Footer/Footer";
import CastBrowse from "./Cast/cast-browse";
import CastProfile from "./Cast/cast-profile";

export default function CastHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CastNavbar />
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/cast/browse" replace />} />
          <Route path="/browse" element={<CastBrowse />} />
          <Route path="/profile" element={<CastProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}