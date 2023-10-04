import React from "react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="container my-24">
      <section className="mb-32">
        <div className="lg:flex justify-between">
          <div className="md:mx-0 mx-3">
            {userCard(
              "Emily",
              "Teacher",
              "I've been using 'zeboot' for a while now, and it's been a game-changer for me. As a teacher, maintaining focus and a healthy online environment is crucial. ",
              "/images/landing/Emily.webp",
              4
            )}
          </div>
          <div className="mx-3">
            {userCard(
              "David",
              "Software Developer",
              "'zeboot' has become an essential part of my digital life. I spend a lot of time online, and it's easy to get distracted. This app not only filters out explicit content but also allows me to stay focused.",
              "/images/landing/David.webp",
              5
            )}
          </div>
          <div className="md:mx-0 mx-3">
            {userCard(
              "Sarah",
              "Marketing Manager",
              "I can't thank 'zeboot' enough for keeping me productive and safeguarding my online experience. As a marketing manager, I need a clear mind to come up with creative ideas. ",
              "/images/landing/Sarah.webp",
              5
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function userCard(
  name: string,
  job: string,
  comment: string,
  imageSrc: string,
  rating: number
) {
  let starIconSrc = "";

  if (rating >= 1 && rating < 2) {
    starIconSrc = "/images/icons/star_FILL.svg";
  } else if (rating >= 2 && rating < 3) {
    starIconSrc = "/images/icons/star_FILL.svg";
  } else if (rating >= 3 && rating < 4) {
    starIconSrc = "/images/icons/star_FILL.svg";
  } else if (rating >= 4 && rating < 5) {
    starIconSrc = "/images/icons/star_half.svg";
  } else if (rating === 5) {
    starIconSrc = "/images/icons/star_FILL.svg";
  } else {
    starIconSrc = "/images/icons/star_FILL.svg"; // デフォルトのアイコン
  }

  return (
    <div className="card bg-[#F2F2F7] lg:w-[400px] md:flex-row mb-12 md:mb-0 shadow-lg min-h-[200px]">
      <div className="card-body ">
        <div className="flex  items-center">
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-primary  ring-offset-0">
              <Image src={imageSrc} alt={name} width={200} height={200} />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">{name}</h3>
            <h3 className="font-medium text-primary dark:text-primary-400">
              {job}
            </h3>
          </div>
        </div>

        <p className="mb-3 lg:max-w-1/2  lg:text-sm max-w-1/4 text-sm">
          {comment}
        </p>
        <div className="rating">
          <Image
            src={"/images/icons/star_FILL.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/icons/star_FILL.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/icons/star_FILL.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/icons/star_FILL.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image src={starIconSrc} alt="star" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
