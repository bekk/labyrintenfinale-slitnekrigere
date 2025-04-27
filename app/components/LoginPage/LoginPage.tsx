import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

// Props for the page-level component
interface LoginPageProps {
  handleSubmit: (email: string, password: string) => void;
}

// Page-level component accepts handleSubmit and renders layout
const LoginPage: React.FC<LoginPageProps> = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">
            Welcome Back
          </h1>
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
};

// Form component handles input state and triggers handleSubmit
interface LoginFormProps {
  handleSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 bg-white"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 bg-white"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-all duration-200"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginPage;
