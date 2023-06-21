import React, { useState } from "react";

const Button = () => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(false);

  return (
    <main>
      <button
        className={`${
          toggle && "toggle-btn"
        } text-3xl md:hidden cursor-pointer relative w-8 h-8`}
        onClick={() => setToggle(toggle ? false : true)}
      >
        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
      </button>
      {toggle && (
        <div className="animate-open-menu absolute top-[68px] left-[0px] bg-black w-full text-5xl flex-col origin-top justify-center">
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
            onClick={() => setToggle(toggle ? false : true)}
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setToggle(toggle ? false : true)}
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setToggle(toggle ? false : true)}
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setToggle(toggle ? false : true)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setToggle(toggle ? false : true)}
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setToggle(toggle ? false : true)}
            >
              Legal
            </a>
          </nav>
        </div>
      )}
    </main>
  );
};
export default Button;
