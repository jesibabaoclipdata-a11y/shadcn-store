"use client";

import { ArrowRight } from "lucide-react";
import {
  ProductCard,
} from "@/components/shadcn-space/blocks/product-listing-01/product-card";
interface ProductPropsFromApi {
  id: number;
  title: string;
  price: number;
  images: string[];
  badge?: {
    text: string;
  };
  category: {
    name:string;
  };
  className?: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
}

async function getProducts():Promise<ProductPropsFromApi[]> {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return res.json();
}

const product = await getProducts();

const mappedProducts = product.map((product) => ({
  id: product.id,
  title: product.title,
  images: product.images,
  category: {
    name: product.category.name
  },
  name: product.title,
  price: product.price,
  rating: 4.5,
  reviews: 10,
}));
export interface ProductListingProps {
  products?: ProductPropsFromApi[];
}

export default function ProductListing({
  products = mappedProducts,
}: ProductListingProps) {
  console.log("TOTAL PRODUCTS:", products.length);
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Featured products
            </h2>
          <div className="flex gap-5 justify-between bg-black w-full">
              <p className="text-base text-muted-foreground">
              Handpicked by our team
            </p>
            <h1>Categories</h1>
          </div>
          </div>
          <a
            href="#"
            className="items-center gap-2 text-sm font-medium flex group cursor-pointer"
          >
            See all
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        <div className="w-full h-full overflow-x-scroll xl:scrollbar-gutter-both xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:visible">
          <div className="">
            {products.map((product, index) => (
              <div key={index} className="inline-block min-w-67.5 max-w-67.5 w-full whitespace-normal shrink-0 p-2">
                <ProductCard {...product} className="w-full" />
                Hello
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}