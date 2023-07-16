import { Metadata } from "next";

type Props = {
  params: any;
  error: any;
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const articleId = params.id;
  return {
    title: `Article: ${articleId}`,
  };
}

const ArticlePage = async ({ params, error }: any) => {
  return (
    <>
      <div style={{ color: "black" }}>Article Page: {params.id}</div>
    </>
  );
};

export default ArticlePage;
