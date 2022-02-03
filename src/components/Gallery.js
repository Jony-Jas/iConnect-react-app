import React from "react";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";

function Gallery() {
  return (
    <div className="my-16">
      <div className="bg-[url('./assets/bg-1.jpg')] bg-fixed bg-cover">
        <div className="flex justify-between bg-white/30 px-[20vw] py-[15vh]">
          <div className="flex flex-col justify-center p-16">
            <h1 className="font-bold text-2xl py-3" data-aos="fade-up">
              Research Facility
            </h1>
            <p data-aos="fade-up">
              The research labs at our study sites use state-of-the-art
              equipment operated by highly qulified technicians.
            </p>
          </div>
          <img
            src={img1}
            alt="img1"
            className="max-h-80 rounded"
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-[url('./assets/bg-3.jpg')] bg-fixed bg-cover">
        <div className="flex justify-between bg-white/30 px-[20vw] py-[15vh]">
          <img
            src={img2}
            alt="img2"
            className="max-h-80 rounded"
            data-aos="fade-up"
          />
          <div className="flex flex-col justify-center p-16">
            <h1 className="font-bold text-2xl py-3" data-aos="fade-up">
              Monthly Check-ups
            </h1>
            <p data-aos="fade-up">
              The study conducts patient check-up every third weekend of the
              month to keep track of patient's health and recovery.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/bg-4.jpg')] bg-fixed bg-cover">
        <div className="flex justify-between bg-white/30 px-[20vw] py-[15vh]">
          <div className="flex flex-col justify-center p-16">
            <h1 className="font-bold text-2xl py-3" data-aos="fade-up">
              In-home Check-ups
            </h1>
            <p data-aos="fade-up">
              Eligible candidates can choose for in-home consultation every
              month from our trained study professionals.
            </p>
          </div>
          <img
            src={img3}
            alt="img3"
            className="max-h-80 rounded"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
