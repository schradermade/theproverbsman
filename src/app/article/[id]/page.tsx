import Article from "@/features/Article/Article";
import { Metadata } from "next";
import styles from "./page.module.css";

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
      <div>
        <Article />
      </div>
    </>
  );
};

export default ArticlePage;
