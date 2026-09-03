import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Chrome for the faithful-rebuild pages. The /v2 redesign renders its own. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
