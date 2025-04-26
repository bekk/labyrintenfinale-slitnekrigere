import type { Route } from "./+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { NavLink, useNavigate } from "react-router";
import QuestionMarkIcon from "~/icons/QuestionMarkIcon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "CASTMATCH | Find Your Perfect Cast" }];
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-600">CASTMATCH</div>
          <div className="flex items-center gap-6">
            <NavLink to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</NavLink>
            <NavLink to="/browse" className="text-gray-700 hover:text-orange-600 transition-colors">Browse</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</NavLink>
            <NavLink 
              to="/login"
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Background */}
      <div className="relative pt-28 pb-80 overflow-hidden">
        {/* Full background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://sdmntpritalynorth.oaiusercontent.com/files/00000000-4f30-6246-b20a-0e0c361bd516/raw?se=2025-04-26T10%3A04%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=2380e4ea-e256-52a5-9125-0f7c347bd171&skoid=9370dd2b-ca43-4270-bed5-18b1b71f8fa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-26T06%3A32%3A23Z&ske=2025-04-27T06%3A32%3A23Z&sks=b&skv=2024-08-04&sig=l7EVqJGe2Qr9cfodys%2BvK4jpnFuQ0UcoATXQeRolAbE%3D')"
            }}
          ></div>
          
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">Where Talent Meets Opportunity</h1>
            <p className="text-xl text-white text-shadow max-w-3xl mx-auto">
              CASTMATCH connects actors and production companies to create the perfect cast for any project.
            </p>
          </div>

          {/* Two-column registration layout */}
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* User Registration */}
            <div className="flex-1 bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-orange-100 transform transition-transform hover:scale-105 duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">For Actors</h2>
                <p className="text-gray-600 mt-2">Create your profile and get discovered by production companies</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Create a professional profile
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Showcase your skills and experience
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Get matched with relevant projects
                </li>
              </ul>
              <button 
                onClick={() => navigate("/register/actor")}
                className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Sign up as Actor
              </button>
            </div>

            {/* Company Registration */}
            <div className="flex-1 bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-orange-100 transform transition-transform hover:scale-105 duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-orange-200 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">For Companies</h2>
                <p className="text-gray-600 mt-2">Find the perfect cast for your productions</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Post casting calls for your projects
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Browse through actor profiles
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Use intelligent matching algorithms
                </li>
              </ul>
              <button 
                onClick={() => navigate("/register/company")}
                className="w-full py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Sign up as Company
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How CASTMATCH Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Create a Profile</h3>
              <p className="text-gray-600">Build your professional profile highlighting your skills and experience</p>
            </div>
            
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Get Discovered</h3>
              <p className="text-gray-600">Our matching algorithm connects you with the right opportunities</p>
            </div>
            
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Book Projects</h3>
              <p className="text-gray-600">Secure roles and manage your casting schedule all in one place</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed right-10 bottom-10">
        <ButtonWithIcon
          text="Help"
          onClick={() => navigate("/help")}
          icon={<QuestionMarkIcon />}
        />
      </div>
    </>
  );
}
