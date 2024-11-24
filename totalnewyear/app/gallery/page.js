"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Set up auto-scrolling every 2 seconds (adjust the timing as needed)
    const scrollSpeed = 1; // Speed at which the gallery scrolls (pixels per frame)
    const scrollInterval = 30; // Interval in milliseconds between each scroll action
    const scrollDistance = scrollSpeed;

    const autoScroll = () => {
      if (galleryRef.current) {
        // Scroll the container horizontally by a small amount
        galleryRef.current.scrollLeft += scrollDistance;

        // If scrolled to the end, reset to the beginning for continuous loop
        if (
          galleryRef.current.scrollLeft >=
          galleryRef.current.scrollWidth - galleryRef.current.clientWidth
        ) {
          galleryRef.current.scrollLeft = 0;
        }
      }
    };

    // Set an interval to trigger the scroll function
    const interval = setInterval(autoScroll, scrollInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* First Row of Images (Horizontal Scroll) */}
      <div
        className="overflow-x-auto -mt-4 sm:mt-0 flex space-x-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <Image src="/1.jpg" width={700} height={160} alt="Image 1" />
        <Image src="/2.jpg" width={700} height={160} alt="Image 2" />
        <Image src="/3.jpg" width={700} height={160} alt="Image 3" />
        <Image src="/4.jpg" width={700} height={160} alt="Image 4" />
        <Image src="/5.jpg" width={700} height={160} alt="Image 5" />
        <Image src="/6.jpg" width={700} height={160} alt="Image 6" />
        <Image src="/7.jpg" width={700} height={160} alt="Image 7" />
      </div>

      {/* Second Row of Images */}
      <div
        className="overflow-x-auto flex space-x-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <Image src="/100.jpg" width={700} height={160} alt="Image 100" />
        <Image src="/101.jpg" width={700} height={160} alt="Image 101" />
        <Image src="/102.jpg" width={700} height={160} alt="Image 102" />
        <Image src="/103.jpg" width={700} height={160} alt="Image 103" />
        <Image src="/104.jpg" width={700} height={160} alt="Image 104" />
        <Image src="/105.jpg" width={700} height={160} alt="Image 105" />
        <Image src="/106.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/107.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/108.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/109.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/110.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/111.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/112.jpg" width={700} height={160} alt="Image 106" />
        <Image src="/113.jpg" width={700} height={160} alt="Image 106" />
      </div>

      <div
        className="overflow-x-auto flex space-x-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <Image src="/18.jpg" width={700} height={160} alt="Image 1" />
        <Image src="/19.jpg" width={700} height={160} alt="Image 2" />
        <Image src="/20.jpg" width={700} height={160} alt="Image 3" />
        <Image src="/21.jpg" width={700} height={160} alt="Image 4" />
        <Image src="/22.jpg" width={700} height={160} alt="Image 5" />
      </div>
    </>
  );
}
