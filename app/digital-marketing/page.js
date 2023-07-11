"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

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
      <div className="bg-white py-44 text-blueish ">
        <div className=" text-center px-56">
          <p className="uppercase py-5">People buy from people</p>
          <p className="text-2xl">When you have a brand identity that matches your voice, values, product or service quality, it makes your business trustworthy, professional and authentic. </p>
          <p className="py-10">Clients will be inspired to want to know more about you and will want to invest in what you’re offering. </p>
        </div>
        
      </div>


      <div className="bg-white py-44 text-blueish ">
        <div className=" text-center px-56">
          <p className="uppercase py-5">Would you like your clients to keep coming back for more?</p>
          <p className="text-2xl">Then you must connect with them on a deeper level. We search for the core brand values and soul of your business to give your people a meaningful experience. </p>
          <p className="py-10">Clients will be inspired to want to know more about you and will want to invest in what you’re offering. </p>
        </div>
      </div>
    </div>
  );
}

export default page;
