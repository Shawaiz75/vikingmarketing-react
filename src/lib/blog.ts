import fs from "node:fs";
import path from "node:path";
import {
  AUTHOR_ID,
  AUTHOR,
  CATEGORIES,
  CATEGORY_DESCRIPTIONS,
  AUTHOR_DESCRIPTION,
  type PostCard,
  type Post,
} from "./blog-constants";

// Re-exported so existing server-side imports of these from "@/lib/blog"
// keep working unchanged. The constants themselves live in blog-constants.ts
// (no node:fs/node:path) so client components can import them directly
// without pulling this file's filesystem access into the browser bundle.
export { AUTHOR_ID, AUTHOR, CATEGORIES, CATEGORY_DESCRIPTIONS, AUTHOR_DESCRIPTION };
export type { PostCard, Post };

const CONTENT = path.join(process.cwd(), "src", "content");

export function getPostsIndex(): PostCard[] {
  const raw = fs.readFileSync(path.join(CONTENT, "posts-index.json"), "utf8");
  return JSON.parse(raw) as PostCard[];
}

// Blog bodies are stored as raw HTML with root-absolute asset/link paths.
// Next's automatic basePath prefixing only covers next/image and next/link
// output, not markup injected via dangerouslySetInnerHTML, so root-relative
// src="/..." and href="/..." attributes are rewritten here at read time.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(CONTENT, "posts", `${slug}.json`), "utf8");
  const post = JSON.parse(raw) as Post;
  if (BASE_PATH) {
    post.contentHtml = post.contentHtml.replace(
      /((?:src|href)=")\/(?!\/)/g,
      `$1${BASE_PATH}/`
    );
  }
  return post;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join(CONTENT, "posts"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}
