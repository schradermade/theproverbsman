import styles from "./page.module.css";
import { articles } from "./data.json";
import ArticlesInThree from "../features/ArticlesInThree/ArticlesInThree";

export default function Home() {
  console.log("ARTICLES:", articles);

  const articlesData = articles;
  return (
    <>
      <main className={styles.main}>
        <ArticlesInThree articles={articles} />
      </main>
    </>
  );
}
