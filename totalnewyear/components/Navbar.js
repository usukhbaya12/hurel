"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { XIcon, HamburgerIcon } from "./Icons";
import React, { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Tracks whether the audio is playing
  const [audio] = useState(new Audio("/song2.mp3"));

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause(); // Pause the audio
    } else {
      audio.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  const onExpand = () => setIsExpanded(!isExpanded);
  return (
    <>
      <nav className="w-full lg:px-12 md:px-8 px-6 py-5 border-b-[0.5px] border-[#d5a13e] bg-black">
        <div className="flex lg:justify-center md:justify-center items-center">
          <div className="md:hidden flex items-center justify-between w-full">
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
            <div className="cursor-pointer" onClick={toggleAudio}>
              {/* Display the off/on icons based on audio state */}
              <Image
                src={isPlaying ? "/on.svg" : "/off.svg"}
                width={20}
                height={20}
                alt={isPlaying ? "On" : "Off"}
              />
            </div>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex">
            <div className="flex gap-8 items-center justify-between">
              <div className="cursor-pointer" onClick={toggleAudio}>
                {/* Display the off/on icons based on audio state */}
                <Image
                  src={isPlaying ? "/on.svg" : "/off.svg"}
                  width={70}
                  height={70}
                  alt={isPlaying ? "On" : "Off"}
                />
              </div>
              <div className="flex gap-8 w-full justify-end">
                <div
                  className="cursor-pointer"
                  onClick={() => router.push("/location")}
                >
                  Location & Dress Code
                </div>
                {/* <div
                  className="cursor-pointer"
                  onClick={() => router.push("/oscars")}
                >
                  Oscar News
                </div> */}
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
                  Awards Criteria
                </div>
                <div
                  className="text-center leading-4 cursor-pointer"
                  onClick={() => router.push("/gallery")}
                >
                  Gallery
                </div>
                <div
                  className="text-center leading-4 cursor-pointer"
                  onClick={() => router.push("/info")}
                >
                  Information
                </div>
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
              Location & Dress Code
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
              Awards Criteria
            </div>
            <div
              onClick={() => {
                router.push("/gallery");
                onExpand();
              }}
            >
              Gallery
            </div>
            <div
              onClick={() => {
                router.push("/info");
                onExpand();
              }}
            >
              Information
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
