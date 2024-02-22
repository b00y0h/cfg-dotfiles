"use strict";var p=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var O=Object.prototype.hasOwnProperty;var L=(s,o)=>{for(var a in o)p(s,a,{get:o[a],enumerable:!0})},F=(s,o,a,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let d of E(o))!O.call(s,d)&&d!==a&&p(s,d,{get:()=>o[d],enumerable:!(c=C(o,d))||c.enumerable});return s};var T=s=>F(p({},"__esModule",{value:!0}),s);var B={};L(B,{default:()=>P});module.exports=T(B);var n=require("@raycast/api"),w=require("child_process"),u=require("react"),l=require("react/jsx-runtime"),N=["connected","connecting","disconnecting","disconnected","invalid"],x=s=>s.sort((a,c)=>{let d=N.indexOf(a.status),k=N.indexOf(c.status);return d<k?-1:d>k?1:0}),R=s=>{let o=/\((\d+)\)\s+(.*?)\s+\(Hardware Port: (.*?), Device: (.*?)\)/g;return Array.from(s.matchAll(o)).map(c=>({id:c[1],name:c[2],hardwarePort:c[3],device:c[4],status:"disconnected"}))};function P(){let[s,o]=(0,u.useState)(!0),[a,c]=(0,u.useState)(),[d,k]=(0,u.useState)(),[v,m]=(0,u.useState)({}),h=()=>new Promise((e,t)=>{(0,w.exec)("/usr/sbin/networksetup -listnetworkserviceorder",(r,i)=>{r!=null?t(r):e(i.trim())})}),b=e=>new Promise((t,r)=>{(0,w.exec)(`/usr/sbin/networksetup -showpppoestatus '${e}'`,(i,S)=>{i!=null?r(i):t(S.trim())})}),f=()=>{h().then(e=>{let t=["Wi-Fi","Bluetooth PAN","Thunderbolt Bridge"],[r]=e.split(`
`);return k(r),R(e).filter(S=>!t.includes(S.name))}).then(e=>{let t=e.map(async r=>b(r.name).then(i=>({...r,status:i})));Promise.all(t).then(r=>{let i=r.reduce((S,g)=>({...S,[g.id]:g}),{});m(i),o(!1)})}).catch(e=>{c(e)})},y=e=>{(0,w.exec)(`/usr/sbin/networksetup -connectpppoeservice '${e.name}'`,t=>{if(t!=null){c(t);return}m({...v,[e.id]:{...e,status:"connecting"}})})},I=e=>{(0,w.exec)(`/usr/sbin/networksetup -disconnectpppoeservice '${e.name}'`,t=>{if(t!=null){c(t);return}m({...v,[e.id]:{...e,status:"disconnecting"}})})};(0,u.useEffect)(()=>{let e;return!s&&(Object.values(v).find(t=>t.status==="connecting")||Object.values(v).find(t=>t.status==="disconnecting"))&&(e=setInterval(()=>{f()},500)),()=>e?clearInterval(e):void 0},[s,v]),(0,u.useEffect)(()=>{f()},[]),a&&(0,n.showToast)(n.Toast.Style.Failure,"Something went wrong",a.message);let A=({service:e})=>{let t,r,i;switch(e.status){case"disconnected":t="Connect",r=y,i=n.Icon.Circle;break;case"connected":t="Disconnect",r=I,i=n.Icon.Checkmark;break;case"connecting":case"disconnecting":i=n.Icon.CircleEllipsis;break;default:i=n.Icon.XMarkCircle;break}return(0,l.jsx)(n.List.Item,{icon:i,title:e.name,actions:t&&(0,l.jsx)(n.ActionPanel,{children:(0,l.jsx)(n.Action,{title:t,onAction:()=>r&&r(e)})})})};return(0,l.jsx)(n.List,{isLoading:s,children:(0,l.jsx)(n.List.Section,{title:d,children:x(Object.values(v)).map(e=>(0,l.jsx)(A,{service:e},e.id))})})}