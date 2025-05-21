import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Calendar } from "lucide-react";
import { getData } from "../lib";
import { config } from "../config";

interface TutorialVideo {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  date: string;
}

const ITEMS_PER_PAGE = 6;

export default function TutorialsPage() {
  const [tutorialsData, setTutorialsData] = useState<TutorialVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoint = `${config?.baseURL}/tutorials`;
        const data = await getData(endpoint);

        // Transform data
        const transformed: TutorialVideo[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          youtubeId: item.youtubeId,
          description: item.description,
          date: item.date
        }));
        setTutorialsData(transformed);
      } catch (error) {
        console.error("Error fetching tutorials data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(tutorialsData.length / ITEMS_PER_PAGE)
  );
  const paginatedData = tutorialsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 0,
    }
  };

  return (
    <main className="w-full mx-auto px-4 md:px-8 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Pencil Art Tutorials
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Learn new skills with our collection of art tutorials.
        </p>
      </div>

      {/* Video Cards */}
      {loading ? (
        <div className="py-12 text-gray-500 text-lg">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-7xl">
            {paginatedData.map((video) => (
              <article
                key={video.id}
                className="bg-white rounded-md shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition"
              >
                <YouTube videoId={video.youtubeId} opts={opts} />
                {/* <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    {video.date}
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {video.description}
                  </p>
                </div> */}
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {tutorialsData.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-300"
              >
                Previous
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        page === number
                          ? "bg-gray-900 text-white font-semibold"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {number}
                    </button>
                  )
                )}
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
  );
}
