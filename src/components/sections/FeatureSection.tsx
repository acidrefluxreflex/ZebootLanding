import React from "react";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="z-1 md:flex-row items-center justify-center lg:h-screen ">
      <div className="flex justify-center space-x-6 my-9 md:mx-0 mx-5 ">
        {renderCard(
          "md:min-w-7xl min-w-[320px] md:min-h-[300px] min-h-[300px]",
          "/images/landing/ZenGarden1280.jpg",
          1280,
          300,
          "Filtering",
          "Proprietary algorithms and databases block access to Porn sites as well as advertising. It can even prevent sexually explicit words from appearing on the site. \n \n  Filters are updated regularly, but can be automatically adapted for almost any new site. Only sexual content is blocked, so you can browse other adult-oriented sites if you wish."
        )}
      </div>
      <div className="lg:flex lg:space-x-9 md:mx-0 mx-5  md:space-y-0 space-y-6 justify-center items-center md:min-h-[410px] min-h-[700px]">
        {renderCard(
          "md:min-w-[800px] min-w-[320px]  min-h-[300px] md:h-[300px] h-[300px] md:my-0 my-9",
          "/images/landing/ZenGarden800.webp",
          800,
          300,
          "Support",
          "If you feel badly tempted, app support can help. Alerts for attention, a meditation function and an AI counsellor are available. \n \n You can even count the number of days away from sexual content, so you can track the improvement in your life."
        )}
        <div className="md:pt-0 pt-20 md:mt-0 ">
          {renderCard(
            "md:min-w-96 min-w-[320px] md:h-[300px] h-[300px]",
            "/images/landing/ZenGarden380.webp",
            380,
            300,
            "More",
            "Filters and functions are regularly updated and further requests are accepted. You can also recommend your new lifestyle to your friends with the Share function."
          )}
        </div>
      </div>
    </div>
  );
}

function renderCard(
  width: string,
  imageSrc: string,
  imgWidth: number,
  imgHeight: number,
  title: string,
  body: string
) {
  // 改行文字を<br />タグに置換する
  const bodyWithLineBreaks = body.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={`z-1 card ${width} bg-base-100  image-full shadow-md`}>
      <figure>
        <Image
          src={imageSrc}
          alt="Shoes"
          className={width}
          width={imgWidth}
          height={imgHeight}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold pb-9">{title}</h2>
        <p className="max-w-[600px]">{bodyWithLineBreaks}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
