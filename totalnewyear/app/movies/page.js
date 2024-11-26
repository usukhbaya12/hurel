"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Movies() {
  // Initial video is set to the first one
  const [currentVideo, setCurrentVideo] = useState("9wCCT8LMNCw");

  // Titles corresponding to each video
  const videoTitles = {
    "9wCCT8LMNCw": "SQUID GAME", // Title for the first video
    Voqedxd2Shs: "Mad Max", // Title for the second video
  };

  // Styling for the selected title
  const titleStyle = (videoId) => {
    return currentVideo === videoId
      ? "font-black p-2 cursor-pointer bg-gradient-to-r from-[#d5a13e] text-white rounded-xl px-4 hover:px-4"
      : "font-black p-2 cursor-pointer hover:rounded-xl px-4 hover:px-4";
  };

  return (
    <>
      <div className="px-6 sm:pt-12 sm:px-20 sm:flex justify-between sm:gap-12">
        {/* Left Section: Titles */}
        <div className="sm:w-1/5 flex sm:block">
          <div
            className={titleStyle("9wCCT8LMNCw")}
            onClick={() => setCurrentVideo("9wCCT8LMNCw")}
          >
            {videoTitles["9wCCT8LMNCw"]}
          </div>
          <div
            className={titleStyle("Voqedxd2Shs")}
            onClick={() => setCurrentVideo("Voqedxd2Shs")}
          >
            {videoTitles["Voqedxd2Shs"]}
          </div>
        </div>

        {/* Right Section: Video Embed */}
        <div className="sm:w-full flex justify-center items-center pt-6 sm:pt-0">
          <div className="w-full relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
