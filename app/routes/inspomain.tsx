import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { ImageCarousel } from "~/components/ImageCarousel/ImageCarousel";
import { NavLink } from "react-router";
   
export function CardDefault({ 
    text, 
    name = "Alex", 
    age = 28, 
    imageUrl = "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }: { 
    text: string;
    name?: string;
    age?: number;
    imageUrl?: string;
  }) {
    return (
      <Card className="mt-6 w-96 overflow-hidden shadow-xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <div className="relative">
          <CardHeader 
            color="blue-gray" 
            className="relative h-96 m-0 p-0" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <img
              src={imageUrl}
              alt="profile-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <Typography
              variant="h4"
              color="white"
              className="mb-1 font-bold flex items-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {name}, {age}
            </Typography>
          </div>
        </div>
        
        <CardBody className="p-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <Typography 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            className="text-gray-700"
          >
            {text}
          </Typography>
        </CardBody>
        
        <CardFooter
          className="flex justify-center gap-4 pt-0 pb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Button 
            color="red" 
            size="lg" 
            className="rounded-full p-3" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          <Button 
            color="green" 
            size="lg" 
            className="rounded-full p-3" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  // Card with carousel instead of a single image
  export function CardWithCarousel({ 
    text, 
    name = "Alex", 
    age = 28, 
    images = [
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  }: { 
    text: string;
    name?: string;
    age?: number;
    images?: string[];
  }) {
    return (
      <Card className="mt-6 w-96 overflow-hidden shadow-xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <div className="relative">
          <CardHeader 
            color="blue-gray" 
            className="relative h-96 m-0 p-0" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <ImageCarousel 
              images={images}
              height="384px" // h-96 is 24rem which is 384px
              width="100%"
              autoPlayInterval={5000}
            />
          </CardHeader>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
            <Typography
              variant="h4"
              color="white"
              className="mb-1 font-bold flex items-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {name}, {age}
            </Typography>
          </div>
        </div>
        
        <CardBody className="p-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <Typography 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            className="text-gray-700"
          >
            {text}
          </Typography>
        </CardBody>
        
        <CardFooter
          className="flex justify-center gap-4 pt-0 pb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Button 
            color="red" 
            size="lg" 
            className="rounded-full p-3" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          <Button 
            color="green" 
            size="lg" 
            className="rounded-full p-3" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  export default function InspoMain() {
    // Reality TV production companies/shows looking for contestants
    const productionCompanies = [
      {
        name: "Paradise Hotel Norge",
        description: "Søker utadvendte deltakere mellom 20-30 år for en eksklusiv sesong på et luksushotell i Mexico.",
        imageUrl: "https://www.medier24.no/wp-content/uploads/2022/10/paradise-hotel-solbergs-750x380.jpg"
      },
      {
        name: "Ex on the Beach Norge",
        description: "Casting pågår nå! Søker sterke personligheter som tør å utfordre seg selv foran kamera.",
        imageUrl: "https://gfx.nrk.no/CkxPbe8LZWcBddKNMXOHjAPIryrffrfAYNW6XtW_JMvQ"
      },
      {
        name: "Farmen",
        description: "Vil du teste dine grenser? Bli med på norsk TVs mest populære overlevelseskonkurranse.",
        imageUrl: "https://www.varden.no/wp-content/uploads/2023/09/Farmen.jpg"
      },
      {
        name: "71 Grader Nord",
        description: "Søker eventyrlystne deltakere som er i god fysisk form for vår jubileumssesong 2025.",
        imageUrl: "https://www.tvnorge.no/getattachment/Programmer/71-grader-nord-kjendis/71-kjendis.png.aspx?width=1200&format=jpg"
      }
    ];

    return (
      <div className="relative pt-16 px-4 pb-8 container mx-auto">
        {/* Login button in top right */}
        <div className="absolute top-4 right-4">
          <NavLink to="/login">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Logg Inn
            </button>
          </NavLink>
        </div>

        <h1 className="text-4xl font-bold text-blue-600 mb-3">RealityCasting</h1>
        <p className="text-xl mb-6 text-gray-700">Norges første plattform som kobler reality-TV produsenter direkte med potensielle deltakere</p>
        
        {/* Two prominent buttons for different user types - fixed styling */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="flex-1 py-4 flex items-center justify-center gap-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Bli med som deltaker
          </button>
          <button className="flex-1 py-4 flex items-center justify-center gap-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 4.996 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 4.996 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C4.254 8.25 3.75 8.754 3.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m0-3.75h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m0 0h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M4.875 21h14.25m0 0h1.5m0 0c.621 0 1.125-.504 1.125-1.125v-1.5m0 0c0-.621-.504-1.125-1.125-1.125M19.125 17.25h-1.5m0 0c-.621 0-1.125.504-1.125 1.125v1.5m1.5-3.75C17.254 15.75 16.75 16.254 16.75 16.875v1.5m1.5-3.75h-1.5m0 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.5h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5M9.75 12h4.5m0-8.25H9.75m0 0c-.621 0-1.125.504-1.125 1.125v1.5m0 0c0 .621.504 1.125 1.125 1.125m0 0h4.5m0 0c.621 0 1.125-.504 1.125-1.125v-1.5m0 0c0-.621-.504-1.125-1.125-1.125M9.75 21h4.5m0 0c.621 0 1.125-.504 1.125-1.125v-1.5m0 0c0-.621-.504-1.125-1.125-1.125m0 0H9.75m0 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125" />
            </svg>
            Registrer produksjonsselskap
          </button>
        </div>
        
        {/* Main content area with 2/3 - 1/3 split */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 2/3 Featured Profile - "Our most popular user" with single image */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ukens Mest Populære Søker</h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <Card className="w-full overflow-hidden shadow-xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <div className="relative">
                  <CardHeader 
                    color="blue-gray" 
                    className="relative h-[500px] m-0 p-0" 
                    placeholder="" 
                    onPointerEnterCapture={() => {}} 
                    onPointerLeaveCapture={() => {}}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Magnus profile image"
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                    <Typography
                      variant="h3"
                      color="white"
                      className="mb-1 font-bold flex items-center"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Magnus, 27
                    </Typography>
                    <Typography
                      color="white"
                      className="opacity-80"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Oslo, Norge
                    </Typography>
                  </div>
                </div>
                
                <CardBody className="p-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <Typography 
                    placeholder="" 
                    onPointerEnterCapture={() => {}} 
                    onPointerLeaveCapture={() => {}}
                    className="text-gray-700 text-lg"
                  >
                    "Utadvendt og eventyrlysten. Elsker utfordringer og har ingen filter. Tidligere konkurransesvømmer med masse energi. Drømmer om å delta i et reality-show for å vise min ekte personlighet og kanskje finne kjærligheten!"
                  </Typography>
                </CardBody>
                
                <CardFooter
                  className="flex justify-center gap-8 pt-0 pb-6"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <Button 
                    color="red" 
                    size="lg" 
                    className="rounded-full p-4" 
                    placeholder="" 
                    onPointerEnterCapture={() => {}} 
                    onPointerLeaveCapture={() => {}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                  <Button 
                    color="green" 
                    size="lg" 
                    className="rounded-full p-4" 
                    placeholder="" 
                    onPointerEnterCapture={() => {}} 
                    onPointerLeaveCapture={() => {}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">Hvorfor produsenter elsker Magnus:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Har blitt kontaktet av <strong>7 produksjonsselskaper</strong> den siste uken</li>
                <li>Fikk <strong>94% positiv</strong> tilbakemelding fra vårt castingpanel</li>
                <li>Har tidligere erfaring fra mindre TV-produksjoner</li>
                <li>Verifisert profil med komplett audition-video</li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Video audition-klipp:</h4>
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* 1/3 Production Companies looking for contestants */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Aktive Castinger</h2>
            <div className="space-y-4">
              {productionCompanies.map((company, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={company.imageUrl} 
                    alt={company.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{company.name}</h3>
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Ny casting</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{company.description}</p>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      Søk nå →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
