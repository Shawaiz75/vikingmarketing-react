import type { Metadata } from "next";
import TemplatePage, { templateMetadata } from "@/components/TemplatePage";
import data from "@/data/features/review-generation-software";

export const metadata: Metadata = templateMetadata(data);

export default function Page() {
  return <TemplatePage data={data} />;
}
