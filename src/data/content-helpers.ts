import type { GuidePageData } from "@/lib/types";

export const common = {
  published: "2026-08-03",
  updated: "2026-08-03",
} satisfies Partial<GuidePageData>;

export const make = (
  data: Pick<
    GuidePageData,
    | "path"
    | "title"
    | "description"
    | "h1"
    | "eyebrow"
    | "answer"
    | "category"
    | "sections"
    | "related"
    | "version"
    | "platforms"
    | "informationType"
  > &
    Partial<GuidePageData>,
): GuidePageData => ({
  pageType: "article",
  ...data,
  faqs: data.faqs ?? [],
  sources: data.sources ?? [],
  published: data.published ?? common.published,
  updated: data.updated ?? common.updated,
} as GuidePageData);
