import Layout from "../../components/Layout";
import { getStaticIds } from "../../lib/post";

export async function getStaticPaths() {
  const paths = getStaticIds();
}

export default function Post() {
  return <Layout>動的ルーティング設定</Layout>;
}
