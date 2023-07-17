import React from "react";
import ArticleCard, { Article } from "@/components/Cards/ArticleCard";
import styles from "./ArticlesInThree.module.css";

type Props = {
  articles: Article[];
};

const ArticlesInThree: React.FC<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.length > 0 && (
        <>
          {articles.map((article) => {
            return (
              <div key={article.id}>
                <ArticleCard article={article} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ArticlesInThree;
