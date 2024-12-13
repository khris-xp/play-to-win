"use server";

import { DiscountResponseType } from "@/types/discount.type";
import { baseApiAction } from "./baseApiAction";

export async function fetchDiscountFixedAmountAction(
  cartId: string,
  amount: number
) {
  return baseApiAction<DiscountResponseType>(
    `/discounts/fixed-amount/${cartId}?amount=${amount}`,
    {
      method: "GET",
      requiresAuth: true,
    }
  );
}

export async function fetchDiscountPercentageAction(
  cartId: string,
  percentage: number
) {
  return baseApiAction<DiscountResponseType>(
    `/discounts/percentage/${cartId}?percentage=${percentage}`,
    {
      method: "GET",
      requiresAuth: true,
    }
  );
}

export async function fetchDiscountByCategoryAction(
  cartId: string,
  category: string,
  percentage: number
) {
  return baseApiAction<DiscountResponseType>(
    `/discounts/category/${cartId}?category=${category}&percentage=${percentage}`,
    {
      method: "GET",
      requiresAuth: true,
    }
  );
}

export async function fetchDiscountByPointAction(
  cartId: string,
  point: number
) {
  return baseApiAction<DiscountResponseType>(
    `/discounts/points/${cartId}?points=${point}`,
    {
      method: "GET",
      requiresAuth: true,
    }
  );
}

export async function fetchDiscountBySpecialAction(
  cartId: string,
  threshold: number,
  discount: number
) {
  return baseApiAction<DiscountResponseType>(
    `/discounts/special/${cartId}?threshold=${threshold}&discount=${discount}`,
    {
      method: "GET",
      requiresAuth: true,
    }
  );
}
