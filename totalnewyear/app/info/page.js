"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import "antd/dist/reset.css"; // Ant Design styles
import { useRouter } from "next/navigation";

export default function Info() {
  const router = useRouter();
  const [currentVideo, setCurrentVideo] = useState("a");

  const videoTitles = {
    a: "Gifts",
    b: "Seat Chart",
    c: "Photos",
  };

  const titleStyle = (videoId) => {
    return currentVideo === videoId
      ? "font-black p-2 cursor-pointer bg-gradient-to-r from-[#d5a13e] text-white rounded-xl px-4 hover:px-4"
      : "font-black p-2 cursor-pointer hover:rounded-xl px-4 hover:px-4";
  };

  return (
    <>
      <div className="px-6 sm:pt-7 sm:px-20 sm:flex justify-between sm:gap-12">
        <div className="sm:w-1/5 flex sm:block">
          <div className={titleStyle("a")} onClick={() => setCurrentVideo("a")}>
            {videoTitles["a"]}
          </div>
          <div className={titleStyle("b")} onClick={() => setCurrentVideo("b")}>
            {videoTitles["b"]}
          </div>
          <div className={titleStyle("c")} onClick={() => setCurrentVideo("c")}>
            {videoTitles["c"]}
          </div>
        </div>

        {currentVideo === "a" && (
          <div>
            {/* Content for the "Gifts" section */}
            <div className="pt-4 sm:pt-10 relative flex items-center justify-center sm:justify-between sm:px-6 flex-col sm:flex-row">
              <div className="sm:ml-4 hidden sm:block">
                <Image src="/treee.png" width={500} height={160} alt="Tree" />
              </div>
              <div className="flex flex-col items-center sm:items-start px-6 sm:px-0">
                <Image src="/mc.png" width={200} height={160} alt="MC" />
                <Image
                  src="/text2.png"
                  width={500}
                  height={160}
                  alt="Text"
                  className="z-[-1]"
                />
              </div>
              <div className="sm:mr-4 hidden sm:block z-[-1]">
                <Image src="/gift.png" width={500} height={160} alt="Gift" />
              </div>
            </div>
          </div>
        )}

        {currentVideo === "b" && (
          <div className="sm:w-[82%] pt-8 sm:pt-2">
            {/* Carousel for seat chart */}
            <Carousel arrows>
              {Array.from({ length: 16 }, (_, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={`/s${index + 1}.jpg`}
                    alt={`Seat ${index + 1}`}
                    width={1000}
                    height={500}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {currentVideo === "c" && (
          <div className="sm:w-[82%] pt-8 sm:pt-2">
            {/* Carousel for seat chart */}
            <div
              className="border rounded-xl w-fit p-3 cursor-pointer hover:text-[#d5a13e]"
              onClick={() =>
                router.push(
                  "https://wetransfer.com/downloads/9924607179991ac64bfc85f885a366a020241226103721/fe4479ae0985c8bdaa47ed42c1d9736520241226103722/c88331?t_exp=1735468641&t_lsid=9c1a48ae-68a0-47b2-8907-8faae2806f16&t_network=email&t_rid=Z29vZ2xlLW9hdXRoMnwxMTM1NjQ5MjM2OTg1NjU4MzcwOTM=&t_s=download_link&t_ts=1735209441"
                )
              }
            >
              ЭНД дарж шинэ жилийн зургаа татаж авна уу.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
