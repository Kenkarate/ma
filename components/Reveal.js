"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Reveal = ({ children, width = "fit-content", fromDirection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [useDirection, setUseDirection] = useState();
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (fromDirection) {
      setUseDirection(fromDirection);
    } else {
      setUseDirection("y");
    }
    // console.log(useDirection);
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, useDirection: 75 },
          visible: { opacity: 1, useDirection: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
