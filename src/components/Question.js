import React from "react";
import Button from "./Button";

function Question() {
  return (
    <div className="bg-[url('./assets/bg-2.jpg')] bg-fixed bg-cover flex justify-center items-center">
      <div className="py-10 flex flex-col items-center w-6/12">
        <h2 className="text-white font-bold text-2xl py-4" data-aos="fade-up" data-aos-offset="300">
          Got a question?
        </h2>
        <div className="flex justify-between w-full py-5" data-aos="fade-up" data-aos-offset="300">
          <div className="w-1/2 px-2">
            <input
              type="text"
              className="p-2 w-full rounded"
              placeholder="Name"
            />
          </div>
          <div className="w-1/2 px-2">
            <input
              type="email"
              className="p-2 w-full rounded"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="w-full px-2 pb-4" data-aos="fade-up" data-aos-offset="300">
          <textarea
            type="text"
            className="w-full p-2 rounded"
            placeholder="Question"
            row="5"
          />
        </div>
        <div data-aos="fade-up" data-aos-offset="300">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
