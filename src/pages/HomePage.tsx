import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

export default function HomePage() {
    const products: Array<string>=[
        "All",
        "Clothes",
        "Electronics",
        "Furniture",
        "Toys",
        "Books",
        "Sports",
    ]

    const dummyD = [
        {
          id: 1,
          title: "Product 1",
          price: 17,
          category: "Furniture",
          image: "https://placehold.co/600x400?text=Product+1"
        },
        {
          id: 2,
          title: "Product 2",
          price: 23,
          category: "Miscellaneous",
          image: "https://placehold.co/600x400?text=Product+2"
        },
        {
          id: 3,
          title: "Product 3",
          price: 39,
          category: "Clothes",
          image: "https://placehold.co/600x400?text=Product+3"
        },
        {
          id: 4,
          title: "Product 4",
          price: 16,
          category: "Clothes",
          image: "https://placehold.co/600x400?text=Product+4"
        },
        {
          id: 5,
          title: "Product 5",
          price: 15,
          category: "Clothes",
          image: "https://placehold.co/600x400?text=Product+5"
        },
        {
          id: 6,
          title: "Product 6",
          price: 78,
          category: "Shoes",
          image: "https://placehold.co/600x400?text=Product+6"
        },
        {
          id: 7,
          title: "Product 7",
          price: 59,
          category: "Miscellaneous",
          image: "https://placehold.co/600x400?text=Product+7"
        },
        {
          id: 8,
          title: "Product 8",
          price: 20,
          category: "Furniture",
          image: "https://placehold.co/600x400?text=Product+8"
        },
        {
          id: 9,
          title: "Product 9",
          price: 87,
          category: "Electronics",
          image: "https://placehold.co/600x400?text=Product+9"
        },
        {
          id: 10,
          title: "Product 10",
          price: 66,
          category: "Shoes",
          image: "https://placehold.co/600x400?text=Product+10"
        },
        {
          id: 11,
          title: "Product 11",
          price: 32,
          category: "Electronics",
          image: "https://placehold.co/600x400?text=Product+11"
        },
        {
          id: 12,
          title: "Product 12",
          price: 58,
          category: "Furniture",
          image: "https://placehold.co/600x400?text=Product+12"
        },
        {
          id: 13,
          title: "Product 13",
          price: 42,
          category: "Electronics",
          image: "https://placehold.co/600x400?text=Product+13"
        },
        {
          id: 14,
          title: "Product 14",
          price: 55,
          category: "Clothes",
          image: "https://placehold.co/600x400?text=Product+14"
        },
        {
          id: 15,
          title: "Product 15",
          price: 44,
          category: "Shoes",
          image: "https://placehold.co/600x400?text=Product+15"
        },
        {
          id: 16,
          title: "Product 16",
          price: 88,
          category: "Electronics",
          image: "https://placehold.co/600x400?text=Product+16"
        },]
      

  return (
  <div>
   {products.map((product, index) => (
      <Badge
        variant="outline"
        key={index}
        className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
      >
        {product}
      </Badge>
    ))}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-40 pb-12">
  {dummyD.map((product, index) => (
    <Card key={index} className="w-full max-w-xs mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="bg-orange-50 py-4">
        <CardTitle className="text-xl text-orange-800 font-semibold">{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center items-center h-48 bg-white overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-full"
          />
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
        <span>Category: <strong>{product.category}</strong></span>
        <span className="text-green-600 font-bold">${product.price}</span>
      </CardFooter>
    </Card>
  ))}
</div>




</div>
  );
}
