import { useState, useEffect } from "react";

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

export default function CastProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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

  // Simulate fetching user data
  useEffect(() => {
    setTimeout(() => {
      // Mock data - in a real app, this would come from an API
      setFormData({
        fullName: "Astrid Johansen",
        birthdate: "1995-03-15",
        gender: "Female",
        location: "Oslo, Norway",
        civilStatus: "Single",
        aboutMe: "Energetic and outgoing person with a passion for adventure. I love meeting new people and trying new experiences.",
        experience: "Amateur theater in high school and university. Small roles in two student films.",
        dreamRole: "Would love to be part of a survival challenge show where I can test my limits.",
        funFact: "I can speak four languages and once hitchhiked across Europe.",
        selectedShows: ["71° Nord", "Kompani Lauritzen", "Farmen"],
        acceptOtherOpportunities: true,
        profileImages: [] as File[]
      });
      setIsLoading(false);
    }, 800);
  }, []);

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
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Updated profile data:", formData);
      setIsSaving(false);
      // Show success notification or redirect
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Edit Your Profile</h1>

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
            <div>
              <label className="block mb-2 font-semibold text-gray-700">About Me</label>
              <textarea
                name="aboutMe"
                placeholder="Who are you?"
                value={formData.aboutMe}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[120px] focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Experience</label>
              <textarea
                name="experience"
                placeholder="Previous acting, modeling, or stage experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[120px] focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Dream Role</label>
              <textarea
                name="dreamRole"
                placeholder="Your dream role"
                value={formData.dreamRole}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[100px] focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Fun Fact</label>
              <textarea
                name="funFact"
                placeholder="Fun fact about yourself (optional)"
                value={formData.funFact}
                onChange={handleChange}
                className="w-full p-4 border rounded-md min-h-[100px] focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </section>

          {/* Image Upload Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Profile Images</h2>
            <div className="mb-4">
              <div className="flex flex-wrap gap-4 mb-4">
                {/* Display current profile images */}
                <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                  <img src="/api/placeholder/120/120" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                  <img src="/api/placeholder/120/120" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <label className="block mb-2 font-semibold text-gray-700">Upload New Images</label>
              <input
                name="profileImages"
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2"
              />
              <p className="text-sm text-gray-500 mt-1">You can select multiple images</p>
            </div>
          </section>

          {/* TV Show Preferences */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">TV Show Preferences</h2>
            <p className="text-gray-600 mb-3">Select shows you're interested in participating in:</p>
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
              id="acceptOtherOpportunities"
              checked={formData.acceptOtherOpportunities}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label htmlFor="acceptOtherOpportunities" className="text-gray-700">
              I'm open to being contacted for opportunities outside my selected shows
            </label>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className={`px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition flex items-center ${isSaving ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSaving ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}