"use client";

import DiscountCategoryBlock from "@/components/Block/DiscountCategoryBlock";
import DiscountFixedAmountBlock from "@/components/Block/DiscountFixedAmountBlock";
import DiscountPercentageBlock from "@/components/Block/DiscountPercentageBlock";
import DiscountPointBlock from "@/components/Block/DiscountPointBlock";
import DiscountSpecialBlock from "@/components/Block/DiscountSpecialBlock";
import CartCard from "@/components/CartCard";
import { Dropdown } from "@/components/Dropdown";
import ProductCard from "@/components/ProductCard";
import { DISCOUNT_TYPE, DiscountType } from "@/constants/discount-type";
import { CartItemType } from "@/types/cart-item.type";
import { ProductResponseType } from "@/types/product.type";
import { useState } from "react";

export type HomeContainerProps = {
  cartItem: CartItemType[];
  product: ProductResponseType[];
  cartId: string;
};

export default function HomeContainer({
  cartItem,
  product,
  cartId,
}: HomeContainerProps) {
  const [discountType, setDiscountType] = useState(DiscountType.FIXED_AMOUNT);
  const [discount, setDiscount] = useState(0);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto mt-10 max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItem.map((item) => (
                <CartCard key={item.ID} cartItem={item} />
              ))}
            </div>
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                People also bought
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                {product.map((item) => (
                  <ProductCard key={item.ID} product={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $
                      {cartItem.reduce(
                        (acc, item) => acc + item.total_price,
                        0
                      )}
                    </dd>
                  </dl>

                  {discount > 0 && (
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -${" "}
                        {cartItem.reduce(
                          (acc, item) => acc + item.total_price,
                          0
                        ) - discount}
                      </dd>
                    </dl>
                  )}

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    {discount > 0
                      ? discount + 799 + 99
                      : cartItem.reduce(
                          (acc, item) => acc + item.total_price,
                          0
                        ) +
                        799 +
                        99}
                  </dd>
                </dl>
              </div>

              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Proceed to Checkout
              </a>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <Dropdown
              options={DISCOUNT_TYPE}
              onChange={(value) => setDiscountType(value as DiscountType)}
              value={discountType}
            />
            {discountType === DiscountType.FIXED_AMOUNT && (
              <DiscountFixedAmountBlock
                cartId={cartId}
                discount={discount}
                setDiscount={setDiscount}
              />
            )}
            {discountType === DiscountType.PERCENTAGE && (
              <DiscountPercentageBlock
                cartId={cartId}
                setDiscount={setDiscount}
                discount={discount}
              />
            )}
            {discountType === DiscountType.POINT && (
              <DiscountPointBlock
                cartId={cartId}
                setDiscount={setDiscount}
                discount={discount}
              />
            )}
            {discountType === DiscountType.CATEGORY && (
              <DiscountCategoryBlock
                cartId={cartId}
                setDiscount={setDiscount}
                discount={discount}
              />
            )}
            {discountType === DiscountType.SPECIAL && (
              <DiscountSpecialBlock
                cartId={cartId}
                setDiscount={setDiscount}
                discount={discount}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
