import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
}

export default function Post() {
  return <Layout>動的ルーティング設定</Layout>;
}
