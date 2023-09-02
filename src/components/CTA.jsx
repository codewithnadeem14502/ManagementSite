import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="bg-red-500">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* heading */}
        <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplity how your team works today
        </h2>
        <div>
          <a
            href=""
            className="p-3 px-6 text-red-500 bg-white rounded-full  shadow-2xl hover:bg-red-200 font-montserrat font-bold  baseline hover:text-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
