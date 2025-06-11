import React, { useState } from "react";
import { contactSectionData } from "../../content/data";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with email API or backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const { title, subtitle, buttonText, placeholders, successMessage } = contactSectionData;

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder={placeholders.name}
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-blue-500 col-span-1"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={placeholders.email}
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-blue-500 col-span-1"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder={placeholders.subject}
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-blue-500 col-span-full"
          required
        />
        <textarea
          name="message"
          placeholder={placeholders.message}
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="border border-gray-300 p-3 rounded-md focus:outline-blue-500 col-span-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-800 col-span-full"
        >
          {buttonText}
        </button>

        {submitted && (
          <p className="text-green-600 text-sm col-span-full text-center mt-2">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
