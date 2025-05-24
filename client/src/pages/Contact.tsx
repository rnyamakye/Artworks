import ContactForm from "../ui/ContactForm";
import React from "react";
import { ContactCard } from "../ui/ContactCard";
import LocationMap from "../ui/LocationMap";
import BusinessHours from "../ui/BusinessHours";
import FAQSection from "../ui/FAQSection";
import Container from "../ui/Container";

const Contact = () => {
  // Simple smooth scroll handler
  const handleContactNowClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const form = document.getElementById("contactForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center py-20 w-full">
      <section className="flex flex-col items-center justify-center mb-10 md:my-10 w-full">
        {/* Top Section: Header and Intro */}
        <h1 className="text-5xl font-semibold mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl">
          Have questions about our artwork, tutorials, or products? We'd love to
          hear from you!
        </p>
        <div className="w-full md:w-full rounded-xl shadow flex flex-col md:flex-row md:bg-right bg-gray-200 items-center p-8">
          <div className="flex-1 mb-6 md:mb-0 md:mr-8 ">
            <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
            <p className="text-gray-700 mb-6">
              We're here to answer your questions and help you on your pencil
              art journey.
            </p>
            {/* Smooth scroll to contact form */}
            <a
              href="#contactForm"
              onClick={handleContactNowClick}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg w-fit font-semibold flex items-center hover:bg-gray-800 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
              Contact Now
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-gray-500" />
              <svg
                className="w-20 h-20 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <rect
                  x="8"
                  y="16"
                  width="32"
                  height="20"
                  rx="2"
                  stroke="currentColor"
                />
                <path
                  d="M8 16l16 13L40 16"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 w-full">
          <ContactCard
            icon={
              <svg
                className="w-9 h-9 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7l9 6 9-6"
                />
              </svg>
            }
            title="Email Us"
            subtitle="We typically respond within 24 hours"
            href="mailto:smartmasterpiece7@gmail.com"
          >
            <a
              target="_blank"
              href="mailto:smartmasterpiece7@gmail.com"
              className="font-medium text-gray-800 underline md:break-all"
            >
              smartmasterpiece7@gmail.com
            </a>
          </ContactCard>
          <ContactCard
            icon={
              <svg
                className="w-9 h-9 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92V19a2 2 0 01-2 2A17.91 17.91 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13 1.13.36 2.23.7 3.28a2 2 0 01-.45 2.11l-.7.7a16.06 16.06 0 006.29 6.29l.7-.7a2 2 0 012.11-.45c1.05.34 2.15.57 3.28.7A2 2 0 0122 16.92z"
                />
              </svg>
            }
            title="Call Us"
            subtitle="We're available during business hours"
          >
            <a
              target="_blank"
              href="tel:+233547348350"
              className="font-medium text-gray-800 "
            >
              (054) 734 8350{" "}
            </a>
            <p className="text-gray-800 text-sm">Mon-Fri: 9am - 5pm GMT</p>
            <p className="text-gray-800 text-sm">Sat: 10am - 2pm GMT</p>
          </ContactCard>
          <ContactCard
            icon={
              <svg
                className="w-9 h-9 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4-4-8-9-8-13a8 8 0 1116 0c0 4-4 9-8 13z"
                />
              </svg>
            }
            title="Visit Us"
            subtitle="Our studio is open for appointments"
          >
            <p className="font-medium text-gray-800">
              Near Baba Yara Sports Stadium
            </p>
            <p className="font-medium text-gray-800">Amakom, Kumasu</p>
          </ContactCard>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="w-full flex flex-col justify-center md:flex-row gap-5 mb-10 ">
        {/* Left: Send Us a Message and Map/Hours */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-2">
              Fill out the form to get in touch with our team. We're here to
              help with any questions about our products, services, or just to
              say hello!
            </p>
            <p className="text-gray-600 text-sm">
              Our customer support team is available Monday through Friday from
              9am to 5pm GMT, and we strive to respond to all inquiries within
              24 hours.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <LocationMap
              address="Near Baba Yara Sports Stadium, Amakom, Kumasi, Ghana"
              mapQuery="Baba Yara Sports Stadium, Amakom, Kumasi, Ghana"
            />
            <BusinessHours />
          </div>
        </div>
        {/* Right: Contact Form - This is the target ID */}
        <div className="h-10 md:hidden" id="contactForm" />
        <div className="md:col-2">
          <ContactForm />
        </div>
      </div>
      {/* FAQ Section */}
      <FAQSection />
    </Container>
  );
};

export default Contact;
