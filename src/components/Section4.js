import React from "react";

function Section4() {
 
  return (
    <div className="mx-[20vw] my-16">
      <h2
        className="text-2xl text-center pb-5"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        Patient Journey
      </h2>
      <div className="flex">
        <div
          className={`bg-slate-300 w-px h-[300px] mt-5 left-5 rounded relative z-[-1]`}
        ></div>
        <div>
          <div className="flex">
            <div
              className="border-grey border-2 rounded-full w-10 h-10 flex items-center justify-center bg-white"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <h3 className="text-xl">1</h3>
            </div>
            <div className="px-5 pt-1">
              <h2 className="text-xl" data-aos="fade-up" data-aos-offset="300">
                Check eligibility
              </h2>
              <p
                className="text-sm pt-4 pb-8"
                data-aos="fade-up"
                data-aos-offset="300"
              >
                Check your eligiblity by taking up the{" "}
                <a href="/" className="text-misty-red">
                  eligiblity test
                </a>
                . If you are eligible, you can connect with the team at a study
                site of your choice.
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="border-grey border-2 rounded-full w-10 h-10 flex items-center justify-center bg-white"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <h3 className="text-xl">2</h3>
            </div>
            <div className="px-5 pt-1">
              <h2 className="text-xl" data-aos="fade-up" data-aos-offset="300">
                Screening Period
              </h2>
              <p
                className="text-sm pt-4 pb-8"
                data-aos="fade-up"
                data-aos-offset="300"
              >
                The team will connect with you and screen you with other
                preliminary tests. This can take up to 30-35 days which may be
                extended.
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="border-grey border-2 rounded-full w-10 h-10 flex items-center justify-center bg-white"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <h3 className="text-xl">3</h3>
            </div>
            <div className="px-5 pt-1">
              <h2 className="text-xl" data-aos="fade-up" data-aos-offset="300">
                Treatment Period
              </h2>
              <p
                className="text-sm pt-4 pb-8"
                data-aos="fade-up"
                data-aos-offset="300"
              >
                Eligible candidates will receive initial treatment for up to 24
                weeks during which the health, sleep and physical activites will
                be monitored.
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="border-grey border-2 rounded-full w-10 h-10 flex items-center justify-center bg-white"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <h3 className="text-xl">4</h3>
            </div>
            <div className="px-5 pt-1">
              <h2 className="text-xl" data-aos="fade-up" data-aos-offset="300">
                Follow-up Period
              </h2>
              <p
                className="text-sm pt-4 pb-8"
                data-aos="fade-up"
                data-aos-offset="300"
              >
                A follow-up period where you will be contacted approximately
                every 12 weeks to ask how you are doing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
