"use client";

import { fetchDiscountPercentageAction } from "@/actions/discountApiAction";
import { useState } from "react";
import { Input } from "../Input";

type DiscountPercentageProps = {
  cartId: string;
  discount: number;
  setDiscount: (discount: number) => void;
};

export default function DiscountPercentageBlock(
  props: DiscountPercentageProps
) {
  const [percentage, setPercentage] = useState(0);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetchDiscountPercentageAction(
      props.cartId,
      percentage
    );
    if (response.data) {
      props.setDiscount(response.data.final_price);
    }
  };
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="voucher"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Discount Percentage
          </label>
          <Input
            type="text"
            placeholder="Enter your discount percentage"
            className="w-full"
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Apply Discount
        </button>
      </form>
    </div>
  );
}
