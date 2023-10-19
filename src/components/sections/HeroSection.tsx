import React from "react";

export default function HeroSection() {
  const btnText = "Start for free";

  const appName = "Zeboot";

  const subTitle = "Sexual Content Blocker";

  return (
    <>
      <div
        id="DESKTOP"
        className="hero hidden min-h-screen flex-row justify-start text-left text-neutral-content lg:flex"
        style={{
          backgroundImage: "url(/images/landing/HeroBack.webp)",
          width: "100%",
        }}
      >
        <div className="hero-content ml-64 pr-[430px]">
          <div className="container max-w-md ">
            <h2 className="p-2 text-2xl text text-[#F596AA]">{subTitle}</h2>
            <div className="container" style={{ fontFamily: "Futura" }}>
              <h1 className="text-9xl font-medium text-white">{appName}</h1>
            </div>
            <div className="mb-8 px-2 text-lg font-medium">
              <p>
                Tired of stumbling upon explicit and inappropriate content
                online?
                <br />
                <br />
                Look no further! Zeboot is your go-to solution for filtering out
                explicit content and ensuring a safer online experience.
              </p>
              <button className="btn btn-info text-[#1C1C1C] my-5 ">
                <a href="https://apps.apple.com/us/app/zeboot/id6447095547?itsct=apps_box_link&itscg=30200">
                  {btnText}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero mb-6 min-h-screen sm:hidden"
        style={{
          backgroundImage: "url(/images/landing/BackSmart.webp)",
          width: "100%",
        }}
      >
        <div
          id="SMARTPHONE"
          className="flex flex-row hero-content justify-start text-left text-neutral-content"
        >
          <div className="container w-md pb-56 px-5">
            <div style={{ fontFamily: "Futura" }}>
              <h2 className="py-2">{subTitle}</h2>
              <h1 className="text-5xl font-bold text-white">{appName}</h1>
            </div>
            <div className="mb-8 text-sm font-medium">
              <p>
                Tired of stumbling upon explicit and inappropriate content
                online?
                <br />
                <br />
                Look no further! SafeGuard is your go-to solution for filtering
                out explicit content and ensuring a safer online experience.
              </p>

              <button className="btn-outline btn my-5">{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
