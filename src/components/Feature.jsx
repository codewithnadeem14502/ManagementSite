import Parasection from "./Parasection";

const datas = [
  {
    sno: `01`,
    headline: ` Track company Progress`,
    para: `See how your day-to-day tasks fit into the wider vision. Go from
    tracking progress at the milestone level all the way down to the
    smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    sno: `02`,
    headline: `   Advanced built-in reports`,
    para: `  Set internal delivery estimates and track progress toward
    company goals. Our customisable dashboard helps you build out
    the reports you need to keep key stakeholders informed.`,
  },
  {
    sno: `03`,
    headline: ` Everything you need in one place`,
    para: ` Stop jumping from one service to another to communicate, store
    files, track tasks and share documents. Manage offers an
    all-in-one team productivity solution.`,
  },
];
const Feature = () => {
  return (
    <section id="features">
      <div className="container mt-4 flex flex-col px-4 mx-auto  space-y-12 md:space-y-0 md:flex-row">
        {/* what's different */}
        <div className="flex flex-col  space-y-12 md:w-1/2">
          <h2 className="max-w-lg text-4xl font-bold text-center font-montserrat md:text-left md:text-4xl md:mt-10">
            What's different about manage?{" "}
          </h2>
          <p className="max-w-sm text-center text-slate-500 font-palanquin md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* number lst */}
        <div className="flex flex-col space-y-8 md:w-1/2 ">
          {datas.map((data) => (
            <Parasection
              key={data.sno}
              sno={data.sno}
              headline={data.headline}
              para={data.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
