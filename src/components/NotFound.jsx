import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/home"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
