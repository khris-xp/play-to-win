import { ProductResponseType } from "@/types/product.type";
import { baseApiAction } from "./baseApiAction";

export async function fetchProductAction() {
  return baseApiAction<ProductResponseType[]>(`/products`, {
    method: "GET",
    requiresAuth: true,
  });
}
