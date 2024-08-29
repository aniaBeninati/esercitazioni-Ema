"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContattiPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Messaggio inviato da ${formData.name}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contatti</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default ContattiPage;
