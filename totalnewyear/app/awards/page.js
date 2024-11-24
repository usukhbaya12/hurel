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
            className={`uppercase ${
              selected === "employee" ? "bg-yellow-500 px-2 font-bold" : ""
            }`}
            onClick={() => onSelect("employee")}
          >
            Employee Of The Year
          </div>
          <div
            className={`uppercase mt-4 sm:mt-0 ${
              selected === "manager" ? "bg-yellow-500 px-2 font-bold" : ""
            }`}
            onClick={() => onSelect("manager")}
          >
            Manager Of The Year
          </div>
        </div>
        <div className="sm:flex gap-6">
          <div
            className={`uppercase ${
              selected === "branch" ? "bg-yellow-500 sm:px-2 font-bold" : ""
            }`}
            onClick={() => onSelect("branch")}
          >
            BRANCH Of The Year
          </div>
          <div
            className={`uppercase mt-4 sm:mt-0 ${
              selected === "ideas" ? "bg-yellow-500 px-2 font-bold" : ""
            }`}
            onClick={() => onSelect("ideas")}
          >
            New Ideas & Creations Of The Year
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        {selected === "ideas" && (
          <Image
            src="/MANAGER.jpg"
            width={1000}
            height={100}
            alt="New ideas of the year"
          ></Image>
        )}
        {selected === "branch" && (
          <Image
            src="/branch.jpg"
            width={1000}
            height={100}
            alt="Branch of the year"
          ></Image>
        )}
        {selected === "employee" && (
          <Image
            src="/EMPLOYEE of the Year (1).jpg"
            width={1000}
            height={100}
            alt="Employee of the year"
          ></Image>
        )}
        {selected === "manager" && (
          <Image
            src="/MANAGER (1).jpg"
            width={1000}
            height={100}
            alt="Manager of the year"
          ></Image>
        )}
      </div>
    </>
  );
}
