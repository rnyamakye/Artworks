import { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  User as UserIcon,
  Clock,
  Video,
  Image as ImageIcon,
  Heart
} from "lucide-react";
import { getData } from "../lib";
import { config } from "../config";
// import { useAuth } from "../hooks/useAuth";
import AuthModal from "../ui/login";
// import { useStore } from "../store/store";

const TABS = ["Articles", "Videos", "Pictures"];
const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("Articles");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState({ Articles: 1, Videos: 1, Pictures: 1 });
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { currentUser } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  // Zustand store hooks
  // const favoriteProduct = useStore((state) => state.favoriteProduct);
  // const addToFavorite = useStore((state) => state.addToFavorite);
  // const removeFromFavorite = useStore((state) => state.removeFromFavorite);

  // Fetch blogs data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoint = `${config?.baseURL}/blogs`;
        const data = await getData(endpoint);
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching blogs data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Reset search and pagination on tab switch
  useEffect(() => {
    setSearchTerm("");
    setPage((prev) => ({ ...prev, [activeTab]: 1 }));
  }, [activeTab]);

  // Reset to first page on search change
  useEffect(() => {
    setPage((prev) => ({ ...prev, [activeTab]: 1 }));
  }, [searchTerm, activeTab]);

  // Filter and paginate blogs
  const filtered = blogsData.filter(
    (item) =>
      item.type === activeTab.slice(0, -1) &&
      (item.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPage = page[activeTab];
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedData = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Check if item is favorited
  // const isFavorited = (id) => favoriteProduct.some((item) => item.id === id);

  // // Handle favorite toggle
  // const handleFavorite = (item) => {
  //   if (!currentUser) {
  //     setShowAuth(true);
  //     return;
  //   }
  //   if (isFavorited(item.id)) {
  //     removeFromFavorite(item.id);
  //   } else {
  //     addToFavorite(item);
  //   }
  // };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage((prev) => ({ ...prev, [activeTab]: newPage }));
  };

  return (
    <>
      <main className="w-full mx-auto px-4 md:px-8 py-12 flex flex-col items-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Explore Our Blog
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover articles, videos, and artwork from our community of pencil
            artists and enthusiasts.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 items-center justify-center md:w-[500px]">
          <div className="flex items-center justify-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              className="flex-grow outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <nav className="flex justify-center mb-8 border border-gray-200 rounded-md bg-gray-50 shadow-sm w-full md:w-[600px] mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center font-semibold transition ${
                activeTab === tab
                  ? "bg-white shadow text-gray-900 rounded-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Blog Cards */}
        {loading ? (
          <div className="py-12 text-gray-500 text-lg">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-7xl">
            {paginatedData.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-md shadow-sm overflow-hidden relative"
              >
                {/* Favorite Button */}
                {/* <button
                  className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500"
                  onClick={() => handleFavorite(item)}
                  aria-label={isFavorited(item.id) ? "Unfavorite" : "Favorite"}
                >
                  <Heart
                    fill={isFavorited(item.id) ? "#ef4444" : "none"}
                    className={`w-6 h-6 transition ${
                      isFavorited(item.id) ? "text-red-500" : ""
                    }`}
                  />
                </button> */}

                {/* Image/Icon */}
                <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-400">
                  {item.type === "Article" && (
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <path d="M3 15l6-6 4 4 5-5 3 3" />
                    </svg>
                  )}
                  {item.type === "Video" && <Video className="w-12 h-12" />}
                  {item.type === "Picture" && (
                    <ImageIcon className="w-12 h-12" />
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                      item.type === "Article"
                        ? "bg-gray-300 text-gray-700"
                        : item.type === "Video"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.type === "Article" ? item.category : item.type}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />
                      {item.author || item.artist}
                    </span>
                    {item.type !== "Picture" && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readTime || item.duration}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 shadow rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Previous
          </button>
          <span className="px-4 py-2 shadow rounded-md bg-gray-100">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 shadow rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}
