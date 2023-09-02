import footerlogo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* logo and icons */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023,All Rights Reserved
          </div>
          {/* logo */}

          <div>
            <img className="h-8" src={footerlogo} alt="" />
          </div>
          {/* socialmedia */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={pinterest} alt="" />
            </a>
          </div>
        </div>
        {/* list  */}
        <div className="flex justify-around space-x-32 ">
          {/* first menu */}
          <div className="flex flex-col text-white space-y-3">
            <a href="#" className="hover:text-slate-200">
              Home
            </a>
            <a href="#" className="hover:text-slate-200">
              Pricing
            </a>
            <a href="#" className="hover:text-slate-200">
              Products
            </a>
            <a href="#" className="hover:text-slate-200">
              Abouts
            </a>
          </div>
          <div className="flex flex-col text-white space-y-3">
            <a href="#" className="hover:text-slate-200">
              Careers
            </a>
            <a href="#" className="hover:text-slate-200">
              Community
            </a>
            <a href="#" className="hover:text-slate-200">
              Privacy policy
            </a>
            <a href="#" className="hover:text-slate-200">
              Abouts
            </a>
          </div>
        </div>
        {/* inputcontainer */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="update@gmail.com"
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block ">
            Copyright &copy; 2023,All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
