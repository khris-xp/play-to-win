import { CartItemType } from "@/types/cart-item.type";
import { baseApiAction } from "./baseApiAction";

export async function fetchCartItemAction(cartId: string) {
  return baseApiAction<CartItemType[]>(`/cart-items/${cartId}`, {
    method: "GET",
    requiresAuth: true,
  });
}
