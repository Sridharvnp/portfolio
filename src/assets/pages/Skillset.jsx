import React from "react";

function Skillset() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "80%" },
    { name: "tailwind", level: "60%" },
    { name: "React.js", level: "85%" },
    { name: "Figma Tool", level: "80%" },
  ];

  return (
    <section id="skillset" className="py-4 bg-gray-50">
      <div className="max-w-6xl mx-au px-4">
        <h2 className="text-4xl font-bold text-center ">My Skills</h2>
        <div className="flex flex-col md:flex-row mt-8 gap-12">
          {/* Left Column */}
          <div className="md:w-1/2">

            <h3 className="text-2xl font-serif font-semibold mb-24 ml-4">
              Professional skills{" "}
            </h3>
            <p className=" font-serif leading-loose max-w-m mx-auto bg-white/16 backdrop-blur-5xl  border border-white/20 rounded-3xl shadow-md p-8 text-">

              I bridge the gap between design and development, ensuring beauty
              meets functionality.I thrive on solving real-world problems
              through code and constantly explore new technologies to refine my
              craft.
            </p>
            <a href="#" className="text-blue-600 absolute mt-4 ml-6 hover:underline">
              Know more!
            </a>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb- text-sm font-medium text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;
