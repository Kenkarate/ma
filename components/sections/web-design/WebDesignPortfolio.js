"use client";
import React from "react";
import { motion } from "framer-motion";
import growth from "@/public/Growth-Marketing-Agency-for-SaaS-Startups-growth-cx_11zon.webp";
import gallery from "@/public/Digital-Music-Distribution-Sell-Your-Music-Online-Gallery-Vision_11zon.webp";
import nintriva from "@/public/Custom-Software-Development-App-Development-Nintriva_11zon.jpg";
import suitejar from "@/public/Suitejar-Best-Content-Marketing-Tool-Free-SEO-Tool_11zon.webp";
import Image from "next/image";
import { Button } from "antd";

function WebDesignPortfolio() {
  return (
    <>
      <a
        href="https://growth.cx/"
        className="px-2 "
        target="_blank"
        rel="noreferrer"
      >
        <div className="lg:!w-[80vw] lg:!h-[50vh] mx-5 rounded-3xl lg:mx-32 mb-20 lg:!grid lg:!grid-cols-3  select-none pt-20 ">
          <div className="lg:!col-span-2 row-span-2 w-[90%] h-[350px]  rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
            <motion.div
              whileHover={{ y: -1600 }}
              transition={{ duration: 10 }}
              initial={{ y: 10 }}
            >
              <Image
                src={growth}
                // alt=""
                // className=""
              />
            </motion.div>
          </div>
          <div className="py-10 text-center px-5">
            <p className="text-4xl py-2 font-bold cursor-none select-none">
              Growth.cx
            </p>
            <p className="text-justify">
              growth.cx is a full service product marketing agency helping B2B
              SaaS startups outrun and outshine their competitors. We/They
              (depends on how you want to say) are a group of super passionate
              and highly qualified Growth Hackers, Product Marketers, Content
              Creators, Developers and Designers.
            </p>
            <p className="mt-10 text-[20px] hover:text-[#BD827E]  "></p>
          </div>
        </div>
      </a>
      <a
        href="https://gallery.vision/"
        className="px-2 "
        target="_blank"
        rel="noreferrer"
      >
        <div className="lg:w-[80vw] lg:h-[50vh] mx-5   rounded-3xl lg:mx-32 flex flex-col-reverse lg:grid lg:grid-cols-3 select-none lg:mt-[10%]">
          <div className="py-10 text-center px-5">
            <p className="text-4xl py-2 font-bold cursor-none select-none ">
              Gallery Vision
            </p>
            <p className="text-justify">
              Digital Music Distribution Company <br />
              We are music lovers! We are aggregators, marketers, and
              distributors, and we cater to artists who love to showcase their
              talent to the world.
            </p>
            <p className="mt-10 text-[20px]  hover:text-[#BD827E]  "></p>
          </div>
          <div className="lg:!col-span-2 w-[90%] h-[350px] rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden ">
            <motion.div
              whileHover={{ y: -1600 }}
              transition={{ duration: 10 }}
              initial={{ y: 10 }}
            >
              <Image
                src={gallery}
                // alt=""
                // className=""
              />
            </motion.div>
          </div>
        </div>
      </a>
      <a
        href="https://nintriva.com/"
        className="px-2 "
        target="_blank"
        rel="noreferrer"
      >
        <div className="lg:!w-[80vw] lg:!h-[50vh] mx-5 rounded-3xl lg:mx-32 my-20 lg:!grid lg:!grid-cols-3  select-none lg:mt-[10%]">
          <div className="lg:!col-span-2 row-span-2 w-[90%] h-[350px]  rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
            <motion.div
              whileHover={{ y: -1600 }}
              transition={{ duration: 10 }}
              initial={{ y: 10 }}
            >
              <Image
                src={nintriva}
                // alt=""
                // className=""
              />
            </motion.div>
          </div>
          <div className="py-10 text-center px-5">
            <p className="text-4xl py-2 font-bold cursor-none select-none">
              Nintriva
            </p>
            <p className="text-justify">
              Nintriva is a full service shop offering end-to-end information
              technology solutions and services to businesses and organizations
              around the world.
            </p>
            <p className="mt-10 text-[20px] hover:text-[#BD827E] "></p>
          </div>
        </div>
      </a>
      <a
        href="https://suitejar.com/"
        className="px-2 "
        target="_blank"
        rel="noreferrer"
      >
        <div className="lg:w-[80vw] lg:h-[60vh] mx-5 rounded-3xl lg:mx-32 flex flex-col-reverse lg:grid lg:grid-cols-3 select-none  lg:mt-[10%]">
          <div className="py-10 text-center px-5">
            <p className="text-4xl py-2 font-bold cursor-none select-none">
              Suitejar
            </p>
            <p className="text-justify">
              SuiteJar's algorithm helps you automate & discover the pages that
              you need to update in the priority order to rank on Google’s 1st
              page
            </p>
            <p className="mt-10 text-[20px]  hover:text-[#BD827E]  "></p>
          </div>
          <div className="lg:!col-span-2 w-[90%] h-[350px] rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
            <motion.div
              whileHover={{ y: -1600 }}
              transition={{ duration: 10 }}
              initial={{ y: 10 }}
            >
              <Image
                src={suitejar}
                // alt=""
                // className=""
              />
            </motion.div>
          </div>
        </div>
      </a>
      <div className=" flex justify-center py-20">
        <Button className="  ">View More</Button>
      </div>
    </>
  );
}

export default WebDesignPortfolio;
