export type NavItem={label:string;href:string;description?:string};
export type NavGroup={id:string;label:string;href:string;items?:NavItem[];activePaths?:string[]};
export const navigation:NavGroup[]=[
 {id:"guides",label:"Guides",href:"/beginner-guide/",activePaths:["/beginner-guide/","/tips-and-tricks/","/progression-guide/","/boss-guide/","/co-op/","/review/"],items:[{label:"Beginner Guide",href:"/beginner-guide/"},{label:"Tips & Tricks",href:"/tips-and-tricks/"},{label:"Progression Guide",href:"/progression-guide/"},{label:"Boss Guide",href:"/boss-guide/"},{label:"Co-op Guide",href:"/co-op/"},{label:"Review",href:"/review/"}]},
 {id:"builds",label:"Builds",href:"/builds/",activePaths:["/builds/*"],items:[{label:"Builds Hub",href:"/builds/"},{label:"Sword Build",href:"/builds/sword/"},{label:"Bow Build",href:"/builds/bow/"},{label:"Magic Build",href:"/builds/magic/"},{label:"Spear Build",href:"/builds/spear/"},{label:"Fist Build",href:"/builds/fist/"},{label:"Scythe Build",href:"/builds/scythe/"}]},
 {id:"gameplay",label:"Gameplay",href:"/weapons-guide/",activePaths:["/weapons-guide/","/boss-guide/","/co-op/"],items:[{label:"Weapons Guide",href:"/weapons-guide/"},{label:"Boss Guide",href:"/boss-guide/"},{label:"Co-op Guide",href:"/co-op/"}]},
 {id:"systems",label:"Systems",href:"/destiny-tree-guide/",activePaths:["/destiny-tree-guide/","/upgrade-guide/"],items:[{label:"Destiny Tree Guide",href:"/destiny-tree-guide/"},{label:"Upgrade Guide",href:"/upgrade-guide/"}]},
 {id:"tools",label:"Tools",href:"/build-picker/",activePaths:["/build-picker/"],items:[{label:"Build Picker",href:"/build-picker/",description:"Find your playstyle"}]},
];
export function navItems(group:NavGroup){return group.items??[]}
