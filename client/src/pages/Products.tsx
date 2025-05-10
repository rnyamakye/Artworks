import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../config";
import { ProductProps } from "../../type";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";

const Artworks = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Determine endpoint based on presence of id
  const endpoint = id
    ? `${config?.baseURL}/products/${id}`
    : `${config?.baseURL}/products/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(endpoint);
        if (id) {
          setProductData(data);
          setAllProducts([]);
        } else {
          setAllProducts(data);
          setProductData(null);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, endpoint]);

  return (
    <div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            {/* Single Product View */}
            {!!id && productData ? (
              <div className="flex justify-center">
                <ProductCard item={productData} />
              </div>
            ) : (
              // Products Collection View
              <div className="flex items-start gap-10">
                <div>
                  <p className="text-4xl font-semibold mb-5 text-center">
                    Products Collection
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {allProducts?.map((item: ProductProps) => (
                      <ProductCard item={item} key={item?._id} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Container>
        )}
      </div>
    </div>
  );
};

export default Artworks;
