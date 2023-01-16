import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section>
        <p>私はフルスタックエンジニアです。好きな言語はJavascriptです！</p>
      </section>
    </Layout>
  );
}
