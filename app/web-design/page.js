"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/sections/web-design/Footer";
import Card from "@/components/sections/web-design/WebDesignPortfolio";
import Header from "@/components/Header";
import WhatWeProvide from "@/components/sections/web-design/WhatWeProvide";

function page() {
  return (
    <div>
      <Header color='black' textColor='white'/>
      <div className="flex justify-start ">
        <h1 className="p-10 lg:w-[60vw] xl:text-[80px] my-[5%] lg:text-[50px]  md:text-[50px] text-xl md:leading-tight lg:leading-[80px] text-center lg:text-left  !text-white font-extrabold absolute">
          “There are three responses to a piece of design – yes, no, and WOW!{" "}
          <br />
          Wow is the one to aim for.”
        </h1>
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100vw", objectFit: "contain" }}
        >
          <source src="/codingvideo.mp4" />
        </video>
      </div>
      <WhatWeProvide/>
      <div className="bg-blueish">
        <motion.h3
          initial={{ x: -1200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration:0.9}}
          className="text-[190px] uppercase py-10 font-extrabold pl-10"
        >
          Portfolio
        </motion.h3>
        <div className="">
          <Card />
        </div>
      </div>
      <div>
        <p className="text-[40px] font-semibold  text-black py-20 px-20">
          “Your website is the center of your digital eco-system, like a brick
          and mortar location, the experience matters once a customer enters,
          just as much as the perception they have of you before they walk
          through the door.”
        </p>
      </div>
      <div className="bg-secondary py-20 lg:grid lg:grid-cols-2">
        <p className="lg:text-[70px] md:w-[40vw] p-10 font-extrabold leading-tight uppercase text-center md:text-left">
          Start designing your website with marketing angels
        </p>
        <div className="text-center ">
          <p>WHAT YOU GET</p>
          <button className="border-2 border-white rounded-full p-2 text-2xl font-bold">
            Get started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
