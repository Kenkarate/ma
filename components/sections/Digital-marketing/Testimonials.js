import React from "react";
import bg1 from "@/public/Backgrounds/bg.png";
import Image from "next/image";

function Testimonials() {
  return (
    <div>
      <Image src={bg1} className="absolute" />
      <div className="grid grid-cols-3 gap-5 py-20 w-full relative px-10">
        <div className="mx-auto my-auto text-white">
          <p >Client Testimonials</p>
          <h3 className="text-[60px]">What Our Clients Say About Us</h3>
          <p></p>
        </div>
        <div className="">
          <div className="p-10 border rounded bg-green-50 ">
            <p className="">
              Nexus Craft helped us to take our brand to the next level. They
              have a deep understanding of our industry and our target audience,
              and they have been able to create marketing materials that are
              both visually stunning and effective. We are especially impressed
              with their ability to think outside the box and come up with
              creative solutions that meet our specific needs. We highly
              recommend Nexus Craft to anyone who is looking for a creative
              agency that can help them to achieve their marketing goals.{" "}
              <span className="text-lg font-bold">-DrVisionOpticals</span>
            </p>
          </div>
        </div>
        <div>
          <div className="p-10 border rounded bg-green-50 ">
            <p className="">
              Nexus Craft helped us to take our brand to the next level. They
              have a deep understanding of our industry and our target audience,
              and they have been able to create marketing materials that are
              both visually stunning and effective. We are especially impressed
              with their ability to think outside the box and come up with
              creative solutions that meet our specific needs. We highly
              recommend Nexus Craft to anyone who is looking for a creative
              agency that can help them to achieve their marketing goals.{" "}
              <span className="text-lg font-bold">-DrVisionOpticals</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
