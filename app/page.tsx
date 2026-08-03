import { SiteHeader, SiteFooter, GuideCard, JsonLd } from "./ui";
import { pages, siteUrl } from "./content";

export default function Home() {
  const featured = pages.filter((p) => ["beginner-guide", "builds", "weapons-guide", "destiny-tree-guide", "progression-guide", "boss-guide"].includes(p.slug));
  return <><SiteHeader/><main>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">THE DECISION-FIRST GUIDE HUB</p><h1>Sephiria Wiki</h1><p className="dek">Builds, guides & tips for choosing your next move—not another database to scroll through.</p><div className="actions"><a className="button" href="/beginner-guide/">Start here</a><a className="text-link" href="/builds/">Explore builds →</a></div></div><div className="hero-art" role="img" aria-label="Misty fantasy woodland guidebook artwork"><img src="/og.webp" alt="Sephiria Wiki fantasy guide hub artwork"/></div></section>
    <section className="promise"><p>One clear promise</p><h2>Less cataloguing. Better decisions.</h2><div className="promise-grid"><span><b>01</b> Find the question</span><span><b>02</b> Compare the trade-offs</span><span><b>03</b> Act with confidence</span></div></section>
    <section className="section"><div className="section-head"><div><p className="eyebrow">FIELD NOTES</p><h2>Choose your next guide</h2></div><p>Start with fundamentals, pick a playstyle, then connect your build to progression and boss practice.</p></div><div className="card-grid">{featured.map((p,i)=><GuideCard key={p.slug} page={p} index={i}/>)}</div></section>
    <section className="path"><p className="eyebrow">RECOMMENDED PATH</p><h2>New to Sephiria?</h2><div className="path-row"><a href="/beginner-guide/"><b>1</b>Beginner Guide</a><span>→</span><a href="/builds/"><b>2</b>Builds Hub</a><span>→</span><a href="/boss-guide/"><b>3</b>Boss Guide</a><span>→</span><a href="/progression-guide/"><b>4</b>Progression</a></div></section>
  </main><SiteFooter/><JsonLd data={{"@context":"https://schema.org","@type":"WebSite",name:"Sephiria Wiki",url:siteUrl,description:"Sephiria Wiki for builds, guides and practical tips."}}/></>;
}
