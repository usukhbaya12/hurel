"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

export default function Home() {
  const targetDate = new Date("2024-12-18T09:00:00Z").getTime();

  // State to track snowflakes and time left
  const [snowflakes, setSnowflakes] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Format countdown logic
  const formatCountdown = (value) => {
    const days = Math.floor(value / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  // Client-side only code (only run after the component is mounted)
  useEffect(() => {
    // Set the initial snowflakes array
    setSnowflakes([
      "/oscar.png",
      "/snowflake.png",
      "/santa.png",
      "/popcorn.png",
      "/camera.png",
      "/tree.png",
      "/badge.png",
    ]);

    // Countdown logic
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = targetDate - currentTime;
      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(formatCountdown(remainingTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Snowfall effect logic
  useEffect(() => {
    const snowfallContainer = document.getElementById("snowfall-container");

    if (snowfallContainer) {
      snowflakes.forEach((url) => {
        const snowflake = document.createElement("img");
        snowflake.src = url;
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 8 + 5}s`;
        snowflake.style.width = "20px";
        snowflake.style.height = "20px";

        snowfallContainer.appendChild(snowflake);
      });
    }
  }, [snowflakes]);

  return (
    <>
      <div className="relative justify-center items-center sm:mt-16 mt-4">
        <div className="sm:px-6 sm:flex items-end sm:items-center">
          {/* Tilted Image (only for smaller screens) */}
          <div className="px-6 sm:hidden">
            <Tilt options={{ tiltX: 10, tiltY: 15, max: 25, speed: 500 }}>
              <Image
                src="/inv2.png"
                width={1000}
                height={300}
                alt="Invitation"
              />
            </Tilt>
          </div>

          {/* Countdown Image (visible on larger screens) */}
          <Image
            className="hidden sm:flex"
            src="/countdown.png"
            width={400}
            height={100}
            alt="Countdown Logo"
          />

          {/* Countdown timer (Day, Hour, Minute, Second) */}
          <div className="flex sm:flex-col gap-3 sm:gap-6 text-center justify-center items-center space-x-4 sm:space-x-0 pt-8 sm:pt-0">
            <div className="countdown-item">
              <div className="text-4xl font-black">{timeLeft.days}</div>
              <div className="text-sm">Өдөр</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl font-black">{timeLeft.hours}</div>
              <div className="text-sm">Цаг</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl font-black">{timeLeft.minutes}</div>
              <div className="text-sm">Минут</div>
            </div>
            <div className="countdown-item">
              <div className="text-4xl font-black">{timeLeft.seconds}</div>
              <div className="text-sm">Секунд</div>
            </div>
          </div>

          {/* Additional Countdown Image (visible on smaller screens) */}
          <Image
            className="sm:hidden py-8"
            src="/countdown.png"
            width={400}
            height={100}
            alt="Countdown Logo"
          />

          {/* Tilted Invitation Image (only for larger screens) */}
          <div className="md:pl-16 sm:pl-24 hidden sm:flex">
            <Tilt options={{ tiltX: 10, tiltY: 15, max: 25, speed: 500 }}>
              <Image
                src="/invitation].png"
                width={1000}
                height={300}
                alt="Invitation"
              />
            </Tilt>
          </div>
        </div>

        {/* Snowfall Container */}
        <div
          id="snowfall-container"
          className="snowfall-container absolute top-0 left-0 w-full h-full pointer-events-none"
        ></div>
      </div>
    </>
  );
}
