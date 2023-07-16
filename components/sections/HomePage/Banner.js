"use client";
import Image from "next/image";
import React from "react";
import bannerimage from "@/public/bannerimg.png";
import { motion } from "framer-motion";
import { Reveal } from "../../Reveal";
import { Roboto } from "next/font/google";

function Banner() {
  const componentVarients = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        duration:0.9
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 1.5,
        repeat: 5,
      },
    },
  };

  return (
    <div className="lg:h-screen md:text-center grid lg:grid-cols-2 text-[#0F253D] select-none bg-[#F6E84E]">
      <div className="my-[25%] mx-[25%] xm:order-last sm:order-last md:order-first">
        <div></div>
        <Reveal> 
          <motion.h1 className="uppercase text-4xl font-extrabold h-20 leading-tight">
            An agency for what comes{" "}
            <motion.p
              whileHover={{ scale: 1.5, color: "red" }}
              className="text-[75px] text-black "
            >
              next!
            </motion.p>{" "}
          </motion.h1>

          <br />
          <br />
          <br />
          <br />

          <p className="hidden sm:block">
            NexusCraft is an independent branding & marketing agency that
            exists to solve problems through creativity and technology.{" "}
          </p>
        </Reveal>
        {/* <Reveal> */}
        <motion.button
          variants={componentVarients}
          whileHover="hover"
          animate="visible"
          initial="hidden"
          className="my-10  border rounded px-2 hover:text-black hover:border-black border-[#0F253D] hover:shadow-lg font-semibold text-md "
        >
          Get in touch with US
        </motion.button>
        {/* </Reveal> */}
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
        <Image className="md:p-10 " src={bannerimage} />
      </motion.div>
    </div>
  );
}

export default Banner;
