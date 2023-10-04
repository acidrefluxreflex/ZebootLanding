import { getList } from "../../libs/microcms";

import BlogPost from "@/components/blog/BlogCard";
import { Metadata } from "next";

export async function generateMetadata() {
  // read route params

  // fetch data

  return {
    title: "Zeboot Blog",
    description: "Block Sexual Content on the Web",
    openGraph: {
      title: "Zeboot",
      description: "Block Sexual Content on the Web",
      url: "https://eveki.net/blog/",
      siteName: "zeboot.net",
      images: [
        {
          url: "https://zeboot.net/_next/image?url=%2Fimages%2FforTwitter.webp",
          width: 1200,
          height: 600,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="max-w-2xl bg-white min-h-screen">
      <div className="max-w-2xl pl-8">
        {contents.map((post) => {
          return (
            <div key={post.id} className="">
              <BlogPost post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
