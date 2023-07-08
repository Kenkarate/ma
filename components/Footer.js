"use client";
import {
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";
import { Space } from "antd";

function Footer() {
  return (
    <div>
      <div className="text-white grid grid-cols-2">
        <div className=" bg-black relative flex flex-col px-44 py-10 ">
          <p className="text-4xl font-bold uppercase">
            Let's meet up for a coffee and talk
          </p>
          <p className="text-sm py-10">
            {" "}
            "In a world hungry for inspiration, our creative agency serves up a
            feast of imagination. We craft compelling narratives, design
            eye-catching visuals, and curate immersive experiences that leave a
            lasting imprint on hearts and minds."
          </p>
        </div>
        <div className="py-10 text-right px-44">
          <p className="text-black text-2xl font-semibold  ">Head Office</p>
          <p className="text-secondary text-4xl font-bold  ">Aluva</p>
          <div className=" uppercase text-secondary font-semibold py-5">
            <p>ph:123456789</p>
            <p>mail:abc@gmail.com</p>
          </div>
          <div className="bg-black text-white text-left p-2 pl-5">
            <p>
              {" "}
              <InstagramOutlined className="px-2 py-2 text-2xl" />:
              @creative_agnecy
            </p>
            <p>
              <FacebookOutlined className="px-2 py-2 text-2xl" />:
              facebook/creative_agnecy
            </p>
            <p>
              <WhatsAppOutlined className="px-2 py-2 text-2xl" />:
              123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
