import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { ImageCarousel } from "~/components/ImageCarousel/ImageCarousel";
   
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
        name: "Paradise Hotel",
        description: "Norges mest populære reality-show hvor deltakerne bor på et luksushotell i Mexico.",
        imageUrl: "https://perheimly.no/wp-content/uploads/2015/09/paradisehotel-logo.jpg"
      },
      {
        name: "Ex on the Beach",
        description: "Single på ferie møter sine eks-kjærester i dramatiske omstendigheter.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f-qCXsoS6KYy0KfRnG3MVaCyo2zIj1mHjw&s"
      },
      {
        name: "Farmen",
        description: "Deltakere lever som bønder gjorde på starten av 1900-tallet i kamp om en gård.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4l_FFLAItnivpnurejgNtUs3PtrlcmsWhg&s"
      },
      {
        name: "71 Grader Nord",
        description: "Konkurransedeltagere går gjennom utfordrende ekspedisjoner i norsk natur.",
        imageUrl: "https://image.tmdb.org/t/p/original/q1ofNBDlxnL0BbSobzk3I3jWtfB.png"
      }
    ];

    return (
      <div className="pt-16 p-4 container mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">RealityCasting</h1>
        <p className="text-xl mb-8 text-gray-700">Norges første plattform som kobler reality-TV produsenter direkte med potensielle deltakere</p>
        
        {/* Main content area with 2/3 - 1/3 split */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 2/3 Featured Profile - "Our most popular user" */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ukens Mest Populære Søker</h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <CardWithCarousel 
                name="Magnus"
                age={27}
                text="Utadvendt og eventyrlysten. Elsker utfordringer og har ingen filter. Tidligere konkurransesvømmer med masse energi. Drømmer om å delta i et reality-show for å vise min ekte personlighet og kanskje finne kjærligheten!"
                images={[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  "https://images.unsplash.com/photo-1655874819398-c6dfbec68567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                ]}
              />
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
              
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 mb-2">Er du et produksjonsselskap?</h3>
                <p className="text-sm text-indigo-700 mb-3">Få tilgang til tusener av potensielle reality-deltakere som er klare for ditt neste show!</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Registrer ditt selskap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
