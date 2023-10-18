import { getList } from "@/libs/microcms";
import RecommendArticles from "@/components/blog/RecomendArticles";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <RecommendArticles />
    </div>
  );
}
