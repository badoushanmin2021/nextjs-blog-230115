import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const postData = getPostData(params.id);
}

export default function Post() {
  return <Layout>動的ルーティング設定</Layout>;
}
