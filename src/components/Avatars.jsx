import avatar1 from "../assets/avatar-anisha.png";
import avatar2 from "../assets/avatar-ali.png";
import avatar3 from "../assets/avatar-richard.png";

const Avatars = ({ value, image, para }) => {
  return (
    <>
      {/* testimonail 1*/}
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3 hover:bg-gray-200 hover:shadow-lg mb-16 md:mb-0">
        <img src={image} alt="avatar1" className="w-16 -mt-14" />
        <h5 className="text-lg font-bold"> {value}</h5>
        <p className="text-sm text-slate-800 font-palanquin">{para}</p>
      </div>
    </>
  );
};

export default Avatars;
