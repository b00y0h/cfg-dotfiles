"use strict";var w=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var k=(r,t)=>{for(var s in t)w(r,s,{get:t[s],enumerable:!0})},x=(r,t,s,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of J(t))!B.call(r,i)&&i!==s&&w(r,i,{get:()=>t[i],enumerable:!(d=A(t,i))||d.enumerable});return r};var R=r=>x(w({},"__esModule",{value:!0}),r);var _={};k(_,{default:()=>I});module.exports=R(_);var n=require("@raycast/api"),b=require("react");var f=require("@raycast/api"),F=[{title:"Alarm Clock",icon:f.Icon.Alarm,value:"alarmClock.wav"},{title:"Dismembered Woodpecker",icon:f.Icon.Bird,value:"dismemberedWoodpecker.wav"},{title:"Flute Riff",icon:f.Icon.Music,value:"fluteRiff.wav"},{title:"Level Up",icon:f.Icon.Trophy,value:"levelUp.wav"},{title:"Piano Chime",icon:f.Icon.Music,value:"pianoChime.wav"},{title:"Terminator",icon:f.Icon.BarCode,value:"terminator.wav"},{title:"Speak Timer Name",icon:f.Icon.Person,value:"speak_timer_name"}];var o=require("@raycast/api"),P=require("child_process"),O=require("crypto"),u=require("fs");var E=r=>{let t=Math.floor(r/3600),s=String(Math.floor(r%3600/60)).padStart(2,"0"),d=String(Math.floor(r%60)).padStart(2,"0");return`${t===0?"":t+":"}${s}:${d}`};var T=o.environment.supportPath+"/customTimers.json",K=o.environment.supportPath+"/defaultPresetVisibles.json";var C=(r=!1)=>{let t=(0,o.getPreferenceValues)();if(parseFloat(t.volumeSetting)>5){let s="\u26A0\uFE0F Timer alert volume should not be louder than 5 (it can get quite loud!)";return r?(0,o.showHUD)(s):(0,o.showToast)({style:o.Toast.Style.Failure,title:s}),!1}return!0};async function V(r,t="Untitled",s="default"){(0,o.popToRoot)();let i=(o.environment.supportPath+"/"+new Date().toISOString()+"---"+r+".timer").replace(/:/g,"__");(0,u.writeFileSync)(i,t);let c=(0,o.getPreferenceValues)(),S=`${o.environment.assetsPath+"/"+(s==="default"?c.selectedSound:s)}`,m=[`sleep ${r}`];m.push(`if [ -f "${i}" ]; then osascript -e 'display notification "Timer \\"${t}\\" complete" with title "Ding!"'`);let h=`afplay "${S}" --volume ${c.volumeSetting.replace(",",".")}`;if(c.selectedSound==="speak_timer_name"?m.push(`say "${t}"`):m.push(h),c.ringContinuously){let p=`${i}`.replace(".timer",".dismiss");(0,u.writeFileSync)(p,".dismiss file for Timers"),m.push(`while [ -f "${p}" ]; do ${h}; done`)}m.push(`rm "${i}"; else echo "Timer deleted"; fi`),(0,P.exec)(m.join(" && "),(p,g)=>{if(p){console.log(`error: ${p.message}`);return}if(g){console.log(`stderr: ${g}`);return}}),await(0,o.showHUD)(`Timer "${t}" started for ${E(r)}! \u{1F389}`)}function y(){(0,u.existsSync)(T)||(0,u.writeFileSync)(T,JSON.stringify({}))}function $(r){y();let t=JSON.parse((0,u.readFileSync)(T,"utf8"));t[(0,O.randomUUID)()]=r,(0,u.writeFileSync)(T,JSON.stringify(t))}var l=require("react/jsx-runtime");function I(r){let t=Object.values(r.arguments).some(e=>e!==""),[s,d]=(0,b.useState)(),[i,c]=(0,b.useState)(),[S,m]=(0,b.useState)(),h=(0,n.getPreferenceValues)(),p=e=>{if(y(),e.hours===""&&e.minutes===""&&e.seconds==="")new n.Toast({style:n.Toast.Style.Failure,title:"No values set for timer length!"}).show();else if(isNaN(Number(e.hours)))d("Hours must be a number!");else if(isNaN(Number(e.minutes)))c("Minutes must be a number!");else if(isNaN(Number(e.seconds)))m("Seconds must be a number!");else{if(!C())return;(0,n.closeMainWindow)();let a=e.name?e.name:"Untitled",M=3600*Number(e.hours)+60*Number(e.minutes)+Number(e.seconds);V(M,a,e.selectedSound),e.willBeSaved&&$({name:e.name,timeInSeconds:M,selectedSound:e.selectedSound,showInMenuBar:!0})}},g=()=>{s&&s.length>0&&d(void 0)},D=()=>{i&&i.length>0&&c(void 0)},v=()=>{S&&S.length>0&&m(void 0)},N=[{id:"hours",title:"Hours",placeholder:"0",err:s,drop:g,validator:e=>{let a=e.target.value;isNaN(Number(a))?d("Hours must be a number!"):g()}},{id:"minutes",title:"Minutes",placeholder:"00",err:i,drop:D,validator:e=>{let a=e.target.value;isNaN(Number(a))?c("Minutes must be a number!"):D()}},{id:"seconds",title:"Seconds",placeholder:"00",err:S,drop:v,validator:e=>{let a=e.target.value;isNaN(Number(a))?m("Seconds must be a number!"):v()}}];return h.newTimerInputOrder!=="hhmmss"&&N.reverse(),(0,l.jsxs)(n.Form,{actions:(0,l.jsx)(n.ActionPanel,{children:(0,l.jsx)(n.Action.SubmitForm,{title:"Start Custom Timer",onSubmit:e=>p(e)})}),children:[N.map((e,a)=>(0,l.jsx)(n.Form.TextField,{id:e.id,title:e.title,placeholder:e.placeholder,defaultValue:r.arguments[e.id],error:e.err,onChange:e.drop,onBlur:e.validator},a)),(0,l.jsxs)(n.Form.Dropdown,{id:"selectedSound",defaultValue:"default",title:"Sound",children:[(0,l.jsx)(n.Form.Dropdown.Item,{value:"default",title:"Default"}),F.map((e,a)=>(0,l.jsx)(n.Form.Dropdown.Item,{title:e.value===h.selectedSound?`${e.title} (currently selected)`:e.title,value:e.value,icon:e.icon},a))]}),(0,l.jsx)(n.Form.TextField,{id:"name",title:"Name",placeholder:"Pour Tea",autoFocus:t}),(0,l.jsx)(n.Form.Checkbox,{id:"willBeSaved",label:"Save as preset"})]})}