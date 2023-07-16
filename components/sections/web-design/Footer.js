import React from "react";

function Footer() {
  return (
    <div className="bg-gray-200 text-black lg:px-20 px-5 text-center md:text-left">
      <div className="grid lg:grid-cols-2 border-b  border-black">
        <div className="py-2">
          <p className="capitalize text-3xl py-10 lg:text-[120px] font-extrabold text-black  leading-tight">
            Let's do good together
          </p>
        </div>
        <div className="text-black grid grid-row-2 content-around">
          <p className="capitalize text-[30px] font-normal text-black ">
            Have a project in mind? Get in touch, and let’s work together!
          </p>
          <p className=" text-[20px] font-normal text-black py-5">
            Come say hello at nexuscraftagency@gmail.com, or tell us more about
            your project and organization by getting started below.
          </p>
          <button className="border-2 border-black rounded p-2 text-lg font-bold">
            Hop on a call
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="py-10 p-5">
          <p className="text-2xl font-bold py-2">Contact Us</p>
          <p>nexuscraftagency@gmail.com</p>
          <p>+91 6238483581</p>
          <p>aluva</p>
        </div>
        <div className="py-10 p-5">
          <p className="text-2xl font-bold py-2">Follow us</p>
          <p>gmail.com</p>
          <p>facebook</p>
          <p>insta</p>
        </div>
        <div className="py-10 p-5">
          <p className="text-2xl font-bold py-2">GET GOOD NEWS</p>
          <p className="py-2">
            Stay in the Loop and have the latest from the world of design for
            good delivered to your inbox.
          </p>
          <p className="border border-black p-2">Signup</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
