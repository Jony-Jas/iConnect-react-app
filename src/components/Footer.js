import React from "react";

function Footer() {
  return (
    <footer className="mx-[20vw] mt-16 mb-8">
      <div className="flex w-1/3 pb-2">
        <div className="px-3">
          <h3
            className="font-bold py-2"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            Address
          </h3>
          <p className="font-semibold" data-aos="fade-up" data-aos-offset="300">
            350 5th Ave, New York, NY 10118, USA
          </p>
        </div>
        <div className="px-3">
          <h3
            className="font-bold py-2"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            Links
          </h3>
          <ul className="text-misty-red font-medium">
            <li
              className="hover:text-red-500 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              About
            </li>
            <li
              className="hover:text-red-500 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              FAQ
            </li>
            <li
              className="hover:text-red-500 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              Eligibility
            </li>
            <li
              className="hover:text-red-500 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              Features
            </li>
            <li
              className="hover:text-red-500 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              Journey
            </li>
          </ul>
        </div>
      </div>
      <div className="px-3 pb-20">
        <h3 className="font-bold py-2" data-aos="fade-up" data-aos-offset="300">
          Contacts
        </h3>
        <ul className="font-medium" data-aos="fade-up" data-aos-offset="300">
          <li>support@iconnect.com</li>
          <li>+1 (0) 000 0000 00 1</li>
          <li>+1 (0) 000 0000 00 2</li>
        </ul>
      </div>
      <div className="text-slate-300 text-lg">
        <p className="hover:underline hover:cursor-pointer">
          © Copyright 2021 iConnect - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
