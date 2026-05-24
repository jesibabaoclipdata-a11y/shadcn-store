interface ProductProps {
  id: number;
  title: string;
  price: number;
  images: string[];
}

async function getProducts():Promise<ProductProps[]> {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
}