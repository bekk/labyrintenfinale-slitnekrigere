import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavigationX from "~/components/navigationButton/navigationX"

const SimpleQuestionPage: React.FC = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
const { title } = useParams<{ title: string }>();
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/cast/browse");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <NavigationX text="X" path="/cast/browse" />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-6 text-center text-gray-800">Påmelding til {title}:</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Hvorfor vil du være med på {title}?
            </label>
            <input
              type="text"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 text-gray-900"
            />
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Hva er din favorittfarge?
            </label>
            <input
              type="text"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 text-gray-900"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition"
          >
            Send
          </button>

        </form>
      </div>
    </div>
  );
};

export default SimpleQuestionPage;
