import styles from "./page.module.css";
import { articles } from "./data.json";
import Articles from "../features/Articles/Articles";

export default function Home() {
  console.log("ARTICLES:", articles);

  const articlesData = articles;
  return (
    <>
      <main className={styles.main}>
        <Articles articles={articles} />
      </main>
    </>
  );
}
