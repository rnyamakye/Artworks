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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
                {products.map((item: ProductProps) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Artworks;
