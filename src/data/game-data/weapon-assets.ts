export type WeaponAsset = { weaponId:string; image:string; alt:string; caption:string; assetName:string|null; sourceBundle:string|null; pathId:string|null; visuallyVerified:boolean };

// No weapon candidate is published until a human confirms the rendered asset.
export const weaponAssets: WeaponAsset[] = [
  ["swordShield","Sword and Shield"],["greatsword","Greatsword"],["dagger","Dagger"],["crossbow","Crossbow"],["staff","Staff"],["grimoire","Grimoire"]
].map(([weaponId,label]) => ({weaponId, image:"/screenshots/sephiria-builds.webp", alt:`Official Sephiria ${label} build screenshot`, caption:"Official Sephiria screenshot; weapon identity is not visually confirmed.", assetName:null, sourceBundle:null, pathId:null, visuallyVerified:false}));
