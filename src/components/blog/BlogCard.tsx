import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/libs/microcms";

import dayjs from "dayjs";
// プラグインが必要
import ja from "dayjs/locale/ja";
dayjs.locale(ja);

const BlogPost: React.FC<{ post: Blog }> = ({ post }) => {
  const createdAt = dayjs(post.createdAt).format("YYYY-MM-DD");

  return (
    <div className="max-w-2xl flex flex-col overflow-hidden bg-white  py-11  sm:flex-row">
      <div id="IMAGE">
        {post.eyecatch ? (
          <Link href={`/blog/${post.id}`}>
            <Image
              src={post.eyecatch.url}
              width={1200 / 4}
              height={630 / 4}
              alt={post.title}
            />
          </Link>
        ) : (
          <div className="h-20 w-20 bg-gray-200"></div> // プレースホルダーとして表示する要素
        )}
      </div>
      <div
        id="TEXT"
        className="  min-h-[120px] flex flex-col content-between justify-between px-6 sm:w-2/3"
      >
        <Link href={`/blog/${post.id}`} className="mb-2 text-2xl font-bold">
          {post.title}
        </Link>

        <div className=" text-gray-600">
          {post.category ? (
            <p className="badge">
              <Link
                href="/blog/category/[categoryId]"
                as={`/blog/category/${post.category?.id ?? ""}`}
              >
                {post.category?.name ?? ""}
              </Link>
            </p>
          ) : (
            <div></div>
          )}
          <p className="text-sm text-gray-500">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
