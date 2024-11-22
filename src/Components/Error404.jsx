import React from "react";
import pagenotfound from "../../src/assets/404errorpage.gif";

const Error404 = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-300 p-4">
      <h1 className="text-6xl md:text-8xl font-bold text-[#FFD60A] mb-4">
        404
      </h1>
      <img
        src={pagenotfound}
        alt="404 Page"
        className="w-64 md:w-96 lg:w-[28rem] h-auto mb-6"
      />
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#18BCFC]">
        Page Not Found
      </h2>
      <p className="text-center text-black md:text-base mt-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/home"
        className="mt-6 px-6 py-3 bg-[#FFD60A] text-[#000814] font-medium rounded-lg shadow-md hover:bg-[#FFC300] transition duration-300"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default Error404;
