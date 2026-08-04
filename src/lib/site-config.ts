const fallbackUrl = "https://sephiriaguide.wiki";
export const siteConfig={name:"Sephiria Wiki",shortName:"Sephiria Wiki",gameName:"Sephiria",description:"Sephiria Wiki for beginner guides, builds, weapon tips, progression strategies, and gameplay help.",url:(process.env.NEXT_PUBLIC_SITE_URL||fallbackUrl).replace(/\/+$/, ""),defaultSocialImage:"/screenshots/sephiria-home.webp",author:"Sephiria Wiki Editorial Team"};
export function absoluteUrl(path="/"){const normalized=path.startsWith("/")?path:`/${path}`;return `${siteConfig.url}${normalized}`}
