"use client";
import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [effect, setEffect] = useState(false);
  const [animation, setAnimation] = useState(false);

  const content = (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <Button></Button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
  return content;
};

export default Header;
