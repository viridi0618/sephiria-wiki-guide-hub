export const siteUrl = "https://sephiria.wiki";
export type Page = { slug:string; title:string; kicker:string; description:string; category:string; intro:string; sections:{heading:string;body:string}[]; collection?:boolean };
const buildSections = (weapon:string) => [
  {heading:"Who this build is for",body:`Choose a ${weapon} approach if its basic rhythm feels readable to you. A good build is one you can execute under pressure, not one that only looks strong in an ideal run.`},
  {heading:"Playstyle",body:"Start by learning spacing, safe attack windows, and a reliable exit. Add complexity only after the core loop feels repeatable."},
  {heading:"Core strategy",body:"Protect consistency first. Pick upgrades that reinforce the same plan, and avoid splitting attention across unrelated ideas."},
  {heading:"Strengths",body:"A focused plan makes decisions faster, preserves practice value between runs, and gives you a clear way to judge each upgrade."},
  {heading:"Weaknesses",body:"Overcommitting to one pattern can make an unfamiliar encounter harder. Keep one flexible option for positioning or recovery."},
  {heading:"Early game tips",body:"Use early encounters to test reach, recovery time, and the safest repeatable sequence. Do not judge a run by one lucky room."},
  {heading:"Boss tips",body:"Spend the first safe cycle observing. Take the smallest reliable punish, then expand it only when you can still evade the response."},
  {heading:"Beginner mistakes",body:"Copying an advanced setup without understanding its purpose, chasing every offered synergy, and trading health for uncertain damage are common traps."},
  {heading:"Related guides",body:"Continue with the Boss Guide for encounter habits, the Progression Guide for priorities, and the Weapons Guide for decision criteria."},
];
const generic = (focus:string) => [
  {heading:"The question to answer",body:`Use this guide when you need a clearer decision about ${focus}. Define what is ending your runs before changing everything at once.`},
  {heading:"A practical approach",body:"Change one variable, test it across several encounters, and keep what improves consistency. A repeatable plan is more useful than a theoretical maximum."},
  {heading:"What to prioritize",body:"Prioritize survival and a clear combat loop while learning. Once mistakes are easier to identify, lean further into speed or damage."},
  {heading:"Common mistakes",body:"Avoid copying unexplained recommendations, treating one run as proof, or assuming every option must fit the same playstyle."},
  {heading:"Your next step",body:"Follow the related guide that answers the next decision in your run, rather than browsing disconnected reference pages."},
];
const make=(slug:string,title:string,kicker:string,description:string,category:string,intro:string,sections=generic(title),collection=false):Page=>({slug,title,kicker,description,category,intro,sections,collection});
export const pages:Page[]=[
 make("beginner-guide","Beginner Guide","START WITH CLARITY","A decision-first route through your first Sephiria runs.","Guides","Learn the loop by making fewer, clearer choices. This guide focuses on habits you can verify in play, without relying on invented stats.",generic("your first runs")),
 make("tips-and-tricks","Tips & Tricks","SMALL EDGES","Practical habits for cleaner, more consistent runs.","Guides","Use these tips as experiments: try one, observe the result, and keep it only if it solves a real problem."),
 make("progression-guide","Progression Guide","MOVE WITH PURPOSE","Turn each run into useful progress without chasing everything.","Guides","Progression is easier when every choice supports a short-term goal. Decide whether this run is for learning, consistency, or experimentation."),
 make("boss-guide","Boss Guide","READ THE FIGHT","A repeatable method for learning difficult encounters.","Guides","Boss improvement starts with observation. Separate recognition, positioning, and punishment instead of trying to solve the whole fight at once."),
 make("co-op","Co-op Guide","PLAY AS A TEAM","Make shared runs clearer with roles, pacing and communication.","Guides","Good co-op is less about identical builds and more about shared expectations. Agree on pace and risk before a difficult encounter."),
 make("review","Sephiria Review","WHO IS IT FOR?","A player-focused framework for deciding whether Sephiria fits you.","Guides","This review avoids a premature score. It helps you evaluate the combat loop, run structure, learning curve, and co-op appeal for yourself."),
 make("builds","Sephiria Builds","BUILD WITH INTENT","Compare playstyles and choose a coherent plan.","Builds","The best build is the one whose strategy you understand and can repeat. These pages explain trade-offs without claiming unverified item or skill data.",generic("choosing a build"),true),
 ...["sword","bow","magic","spear","fist","scythe"].map(w=>make(`builds/${w}`,`${w[0].toUpperCase()+w.slice(1)} Build`,"PLAYSTYLE GUIDE",`A practical ${w} build framework focused on decisions, not invented data.`,"Builds",`This ${w} build guide is a decision framework. It does not invent equipment names, skill effects, or exact values.`,buildSections(w))),
 make("weapons-guide","Weapons Guide","CHOOSE YOUR RHYTHM","How to compare weapon choices for comfort, damage and survival.","Gameplay","Choose by the problem you need to solve: reach, safety, control, or a combat rhythm you can execute consistently."),
 make("destiny-tree-guide","Destiny Tree Guide","PRIORITIZE THE PATH","Plan unlocks around current needs rather than completionism.","Systems","Treat the Destiny Tree as a sequence of decisions. Verify each option in-game, then prioritize what directly supports your current learning goal."),
 make("upgrade-guide","Upgrade Guide","INVEST WITH A REASON","A simple framework for evaluating upgrades during a run.","Systems","An upgrade is useful when it strengthens your plan or fixes a known weakness. Novelty alone is not a reason to pivot."),
 make("is-sephiria-worth-playing","Is Sephiria Worth Playing?","QUICK ANSWER","A fit check based on what you enjoy in action roguelites.","FAQ","Sephiria may suit players who enjoy learning through repeated runs and adapting decisions. Confirm current features and availability on the official store page before buying."),
 make("is-sephiria-multiplayer","Is Sephiria Multiplayer?","QUICK ANSWER","What to verify before planning a co-op run.","FAQ","Multiplayer features can change during development. Check the current official store listing and announcements, then use our Co-op Guide for team habits."),
 make("is-sephiria-hard","Is Sephiria Hard?","QUICK ANSWER","How to think about challenge and the learning curve.","FAQ","Difficulty depends on pattern recognition, decision load, and familiarity with the combat rhythm. Start by reducing variables rather than chasing a perfect run."),
 make("controller-support","Sephiria Controller Support","QUICK ANSWER","How to verify controller compatibility and improve comfort.","FAQ","Controller support can vary by platform and version. Confirm the current official listing, then test bindings that keep movement and defensive actions comfortable."),
 make("build-picker","Build Picker","COMING SOON","A future decision tool for matching playstyle to a guide.","Tools","The interactive picker is reserved for a later release. For now, use the Builds Hub to compare strategies without fabricated recommendations.",generic("matching a playstyle")),
];
export const pageBySlug=(slug:string)=>pages.find(p=>p.slug===slug);
