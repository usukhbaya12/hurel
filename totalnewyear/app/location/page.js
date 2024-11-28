"use client";
import Image from "next/image";
import { Collapse } from "antd";
import React from "react";
import DressCode from "@/components/DressCode";
import GoogleMapComponent from "@/components/Maps";
import { useRouter } from "next/navigation";

export default function Location() {
  const router = useRouter();

  const items = [
    {
      key: "1",
      label: "Хаана?",
      children: (
        <div
          className="flex gap-7 items-center cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100065156916016",
              "_blank"
            )
          }
        >
          <Image
            src="/king.png"
            width={110}
            height={50}
            alt="King Ballroom logo"
          />
          <div className="leading-5">
            <div className="font-bold pb-1">King Ballroom</div>
            <div>
              ХУД, Цэнгэлдэх хүрээлэнгийн чанх хойно <strong>NM Tower</strong> B
              блок
            </div>
            <div>4 давхар</div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Хэзээ?",
      children: (
        <div className="flex justify-center">
          <Image
            className="rounded-3xl"
            src="/ognoo.gif"
            width={220}
            height={50}
            alt="King Ballroom logo"
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Хэдээс?",
      children: (
        <div className="flex justify-center">
          <Image
            className="rounded-full"
            src="/tsag.gif"
            width={220}
            height={50}
            alt="King Ballroom logo"
          />
        </div>
      ),
    },
    {
      key: "4",
      label: "Газрын зураг",
      children: <GoogleMapComponent />,
    },
  ];

  return (
    <>
      <div className="px-6 sm:pt-12 pt-3 sm:px-20 sm:flex justify-between sm:gap-12">
        <div className="sm:w-1/3">
          <div className="font-black pb-4">БАЙРШИЛ</div>
          <Collapse accordion items={items} />
        </div>
        <div className="pt-8 sm:pt-0 sm:w-2/3">
          <div className="font-black pb-4">DRESS CODE</div>
          <div className="-mt-2 sm:-mt-4">
            <Image
              src="/redcarpet.png"
              width={400}
              height={80}
              alt="Red Carpet"
            />
          </div>
          <div className="pb-6">
            Улаан хивсний ёслолд ирж буй мэтээр хувцаслаж ирнэ үү.
          </div>
          <div>
            <DressCode />
          </div>
        </div>
      </div>
    </>
  );
}

// Цасыг чатан дээр байгаа эффектээр солиулах
