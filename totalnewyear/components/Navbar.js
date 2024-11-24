"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { XIcon, HamburgerIcon } from "./Icons";
import React, { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => setIsExpanded(!isExpanded);
  return (
    <>
      <nav className="w-full lg:px-12 md:px-8 px-6 py-5 border-b-[0.5px] border-[#d5a13e] bg-black">
        <div className="flex lg:justify-center md:justify-center items-center">
          <div className="md:hidden flex items-center">
            <button onClick={onExpand}>
              {isExpanded ? <XIcon /> : <HamburgerIcon />}
            </button>
            <div className="pl-4" onClick={() => router.push("/")}>
              <Image
                src="/logo.png"
                height={10}
                width={140}
                alt="Logo"
                priority
              ></Image>
            </div>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex">
            <div className="flex gap-8 items-center justify-between">
              <div className="flex gap-6 w-full justify-end">
                <div
                  className="cursor-pointer"
                  onClick={() => router.push("/location")}
                >
                  Байршил
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => router.push("/oscars")}
                >
                  Оскарын мэдээллүүд
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => router.push("/movies")}
                >
                  TD Movies
                </div>
              </div>
              <Image
                className="cursor-pointer"
                onClick={() => router.push("/")}
                src="/logo.png"
                height={10}
                width={180}
                alt="Logo"
                priority
              ></Image>
              <div className="flex gap-6 w-full items-center">
                <div
                  className="text-center leading-4 cursor-pointer"
                  onClick={() => router.push("/awards")}
                >
                  Оны шилдэг
                </div>
                <div className="text-center leading-4">Зургийн цомог</div>
                <div>Сугалаа</div>
                <div>Мэдээлэл</div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 mt-4 px-[6px]">
            <div
              onClick={() => {
                router.push("/location");
                onExpand();
              }}
            >
              Байршил
            </div>
            <div
              onClick={() => {
                router.push("/oscars");
                onExpand();
              }}
            >
              Оскарын мэдээллүүд
            </div>

            <div
              onClick={() => {
                router.push("/movies");
                onExpand();
              }}
            >
              TD Movies
            </div>
            <div
              onClick={() => {
                router.push("/awards");
                onExpand();
              }}
            >
              Оны шилдэг
            </div>
            <div
              onClick={() => {
                router.push("/photos");
                onExpand();
              }}
            >
              Зургийн цомог
            </div>
            <div
              onClick={() => {
                router.push("/lottery");
                onExpand();
              }}
            >
              Сугалаа
            </div>
            <div
              onClick={() => {
                router.push("/info");
                onExpand();
              }}
            >
              Мэдээлэл
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
