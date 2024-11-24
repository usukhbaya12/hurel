"use client";
import Image from "next/image";
import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import DressCode from "@/components/DressCode";

export default function Location() {
  const items = [
    {
      key: "1",
      label: "Хаана?",
      children: (
        <div className="flex gap-7 items-center">
          <Image
            src="/king.png"
            width={110}
            height={50}
            alt="King Ballroom logo"
          ></Image>
          <div className="leading-5">
            <div className="font-bold pb-1">King Ballroom</div>
            <div>MN Tower B блок</div>
            <div>4 давхар</div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Хэзээ?",
      children: <p>2024 оны 12 сарын 18-нд.</p>,
    },
    {
      key: "3",
      label: "Хэдээс?",
      children: <p>17 цагт! 😉</p>,
    },
    {
      key: "4",
      label: "Газрын зураг",
      children: (
        <Image src="/map.png" width={400} height={100} alt="Map"></Image>
      ),
    },
  ];
  return (
    <>
      <div className="px-6 sm:pt-12 pt-3 sm:px-20 sm:flex justify-between sm:gap-12">
        <div className="sm:w-1/3">
          <div className="font-black pb-4">БАЙРШИЛ</div>
          <Collapse accordion items={items} />
        </div>
        <div className="pt-8 sm:pt-0 sm:w-2/3">
          <div className="font-black pb-4">DRESS CODE</div>
          <div className="-mt-2 sm:-mt-4">
            <Image
              src="/redcarpet.png"
              width={400}
              height={80}
              alt="Red Carpet"
            ></Image>
          </div>
          <div>
            <DressCode />
          </div>
        </div>
      </div>
    </>
  );
}
