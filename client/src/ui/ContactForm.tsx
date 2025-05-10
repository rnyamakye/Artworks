import React, { useState } from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#] rounded-lg shadow p-6 space-y-4"
    >
      <h3 className="text-black text-lg font-semibold mb-2">Contact Form</h3>
      <p className="text-gray-800 text-sm mb-4">
        We'll get back to you as soon as possible.
      </p>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-black text-sm mb-1">Your Name</label>
          <input
            className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-black text-sm mb-1">Your Email</label>
        <input
          className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-black text-sm mb-1">Your Message</label>
        <textarea
          className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#10172a] border border-white text-white py-2 rounded hover:bg-[#1e293b] transition font-semibold flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
