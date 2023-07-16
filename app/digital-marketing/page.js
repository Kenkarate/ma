"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import digilottie from "@/public/digilottie";
import Lottie from "lottie-react";
import Footer from "@/components/sections/web-design/Footer";
import laptoppic from "@/public/laptoppic.png";
import dynamic from "next/dynamic";
import Services from "@/components/sections/Digital-marketing/Services";

function page() {
  // mouse cursor
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="204, 30, 20"
        outerAlpha={1.2}
        innerScale={1.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header color={"black"} textColor={"white"} />
      <div className=" bg-[#FCF5EB]">
        {/* <p className="text-2xl  font-extrabold uppercase absolute">
          Digital marketing
        </p> */}
        <div className="bg-[#EFA593]">
          <Image className="" src={laptoppic} />
        </div>
      </div>
      {/* <div className="bg-white p-10">
        <video
          autoPlay
          loop
          muted
          style={{ width: "100vw", objectFit: "contain" }}
        >
          <source src="/brand.mp4" />
        </video>
      </div> */}
      <div className=" text-black py-44 grid grid-cols-2">
        <div className="my-auto ">
          <p
            className="lg:text-2xl px-20 font-semibold text-center"
            style={{ fontFamily: "monospace" }}
          >
            RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
          </p>
          <p className="lg:text-4xl font-semibold text-center uppercase">
            Growing Brands Online
          </p>
        </div>
        <div className="bg-white">
          <Lottie animationData={digilottie} className="h-96" />
        </div>
      </div>
      <div
        className="bg-gray-200 py-44 text-blueish "
        style={{ fontFamily: "monospace" }}
      >
        <div className=" text-center px-56">
          <p className="uppercase py-5">People buy from people</p>
          <p className="text-2xl">
            When you have a brand identity that matches your voice, values,
            product or service quality, it makes your business trustworthy,
            professional and authentic.{" "}
          </p>
          <p className="py-10">
            Clients will be inspired to want to know more about you and will
            want to invest in what you’re offering.{" "}
          </p>
        </div>
      </div>
      <Services />
      <div
        className="bg-green-200  py-44 text-blueish "
        style={{ fontFamily: "initial" }}
      >
        <div className=" text-center  px-56">
          <p className="uppercase py-5">
            Would you like your clients to keep coming back for more?
          </p>
          <p className="text-4xl">
            Then you must connect with them on a deeper level. We search for the
            core brand values and soul of your business to give your people a
            meaningful experience.{" "}
          </p>
          <p className="py-10 text-lg">
            Clients will be inspired to want to know more about you and will
            want to invest in what you’re offering.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
