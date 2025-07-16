import React, { Suspense } from "react";
import { lazy } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "../components/common/Loading";
const CartList = lazy(() => import("../components/Cart/CartList"));
const PromoCode = lazy(() => import("../components/Cart/PromoCode"));
const CartSummary = lazy(() => import("../components/Cart/CartSummary"));

const Cart = () => {
  return (
    <Suspense fallback={<Loading />}>
    <div className="min-h-screen bg-[#0f172a] text-white px-6 md:px-16 py-10">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <span role="img" aria-label="cart">
          <FaShoppingCart className="text-yellow-500"/>
        </span>
        Your Cart
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Cart Items + Promo */}
        <div className="flex-1 space-y-8">
          <CartList />
          <PromoCode />
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3">
          <CartSummary subtotal={59.99} />
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default Cart;
