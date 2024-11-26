"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

export default function Home() {
  const targetDate = new Date("2024-12-18T09:00:00Z").getTime();

  // State to track time left
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

  useEffect(() => {
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

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  // Light animation effect logic
  useEffect(() => {
    const lightContainer = document.getElementById("light-container");

    if (lightContainer) {
      // Clear any existing lights (to prevent duplication on re-renders)
      lightContainer.innerHTML = "";

      // Create a number of animated lights (e.g., 20 lights)
      for (let i = 0; i < 20; i++) {
        const light = document.createElement("div");
        light.className = "animated-light";
        light.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        light.style.top = `${Math.random() * 100}vh`; // Random vertical position
        light.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed
        light.style.width = `${Math.random() * 30 + 20}px`; // Random size
        light.style.height = light.style.width; // Keep it circular

        // Append the light to the container
        lightContainer.appendChild(light);
      }
    }
  }, []); // Run once when the component mounts

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
          <div className="md:pl-16 sm:pl-24 hidden sm:flex z-[1000]">
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

        {/* Light Container */}
        <div
          id="light-container"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></div>
      </div>
    </>
  );
}
