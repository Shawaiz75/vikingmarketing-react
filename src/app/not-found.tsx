import Link from "next/link";
import { CtaButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32">
      <div className="grid-backdrop" aria-hidden>
        <div className="grid-glow top-0" />
      </div>
      <div className="wrap relative text-center">
        <p className="grad-text font-heading text-7xl font-bold">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <CtaButton href="/">Back to Home</CtaButton>
        </div>
        <p className="mt-6 text-[14px] text-white/60">
          Or browse the <Link href="/blog" className="text-[#efa4f2] hover:text-white">blog</Link>.
        </p>
      </div>
    </section>
  );
}
