"use client";
import Banner from "@/components/sections/HomePage/Banner";
import Header from "@/components/Header";
import { Typography } from "antd";

import { motion, useInView } from "framer-motion";
// import bannerimg from "@/public/bannerimg.jpg";

// import Image from "next/image";
import OurApproach from "@/components/sections/HomePage/OurApproach";
import { useScroll } from "framer-motion";
import { ParallaxText } from "@/components/ParallaxText/ParallaxText";
import { useRef } from "react";
import WhoWeAre from "@/components/sections/HomePage/WhoWeAre";
import OurMission from "@/components/sections/HomePage/OurMission";
import OurPrinciples from "@/components/sections/HomePage/OurPrinciples";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header color={'#F6E84E'}/>
      <Banner />
      <WhoWeAre />
      <OurMission />
      <OurPrinciples />
      <Footer/>
      {/* <OurApproach /> */}
    </main>
  );
}
