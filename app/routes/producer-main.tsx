import React from "react";
import ShowBox from "../components/showBox/showBox";
import { NavLink, useNavigate } from "react-router";

const items = [
  { title: "Cats", imageUrl: "https://placekitten.com/300/200" },
  { title: "Dogs", imageUrl: "https://placedog.net/300/200" },
  { title: "Birds", imageUrl: "https://placebear.com/300/200" },
];

function goToQuestions(goTo: (a: string) => void) {
    goTo("/make-questions");
}

const DashboardPage: React.FC = () => {
  let navigate = useNavigate();
  return (
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
  );
};

export default DashboardPage;
