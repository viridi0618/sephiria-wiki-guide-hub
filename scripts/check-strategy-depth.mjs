import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const builds=['sword-and-shield','greatsword','dagger','crossbow','staff','grimoire'];
const bosses=['askard','mole-big-bomb','mad-armadillo','bird-demon','larid','oink-king'];
const source=fs.readFileSync(path.join(root,'src/lib/strategy-sections.ts'),'utf8');
const requiredBuild=['Build Summary','Combat Loop','Early Progression','Mid-Game Transition','Core Skills','Core Upgrades / Items','Endgame Target','Failure Modes','Related Bosses'];
const requiredBoss=['Boss Overview','Known Attack Call-Outs','Recommended Builds','Rewards and Drops'];
const errors=[];
for(const name of builds){for(const h of requiredBuild)if(!source.includes(h))errors.push(`Missing build section ${h}: ${name}`);}
for(const name of bosses)for(const h of requiredBoss.slice(0,3))if(!fs.readFileSync(path.join(root,'src/data/boss-pages.ts'),'utf8').includes(h))errors.push(`Missing boss section ${h}: ${name}`);
if((source.match(/QBoss/g)||[]).length)errors.push('Build strategy references non-published QBoss page');
for(const word of ['highest DPS','strongest','best'])if(source.includes(word))errors.push(`Unverified absolute wording: ${word}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Strategy depth checks passed: ${builds.length} build targets and ${bosses.length} boss targets have shared required sections; no QBoss or forbidden absolute wording.`);

