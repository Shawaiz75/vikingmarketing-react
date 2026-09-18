import type { Metadata } from "next";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonMetadata } from "@/lib/comparisons";
import data from "@/data/comparisons/viking-marketing-vs-quo";

export const metadata: Metadata = comparisonMetadata(data);

export default function Page() {
  return <ComparisonPage data={data} />;
}
