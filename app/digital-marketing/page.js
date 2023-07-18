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
import logo from "@/public/NexusCraft LOGO/2.png";
import WhyChooseUs from "@/components/sections/Digital-marketing/WhyChooseUs";
import Testimonials from "@/components/sections/Digital-marketing/Testimonials";

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
      <Header color={"white"} textColor={"black"} />
      <div className="grid grid-cols-2 h-[90vh] w-full">
        <div className="mx-auto my-auto">
          <Image src={logo} />
        </div>
        <div className=" mx-auto my-auto ">
          <p>Welcome to NexusCraft</p>
          <h1 className="text-4xl py-5">
            Turning Clicks into Customers: Tailored Conversion Solutions for
            Your Business
          </h1>
          <p className=" w-[70%] text-justify text-xl">
            We are the architects of your brand's online success, crafting
            compelling campaigns that captivate audiences and drive meaningful
            engagement. With a passion for creativity and a deep understanding
            of the digital landscape, we harness the power of cutting-edge
            strategies to propel your business forward.
          </p>
        </div>
      </div>
      <hr className="lg:mx-44" />
      <Services />

      <div
        className="bg-blue-100 py-20 text-blueish "
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
      <WhyChooseUs />
      <div
        className="bg-green-200  py-20 text-blueish "
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
      <Testimonials />
      <div className="absolute">
        <Footer />
      </div>
    </div>
  );
}

export default page;
