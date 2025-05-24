import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_x2u2tri", "template_atwkta1", form.current, {
        publicKey: "Q9Oc4bdc8IbQl5xEZ"
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rounded-2xl shadow p-6 space-y-4"
    >
      <h3 className="text-black text-2xl font-semibold mb-3">Contact Us</h3>
      <p className="text-gray-800 text-sm mb-4">
        We'll get back to you as soon as possible.
      </p>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-black text-sm mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
            name="name"
            type="text"
            required
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-black text-sm mb-1" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <label className="block text-black text-sm mb-1" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900"
          name="message"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#10172a] border border-white text-white py-2 rounded-lg hover:bg-[#1e293b] transition font-semibold flex items-center justify-center"
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
