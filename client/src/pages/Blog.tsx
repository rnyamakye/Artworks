import { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  User as UserIcon,
  Clock,
  Video,
  Image as ImageIcon
} from "lucide-react";
import { getData } from "../lib";
import { config } from "../config";

const ITEMS_PER_PAGE = 6;

interface BlogItem {
  id: string | number;
  contentType: "Article" | "Video" | "Picture";
  title: string;
  description: string;
  category?: string;
  date: string;
  author?: string;
  artist?: string;
  readTime?: string;
  duration?: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [blogsData, setBlogsData] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoint = `${config?.baseURL}/blogs`;
        const data = await getData(endpoint);
        // Transform 'type' to 'contentType'
        const transformed: BlogItem[] = data.map((item: any) => ({
          ...item,
          contentType: item.type
        }));
        setBlogsData(transformed);
      } catch (error) {
        console.error("Error fetching blogs data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const filtered = blogsData.filter((item) =>
    (item.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedData = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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

        {/* Search
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 items-center justify-center md:w-[500px]">
          <div className="flex items-center justify-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search blog posts..."
              className="flex-grow outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div> */}

        {/* Blog Cards */}
        {loading ? (
          <div className="py-12 text-gray-500 text-lg">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-7xl">
              {paginatedData.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-md shadow-sm overflow-hidden relative"
                >
                  {/* Image/Icon */}
                  <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-400">
                    {item.contentType === "Article" && (
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <path d="M3 15l6-6 4 4 5-5 3 3" />
                      </svg>
                    )}
                    {item.contentType === "Video" && (
                      <Video className="w-12 h-12" />
                    )}
                    {item.contentType === "Picture" && (
                      <ImageIcon className="w-12 h-12" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                        item.contentType === "Article"
                          ? "bg-gray-300 text-gray-700"
                          : item.contentType === "Video"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.contentType === "Article"
                        ? item.category
                        : item.contentType}
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
                      {item.contentType !== "Picture" && (
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

            {/* Pagination Controls */}
            {filtered.length > ITEMS_PER_PAGE && (
              <div className="flex justify-center items-center gap-4 mb-8">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-300"
                >
                  Previous
                </button>

                <div className="flex gap-2">
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        page === number
                          ? "bg-gray-900 text-white px-3 py-2 rounded-r-md text-sm font-semibold hover:bg-gray-800"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
