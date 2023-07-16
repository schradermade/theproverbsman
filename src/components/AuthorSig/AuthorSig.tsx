import React from "react";
import { Work_Sans } from "next/font/google";
import styles from "./AuthorSig.module.css";
import cls from "classnames";

type Props = {
  copy: string;
};

const work_sans = Work_Sans({ subsets: ["latin"], weight: "400" });

const AuthorSig: React.FC<Props> = ({ copy }) => {
  return (
    <>
      <p className={cls(work_sans.className, styles.copy)}>by {copy}</p>
    </>
  );
};

export default AuthorSig;
