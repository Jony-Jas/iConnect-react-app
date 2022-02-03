import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

function Header() {
  return (
    <>
      <header className="bg-white/70 fixed w-full z-50">
        <div className="container mx-auto px-10 py-3 ">
          <nav className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center hover:cursor-pointer">
              <img src={logo} alt="logo" />
              <h1 className="px-4 font-bold text-lg">iConnect</h1>
            </div>
            <ul className="flex flex-row items-center">
              <li className="px-4 font-semibold hover:underline hover:cursor-pointer">About</li>
              <li className="px-4 font-semibold hover:underline hover:cursor-pointer">FAQ</li>
              <li className="px-4 font-semibold hover:underline hover:cursor-pointer">Features</li>
              <li className="px-4 font-semibold hover:underline hover:cursor-pointer">Journey</li>
              <li className="pl-4">
                <Button>Am I eligible</Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
