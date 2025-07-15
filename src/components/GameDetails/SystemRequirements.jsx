import React from "react";

const SystemRequirements = () => {
  return (
    <div className="bg-[#1f1f2e] p-6 rounded-md">
      <h4 className="text-2xl font-bold mb-4">System Requirements</h4>
      <div>
        <p className="text-md text-gray-300 font-bold mb-1">Minimum:</p>
        <ul className="text-sm text-gray-400 space-y-1 font-semibold">
          <li>OS: Windows 10 64-bit</li>
          <li>CPU: Intel i5-8400 / AMD Ryzen 5 3600</li>
          <li>Memory: 12 GB RAM</li>
          <li>Graphics: GTX 1060 / RX 580</li>
          <li>Storage: 70 GB</li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-md text-gray-300 font-bold mb-1">Recommended:</p>
        <ul className="text-sm text-gray-400 space-y-1 font-semibold">
          <li>OS: Windows 11 64-bit</li>
          <li>CPU: Intel i7-10700K / AMD Ryzen 7 3700X</li>
          <li>Memory: 16 GB RAM</li>
          <li>Graphics: RTX 3070 / RX 6700 XT</li>
          <li>Storage: 70 GB SSD</li>
        </ul>
      </div>
    </div>
  );
};

export default SystemRequirements;
