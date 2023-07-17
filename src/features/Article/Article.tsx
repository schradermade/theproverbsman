import React from "react";
import Image from "next/image";
import styles from "./Article.module.css";
import Tag from "@/components/Tag/Tag";
import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import ImageCredit from "@/components/ImageCredit/ImageCredit";
import {
  Newsreader,
  PT_Sans_Narrow,
  Noticia_Text,
  Coustard,
} from "next/font/google";
import cls from "classnames";

const coustard = Coustard({ subsets: ["latin"], weight: "400" });

const Article = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"/static/images/beach.jpeg"}
            alt="beach"
            fill={true}
            // width={390}
            // height={390}
            className={styles.image}
          />
          <div className={styles.imageCredit}>
            <ImageCredit copy={"Pixel Bay"} />
          </div>
        </div>

        <div className={styles.introContainer}>
          <div className={styles.innerContainer}>
            {/* <div className={styles.container}> */}
            <div className={styles.headInfo}>
              <div className={styles.tag}>
                <Tag copy={"Eschatology"} />
              </div>
              <div className={styles.articleTitle}>
                <ArticleTitle
                  copy={
                    "Is The Russia / Ukraine War A Sign Of The Times And What's Coming Next Afer This Decade Of Global News?"
                  }
                  fontSize="28px"
                />
              </div>
              <p
                className={(coustard.className, styles.articleIntro)}
                style={{ fontSize: "16px", lineHeight: "1.5" }}
              >
                Republican strategist Jason Osbourne reacts to former President
                Donald Trump blaming former New Jersey governor and 2024
                contender, Chris Christie, in what he says was Christies
                recommendation to nominate Christopher Wray for FBI director.
              </p>
              <div className={styles.introFooter}>
                <p
                  style={{
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    color: "#ac9b7b",
                    height: "20px",
                    lineHeight: "20px",
                  }}
                >
                  By Nathan Schrader
                </p>
                <Image
                  src="/static/images/block.svg"
                  alt="clock"
                  width={5}
                  height={5}
                  style={{
                    height: "20px",
                    lineHeight: "20px",
                    margin: "0 10px",
                  }}
                  className={styles.icon}
                />
                <p
                  style={{
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    color: "#ac9b7b",
                    height: "20px",
                    lineHeight: "20px",
                  }}
                >
                  Jul 4th, 2023
                </p>
                <Image
                  src="/static/images/block.svg"
                  alt="clock"
                  width={5}
                  height={5}
                  style={{
                    height: "20px",
                    lineHeight: "20px",
                    margin: "0 10px",
                  }}
                  className={styles.icon}
                />
                <Image
                  src="/static/images/clock.svg"
                  alt="clock"
                  width={12}
                  height={12}
                  style={{ height: "20px", lineHeight: "20px" }}
                  className={styles.icon}
                />
                <p
                  style={{
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    color: "#ac9b7b",
                    height: "20px",
                    lineHeight: "20px",
                    marginLeft: "3px",
                  }}
                >
                  5 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articleContainer}>
        <p
          className={(coustard.className, styles.articleIntro)}
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            textIndent: "50px",
            textAlign: "left",
            // textJustify: "inter-word",
          }}
        >
          Republican strategist Jason Osbourne reacts to former President Donald
          Trump blaming former New Jersey governor and 2024 contender, Chris
          Christie, in what he says was Christies recommendation to nominate
          Christopher Wray for FBI director.
          <br />
          <br />
          Republican strategist Jason Osbourne reacts to former President Donald
          Trump blaming former New Jersey governor and 2024 contender, Chris
          Christie, in what he says was Christies recommendation to nominate
          Christopher Wray for FBI director.
          <br />
          <br />
          Republican strategist Jason Osbourne reacts to former President Donald
          Trump blaming former New Jersey governor and 2024 contender, Chris
          Christie, in what he says was Christies recommendation to nominate
          Christopher Wray for FBI director.
          <br />
          <br />
          Republican strategist Jason Osbourne reacts to former President Donald
          Trump blaming former New Jersey governor and 2024 contender, Chris
          Christie, in what he says was Christies recommendation to nominate
          Christopher Wray for FBI director.
        </p>
      </div>
      {/* </div> */}
    </>
  );
};

export default Article;
