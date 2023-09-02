import React from "react";

const Parasection = ({ sno, headline, para }) => {
  return (
    <>
      <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* heading */}
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
              {sno}
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden font-montserrat">
              {headline}
            </h3>
          </div>
        </div>
        <div>
          <h3 className=" hidden text-lg font-bold mb-4 md:block font-montserrat">
            {headline}
          </h3>
          <p className="text-gray-500  font-palanquin">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Parasection;
