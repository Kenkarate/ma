"use client";
import Image from "next/image";
import React from "react";
import bannerimage from "@/public/bannerimg.png";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

function Banner() {
  return (
    <div className="h-screen grid grid-cols-2 text-[#0F253D] select-none ">
      <div className="my-[25%] mx-[25%]">
        <Reveal>
          <h1 className="uppercase text-4xl font-extrabold h-20 leading-tight">
            An agency for what comes{" "}
            <span className="text-[75px] text-black ">next!</span>{" "}
          </h1>

          <br />
          <br />
          <br />
          <br />

          <p className="">
            Marketing Angles is an independent branding & marketing agency that
            exists to solve problems through creativity and technology.{" "}
          </p>
        </Reveal>
        <Reveal>
          <button className="my-10 border rounded px-2 hover:text-black hover:border-black border-[#0F253D] hover:shadow-lg font-semibold text-lg ">
            Get in touch with US
          </button>
        </Reveal>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Image className="p-10 " src={bannerimage} />
      </motion.div>
    </div>
  );
}

export default Banner;
