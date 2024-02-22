"use strict";var P=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var Q=(e,t)=>{for(var s in t)P(e,s,{get:t[s],enumerable:!0})},W=(e,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of z(t))!K.call(e,o)&&o!==s&&P(e,o,{get:()=>t[o],enumerable:!(n=G(t,o))||n.enumerable});return e};var X=e=>W(P({},"__esModule",{value:!0}),e);var Z={};Q(Z,{default:()=>Y});module.exports=X(Z);var D=require("react");var r=require("@raycast/api"),E=require("child_process"),F=require("crypto"),i=require("fs"),N=require("path");var C=e=>{let t=Math.floor(e/3600),s=String(Math.floor(e%3600/60)).padStart(2,"0"),n=String(Math.floor(e%60)).padStart(2,"0");return`${t===0?"":t+":"}${s}:${n}`};var A=e=>(e.d1=e.d1=="----"?void 0:e.d1,e.d2=e.d2=="----"?void 0:e.d2,Math.round((e.d1?new Date(e.d1):new Date).getTime()-(e.d2?new Date(e.d2):new Date).getTime())/1e3);var p=r.environment.supportPath+"/customTimers.json",b=r.environment.supportPath+"/defaultPresetVisibles.json",I=e=>{try{(0,i.unlinkSync)(e)}catch(t){if(t instanceof Error&&!t.message.includes("ENOENT"))throw t}},w=(e=!1)=>{let t=(0,r.getPreferenceValues)();if(parseFloat(t.volumeSetting)>5){let s="\u26A0\uFE0F Timer alert volume should not be louder than 5 (it can get quite loud!)";return e?(0,r.showHUD)(s):(0,r.showToast)({style:r.Toast.Style.Failure,title:s}),!1}return!0};async function O(e,t="Untitled",s="default"){(0,r.popToRoot)();let o=(r.environment.supportPath+"/"+new Date().toISOString()+"---"+e+".timer").replace(/:/g,"__");(0,i.writeFileSync)(o,t);let m=(0,r.getPreferenceValues)(),c=`${r.environment.assetsPath+"/"+(s==="default"?m.selectedSound:s)}`,d=[`sleep ${e}`];d.push(`if [ -f "${o}" ]; then osascript -e 'display notification "Timer \\"${t}\\" complete" with title "Ding!"'`);let M=`afplay "${c}" --volume ${m.volumeSetting.replace(",",".")}`;if(m.selectedSound==="speak_timer_name"?d.push(`say "${t}"`):d.push(M),m.ringContinuously){let g=`${o}`.replace(".timer",".dismiss");(0,i.writeFileSync)(g,".dismiss file for Timers"),d.push(`while [ -f "${g}" ]; do ${M}; done`)}d.push(`rm "${o}"; else echo "Timer deleted"; fi`),(0,E.exec)(d.join(" && "),(g,h)=>{if(g){console.log(`error: ${g.message}`);return}if(h){console.log(`stderr: ${h}`);return}}),await(0,r.showHUD)(`Timer "${t}" started for ${C(e)}! \u{1F389}`)}function v(e){let t=r.environment.supportPath+"/"+e,s=t.replace(".timer",".dismiss");I(t),I(s)}function B(){let e=[];return(0,i.readdirSync)(r.environment.supportPath).forEach(s=>{if((0,N.extname)(s)==".timer"){let n={name:"",secondsSet:-99,timeLeft:-99,originalFile:s,timeEnds:new Date};n.name=(0,i.readFileSync)(r.environment.supportPath+"/"+s).toString();let o=s.split("---");n.secondsSet=Number(o[1].split(".")[0]);let m=o[0].replace(/__/g,":");n.timeLeft=Math.max(0,Math.round(n.secondsSet-A({d2:m}))),n.timeEnds=new Date(m),n.timeEnds.setSeconds(n.timeEnds.getSeconds()+n.secondsSet),e.push(n)}}),e.sort((s,n)=>s.timeLeft-n.timeLeft),e}function y(){(0,i.existsSync)(p)||(0,i.writeFileSync)(p,JSON.stringify({}))}function J(e){y();let t=JSON.parse((0,i.readFileSync)(p,"utf8"));t[(0,F.randomUUID)()]=e,(0,i.writeFileSync)(p,JSON.stringify(t))}function x(){y();let e=JSON.parse((0,i.readFileSync)(p,"utf8"));return Object.fromEntries(Object.entries(e).map(([t,s])=>s.showInMenuBar===void 0?[t,{...s,showInMenuBar:!0}]:[t,s]))}function R(e){y();let t=JSON.parse((0,i.readFileSync)(p,"utf8"));delete t[e],(0,i.writeFileSync)(p,JSON.stringify(t))}function _(e){y();let t=JSON.parse((0,i.readFileSync)(p,"utf8")),s=t[e].showInMenuBar;t[e].showInMenuBar=s===void 0?!1:!s,(0,i.writeFileSync)(p,JSON.stringify(t))}var j=()=>{if(!(0,i.existsSync)(b)){let t={"2M":!0,"5M":!0,"10M":!0,"15M":!0,"30M":!0,"45M":!0,"60M":!0,"90M":!0};return(0,i.writeFileSync)(b,JSON.stringify(t)),t}return JSON.parse((0,i.readFileSync)(b,"utf8"))},H=e=>{let t=JSON.parse((0,i.readFileSync)(b,"utf8"));t[e]=!t[e],(0,i.writeFileSync)(b,JSON.stringify(t))};var S=require("@raycast/api");function V(){let[e,t]=(0,D.useState)(void 0),[s,n]=(0,D.useState)({}),[o,m]=(0,D.useState)(e===void 0),c=()=>{y();let l=B();t(l);let f=x();n(f),m(!1)};return{timers:e,customTimers:s,isLoading:o,refreshTimers:c,handleStartTimer:(l,f,q=!1)=>{w(q)&&(O(l,f),c())},handleStopTimer:l=>{t(e?.filter(f=>f.originalFile!==l.originalFile)),v(l.originalFile),c()},handleStartCT:(l,f=!1)=>{w(f)&&(O(l.timeInSeconds,l.name,l.selectedSound),c())},handleCreateCT:l=>{let f={name:l.name,timeInSeconds:l.secondsSet,selectedSound:"default",showInMenuBar:!0};J(f),c()},handleDeleteCT:async l=>{let f={title:"Delete this preset?",icon:S.Icon.Trash,message:"You won't be able to recover it.",dismissAction:{title:"Cancel",style:S.Alert.ActionStyle.Cancel},primaryAction:{title:"Delete",style:S.Alert.ActionStyle.Destructive}};await(0,S.confirmAlert)(f)&&(R(l),c())},handleToggleCTVisibility:async l=>{_(l),c()}}}var a=require("@raycast/api"),U=require("react");var L=require("react");function $(){let e=[{key:"2M",title:"2 Minute Timer",seconds:120},{key:"5M",title:"5 Minute Timer",seconds:300},{key:"10M",title:"10 Minute Timer",seconds:600},{key:"15M",title:"15 Minute Timer",seconds:900},{key:"30M",title:"30 Minute Timer",seconds:1800},{key:"45M",title:"45 Minute Timer",seconds:2700},{key:"60M",title:"60 Minute Timer",seconds:3600},{key:"90M",title:"90 Minute Timer",seconds:5400}],[t,s]=(0,L.useState)(),[n,o]=(0,L.useState)(t===void 0),m=()=>{s(j()),o(!1)};return{defaultPresets:e,defaultVisibles:t,isLoadingVisibles:n,refreshDefaultVisibles:m,handleDefaultPresetToggle:d=>{H(d),m()}}}var T=require("react/jsx-runtime");function Y(){let{customTimers:e,isLoading:t,refreshTimers:s,handleToggleCTVisibility:n}=V(),{defaultPresets:o,defaultVisibles:m,isLoadingVisibles:c,refreshDefaultVisibles:d,handleDefaultPresetToggle:M}=$(),g={tag:{value:"Hidden",color:a.Color.Red}},h={tag:{value:"Visible",color:a.Color.Green}};return(0,U.useEffect)(()=>{s(),d()},[]),(0,T.jsxs)(a.List,{isLoading:t&&c,children:[(0,T.jsx)(a.List.Section,{title:"Custom Presets",children:Object.keys(e).sort((u,k)=>e[u].timeInSeconds-e[k].timeInSeconds).map(u=>(0,T.jsx)(a.List.Item,{title:e[u].name,subtitle:C(e[u].timeInSeconds),icon:a.Icon.Clock,accessories:[e[u].showInMenuBar?h:g],actions:(0,T.jsx)(a.ActionPanel,{children:(0,T.jsx)(a.Action,{title:e[u].showInMenuBar?"Hide In Menu Bar":"Show In Menu Bar",onAction:()=>n(u)})})},u))}),(0,T.jsx)(a.List.Section,{title:"Default Presets",children:o.map(u=>(0,T.jsx)(a.List.Item,{title:u.title,icon:a.Icon.Hourglass,accessories:[m?.[u.key]?h:g],actions:(0,T.jsx)(a.ActionPanel,{children:(0,T.jsx)(a.Action,{title:m?.[u.key]?"Hide In Menu Bar":"Show In Menu Bar",onAction:()=>M(u.key)})})},u.key))})]})}