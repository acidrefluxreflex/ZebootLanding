import Link from "next/link";
import BlogPost from "./BlogCard";
import { Blog } from "@/libs/microcms";
import { getLimitedList } from "@/libs/microcms";

async function RecommendArticles() {
  const { contents } = await getLimitedList(4);

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="max-w-2xl bg-white min-h-screen">
      <div className="max-w-2xl md:pl-8 pl-0 flex flex-col justify-center ">
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

export default RecommendArticles;
