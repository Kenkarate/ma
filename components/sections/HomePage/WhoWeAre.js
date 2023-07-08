import { ParallaxText } from "@/components/ParallaxText/ParallaxText";
import React from "react";
import Image from "next/image";
import and from "@/public/and.png";
import { Reveal } from "@/components/Reveal";

function WhoWeAre() {
  return (
    <div className="bg-secondary py-20 w-[100vw]">
      <ParallaxText baseVelocity={5} number={5}>
        Thinkers Designers Stratergist Developers
      </ParallaxText>
      <Reveal>
        <div className="py-10 px-20">
          <p className="text-[70px] ">
            Who <span className="font-bold text-primary">we are </span>
          </p>
          <p className="text-[70px] pl-20 flex">
            <Image className="w-[7%] h-[7%]" src={and} />
            <span className="px-7">What</span>{" "}
            <span className="font-bold text-primary">we do</span>?
          </p>
          <div className="px-44 py-10  ">
            <p className="text-lg leadign-tight">
              Introducing Creative Agency, your digital guardians and the
              driving force behind online success. As a leading social media
              communications agency based in India, we specialize in crafting
              captivating brand experiences that leave a lasting impact. We take
              the time to truly understand your brand and its target audience,
              allowing us to create compelling stories and engage your customers
              on social media platforms. With Creative Agency by your side, we
              bring value to your stakeholders while maintaining an authentic
              and personable approach. Our team combines data-driven insights,
              state-of-the-art technology, and a touch of inspiration to deliver
              exceptional marketing campaigns that stand out from the crowd.
              Explore our portfolio and discover the transformative power of our
              creative work. Join forces with Creative Agency and embark on an
              exciting digital journey that inspires success.
            </p>
          </div>
        </div>
      </Reveal>

      <ParallaxText baseVelocity={-5} number={5}>
        Thinkers Designers Developers Stratergist
      </ParallaxText>
    </div>
  );
}

export default WhoWeAre;
