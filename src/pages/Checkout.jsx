import React, { lazy } from "react";
const CheckoutSteps = lazy(() =>
  import("../components/Checkout/CheckoutSteps")
);
const OrderSummary = lazy(() => import("../components/Checkout/OrderSummary"));
const ReviewOrder = lazy(() => import("../components/Checkout/ReviewOrder"));
const PaymentMethod = lazy(() =>
  import("../components/Checkout/PaymentMethod")
);
const PromoCode = lazy(() => import("../components/Checkout/PromoCode"));
const BillingInformation = lazy(() =>
  import("../components/Checkout/BillingInformation")
);

const CheckoutPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-22 pt-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <CheckoutSteps />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <OrderSummary />
          <PaymentMethod />
          <BillingInformation />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <ReviewOrder />
          <PromoCode />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
