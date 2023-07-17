import React from "react";
import { Work_Sans } from "next/font/google";
import styles from "./ImageCredit.module.css";
import cls from "classnames";

type Props = {
  copy: string;
};

const work_sans = Work_Sans({ subsets: ["latin"], weight: "400" });

const ImageCredit: React.FC<Props> = ({ copy }) => {
  return (
    <>
      <p className={cls(work_sans.className, styles.copy)}>{copy}</p>
    </>
  );
};

export default ImageCredit;
