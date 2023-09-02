import introImage from "../assets/illustration-intro.svg";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center md:px-6 px-2 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mt-4 mt-2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            Bring everyone together Better Products
          </h1>
          <p className="max-w-sm text-center md:text-left text-slate-600">
            Manage makes it simple for software teams to plan day-to-day task
            while keeping the largeer team goals in view
          </p>
          {/* button */}
          <div className="flex justify-center md:justify-start">
            <a
              href=""
              className=" px-4 py-3 text-white bg-red-600 rounded-full hover:bg-red-500 font-palanquin baseline  hover:text-black font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* right item */}
        <div className="md:w-1/2">
          <img src={introImage} alt="introimage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
