import type { Page } from "./content";
const nav=[['Guides','/beginner-guide/'],['Builds','/builds/'],['Gameplay','/weapons-guide/'],['Systems','/destiny-tree-guide/'],['Tools','/build-picker/']];
export function SiteHeader(){return <header><a className="brand" href="/"><span>S</span><b>SEPHIRIA<br/><i>WIKI</i></b></a><nav>{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav><a className="start" href="/beginner-guide/">Start here ↗</a></header>}
export function SiteFooter(){return <footer><div className="brand"><span>S</span><b>SEPHIRIA<br/><i>WIKI</i></b></div><p>Independent, decision-first guides. Not affiliated with the game’s developer or publisher.</p><p>© 2026 Sephiria Wiki</p></footer>}
export function GuideCard({page,index}:{page:Page,index:number}){return <a className="card" href={`/${page.slug}/`}><span className="card-no">0{index+1}</span><p>{page.category}</p><h3>{page.title}</h3><span>{page.description}</span><b>Read guide →</b></a>}
export function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
