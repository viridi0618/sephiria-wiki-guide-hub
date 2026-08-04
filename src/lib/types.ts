export type SourceLevel = "Official" | "Media" | "Community";
export type GuideSource = { label: string; url: string; level: SourceLevel; lastChecked: string; note?: string };
export type GuideTable = { headers: string[]; rows: string[][] };
export type GuideSubsection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: GuideTable; note?: string };
export type GuideSection = { heading: string; paragraphs?: string[]; bullets?: string[]; table?: GuideTable; note?: string; subsections?: GuideSubsection[] };
export type ContentImage = { src:string; alt:string; caption:string; sourceLabel:string; sourceUrl?:string; width:number; height:number; placementAfterHeading?:string };
export type ContentVideo = { id:string; title:string; channel:string; youtubeUrl:string; placementAfterHeading:string; description?:string };
export type GuidePathStep = { step:number; label:string; href:string; question:string; secondaryLabel?:string; secondaryHref?:string };
export type GuidePageData = {
  path:string; title:string; description:string; h1:string; eyebrow:string; answer:string; warning?:string; canonicalPath?:string;
  category:string; categoryPath?:string; breadcrumbLabel?:string; pageType:"article"|"category"|"webpage";
  published:string; updated:string; version:string; platforms:string; informationType:string;
  heroImage?:string; heroImageAlt?:string; heroImageCaption?:string; heroImageSourceUrl?:string; heroImageWidth?:number; heroImageHeight?:number;
  sections:GuideSection[]; faqs:{question:string;answer:string}[]; related:string[]; sources:GuideSource[];
  contentImages?:ContentImage[]; contentVideos?:ContentVideo[]; featuredVideo?:ContentVideo; guidePath?:GuidePathStep[]; pickerCta?:string; tool?:"build-picker";
  verifiedData?: { weaponId: string; description?: string | null; relatedSkills?: string[] };
};
