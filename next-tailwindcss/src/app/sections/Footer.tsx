import React from "react";

const Footer = () => {
  const content = (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mc-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2> Acme Rocket-Powered Products, Inc. </h2>
          555 Astro Way<br></br>
          Fairfield, New Jersey 12345-5555<br></br>
          Email:{" "}
          <a href="mailto:inquiries@acmerockets.com">
            Inquires@AcmeRockets.com
          </a>
          <br></br>Phone: <a href="tel: +1555555555">(555) 55-5555</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy;<span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
  return content;
};

export default Footer;
