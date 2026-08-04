import type { GuidePageData } from "@/lib/types";import {guidePages}from"./guides";import{buildPages}from"./builds";import{systemPages}from"./systems";import{faqPages}from"./faq-pages";import{toolPages}from"./tools";
import{bossPages}from"./boss-pages";
export const pages:GuidePageData[]=[...guidePages,...buildPages,...systemPages,...faqPages,...toolPages,...bossPages];
export function getPage(path:string){return pages.find(page=>page.path===path.replace(/^\/+|\/+$/g,""))}
