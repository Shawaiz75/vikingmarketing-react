import type { Metadata } from "next";
import TemplatePage, { templateMetadata } from "@/components/TemplatePage";
import data from "@/data/industries/appointment-setter-ai-dentist";

export const metadata: Metadata = templateMetadata(data);

export default function Page() {
  return <TemplatePage data={data} />;
}
