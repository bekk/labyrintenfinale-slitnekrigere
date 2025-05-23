import type { Route } from "./+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { NavLink, useNavigate } from "react-router";
import QuestionMarkIcon from "~/icons/QuestionMarkIcon";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [{ title: "CASTMATCH | Finn Din Perfekte Rollebesetning" }];
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero-seksjon med sammensatt bakgrunn */}
      <div className="relative pt-28 pb-20 overflow-hidden">
        {/* Sammensatt bakgrunn med to bilder */}
        <div className="absolute inset-0 z-0">
          {/* Venstre side bilde */}
          <div 
            className="absolute top-0 left-0 bottom-0 w-1/2 bg-cover"
            style={{
              backgroundImage: "url('/images/hero1.png')",
              clipPath: 'polygon(0 0, 100% 0, 50.1% 100%, 0 100%)',
              width: '60%',
              right: '0',
              backgroundPosition: 'center top', /* Position from top */
              top: '-24px' /* Offset to account for navbar */
            }}
          ></div>
          
          {/* Høyre side bilde */}
          <div 
            className="absolute top-0 right-0 bottom-0 w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero2.jpeg')",
              clipPath: 'polygon(49.9% 0, 100% 0, 100% 100%, 0 100%)',
              width: '100%',
              left: '140px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">Der Talent Møter Muligheter</h1>
            <p className="text-xl text-white text-shadow max-w-3xl mx-auto">
              CASTMATCH kobler skuespillere og produksjonsselskaper for å skape den perfekte rollebesettingen til ethvert prosjekt.
            </p>
          </div>

          {/* Registrering i to kolonner */}
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* Brukerregistrering */}
            <div className="flex-1 bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-orange-100 transform transition-transform hover:scale-105 duration-300 text-black">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">For Skuespillere</h2>
                <p className="text-gray-600 mt-2">Opprett din profil og bli oppdaget av produksjonsselskaper</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lag en profesjonell profil
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fremhev dine ferdigheter og erfaringer
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bli matchet med relevante prosjekter
                </li>
              </ul>
              <button 
                onClick={() => navigate("register")}
                className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Registrer deg som Skuespiller
              </button>
            </div>

            {/* Selskapsregistrering */}
            <div className="flex-1 bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-orange-100 transform transition-transform hover:scale-105 duration-300 text-black">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-orange-200 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">For Selskaper</h2>
                <p className="text-gray-600 mt-2">Finn den perfekte rollebesetningen til dine produksjoner</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Publiser casting-utlysninger for dine prosjekter
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bla gjennom skuespillerprofiler
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bruk intelligente matchingsalgoritmer
                </li>
              </ul>
              <button 
                onClick={() => navigate("prod-register")}
                className="w-full py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Registrer deg som Selskap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Funksjoner-seksjon */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hvordan CASTMATCH Fungerer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Opprett en Profil</h3>
              <p className="text-gray-600">Bygg din profesjonelle profil som fremhever dine ferdigheter og erfaringer</p>
            </div>
            
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bli Oppdaget</h3>
              <p className="text-gray-600">Vår matchingsalgoritme kobler deg med de rette mulighetene</p>
            </div>
            
            <div className="text-center bg-orange-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Book Prosjekter</h3>
              <p className="text-gray-600">Sikre roller og administrer castingkalenderen din på ett sted</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}