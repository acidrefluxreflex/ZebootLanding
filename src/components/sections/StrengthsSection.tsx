import React from "react";
import Image from "next/image";

export default function StrengthsSection() {
  const contentItems = [
    {
      icon: "/images/icons/construction.svg",
      title: "Custom",
      description:
        "Our content filter offers unparalleled customization, allowing you to tailor your online experience to your exact preferences.",
    },
    {
      icon: "/images/icons/translate.svg",
      title: "Global",
      description:
        "Experience a truly global online environment with our content filter, supporting multiple languages to ensure a comfortable browsing experience for everyone.",
    },
    {
      icon: "/images/icons/diversity_1.svg",
      title: "Filtering",
      description:
        "We've got you covered across a wide range of websites! Our content filter supports a vast array of platforms, ensuring a safer internet experience wherever you go.",
    },
    {
      icon: "/images/icons/devices.svg",
      title: "Feature 4",
      description:
        "Enjoy seamless protection across multiple platforms with our content filter. Whether you're on your computer, smartphone, or tablet, we've got your back.",
    },
    {
      icon: "/images/icons/security.svg",
      title: "Feature 5",
      description:
        "Your privacy matters to us. Our content filter not only blocks explicit content but also ensures your online activities remain private, creating a safer and more secure browsing experience.",
    },
    {
      icon: "/images/icons/menstrual_health.svg",
      title: "Feature 6",
      description:
        "The app does more than just filtering - it also has features for your mental health. It protects the health of your life.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 lg:p-6 p-3">
      {contentItems.map((item, index) => (
        <div key={index} className="p-4">
          <div className="flex items-center  my-3 ">
            <Image
              src={item.icon}
              alt={`Icon for ${item.title}`}
              className="w-10 h-10"
              width={100}
              height={100}
            />

            <h2 className="lg:text-xl text-md font-semibold  ml-2 flex items-center">
              {" "}
              {/* Added 'flex' and 'items-center' class */}
              {""}
            </h2>
          </div>
          <p className="text-gray-600 lg:text-sm text-xs">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
