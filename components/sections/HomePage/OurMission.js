"use client";
import Image from "next/image";
import React from "react";
import mission from "@/public/mission.png";
import { Reveal } from "@/components/Reveal";

function OurMission() {
  return (
    <div className="py-44 px-20 grid grid-cols-2 ">
      <div>
        <Reveal>
          <p className="text-[70px] text-white uppercase leading-[4rem]">
            Our <br />{" "}
            <span className="font-bold text-[70px] text-secondary uppercase">
              Mission
            </span>
          </p>{" "}
        </Reveal>
        <Reveal>
          <p className="text-secondary text-xl leading-7 py-5 pr-16 border-l-2 border-secondary pl-5">
            We are on a mission; a very challenging mission. <br /><br /> Yes, you got it
            right. We are on a mission to build a long term relationship with
            you and serving you a perfect social media experience. <br /><br /> To make a
            relationship last long, a strong connection is the key. Knowing each
            other, building a consistent approach, taking an in-depth look at
            the scenario together is how we make it work.
          </p>
        </Reveal>
      </div>
      <Reveal fromDirection={'x'}>
        <Image src={mission} />
      </Reveal>
    </div>
  );
}

export default OurMission;
