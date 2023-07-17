import React from "react";
import styles from "./ArticleCard.module.css";
import { Newsreader, PT_Sans_Narrow } from "next/font/google";
import cls from "classnames";
import Image from "next/image";
import Tag from "../Tag/Tag";
import ArticleTitle from "../ArticleTitle/ArticleTitle";
import AuthorSig from "../AuthorSig/AuthorSig";
import Link from "next/link";

const pt_sans_narrow = PT_Sans_Narrow({ subsets: ["latin"], weight: "400" });

export type Article = {
  id: string;
  tag: string;
  title: string;
  author: string;
  imgUrl: string;
};

type Props = {
  article: Article;
};
// tag: string;
//   title: string;
//   author: string;
const ArticleCard: React.FC<Props> = ({ article }) => {
  const { id, tag, title, author, imgUrl } = article;
  console.log({ id, tag, title, author });

  return (
    <Link href={`/article/${id}`} passHref>
      <div key={tag} className={cls(styles.container)}>
        <div className={cls(styles.innerContainer)}>
          <Image
            src={imgUrl}
            alt="beach"
            width={105}
            height={105}
            // className={styles.image}
          />

          <div className={cls(styles.textContainer)}>
            <Tag copy={tag} />
            <ArticleTitle copy={title} fontSize="18px" />
            <AuthorSig copy={author} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
