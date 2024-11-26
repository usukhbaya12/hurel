"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Info() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("a");

  // Titles corresponding to each video
  const videoTitles = {
    a: "Gifts", // Title for the first video
    b: "Seat Chart", // Title for the second video
  };

  // Styling for the selected title
  const titleStyle = (videoId) => {
    return currentVideo === videoId
      ? "font-black p-2 cursor-pointer bg-gradient-to-r from-[#d5a13e] text-white rounded-xl px-4 hover:px-4"
      : "font-black p-2 cursor-pointer hover:rounded-xl px-4 hover:px-4";
  };
  useEffect(() => {
    const snowfallContainer = document.getElementById("snowfall-container");

    if (snowfallContainer) {
      // Clear any existing snowflakes (to prevent duplication on re-renders)
      snowfallContainer.innerHTML = "";

      // Create a large number of snowflakes (e.g., 100 snowflakes)
      for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement("img");
        snowflake.src = "/snowflake.webp"; // Path to the white snowflake
        snowflake.className = "snowflake";
        snowflake.style.position = "absolute";
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
        snowflake.style.animationTimingFunction = "linear"; // Constant speed for falling
        snowflake.style.width = `${Math.random() * 10 + 10}px`; // Random size
        snowflake.style.height = snowflake.style.width; // Maintain square shape
        snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity for varied look

        // Append the snowflake to the container
        snowfallContainer.appendChild(snowflake);
      }
    }
  }, [snowflakes]);

  return (
    <>
      <div className="px-6 sm:pt-12 sm:px-20 sm:flex justify-between sm:gap-12">
        {/* Main container with responsive layout */}
        <div className="sm:w-1/5 flex sm:block">
          <div className={titleStyle("a")} onClick={() => setCurrentVideo("a")}>
            {videoTitles["a"]}
          </div>
          <div className={titleStyle("b")} onClick={() => setCurrentVideo("b")}>
            {videoTitles["b"]}
          </div>
        </div>
        {currentVideo === "a" && (
          <div>
            <div className="pt-4 sm:pt-10 relative flex items-center justify-center sm:justify-between sm:px-6 flex-col sm:flex-row">
              {/* Left side - Tree image */}
              <div className="sm:ml-4 sm:mr-0 mb-4 sm:mb-0 hidden sm:block">
                <Image src="/treee.png" width={500} height={160} alt="Tree" />
              </div>

              {/* Centered content (MC and text) */}
              <div className="flex flex-col items-center justify-center sm:items-start px-6 sm:px-0">
                <Image src="/mc.png" width={200} height={160} alt="MC" />
                <Image
                  src="/text2.png"
                  width={500}
                  height={160}
                  alt="Text"
                  className="z-[-1]"
                />
              </div>

              {/* Right side - Gift image */}
              <div className="sm:mr-4 sm:ml-0 mb-4 sm:mb-0 z-[-1] hidden sm:block">
                <Image src="/gift.png" width={500} height={160} alt="Gift" />
              </div>
            </div>

            {/* Additional section for "From" and "To" text */}
            <div className="flex gap-4 justify-center sm:justify-end sm:pr-96 sm:flex-row mt-12 sm:mt-4">
              <div className="rounded-3xl px-8 py-2 bg-white text-black font-bold">
                From: You
              </div>
              <div className="rounded-3xl px-8 py-2 bg-white text-black font-bold">
                To: Someone...? 👀
              </div>
            </div>
            <div className="sm:mr-4 sm:ml-0 mb-4 sm:mb-0 z-[-1] sm:hidden pt-4 flex justify-center">
              <Image src="/gift.png" width={350} height={160} alt="Gift" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
