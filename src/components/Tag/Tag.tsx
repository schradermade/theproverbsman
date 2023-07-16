import React from "react";
import cls from "classnames";
import styles from "./Tag.module.css";
import { Nunito_Sans } from "next/font/google";

type Props = {
  copy: string;
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: "800" });

const Tag: React.FC<Props> = ({ copy }) => {
  return <p className={cls(nunitoSans.className, styles.copy)}>{copy}</p>;
};

export default Tag;
