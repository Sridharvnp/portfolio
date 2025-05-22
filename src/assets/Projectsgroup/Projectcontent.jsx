import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lplogo from "../images/Lplogo.png";
import figma from "../images/figma.jpg";
import Graphic from "../images/graphicdesign.jpg";

const projects = [
  {
    title: "LIVING POOL",
    description:
      "A showcase of front-end development blended with thoughtful UI design.",
    image: Lplogo,
    details: `Project Brief:
Step 1 – Concept: Design rooted in the Sunken Conversation Pit.
Step 2 – Responsive: Fluid layouts using modern CSS.
Step 3 – Goal: Reimagine the old era with a modern aesthetic.`,
  },
  {
    title: "Graphic Design Work",
    description:
      "Exploring visual identity through layout, color, and typography.",
    image: Graphic,
    details: `Profile Brief:
Frontend developer with a sharp eye for UI and graphic design.
Combining development with creativity to deliver polished digital experiences.`,
  },
  {
    title: "Figma UI Designs",
    description:
      "Exploring visual identity through layout, color, and typography.",
    image: figma,
    details: `Profile Brief:
Showcase of UI design concepts built in Figma.
And also had a Coursera certificate with ux Experience`,
  },
];

export default function ProjectContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full flex flex-col gap-6 px-4 py-8 bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 rounded-2xl">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          className="w-full flex flex-col md:flex-row bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 text-white hover:scale-[1.01] transition-transform duration-300"
        >
          {/* Left Side - Image + Title */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 gap-4">
            <img
              src={proj.image}
              alt={proj.title}
              className="h-12 w-auto"
            />
            <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-200 text-center md:text-left">{proj.description}</p>
          </div>

          {/* Right Side - Details */}
          <div className="mt-6 md:mt-0 md:ml-8 md:w-2/3 text-base whitespace-pre-line font-medium">
            {proj.details}
          </div>
        </div>
      ))}
    </section>
  );
}
