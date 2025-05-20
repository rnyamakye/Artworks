import { useEffect, useState } from "react";
import { config } from "../config";
import { ProductProps } from "../../type";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";

const Artworks = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const productsPerPage = 10; // Number of products to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetches all products from the backend
        const data = await getData(`${config?.baseURL}/products/`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data,", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the products for the current page
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to handle changing the page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the product list when changing page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to go to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Function to go to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Create an array of page numbers for rendering pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div className="flex items-start gap-10">
            <div>
              <p className="text-4xl font-semibold mb-5 text-center">
                Art Collection
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {/* Render products for the current page */}
                {currentProducts.map((item: ProductProps) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>

              {/* Pagination Controls - Only show if there's more than one page */}
              {products.length > productsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1} // Disable if on the first page
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-300"
                  >
                    Previous
                  </button>

                  {/* Render individual page number buttons */}
                  <div className="flex gap-2">
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`px-3 py-2 rounded-md transition-colors ${
                          currentPage === number
                            ? "bg-gray-900 text-white px-3 py-2 rounded-r-md text-sm font-semibold hover:bg-gray-800" // Active page style
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive page style
                        }`}
                      >
                        {number}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages} // Disable if on the last page
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Artworks;
