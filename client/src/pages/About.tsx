import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../ui/login";

const About: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <main className="mx-auto px-4 md:px-8 py-1 space-y-20">
        {/* Our Mission Section */}
        <section className="w-full mx-auto md:px-6 py-12">
          {/* Header */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              About PencilArt
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Discover the story behind our passion for pencil artistry and our
              mission to inspire artists worldwide.
            </p>
          </header>

          {/* Large Image Placeholder */}
          <div className="bg-gray-200 rounded-xl aspect-video w-full mx-auto mb-16 flex items-center justify-center h-80">
            <img
              src="/Artist@work.jpg"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, PencilArt began as a small community of
                passionate pencil artists who wanted to share their knowledge
                and artwork with the world.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a simple blog has grown into a comprehensive
                platform for artists of all levels to learn, share, and grow
                their skills in pencil artistry.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to host thousands of tutorials, showcase
                incredible artwork from artists around the globe, and provide
                high-quality art supplies through our shop.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Explore Our Blog
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <img
                src="/satisfied-costumer-3.jpg"
                alt=""
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </section>
        <section
          id="our-mission"
          className="bg-gray-50 rounded-lg p-10 text-center"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            We believe that art should be accessible to everyone. Our mission is
            to provide resources, inspiration, and community for pencil artists
            at every stage of their journey, from complete beginners to seasoned
            professionals.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
            {/* Inspire Creativity */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-gray-200 rounded-full p-4 mb-3">
                {/* Paint palette icon */}
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <circle cx="8" cy="10" r="1" fill="currentColor" />
                  <circle cx="16" cy="10" r="1" fill="currentColor" />
                  <circle cx="10" cy="16" r="1" fill="currentColor" />
                  <circle cx="14" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">
                Inspire Creativity
              </div>
              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                Showcase diverse pencil art styles to inspire artists to explore
                new techniques and subjects.
              </p>
            </div>

            {/* Educate Artists */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-gray-200 rounded-full p-4 mb-3">
                {/* Book icon */}
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path d="M8 4v16" stroke="currentColor" strokeWidth={2} />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Educate Artists</div>
              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                Provide comprehensive tutorials and resources for artists at all
                skill levels.
              </p>
            </div>

            {/* Build Community */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-gray-200 rounded-full p-4 mb-3">
                {/* Users icon */}
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path
                    d="M2 20c0-4 8-6 10-6s10 2 10 6"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Build Community</div>
              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                Foster a supportive community where artists can connect, share,
                and grow together.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        {/* <section id="meet-our-team" className="py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Lead Artist",
                description:
                  "Award-winning pencil artist with over 15 years of experience in hyperrealistic portraiture."
              },
              {
                name: "Michael Chen",
                role: "Content Director",
                description:
                  "Former art professor with a passion for teaching pencil techniques to artists of all levels."
              },
              {
                name: "Elena Rodriguez",
                role: "Shop Manager",
                description:
                  "Curator with an eye for quality art supplies and a background in art business management."
              },
              {
                name: "David Kim",
                role: "Community Manager",
                description:
                  "Social media expert and hobbyist artist who loves connecting with the pencil art community."
              }
            ].map(({ name, role, description }) => (
              <div
                key={name}
                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center"
              >
                <div className="w-full aspect-square bg-gray-200 rounded-md flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    />
                    <path
                      d="M4 17l4.5-4.5a2 2 0 012.8 0L20 17"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    />
                    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 text-center">
                  {name}
                </div>
                <div className="text-sm text-gray-700 text-center mb-1">
                  {role}
                </div>
                <p className="text-xs text-gray-500 text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section> */}
        {/* Achievements Section */}
        <section id="achievements" className="w-full mx-auto md:px-8 py-16">
          <div className="w-full flex flex-col md:flex-row gap-8 items-center">
            {/* Image Placeholder */}
            <div className="flex-1 w-full">
              <div className="w-full bg-gray-200 rounded-xl flex items-center justify-center relative">
                <img
                  src="/award-image.JPG"
                  alt="achievement"
                  className="w-full h-80 rounded-xl object-cover object-top"
                />
              </div>
            </div>
            {/* Achievements List */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-gray-700 mb-6">
                Over the years, PencilArt has grown from a small blog to a
                thriving community of artists. Here are some of our proudest
                achievements:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    {/* Award icon */}
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M8.5 14h7l-1.5 6-2-2-2 2-1.5-6z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">
                      Best Art Education Platform 2023
                    </span>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Recognized for our comprehensive pencil art tutorials and
                      resources.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    {/* Users icon */}
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M2 20c0-4 8-6 10-6s10 2 10 6"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">
                      1 Million Community Members
                    </span>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Reached this milestone in January 2024, with artists from
                      over 120 countries.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    {/* Magazine icon */}
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path d="M8 4v16" stroke="currentColor" strokeWidth={2} />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">
                      Featured in Art Monthly Magazine
                    </span>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Highlighted as one of the top online resources for pencil
                      artists in 2022.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    {/* Artwork icon */}
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                        strokeWidth={2}
                      />
                      <circle
                        cx="8"
                        cy="9"
                        r="2"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M21 19l-5.5-5.5a2 2 0 00-2.8 0L3 19"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">10,000+ Artworks Sold</span>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Helped artists sell their work and reach new audiences
                      through our platform.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Join Our Community Section */}
        <section
          id="join-community"
          className="max-w-7xl mx-auto px-4 md:px-8 pb-16"
        >
          <div className="bg-blue-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're just starting out or you're an experienced artist,
              we'd love to have you as part of our growing community of pencil
              art enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setAuthOpen(true)}
                className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Create an Account
              </button>
              <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
              <Link
                to={"/contact"}
                className="bg-white border border-gray-300 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
