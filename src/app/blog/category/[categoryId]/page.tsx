import {
  getCategory,
  getListForCategory,
  getCategoryDetail,
  getList,
} from "@/libs/microcms";
import Pagination from "@/components/shared/Pagination";
import BlogPost from "@/components/blog/BlogCard";

export async function generateStaticParams() {
  const { contents } = await getCategory();

  const paths = contents.map((category) => {
    return {
      categoryId: category.id,
    };
  });

  return paths;
}

export default async function StaticPage({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const categoryName = (await getCategoryDetail(categoryId)).id;

  const { contents } = await getList();

  const filtered = await contents.filter(
    (post) => post.category?.id === categoryName
  );

  if (!filtered || filtered.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="max-w-2xl ">
      <ul className="list-disc pl-8">
        {filtered.map((post) => {
          return (
            <div key={post.id} className="">
              <BlogPost post={post} />
            </div>
          );
        })}
      </ul>
      <Pagination totalCount={contents.length} />
    </div>
  );
}
