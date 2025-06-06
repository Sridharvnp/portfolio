import React from "react";
import robo from "../images/profile.png";

const PortfolioDriveButton = () => {
  const driveLink =
"https://www.figma.com/proto/zc3mklsp6VdBjRC2PSrYqf/Living-pool-project-Ui?page-id=0%3A1&node-id=7-590&p=f&viewport=552%2C298%2C0.08&t=TX7XITLH5ArKrcvk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A590";
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
        UI PROTOTYPE <br /> (Living Pool)
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
