import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-[#0f0f1c] h-screen">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
