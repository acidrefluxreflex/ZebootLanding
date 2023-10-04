import Image from "next/image";
import React from "react";

export default function OverviewSection() {
  return (
    <div className="">
      <div className="lg:flex flex-col md:flex-row md:items-center md:justify-between md:h-screen">
        <div className="md:w-1/3 lg:w-1/2 m-5">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Futura" }}
          >
            Peace and Wellbeing
          </h1>
          <p className="lg:text-lg text-sm text-gray-600">
            At Zeboot, we&apos;re on a mission to create a digital world
            that&apos;s safe and enjoyable for everyone.
            <br />
            <br />
            Our cutting-edge app is designed to provide you with a powerful tool
            to filter out explicit and adult content, ensuring a secure online
            environment for you and your loved ones.
          </p>
        </div>

        <div className="md:w-1/2 flex md:justify-end justify-center">
          <Image
            src="/images/landing/eddy-billard.webp"
            alt="アプリケーションの画像"
            className="lg:w-[500px] w-[200px] h-auto rounded-xl shadow-md"
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <div className="lg:flex flex-col md:flex-row md:items-center md:justify-between md:h-screen">
        <div
          id="DESKTOP"
          className="md:w-1/2 md:flex hidden md:justify-start justify-center "
        >
          <Image
            src="/images/landing/Tower.webp"
            alt="アプリケーションの画像"
            className="lg:w-[500px] w-[200px] h-auto rounded-xl shadow-md"
            width={2000}
            height={2000}
          />
        </div>
        <div className="md:w-1/3 lg:w-1/2 m-5">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Futura" }}
          >
            Zen + Reboot = Zeboot
          </h1>
          <p className="lg:text-lg text-sm text-gray-600">
            Zeboot is a Japanese application that incorporates Zen concepts. The
            system, learned from reliable texts, offers you new habits.
            <br />
            <br />
            Zen deals with sexual topics in a unique way. Using this idea and a
            different approach from other apps and methods are the main features
            of this app.
          </p>
        </div>
        <div className="md:w-1/2 flex md:hidden md:justify-start justify-center">
          <Image
            src="/images/landing/Tower.webp"
            alt="アプリケーションの画像"
            className="lg:w-[500px] w-[200px] h-auto rounded-xl shadow-md"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
}
