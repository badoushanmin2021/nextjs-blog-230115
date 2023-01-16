import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import getPostsData from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);
}

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです。好きな言語はJavascriptです！</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link legacyBehavio href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>january 15, 2023</small>
          </article>
          <article>
            <Link legacyBehavio href="/">
              <img
                src="/images/thumbnail02.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>january 15, 2023</small>
          </article>
          <article>
            <Link legacyBehavio href="/">
              <img
                src="/images/thumbnail03.jpeg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>january 15, 2023</small>
          </article>
          <article>
            <Link legacyBehavio href="/">
              <img
                src="/images/thumbnail04.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>january 15, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
