import { LineChartOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

function WhatWeProvide() {
  return (
    <div className="grid grid-cols-3 px-56 py-20 gap-10 bg-gray-200">
      <div>
        <Image
          src="https://mwb-agency.com/uploads/websites%20icon.svg"
          width={40}
          height={23}
        />
        <p className="text-lg font-semibold text-black py-5">
          We design and build websites completely from scratch
        </p>
      </div>
      <div>
        <Image
          src="https://mwb-agency.com/uploads/Discuss-3.svg"
          width={40}
          height={23}
        />
        <p className="text-lg font-semibold text-black py-5">
          We tailor-make your website to meet your business goals
        </p>
      </div>
      <div>
        <Image
          src="https://mwb-agency.com/uploads/results%20icon%202.svg"
          width={40}
          height={23}
        />
        <p className="text-lg font-semibold text-black py-5">
          Our goal is to help you reach your true online potential
        </p>
      </div>
    </div>
  );
}

export default WhatWeProvide;
