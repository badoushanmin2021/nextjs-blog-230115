import path from "path";
import fs from "node:fs";

const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostData() {
  const filenames = fs.readdirSync(postsDirectory);
}
