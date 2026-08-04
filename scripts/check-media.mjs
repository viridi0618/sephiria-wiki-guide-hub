import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(), errors=[];
const bossMap=fs.existsSync(path.join(root,'src/data/game-data/boss-assets.ts'))?fs.readFileSync(path.join(root,'src/data/game-data/boss-assets.ts'),'utf8'):'';
for(const m of bossMap.matchAll(/image:\s*"([^"]+)"[\s\S]*?visuallyVerified:\s*(true|false)/g)){if(m[2]==='true'&&!fs.existsSync(path.join(root,'public',m[1].replace(/^\//,''))))errors.push(`Missing published image: ${m[1]}`)}
const content=fs.readFileSync(path.join(root,'src/data/guides.ts'),'utf8');
const ids=[...content.matchAll(/youtubeUrl:\s*"[^"]*?(?:v=|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/g)].map(m=>m[1]);
if(new Set(ids).size<2)errors.push('Need at least two unique YouTube IDs');
for(const id of ids)if(!/^[A-Za-z0-9_-]{11}$/.test(id))errors.push(`Invalid YouTube ID: ${id}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Media checks passed: ${new Set(ids).size} unique YouTube IDs; verified image mappings are present.`);
