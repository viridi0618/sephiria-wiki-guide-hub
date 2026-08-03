import type { GuidePageData, GuideSection } from "@/lib/types";
export const common={published:"2026-08-03",updated:"2026-08-03",version:"Version-sensitive",platforms:"PC",informationType:"Editorial guide",heroImage:"/og.webp",heroImageAlt:"Sephiria Wiki editorial fantasy woodland artwork",heroImageCaption:"Original Sephiria Wiki editorial artwork; no in-game data is represented.",heroImageWidth:1792,heroImageHeight:1024,faqs:[],sources:[]} satisfies Partial<GuidePageData>;
export const generic=(focus:string):GuideSection[]=>[
 {heading:"The question to answer",paragraphs:[`Use this guide when you need a clearer decision about ${focus}. Define what is ending your runs before changing everything at once.`]},
 {heading:"A practical approach",paragraphs:["Change one variable, test it across several encounters, and keep what improves consistency. A repeatable plan is more useful than a theoretical maximum."]},
 {heading:"What to prioritize",paragraphs:["Prioritize survival and a clear combat loop while learning. Once mistakes are easier to identify, lean further into speed or damage."]},
 {heading:"Common mistakes",paragraphs:["Avoid copying unexplained recommendations, treating one run as proof, or assuming every option must fit the same playstyle."]},
 {heading:"Your next step",paragraphs:["Follow the related guide that answers the next decision in your run, rather than browsing disconnected reference pages."]},
];
export const make=(data:Pick<GuidePageData,"path"|"title"|"description"|"h1"|"eyebrow"|"answer"|"category"|"sections"|"related">&Partial<GuidePageData>):GuidePageData=>({pageType:"article",...common,...data,faqs:data.faqs??[],sources:data.sources??[],published:data.published??common.published!,updated:data.updated??common.updated!,version:data.version??common.version!,platforms:data.platforms??common.platforms!,informationType:data.informationType??common.informationType!} as GuidePageData);
