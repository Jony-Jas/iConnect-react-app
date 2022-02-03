import React from "react";

const datas = [
  {
    title: "Eligibility",
    content: "18 years or older participants with symptoms of MDS or anaemia.",
  },
  {
    title: "Monthly Check-ups",
    content:
      "A check-up every third weekend of the month to keep track of patient's health and recovery",
  },
  {
    title: "Treatment",
    content: "The total treatment period of this study is about 20-24 weeks.",
  },
  {
    title: "Compensation",
    content:
      "Participants might receive up to $300 for taking part in the study.",
  },
];

function AboutStudy() {
  return (
    <div className="bg-[url('./assets/bg-2.jpg')] bg-fixed bg-100% flex justify-center items-center">
      <div className="py-20 flex flex-col items-center w-8/12">
        <h2 className="text-white font-bold text-2xl py-4" data-aos="fade-up">
          About the study
        </h2>
        <p className="text-white font-normal pb-2">
          Here are some highlights of our study
        </p>
        <div className="flex flex-wrap justify-center">
          {datas.map((data) => (
            <div className="bg-white px-7 py-7 max-w-md m-4" key={data.title}>
              <h1 className="font-bold text-2xl pb-4">{data.title}</h1>
              <p className="font-normal" data-aos="fade-up">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutStudy;
