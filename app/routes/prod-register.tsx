import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

// Data model for a producer
export interface ProducerData {
  fullName: string;
  email: string;
  password: string;
  companyName: string;
  companyAddress: string;
  phone: string;
  website?: string;
  businessRegNumber: string;
  description?: string;
}

// Props for the register page wrapper
interface ProducerRegisterPageProps {
  handleRegister: (data: ProducerData) => void;
}

// Page component to wrap the registration form
const ProducerRegisterPage: React.FC<ProducerRegisterPageProps> = ({ handleRegister }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
    <Navbar />
    <main className="flex-grow flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-semibold text-center text-orange-600 mb-8">
          Producer Registration
        </h1>
        <ProducerRegisterForm handleRegister={handleRegister} />
      </div>
    </main>
    <Footer />
  </div>
);

// Props for the form itself
interface ProducerRegisterFormProps {
  handleRegister: (data: ProducerData) => void;
}

// Registration form component (no fields are required for prototype)
const ProducerRegisterForm: React.FC<ProducerRegisterFormProps> = ({ handleRegister }) => {
  const [form, setForm] = React.useState<ProducerData>({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
    companyAddress: "",
    phone: "",
    website: "",
    businessRegNumber: "",
    description: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(form);
  };

  const fields = [
    { id: 'fullName', label: 'Full Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'companyName', label: 'Company Name', type: 'text' },
    { id: 'companyAddress', label: 'Company Address', type: 'text' },
    { id: 'phone', label: 'Phone Number', type: 'tel' },
    { id: 'website', label: 'Website (optional)', type: 'url' },
    { id: 'businessRegNumber', label: 'Business Reg. Number', type: 'text' }
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
          <input
            id={id}
            type={type}
            value={(form as any)[id]}
            onChange={onChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 bg-white"
          />
        </div>
      ))}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (optional)</label>
        <textarea
          id="description"
          value={form.description}
          onChange={onChange}
          className="mt-1 block w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 bg-white"
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-all duration-200"
      >
        Register
      </button>
    </form>
  );
};

export default ProducerRegisterPage;