import React, { useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

const tvShows = [
  "Ex on the Beach",
  "Farmen",
  "Tropp 3",
  "Paradise Hotel",
  "71° Nord",
  "Kompani Lauritzen",
  "Norske Talenter",
  "Skal vi danse",
  "Love Island Norge",
  "Idol Norge"
];
const civilStatuses = ["Single", "Married", "Divorced", "Widowed"];

export default function CastRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    birthdate: "",
    gender: "",
    location: "",
    civilStatus: "",
    aboutMe: "",
    experience: "",
    dreamRole: "",
    funFact: "",
    selectedShows: [] as string[],
    acceptOtherOpportunities: false,
    profileImages: [] as File[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    let value: any;

    if (target instanceof HTMLInputElement) {
      if (target.type === "checkbox") {
        value = target.checked;
      } else if (target.type === "file" && target.files) {
        value = Array.from(target.files);
      } else {
        value = target.value;
      }
    } else {
      // HTMLTextAreaElement or HTMLSelectElement
      value = (target as HTMLTextAreaElement | HTMLSelectElement).value;
    }

    setFormData(f => ({ ...f, [name]: value }));
  };

  const toggleShow = (show: string) => {
    setFormData(f => ({
      ...f,
      selectedShows: f.selectedShows.includes(show)
        ? f.selectedShows.filter(s => s !== show)
        : [...f.selectedShows, show]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prototype form data:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-12">
          <h1 className="text-3xl font-bold text-center text-orange-600">Register as Cast</h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Info Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Basic Personal Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-300"
                />
                <input
                  name="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-300"
                />
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-300"
                />
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold text-gray-700">Gender</label>
                  <div className="flex gap-6">
                    {['Male','Female','Other'].map(g => (
                      <label key={g} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                          className="h-4 w-4"
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Civil Status</label>
                  <select
                    name="civilStatus"
                    value={formData.civilStatus}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-md focus:ring-2 focus:ring-orange-300"
                  >
                    <option value="">Select status</option>
                    {civilStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Tell Us More About You</h2>
              <textarea
                name="aboutMe"
                placeholder="Who are you?"
                value={formData.aboutMe}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[120px] focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="experience"
                placeholder="Previous acting, modeling, or stage experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[120px] focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="dreamRole"
                placeholder="Your dream role"
                value={formData.dreamRole}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[100px] focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="funFact"
                placeholder="Fun fact about yourself (optional)"
                value={formData.funFact}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[100px] focus:ring-2 focus:ring-orange-300"
              />
            </section>

            {/* Image Upload Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Upload Profile Images</h2>
              <input
                name="profileImages"
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                className=""
              />
              <div className="flex gap-4 mt-2 flex-wrap">
                {formData.profileImages.map((file, idx) => (
                  <div key={idx} className="w-24 h-24 bg-gray-100 flex items-center justify-center text-xs text-center overflow-hidden rounded-md">
                    {file.name}
                  </div>
                ))}
              </div>
            </section>

            {/* TV Show Preferences */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">TV Show Preferences</h2>
              <div className="flex flex-wrap gap-3">
                {tvShows.map(show => (
                  <button
                    type="button"
                    key={show}
                    onClick={() => toggleShow(show)}
                    className={`px-4 py-2 rounded-full border transition ${
                      formData.selectedShows.includes(show)
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                  >
                    {show}
                  </button>
                ))}
              </div>
            </section>

            {/* Other Opportunities */}
            <section className="flex items-center gap-3">
              <input
                name="acceptOtherOpportunities"
                type="checkbox"
                checked={formData.acceptOtherOpportunities}
                onChange={handleChange}
                className="h-5 w-5"
              />
              <label htmlFor="acceptOtherOpportunities" className="text-gray-700">
                I'm open to being contacted for opportunities outside my selected shows
              </label>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition"
            >
              Register Profile
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
