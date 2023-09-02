import Avatars from "./Avatars";
import avatar1 from "../assets/avatar-anisha.png";
import avatar2 from "../assets/avatar-ali.png";
import avatar3 from "../assets/avatar-richard.png";

const avatarsData = [
  {
    sno: "1",
    value: `anisha`,
    image: avatar1,
    para: ` “Manage has supercharged our team’s workflow. The ability to maintain
      visibility on larger milestones at all times keeps everyone
      motivated.”`,
  },
  {
    sno: "2",
    value: `ali`,
    image: avatar2,
    para: `   “We have been able to cancel so many other subscriptions since
    using Manage. There is no more cross-channel confusion and
    everyone is much more focused.”`,
  },
  {
    sno: "3",
    value: `richard`,
    image: avatar3,
    para: ` “Manage has supercharged our team’s workflow. The ability to maintain
      visibility on larger milestones at all times keeps everyone
      motivated.”`,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Mange?
        </h2>
        {/* testimonials container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {avatarsData.map((avatardata) => (
            <Avatars
              key={avatardata.sno}
              value={avatardata.value}
              image={avatardata.image}
              para={avatardata.para}
            />
          ))}
        </div>
        <div className="my-16 ">
          <div className="flex justify-center items-center">
            <a
              href=""
              className="  md:block px-4 py-3 text-white bg-red-600 rounded-full hover:bg-red-500 font-palanquin  baseline hover:text-black font-semibold  "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
