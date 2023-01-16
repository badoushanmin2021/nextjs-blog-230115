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

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return <Layout>動的ルーティング設定</Layout>;
}
