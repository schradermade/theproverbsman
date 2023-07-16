import React from "react";
import ArticleCard, { Article } from "@/components/Cards/ArticleCard";
import styles from "./Articles.module.css";

type Props = {
  articles: Article[];
};

const Articles: React.FC<Props> = ({ articles }) => {
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

export default Articles;
