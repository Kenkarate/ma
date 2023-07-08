import { Reveal } from "@/components/Reveal";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function OurApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="text-primary px-44 pb-10 relative bg-secondary">
      <div
        ref={ref}
        className="text-black flex justify-center z-10 pt-10 relative bg-secondary "
      >
        <motion.p
          className="text-primary text-[80px] uppercase font-semibold "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {" "}
          Our Approach
        </motion.p>
      </div>
      <div className="grid grid-cols-6 text-primary">
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3">

          <p className="text-2xl font-semibold">1. Discovery Phase</p>
          {/* <p>
              This discovery phase allows us to gather insights and develop a
              comprehensive understanding of your business goals, values, and
              competitive landscape.
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div></div>
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3">
          <p className="text-2xl font-semibold">2. Strategy Development</p>
          {/* <p>
              This includes defining the project scope, establishing key
              messaging, and identifying the most suitable channels and
              platforms to reach your target audience.
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div></div>
        <div></div>
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3">
          <p className="text-2xl font-semibold">3.Creative Conceptualization</p>
          {/* <p>
              We believe in pushing creative boundaries to create unique and
              engaging experiences that resonate with your audience.
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div></div>
        <div></div>
        <div></div>
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3">
          <p className="text-2xl font-semibold">4.Collaboration and Feedback</p>
          {/* <p>
              Throughout the creative process, we foster a collaborative
              environment where your input and feedback are highly valued. Your
              feedback allows us to refine and enhance our work, ensuring that
              the final result exceeds your expectations.
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3 ">
          <p className="text-2xl font-semibold">5.Development & Refinement</p>
          {/* <p>
              We iterate and refine our work based on the feedback received,
              continuously improving and fine-tuning the project until it aligns
              perfectly with your vision and goals.
            </p> */}
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="border-b-[10px] rounded-lg border-l-[10px] border-white p-3 w-56">
          <p className="text-2xl font-semibold">6.Timely Delivery & Support</p>
        </div>
      </div>

    </div>
  );
}

export default OurApproach;
