import { CartResponseType } from "@/types/cart.type";
import { baseApiAction } from "./baseApiAction";

export async function fetchCartAction() {
  return baseApiAction<CartResponseType[]>(`/carts`, {
    method: "GET",
    requiresAuth: true,
  });
}
