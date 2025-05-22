import React from "react";
import robo from "../images/profile.png";

const PortfolioDriveButton = () => {
  const driveLink =
    "https://drive.google.com/drive/folders/19eND4O2F5Iern824k6dsdND98ZjcG4bO?usp=sharing";

  return (
    <div className="relative bg-gray-400 p-2 rounded-xl w-80 overflow-hidden">
      {/* Image */}
      <img
        src={robo}
        alt="Project"
        className="rounded-xl w-full h-60 object-cover"
      />
      {/* Curved cut-out */}
      <div className=" absolute bottom-0 right-0 w-24 h-12 bg-teal-400 z-0 rounded-tl-2xl"></div>

      <h2 className="font-bold text-yellow-200 text-lg absolute top-36   w-full h-24 z-10 flex items-center justify-center bg-gradient-to-t from-transparent to-gray-200 rounded-xl hover:from-gray-400">
        View Design Work(Drive)
      </h2>

      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold relative -bottom-0 right-3 float-right z-10 underline"
      >
        To View
      </a>
    </div>
  );
};

export default PortfolioDriveButton;
