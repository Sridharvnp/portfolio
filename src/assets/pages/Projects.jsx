import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Redesign from "../Projectsgroup/Uiredesign";
import PortfolioDriveButton from "../Projectsgroup/Drivebutton";
import LpProject from "../Projectsgroup/LpProject";
import bg from "../images/projectbg.jpg";
import ProjectSection from "../Projectsgroup/Projectcontent";
import Circles from "../Projectsgroup/Usageicon";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id = "projects">
      <div className="relative w-full min-h-screen  text-ocean">
        {/* Background image */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 "></div> */}

        <div className="container mx-auto p-12">
          <h2
            className="text-lg md:text-5xl font-bold mt-12 text-center mb-24"
            data-aos="fade-down"
          >
            My Projects
          </h2>

          {/* Grid layout for project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div data-aos="fade-left">
              <LpProject />
            </div>
            <div data-aos="flip-up">
              <PortfolioDriveButton />
            </div>
            <div data-aos="fade-up-right">
              <Redesign />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row  justify-around bg-opacity-50 z-10">
        <Circles />
      </div>
      <div
        data-aos="zoom-in-down"
        className=" flex flex-row justify-center items-center flex-wrap mt-20 mb-20"
      >
        <ProjectSection />
      </div>
    </section>
  );
}

export default Projects;
