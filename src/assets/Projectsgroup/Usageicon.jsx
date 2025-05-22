import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Usages = [
  {
    Percentage: "70%",
    language: "CSS Snippets",
    Remain: "JS & Logic",
  },
  {
    Percentage: "50%",
    language: "TYPOGRAPHY",
    Remain: "Layout",
  },
  {
    Percentage: "60%",
    language: "Figma",
    Remain: "UI Principles",
  },
];

export default function Circles() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-bold mb-8 text-white" data-aos="fade-up">
        Tech Usage
      </h2>

      <div className="flex flex-col md:flex-row md:gap-x-12 gap-y-8">
        {Usages.map((use, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-x-8"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            {/* Circle */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 flex items-center justify-center">
              <div className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full bg-black/90 flex flex-col items-center justify-center text-white text-center px-2">
                <div className="text-xl font-bold">{use.Percentage}</div>
                <div className="text-sm">{use.language}</div>
              </div>
            </div>

            {/* Remaining */}
            <div className="text-white text-sm text-center md:text-left">
              <p className="font-bold text-cyan-400">Remain:</p>
              <p className="font-bold text-amber-400">{use.Remain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
