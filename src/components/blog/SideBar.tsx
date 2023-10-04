import React from "react";
import Image from "next/image";

const SideElement: React.FC = () => {
  return (
    <div className="w-300   justify-items-center gap-y-8 px-9 md:px-0  ">
      <a href="https://textcheckai.page.link/toapp">
        <Image
          className="my-8  justify-items-center rounded-lg"
          src="/images/blog/appBanner.webp"
          height={300}
          width={300}
          alt="Eveki 会話AI"
        />
      </a>
      <a href="https://note.com/izumo092">
        <Image
          className="my-8 rounded-lg"
          src="/images/blog/noteBanner.webp"
          height={90}
          width={300}
          alt="Eveki 会話AI"
        />
      </a>
      <a href="https://instagram.com/chat_ai_eveki?igshid=NTc4MTIwNjQ2YQ==">
        <Image
          className="my-8 rounded-lg"
          src="/images/blog/instaBanner.webp"
          height={90}
          width={300}
          alt="Eveki 会話AI"
        />
      </a>
      {/* Your content here */}
    </div>
  );
};

export default SideElement;
