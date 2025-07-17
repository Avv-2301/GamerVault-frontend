import React from "react";

const steps = ["Cart Review", "Payment Info", "Complete Order"];

const CheckoutSteps = () => {
  return (
    <div className="flex items-center gap-4 text-gray-400">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center font-semibold">
          <span
            className={`${index === 1 ? "text-indigo-500 font-semibold" : ""}`}
          >
            {step}
          </span>
          {index !== steps.length - 1 && (
            <span className="mx-3 text-gray-500">→</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
