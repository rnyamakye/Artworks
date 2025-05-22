import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ImageSlider from "./ui/ImageSlider";
import Loading from "./ui/Loading";

const artworks = [
  {
    src: "/commmissioned-portrait-29.JPG",
    title: "Pencil Masterpiece 1",
    artist: "Artist Name",
    price: "$199.99"
  },
  {
    src: "/family-portrait.JPG",
    title: "Pencil Masterpiece 1",
    artist: "Artist Name",
    price: "$199.99"
  },
  {
    src: "/realistic-eye.JPG",
    title: "Pencil Masterpiece 1",
    artist: "Artist Name",
    price: "$199.99"
  }
];

const articles = [
  {
    src: "/commmissioned-portrait-30.JPG",
    date: "March 11, 2024",
    title: "Doing family portraits is one of the best parts of the job.",
    description: ""
  },
];

const testimonials = [
  {
    name: "Richard",
    role: "Art Enthusiast",
    text: "Portraits by Smartist are simply breathtaking! The attention to detail is incredible.",
  },
];

// --- IMAGE PRELOADING HELPERS ---
const allImagePaths = [
  ...artworks.map(a => a.src),
  ...articles.map(a => a.src)
];

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

function preloadImages(imageArray) {
  return Promise.all(imageArray.map(preloadImage));
}

// --- APP COMPONENT ---
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      preloadImages(allImagePaths)
        .then(() => {
          setLoading(false);
          localStorage.setItem("hasVisited", "true");
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto px-4 md:px-8 pt-10 md:py-24">
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Discover the Beauty of Pencil Art
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8">
            Explore our collection of stunning pencil artworks, tutorials, and
            resources for artists of all levels.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="group px-3 py-3 bg-gray-900 text-white rounded-md font-semibold shadow hover:bg-gray-800 transition hover:shadow-xl"
            >
              Browse Artwork{" "}
              <span
                aria-hidden
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                →
              </span>
            </Link>
            <Link
              to="/blog"
              className="px-3 py-3 bg-white border border-gray-200 text-gray-900 rounded-md font-semibold shadow hover:bg-gray-50 hover:shadow-xl transition"
            >
              Explore Blog
            </Link>
          </div>
        </div>
        {/* Right side: Placeholder image */}
        <div className="flex-1 flex justify-center mt-12 md:mt-0 md:ml-12">
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Placeholder icon */}
            <div className="flex flex-col w-full items-center justify-center text-gray-300">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="px-6 pt-16 min-h-screen">
          <div className="flex items-center-safe md:items-center justify-between">
            <h2 className="text-3xl font-bold py-6">Artworks</h2>
            <Link to={"/products"} className="gap-2 group overflow-hidden">
              <div className="flex items-center text-gray-900 text-xs md:text-sm gap-1">
                View All <FaArrowRight className="h-3" />
              </div>
              <span className="inline-flex w-full h-[1px] bg-black absolute bottom-0 left-0 transform -translate-x-[50%] scale-0 group-hover:translate-x-0 duration-300 group-hover:scale-100" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {artworks.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow overflow-hidden flex flex-col hover:shadow-lg transition duration-300"
              >
                <div className="flex-1 flex items-center justify-center bg-gray-100 aspect-square">
                  <img
                    src={product.src}
                    alt={product.title}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Articles Grid */}
        <div className="flex items-center justify-between py-6">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link to={"/"} className="gap-2 group overflow-hidden">
            <div className="flex items-center text-gray-900 text-sm gap-1">
              View All <FaArrowRight className="h-3" />
            </div>
            <span className="inline-flex w-full h-[1px] bg-black absolute bottom-0 left-0 transform -translate-x-[50%] scale-0 group-hover:translate-x-0 duration-300 group-hover:scale-100" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {articles.map((article, idx) => (
            <Link to={"/articles"}>
            <article
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center">
                <img
                  src={article.src}
                  alt="Art"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <time className="block mb-1 text-xs text-gray-500">
                  {article.date}
                </time>
                <h3 className="text-base font-semibold text-black mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
            </article></Link>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-start shadow-sm"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={8} r={4} />
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-700 text-base mt-2">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
