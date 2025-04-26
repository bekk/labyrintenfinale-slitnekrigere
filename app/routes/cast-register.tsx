import { useState } from "react";

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

export default function CastRegisterForm() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [acceptOtherOpportunities, setAcceptOtherOpportunities] = useState(false);
  const [profileImages, setProfileImages] = useState<File[]>([]);

  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState("");
  const [dreamRole, setDreamRole] = useState("");
  const [funFact, setFunFact] = useState("");

  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setProfileImages(Array.from(event.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      birthdate,
      gender,
      location,
      civilStatus,
      selectedGenres,
      acceptOtherOpportunities,
      profileImages,
      aboutMe,
      experience,
      dreamRole,
      funFact,
    };
    console.log("Submitting Registration:", data);
    // TODO: Send to backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-10">
      <h1 className="text-3xl font-bold text-center text-orange-600">Register as Cast</h1>

      {/* Basic Personal Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
        <input
          type="date"
          placeholder="Birthdate"
          className="w-full p-3 border rounded-md"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 border rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Gender</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
              Other
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Civil Status</label>
          <select
            className="w-full p-3 border rounded-md"
            value={civilStatus}
            onChange={(e) => setCivilStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            {civilStatuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-6">
        <textarea
          placeholder="Tell us about yourself (Who are you?)"
          className="w-full p-3 border rounded-md min-h-[100px]"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          required
        />
        <textarea
          placeholder="Previous acting, modeling, or stage experience"
          className="w-full p-3 border rounded-md min-h-[100px]"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <textarea
          placeholder="What would your dream role be?"
          className="w-full p-3 border rounded-md min-h-[80px]"
          value={dreamRole}
          onChange={(e) => setDreamRole(e.target.value)}
        />
        <textarea
          placeholder="Share a fun fact about yourself! (optional)"
          className="w-full p-3 border rounded-md min-h-[80px]"
          value={funFact}
          onChange={(e) => setFunFact(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-4">
        <label className="block font-semibold">Upload Profile Images (Portrait, Profile, Full Body)</label>
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
        <div className="flex gap-4 mt-2 flex-wrap">
          {profileImages.map((file, idx) => (
            <div key={idx} className="w-24 h-24 bg-gray-100 flex items-center justify-center text-xs text-center overflow-hidden rounded-md">
              {file.name}
            </div>
          ))}
        </div>
      </div>

      {/* TV Shows */}
      <div className="space-y-2">
        <label className="block font-semibold mb-2">Which TV shows are you interested in?</label>
        <div className="flex flex-wrap gap-3">
          {tvShows.map(show => (
            <button
              type="button"
              key={show}
              onClick={() => handleGenreToggle(show)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedGenres.includes(show)
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {show}
            </button>
          ))}
        </div>
      </div>


      {/* Accept Other Opportunities */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="accept-other"
          checked={acceptOtherOpportunities}
          onChange={() => setAcceptOtherOpportunities(prev => !prev)}
          className="w-5 h-5"
        />
        <label htmlFor="accept-other" className="text-gray-700">
          I'm open to being contacted for opportunities outside my selected genres
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition"
      >
        Register Profile
      </button>
    </form>
  );
}
