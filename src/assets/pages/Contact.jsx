import React from "react";
import bg from "../images/bgpic.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        bg-[url('/images/bgpic.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        py-12
      "
      style={{ backgroundImage: `url(${bg})` }} // alternative if you prefer import
    >
      {/* optional semi-transparent overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content wrapper sits above the overlay */}
      <div className=" relative max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl font-mono border-2 p-4 w-full text-center mb-8">
            Get In Touch
          </h2>
          <p className="text-lg font-bold mb-6">
            Let’s collaborate—drop me a message and let’s make something great.
          </p>
          <div className="space-x-8 flex flex-row gap-8 absolute mt-20">
            <div>
              <div className="text-lg font-semibold">Name</div>
              <div className="text-base">Sridhar</div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-xl mr-3"></i>
              <div>
                <div className="text-lg font-semibold">Address</div>
                <div className="text-base">Cuddalore, Tamil Nadu</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-xl mr-3"></i>
              <div>
                <div className="text-lg font-semibold">Email</div>
                <div className="text-base">vadivelsridhar1@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column – Contact Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Message Me</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Message..."
              rows={6}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
