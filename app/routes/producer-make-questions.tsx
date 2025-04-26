import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function goBack(goTo: (a: string) => void) {
    goTo("/producer-main");
}

const AddContentPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleAddQuestion = () => {
    setQuestions((prev) => [...prev, ""]);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      info,
      image,
      questions,
    });
    // Clear form if you want
    setTitle("");
    setInfo("");
    setImage(null);
    setQuestions([]);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create New Content</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              placeholder="Enter a title..."
            />
          </div>

          {/* Info TextArea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Info</label>
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              required
              rows={4}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              placeholder="Add more detailed information..."
            />
          </div>

          {/* Add Image (dummy upload) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Add Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
              className="w-full p-3 border rounded-md text-gray-900 bg-gray-50 cursor-pointer"
            />
            {image && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {image.name}
              </p>
            )}
          </div>

          {/* Add Questions */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Questions</label>
              <button
                type="button"
                onClick={handleAddQuestion}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
              >
                + Add Question
              </button>
            </div>
            <div className="space-y-3">
              {questions.map((q, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={q}
                  onChange={(e) => handleQuestionChange(idx, e.target.value)}
                  placeholder={`Question ${idx + 1}`}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                />
              ))}
            </div>
          </div>

          {/* Create Button */}
          <button
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition font-bold" onClick={() => {goBack(navigate)}}
          >
            Create
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddContentPage;
