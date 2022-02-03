import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[url('./assets/bg-1.jpg')] h-screen bg-fixed bg-100% flex flex-col justify-center">
        <div className="ml-[20vw] w-4/12">
          <h1 className="font-bold text-4xl pb-5">
            A clinical research study for people with myelodysplastic syndromes
            with anemia.
          </h1>
          <p className="font-normal pb-5">
            The study is to compare the effectiveness of a study drug versus a
            standard-of-care therapy. Individuals will be evaluated to determine
            their eligibility to participate. Each person who qualifies will
            receive either the study drug or standard-of-care therapy,
            study-related medical exams, and study-related laboratory tests at
            no cost.
          </p>
          <div className="flex flex-row pb-5">
            <button className="px-4 py-2 mr-2 font-semibold text-white bg-misty-red rounded hover:bg-red-500">
              Check my eligibility
            </button>
            <button className="px-4 py-2 mr-2 font-semibold text-misty-red bg-transparent border-misty-red border-2 rounded hover:bg-misty-red hover:text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
