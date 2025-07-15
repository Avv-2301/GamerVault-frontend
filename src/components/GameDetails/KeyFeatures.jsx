import React from "react";
import { Check } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    "Deep Character Customization",
    "Branching Storylines",
    "Dynamic Combat System",
    "Vast Open World",
    "Ray Tracing Support",
  ];
  return (
    <div className="bg-[#1f1f2e] p-6 rounded-md">
      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
      <ul className="ml-2 text-sm text-gray-300 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1"><Check color="#2ee60a" /></span>
            <span className="font-semibold text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeatures;
