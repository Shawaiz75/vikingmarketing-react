import Link from "next/link";
import Image from "next/image";
import { AUTHOR, type PostCard as PostCardData } from "@/lib/blog-constants";

/** Shared post card used by the blog grid and the post page's related-posts
 *  section, so both stay visually identical. */
export default function PostCard({ post }: { post: PostCardData }) {
  return (
    <article className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <Link href={`/post/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden">
        {post.hero ? (
          <Image
            src={post.hero}
            alt={post.title}
            width={640}
            height={360}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        {post.category ? (
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11.5px] font-medium text-white backdrop-blur">
            {post.category.name}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-heading text-[18.5px] font-bold leading-snug text-white">
          <Link href={`/post/${post.slug}`} className="transition-colors hover:text-[#efa4f2]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-white/70 line-clamp-3">
          {post.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-2.5">
            <Image
              src={AUTHOR.avatar}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-[12.5px] font-medium text-white">{AUTHOR.name}</p>
              {post.date ? <p className="text-[11.5px] text-white/50">{post.date}</p> : null}
            </div>
          </div>
          <Link
            href={`/post/${post.slug}`}
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#efa4f2] transition-colors hover:text-white"
            aria-label={`Read ${post.title}`}
          >
            Read
            <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
