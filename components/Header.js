"use client";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import React from "react";

function Header() {
  const items = [
    {
      key: "1",
      label: <Link href="/web-design">Web Design</Link>,
    },
    {
      key: "2",
      label: <Link href="/digital-marketing">Digital Marketing</Link>,
    },
    {
      key: "3",
      label: <Link href="/graphic-design">Graphic Design</Link>,
    },
  ];
  return (
    <div className="w-full h-[7vh]  flex justify-between select-none text-blueish">
      <div className="pl-[12vw] my-auto text-lg font-semibold cursor-pointer hidden md:block">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="px-[20vw] my-auto flex gap-5 text-lg font-semibold cursor-pointer">
        <Link href={"/"}>Home</Link>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>Services</Space>
          </a>
        </Dropdown>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Header;
