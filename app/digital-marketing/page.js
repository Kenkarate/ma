"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import digilottie from "@/public/digilottie";
import Lottie from "lottie-react";
import Footer from "@/components/sections/web-design/Footer";

function page() {
  return (
    <div>
      <Header color={"black"} textColor={"white"} />
      <div className="absolute">
        <p className="text-2xl  font-extrabold uppercase p-20">
          Digital marketing
        </p>
      </div>
      <div className="bg-black p-10">
        <video
          autoPlay
          loop
          muted
          style={{ width: "100vw", objectFit: "contain" }}
        >
          <source src="/brand.mp4" />
        </video>
      </div>
      <div className="bg-white text-black py-44 grid grid-cols-2">
        <div className="my-auto">
          <p className="lg:text-4xl font-semibold text-center">
            RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
          </p>
          <p className="lg:text-4xl font-semibold text-center">
            Growing Brands Online
          </p>
        </div>
        <div>
          <Lottie animationData={digilottie} className="h-96" />
        </div>
      </div>
      <div className="bg-gray-200 py-44 text-blueish ">
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
      <div className="py-44 text-blueish ">
        <p className="lg:text-4xl font-semibold text-center ">
          Services We Provide
        </p>
        <p className="text-center py-2">
          Partner with a leading digital marketing agency to increase brand
          awareness, reach your target audience & grow your business online.
        </p>
        <ol
          style={{ listStyleType: "disc" }}
          className="py-10 font-semibold text-2xl px-72"
        >
          <li>Branding</li>
          <li>Social Media Managment</li>
          <li>Instagram,FaceBook and Google Ads</li>
          <li>Search Engine Optimisation (SEO)</li>
          <li>Email Marketing,</li>
        </ol>
      </div>
      <div className="bg-green-200  py-44 text-blueish ">
        <div className=" text-center  px-56">
          <p className="uppercase py-5">
            Would you like your clients to keep coming back for more?
          </p>
          <p className="text-2xl">
            Then you must connect with them on a deeper level. We search for the
            core brand values and soul of your business to give your people a
            meaningful experience.{" "}
          </p>
          <p className="py-10">
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
