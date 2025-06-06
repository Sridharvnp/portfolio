import React from "react";
import robo from "../images/profile.png";
import pdf from "../images/sridhar - UPDATED RESUME.pdf"

function About() {
  return (
    <section id="about" className="w-full bg-white py-16 px-4" >


      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl text-blue-800 font-bold text-center bg-white/10 backdrop-blur-sm rounded-xl border border-white shadow-md p-4 mb-12">
          Who Am I?
        </h2>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-semibold mb-4">
              I'm a <span className="text-blue-600">Web Developer</span>
            </div>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
              I want to be a part of your incredible growth journey. Experienced in designing
              visually appealing user interfaces, optimizing workflows, and collaborating within
              dynamic team environments. Passionate about leveraging technology to enhance digital
              experiences and create intuitive user interactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Contact Me
              </a>
              <a
                href="./images/sridhar - UPDATED RESUME.pdf"
                download
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={robo}
              alt="Profile"
              className="w-60 sm:w-72 md:w-80 lg:w-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
