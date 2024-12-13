import { fetchCartAction } from "@/actions/cartApiAction";
import { fetchCartItemAction } from "@/actions/cartItemApiAction";
import { fetchProductAction } from "@/actions/productApiAction";
import HomeContainer from "@/app/containers/home-container";

export default async function Home() {
  const cart = await fetchCartAction();
  let cartItem;
  if (cart.data && cart.data.length > 0) {
    cartItem = await fetchCartItemAction(cart.data[0].ID);
  }
  const product = await fetchProductAction();
  return (
    <div>
      <HomeContainer
        cartItem={cartItem?.data || []}
        product={product?.data || []}
      />
    </div>
  );
}
