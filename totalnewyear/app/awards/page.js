"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Segmented } from "antd";

export default function Movies() {
  const [selected, setSelected] = useState("employee");
  const onSelect = (value) => setSelected(value);

  return (
    <>
      <div className="px-6 grid grid-cols-2 text-center sm:flex items-center justify-center pb-5 pt-1 sm:py-5 gap-6 border-b-[0.5px] border-[#d5a13e]">
        <div className="sm:flex gap-6">
          <div
            className={`uppercase cursor-pointer pl-3 py-1 ${
              selected === "employee"
                ? "bg-gradient-to-r from-[#d5a13e] rounded-xl pl-3 py-1 font-black"
                : ""
            }`}
            onClick={() => onSelect("employee")}
          >
            Employee Of The Year
          </div>
          <div
            className={`uppercase cursor-pointer mt-4 sm:mt-0 pl-3 py-1 ${
              selected === "manager"
                ? "bg-gradient-to-r from-[#d5a13e] rounded-xl pl-3 py-1 font-black"
                : ""
            }`}
            onClick={() => onSelect("manager")}
          >
            Manager Of The Year
          </div>
        </div>
        <div className="sm:flex gap-6">
          <div
            className={`uppercase cursor-pointer pl-3 py-1 ${
              selected === "branch"
                ? "bg-gradient-to-r from-[#d5a13e] rounded-xl pl-3 py-1 font-black"
                : ""
            }`}
            onClick={() => onSelect("branch")}
          >
            BRANCH Of The Year
          </div>
          <div
            className={`uppercase cursor-pointer mt-4 sm:mt-0 pl-3 py-1 ${
              selected === "ideas"
                ? "bg-gradient-to-r from-[#d5a13e] rounded-xl pl-3 py-1 font-black"
                : ""
            }`}
            onClick={() => onSelect("ideas")}
          >
            Best New Ideas & Creations
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        {selected === "ideas" && (
          <Image
            src="/IDEAS1.png"
            width={1000}
            height={100}
            alt="New ideas of the year"
          ></Image>
        )}
        {selected === "branch" && (
          <Image
            src="/BRANCH1.png"
            width={1000}
            height={100}
            alt="Branch of the year"
          ></Image>
        )}
        {selected === "employee" && (
          <Image
            src="/EMPLOYEE1.png"
            width={1000}
            height={100}
            alt="Employee of the year"
          ></Image>
        )}
        {selected === "manager" && (
          <Image
            src="/MANAGER1.png"
            width={1000}
            height={100}
            alt="Manager of the year"
          ></Image>
        )}
      </div>
    </>
  );
}
