import type { GuidePageData } from "@/lib/types";import {guidePages}from"./guides";import{buildPages}from"./builds";import{systemPages}from"./systems";import{faqPages}from"./faq-pages";import{toolPages}from"./tools";
export const pages:GuidePageData[]=[...guidePages,...buildPages,...systemPages,...faqPages,...toolPages];
export function getPage(path:string){return pages.find(page=>page.path===path.replace(/^\/+|\/+$/g,""))}
