"use client"
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

function OurPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="lg:py-44 py-20 ">
      <div
        ref={ref}
        className="text-black flex justify-center z-10  relative  "
      >
        <motion.p
          className="text-primary lg:text-[80px] text-[35px] uppercase font-semibold "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {" "}
          Our Principles
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-2 lg:px-20 py-20 relative ">
        <div className="lg:border-r w-full h-full px-20 py-4 text-right border-primary">
          <p className="text-primary  text-lg font-bold border-b" level={3}>
            Do it with passion or not at all
          </p>
          <p className="text-primary" level={5}>
            The only way to do great job is to love what you do. Committed in
            heart and mind, this is why we wake up in the morning!
          </p>
        </div>
        <div className="lg:border-l w-full h-full px-20 py-4 text-left border-primary"></div>
        <div className="lg:border-r w-full h-full px-20 py-4 text-left border-primary"></div>
        <div className="lg:border-l w-full h-full px-20 py-4 text-left border-primary ">
          <p className="text-primary  text-lg font-bold border-b" level={3}>
            There Is A Great Solution, Buried In Every Challenge
          </p>
          <p className="text-primary" level={5}>
            Getting a big idea is not an act of inspiration, but rather one of
            discovery. Creativity can overcome almost any problem. We welcome
            your challenges and we reimagine your future.
          </p>
        </div>
        <div className="lg:border-r w-full h-full px-20 py-4 text-left border-primary"></div>
        <div className="lg:border-l w-full h-full px-20 py-4 text-left border-primary"></div>
        <div className="lg:border-r w-full h-full px-20 py-4 text-right border-primary ">
          <p className="text-primary  text-lg font-bold border-b" level={3}>
            Leave A Mark On The World’s Cultural Fabric
          </p>
          <p className="text-primary" level={5}>
            We are fanatic about about the world we live in. We create work that
            outlasts movements and trends and redefines culture.
          </p>
        </div>
        <div className="lg:border-l w-full h-full px-20 py-4 text-left border-primary"></div>

        <div className="lg:border-r w-full h-full px-20 py-4 text-left border-primary"></div>

        <div className="lg:border-l w-full h-full px-20 py-4 text-left border-primary ">
          <p className="text-primary  text-lg font-bold border-b" level={3}>
            Sky Is NOT The Limit
          </p>
          <p className="text-primary" level={5}>
            We push our boundaries because that is what they are there for. We
            keep on reaching for higher heights and challenging what is
            possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPrinciples;
