import Head from "next/head";
import styles from "./layout.module.css";

const name = "Rancode";
export const siteTitle = "Next.js Blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/6.jpg" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
