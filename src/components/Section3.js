import React from "react";
import Container from "./Container";

function Section3() {
  return (
    <Container>
      <div className="bg-misty-red p-10 rounded flex flex-col">
        <h2 className="text-white font-bold text-2xl py-5" data-aos='fade-up'>
          Let's find out if you are eligible for this study.
        </h2>
        <p className="font-normal text-white py-5" data-aos='fade-up'>
          Take up this questionnaire to help us determine if you have symptoms
          that are common for MDS and anemia. If you have the common symptoms,
          you may be ekigible to take part in the study.
        </p>
        <div className="py-5" data-aos='fade-up'>
          <button className="px-4 py-2 mr-2 font-semibold text-slate-500 bg-[#Ececec] rounded max-w-fit hover:text-misty-red">
            Start answering
            <i className="far fa-long-arrow-right pl-2"></i>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Section3;
