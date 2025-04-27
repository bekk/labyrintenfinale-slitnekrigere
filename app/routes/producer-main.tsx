import React from "react";
import ShowBox from "../components/showBox/showBox";
import { NavLink, useNavigate } from "react-router";
import ProdNavbar from "~/components/Navbar/prod-navbar";

const items = [
  { title: "Boksen", imageUrl: "https://sumo.cdn.tv2.no/imageapi/v3/img/676148ef498e56639cd697a5-1738138927014" },
  { title: "Spillet", imageUrl: "https://sumo.cdn.tv2.no/imageapi/v3/img/67b2ef23498eadb12026cf37-1745556784700" },
  { title: "71 Grader Nord", imageUrl: "https://eu1-prod-images.disco-api.com/2022/08/19/869953bd-2e1c-406d-87ee-7b037465d5fc.jpeg?w=1200&f=JPG&p=true&q=60" },
  { title: "Farmen", imageUrl: "https://sumo.cdn.tv2.no/imageapi/v3/img/5fc546af498e70bbdd3b3b3c-1700654221807" },
];

function goToQuestions(goTo: (a: string) => void) {
    goTo("/make-questions");
}

const DashboardPage: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      <ProdNavbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ShowBox key={item.title} title={item.title} imageUrl={item.imageUrl} />
          ))}
          <button className="flex items-center justify-center h-40 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition" onClick= {() => {goToQuestions(navigate)}} >
            Add More +
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
