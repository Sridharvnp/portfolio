import React from "react";
import person from "../images/cartoon.png";
import bg from "../images/blob2.png";

function Home() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background Blob */}
      <img
        src={bg}
        className="absolute right-0 top-8 w-1/2 max-w-sm md:max-w-md lg:max-w-lg opacity-70"
        alt="Background Blob"
      />

      {/* Person Image */}
      <img
        src={person}
        className="absolute top-8 right-4 w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        alt="Cartoon Person"
      />

      {/* Text Content */}
      <div className="relative z-10 px-6 pt-36 sm:pt-40 md:pt-48 lg:pt-56 max-w-4xl mx-auto">
        <div className="flex flex-col items-start space-y-4">
          <div className="text-base sm:text-lg text-gray-600 font-[cursive]">
            Hello! I am
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 text-yellow-300 drop-shadow-md">
            SRIDHAR
          </div>
          <div className="text-sm sm:text-base md:text-lg text-gray-700">
            And I'm a{" "}
            <span className="text-blue-500 font-bold">Front-end Developer</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 mt-10 px-6 flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-4xl mx-auto">
        <button className="btn btn-outline btn-info w-full sm:w-auto">
          Hire Me
        </button>
        <button className="btn btn-outline btn-primary w-full sm:w-auto">
          Projects
        </button>
      </div>
    </section>
  );
}

export default Home;
