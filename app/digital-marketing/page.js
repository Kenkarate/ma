"use client";
import React from "react";
import dgimage from "@/public/digital-marketing.webp";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="bg-black">
        <p className="text-[180px] font-extrabold uppercase p-10">
          Digital marketing &
        </p>
      </div>
      {/* <Image src={dgimage} /> */}
    </div>
  );
}

export default page;
