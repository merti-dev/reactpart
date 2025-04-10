import { useEffect, useState, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  title: string;
  price: number;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
};

export default function HomePage() {
  const [data, setData] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`
    );
    const newData = await res.json();
    setData((prev) => [...prev, ...newData]);
    setLoading(false);
  }, [offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setOffset((prev) => prev + 12);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loading]);

  const products: string[] = [
    "All",
    "Clothes",
    "Electronics",
    "Furniture",
    "Toys",
    "Books",
    "Sports",
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <Badge
            variant="outline"
            key={index}
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
          >
            {product}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-20 pb-12">
        {data.map((product) => (
          <Card
            key={product.id}
            className="w-full max-w-xs mx-auto flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <CardHeader className="bg-orange-50 py-4">
              <CardTitle className="text-xl text-orange-800 font-semibold">
                {product.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center items-center h-48 bg-white overflow-hidden flex-grow">
              {product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-contain max-h-full"
                />
              )}
            </CardContent>

            <CardFooter className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
              <span>
                Category: <strong>{product.category.name}</strong>
              </span>
              <span className="text-green-600 font-bold">${product.price}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {loading && (
        <div className="text-center text-gray-600 py-4">Loading more...</div>
      )}
      <div ref={observerRef} className="h-8" />
    </div>
  );
}
