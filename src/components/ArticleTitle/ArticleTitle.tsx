import React from "react";
import { PT_Sans_Narrow } from "next/font/google";
import cls from "classNames";
import styles from "./ArticleTitle.module.css";

type Props = {
  copy: string;
  fontSize: string;
};

const pt_sans_narrow = PT_Sans_Narrow({ subsets: ["latin"], weight: "400" });

const ArticleTitle: React.FC<Props> = ({ copy, fontSize }) => {
  return (
    <p
      className={cls(pt_sans_narrow.className, styles.copy)}
      style={{ fontSize: fontSize }}
    >
      {copy}
    </p>
  );
};

export default ArticleTitle;
