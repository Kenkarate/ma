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
      <div className="text-white grid lg:grid-cols-2 bg-gray-200">
        <div className="bg-black relative flex flex-col px-10 lg:px-44 py-10 ">
          <p className="text-4xl font-bold uppercase">
            Let's meet up for a coffee and talk
          </p>
          <p className="text-sm py-10">
            {" "}
            "In a world hungry for inspiration, our NexusCraft Creative agency serves up a
            feast of imagination. We craft compelling narratives, design
            eye-catching visuals, and curate immersive experiences that leave a
            lasting imprint on hearts and minds."
          </p>
        </div>
        <div className="py-10 px-20 text-right lg:px-44">
          <p className="text-black text-2xl font-semibold  ">Head Office</p>
          <p className=" text-4xl font-bold text-black  ">Aluva</p>
          <div className=" uppercase text-black font-semibold py-5">
            <p>ph:+91 6238483581</p>
            <p>mail:abc@gmail.com</p>
          </div>
          <div className="bg-black text-white text-left p-2 pl-5">
            <p>
              {" "}
              <InstagramOutlined className="px-2 py-2 text-2xl" />:
              NexusCraft.in
            </p>
            <p>
              <FacebookOutlined className="px-2 py-2 text-2xl" />:
              facebook/NexusCraft.in
            </p>
            <p>
              <WhatsAppOutlined className="px-2 py-2 text-2xl" />:
              +91 6238483581
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
