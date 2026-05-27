"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shadcn-space/blocks/product-listing-01/product-card";
import { InputInline } from "@/components/search";

interface ProductPropsFromApi {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    name: string;
  };
}

interface MappedProduct {
  id: number;
  title: string;
  images: string[];
  category: {
    name: string;
  };
  name: string;
  price: number;
  rating: number;
  reviews: number;
}

async function getProducts(): Promise<ProductPropsFromApi[]> {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return res.json();
}



export default function ProductListing() {
  const [products, setProducts] = useState<MappedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchPro, setSearchPro] = useState("");


  const filteredProducts = products.filter((product) =>
  product.title
    .toLowerCase()
    .includes(searchPro.toLowerCase().trim())
);

  /*useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const data =
          search.trim() === ""
            ? await getProducts()
            : await getProductsbyName(search)

        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }, 400)

    return () => clearTimeout(timeout)
  }, [search]) */

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productData = await getProducts();

        const mappedProducts = productData.map((product) => ({
          id: product.id,
          title: product.title,
          images: product.images,
          category: {
            name: product.category.name,
          },
          name: product.title,
          price: product.price,
          rating: 4.5,
          reviews: 10,
        }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-8">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Featured products
          </h2>

        </div>


        <div className="overflow-x-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4  ">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] p-2"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}