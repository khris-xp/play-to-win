import Image from "next/image";
import { ProductResponseType } from "../types/product.type";

export default function ProductCard({
  product,
}: {
  product: ProductResponseType;
}) {
  return (
    <div className="group relative transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute right-0 top-4 z-10 rounded-l-lg bg-blue-600 px-3 py-1.5 shadow-md">
        <span className="text-sm font-medium text-white">20% OFF</span>
      </div>

      <div className="relative h-64 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="mb-2 inline-block text-sm font-medium text-blue-600">
          Electronics
        </span>

        <h3 className="mb-2 line-clamp-2 min-h-[2.5rem] text-lg font-semibold text-gray-900 group-hover:text-blue-600">
          {product.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>

          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-600">4.5</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="flex-shrink-0 rounded-lg border border-gray-200 p-2 text-gray-500 transition-colors hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            aria-label="Add to Wishlist"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
