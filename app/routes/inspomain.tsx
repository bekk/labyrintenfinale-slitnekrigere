import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
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
  

    export default function InspoMain() {
        return (
        <div className="pt-16 p-4 container mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Inspo Main</h1>
            <CardDefault text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
        );
    }