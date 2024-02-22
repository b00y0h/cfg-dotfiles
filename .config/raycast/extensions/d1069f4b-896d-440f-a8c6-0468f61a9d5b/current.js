"use strict";var dn=Object.create;var L=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var pn=Object.getOwnPropertyNames;var mn=Object.getPrototypeOf,hn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),yn=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},we=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pn(t))!hn.call(e,s)&&s!==r&&L(e,s,{get:()=>t[s],enumerable:!(n=fn(t,s))||n.enumerable});return e};var ve=(e,t,r)=>(r=e!=null?dn(mn(e)):{},we(t||!e||!e.__esModule?L(r,"default",{value:e,enumerable:!0}):r,e)),Sn=e=>we(L({},"__esModule",{value:!0}),e);var Ge=c((ms,Pe)=>{Pe.exports=Te;Te.sync=xn;var Ee=require("fs");function gn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var s=r[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ie(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:gn(t,r)}function Te(e,t,r){Ee.stat(e,function(n,s){r(n,n?!1:Ie(s,e,t))})}function xn(e,t){return Ie(Ee.statSync(e),e,t)}});var Oe=c((hs,Ne)=>{Ne.exports=Ae;Ae.sync=bn;var Ce=require("fs");function Ae(e,t,r){Ce.stat(e,function(n,s){r(n,n?!1:Re(s,t))})}function bn(e,t){return Re(Ce.statSync(e),t)}function Re(e,t){return e.isFile()&&wn(e,t)}function wn(e,t){var r=e.mode,n=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),f=a|l,h=r&d||r&l&&s===i||r&a&&n===o||r&f&&o===0;return h}});var ke=c((Ss,qe)=>{var ys=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Ge():j=Oe();qe.exports=Z;Z.sync=vn;function Z(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,s){Z(e,t||{},function(o,i){o?s(o):n(i)})})}j(e,t||{},function(n,s){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,s=!1),r(n,s)})}function vn(e,t){try{return j.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Fe=c((gs,Me)=>{var v=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",_e=require("path"),En=v?";":":",$e=ke(),Be=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Le=(e,t)=>{let r=t.colon||En,n=e.match(/\//)||v&&e.match(/\\/)?[""]:[...v?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],s=v?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=v?s.split(r):[""];return v&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:s}},je=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:s,pathExtExe:o}=Le(e,t),i=[],a=d=>new Promise((f,h)=>{if(d===n.length)return t.all&&i.length?f(i):h(Be(e));let m=n[d],y=/^".*"$/.test(m)?m.slice(1,-1):m,S=_e.join(y,e),g=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;f(l(g,d,0))}),l=(d,f,h)=>new Promise((m,y)=>{if(h===s.length)return m(a(f+1));let S=s[h];$e(d+S,{pathExt:o},(g,w)=>{if(!g&&w)if(t.all)i.push(d+S);else return m(d+S);return m(l(d,f,h+1))})});return r?a(0).then(d=>r(null,d),r):a(0)},In=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:s}=Le(e,t),o=[];for(let i=0;i<r.length;i++){let a=r[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=_e.join(l,e),f=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let h=0;h<n.length;h++){let m=f+n[h];try{if($e.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Be(e)};Me.exports=je;je.sync=In});var ee=c((xs,J)=>{"use strict";var Ue=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};J.exports=Ue;J.exports.default=Ue});var Ke=c((bs,He)=>{"use strict";var De=require("path"),Tn=Fe(),Pn=ee();function Xe(e,t){let r=e.options.env||process.env,n=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Tn.sync(e.command,{path:r[Pn({env:r})],pathExt:t?De.delimiter:void 0})}catch{}finally{o&&process.chdir(n)}return i&&(i=De.resolve(s?e.options.cwd:"",i)),i}function Gn(e){return Xe(e)||Xe(e,!0)}He.exports=Gn});var We=c((ws,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function Cn(e){return e=e.replace(te,"^$1"),e}function An(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=Cn;ne.exports.argument=An});var Ve=c((vs,ze)=>{"use strict";ze.exports=/^#!(.*)/});var Qe=c((Es,Ye)=>{"use strict";var Rn=Ve();Ye.exports=(e="")=>{let t=e.match(Rn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),s=r.split("/").pop();return s==="env"?n:n?`${s} ${n}`:s}});var Je=c((Is,Ze)=>{"use strict";var re=require("fs"),Nn=Qe();function On(e){let r=Buffer.alloc(150),n;try{n=re.openSync(e,"r"),re.readSync(n,r,0,150,0),re.closeSync(n)}catch{}return Nn(r.toString())}Ze.exports=On});var rt=c((Ts,nt)=>{"use strict";var qn=require("path"),et=Ke(),tt=We(),kn=Je(),_n=process.platform==="win32",$n=/\.(?:com|exe)$/i,Bn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Ln(e){e.file=et(e);let t=e.file&&kn(e.file);return t?(e.args.unshift(e.file),e.command=t,et(e)):e.file}function jn(e){if(!_n)return e;let t=Ln(e),r=!$n.test(t);if(e.options.forceShell||r){let n=Bn.test(t);e.command=qn.normalize(e.command),e.command=tt.command(e.command),e.args=e.args.map(o=>tt.argument(o,n));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Mn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:jn(n)}nt.exports=Mn});var it=c((Ps,ot)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Fn(e,t){if(!se)return;let r=e.emit;e.emit=function(n,s){if(n==="exit"){let o=st(s,t,"spawn");if(o)return r.call(e,"error",o)}return r.apply(e,arguments)}}function st(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Un(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}ot.exports={hookChildProcess:Fn,verifyENOENT:st,verifyENOENTSync:Un,notFoundError:oe}});var ut=c((Gs,E)=>{"use strict";var at=require("child_process"),ie=rt(),ae=it();function ct(e,t,r){let n=ie(e,t,r),s=at.spawn(n.command,n.args,n.options);return ae.hookChildProcess(s,n),s}function Dn(e,t,r){let n=ie(e,t,r),s=at.spawnSync(n.command,n.args,n.options);return s.error=s.error||ae.verifyENOENTSync(s.status,n),s}E.exports=ct;E.exports.spawn=ct;E.exports.sync=Dn;E.exports._parse=ie;E.exports._enoent=ae});var dt=c((Cs,lt)=>{"use strict";lt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var mt=c((As,N)=>{"use strict";var R=require("path"),ft=ee(),pt=e=>{e={cwd:process.cwd(),path:process.env[ft()],execPath:process.execPath,...e};let t,r=R.resolve(e.cwd),n=[];for(;t!==r;)n.push(R.join(r,"node_modules/.bin")),t=r,r=R.resolve(r,"..");let s=R.resolve(e.cwd,e.execPath,"..");return n.push(s),n.concat(e.path).join(R.delimiter)};N.exports=pt;N.exports.default=pt;N.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=ft({env:t});return e.path=t[r],t[r]=N.exports(e),t}});var yt=c((Rs,ce)=>{"use strict";var ht=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ce.exports=ht;ce.exports.default=ht});var gt=c((Ns,F)=>{"use strict";var Xn=yt(),M=new WeakMap,St=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(M.set(o,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return r};return Xn(o,e),M.set(o,n),o};F.exports=St;F.exports.default=St;F.exports.callCount=e=>{if(!M.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return M.get(e)}});var xt=c(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.SIGNALS=void 0;var Hn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];U.SIGNALS=Hn});var ue=c(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.SIGRTMAX=I.getRealtimeSignals=void 0;var Kn=function(){let e=wt-bt+1;return Array.from({length:e},Wn)};I.getRealtimeSignals=Kn;var Wn=function(e,t){return{name:`SIGRT${t+1}`,number:bt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},bt=34,wt=64;I.SIGRTMAX=wt});var vt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getSignals=void 0;var zn=require("os"),Vn=xt(),Yn=ue(),Qn=function(){let e=(0,Yn.getRealtimeSignals)();return[...Vn.SIGNALS,...e].map(Zn)};D.getSignals=Qn;var Zn=function({name:e,number:t,description:r,action:n,forced:s=!1,standard:o}){let{signals:{[e]:i}}=zn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:s,standard:o}}});var It=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.signalsByNumber=T.signalsByName=void 0;var Jn=require("os"),Et=vt(),er=ue(),tr=function(){return(0,Et.getSignals)().reduce(nr,{})},nr=function(e,{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}}},rr=tr();T.signalsByName=rr;var sr=function(){let e=(0,Et.getSignals)(),t=er.SIGRTMAX+1,r=Array.from({length:t},(n,s)=>or(s,e));return Object.assign({},...r)},or=function(e,t){let r=ir(e,t);if(r===void 0)return{};let{name:n,description:s,supported:o,action:i,forced:a,standard:l}=r;return{[e]:{name:n,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},ir=function(e,t){let r=t.find(({name:n})=>Jn.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},ar=sr();T.signalsByNumber=ar});var Pt=c(($s,Tt)=>{"use strict";var{signalsByName:cr}=It(),ur=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",lr=({stdout:e,stderr:t,all:r,error:n,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:cr[s].description,y=n&&n.code,g=`Command ${ur({timedOut:l,timeout:h,errorCode:y,signal:s,signalDescription:m,exitCode:o,isCanceled:d})}: ${i}`,w=Object.prototype.toString.call(n)==="[object Error]",$=w?`${g}
${n.message}`:g,B=[$,t,e].filter(Boolean).join(`
`);return w?(n.originalMessage=n.message,n.message=B):n=new Error(B),n.shortMessage=$,n.command=i,n.escapedCommand=a,n.exitCode=o,n.signal=s,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!l,n.isCanceled=d,n.killed=f&&!l,n};Tt.exports=lr});var Ct=c((Bs,le)=>{"use strict";var X=["stdin","stdout","stderr"],dr=e=>X.some(t=>e[t]!==void 0),Gt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(n=>e[n]);if(dr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,X.length);return Array.from({length:r},(n,s)=>t[s])};le.exports=Gt;le.exports.node=e=>{let t=Gt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var At=c((Ls,H)=>{H.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&H.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&H.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var kt=c((js,C)=>{var u=global.process;typeof u!="object"||!u?C.exports=function(){}:(Rt=require("assert"),P=At(),Nt=/^win/i.test(u.platform),O=require("events"),typeof O!="function"&&(O=O.EventEmitter),u.__signal_exit_emitter__?p=u.__signal_exit_emitter__:(p=u.__signal_exit_emitter__=new O,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),C.exports=function(e,t){if(global.process===u){Rt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&de();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n}},K=function(){!G||global.process!==u||(G=!1,P.forEach(function(t){try{u.removeListener(t,W[t])}catch{}}),u.emit=z,u.reallyExit=fe,p.count-=1)},C.exports.unload=K,b=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},W={},P.forEach(function(e){W[e]=function(){if(u===global.process){var r=u.listeners(e);r.length===p.count&&(K(),b("exit",null,e),b("afterexit",null,e),Nt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),C.exports.signals=function(){return P},G=!1,de=function(){G||u!==global.process||(G=!0,p.count+=1,P=P.filter(function(t){try{return u.on(t,W[t]),!0}catch{return!1}}),u.emit=qt,u.reallyExit=Ot)},C.exports.load=de,fe=u.reallyExit,Ot=function(t){u===global.process&&(u.exitCode=t||0,b("exit",u.exitCode,null),b("afterexit",u.exitCode,null),fe.call(u,u.exitCode))},z=u.emit,qt=function(t,r){if(t==="exit"&&u===global.process){r!==void 0&&(u.exitCode=r);var n=z.apply(this,arguments);return b("exit",u.exitCode,null),b("afterexit",u.exitCode,null),n}else return z.apply(this,arguments)});var Rt,P,Nt,O,p,K,b,W,G,de,fe,Ot,z,qt});var $t=c((Ms,_t)=>{"use strict";var fr=require("os"),pr=kt(),mr=1e3*5,hr=(e,t="SIGTERM",r={})=>{let n=e(t);return yr(e,t,r,n),n},yr=(e,t,r,n)=>{if(!Sr(t,r,n))return;let s=xr(r),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Sr=(e,{forceKillAfterTimeout:t},r)=>gr(e)&&t!==!1&&r,gr=e=>e===fr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",xr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return mr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},br=(e,t)=>{e.kill()&&(t.isCanceled=!0)},wr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},vr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{wr(e,r,l)},t)}),i=n.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Er=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Ir=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let s=pr(()=>{e.kill()});return n.finally(()=>{s()})};_t.exports={spawnedKill:hr,spawnedCancel:br,setupTimeout:vr,validateTimeout:Er,setExitHandler:Ir}});var Lt=c((Fs,Bt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Bt.exports=x});var Mt=c((Us,jt)=>{"use strict";var{PassThrough:Tr}=require("stream");jt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",s=!1;t?s=!(r||n):r=r||"utf8",n&&(r=null);let o=new Tr({objectMode:s});r&&o.setEncoding(r);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Ft=c((Ds,q)=>{"use strict";var{constants:Pr}=require("buffer"),Gr=require("stream"),{promisify:Cr}=require("util"),Ar=Mt(),Rr=Cr(Gr.pipeline),V=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=Ar(t);return await new Promise((s,o)=>{let i=a=>{a&&n.getBufferedLength()<=Pr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),o(a)};(async()=>{try{await Rr(e,n),s()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new V)})}),n.getBufferedValue()}q.exports=pe;q.exports.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"});q.exports.array=(e,t)=>pe(e,{...t,array:!0});q.exports.MaxBufferError=V});var Dt=c((Xs,Ut)=>{"use strict";var{PassThrough:Nr}=require("stream");Ut.exports=function(){var e=[],t=new Nr({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(r),t;function r(o){return Array.isArray(o)?(o.forEach(r),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function n(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Wt=c((Hs,Kt)=>{"use strict";var Ht=Lt(),Xt=Ft(),Or=Dt(),qr=(e,t)=>{t===void 0||e.stdin===void 0||(Ht(t)?t.pipe(e.stdin):e.stdin.end(t))},kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Or();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},me=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},he=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Xt(e,{encoding:t,maxBuffer:n}):Xt.buffer(e,{maxBuffer:n})},_r=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:s,maxBuffer:o},i)=>{let a=he(e,{encoding:n,buffer:s,maxBuffer:o}),l=he(t,{encoding:n,buffer:s,maxBuffer:o}),d=he(r,{encoding:n,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},me(e,a),me(t,l),me(r,d)])}},$r=({input:e})=>{if(Ht(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Kt.exports={handleInput:qr,makeAllStream:kr,getSpawnedResult:_r,validateInputSync:$r}});var Vt=c((Ks,zt)=>{"use strict";var Br=(async()=>{})().constructor.prototype,Lr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Br,e)]),jr=(e,t)=>{for(let[r,n]of Lr){let s=typeof t=="function"?(...o)=>Reflect.apply(n.value,t(),o):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:s})}return e},Mr=e=>new Promise((t,r)=>{e.on("exit",(n,s)=>{t({exitCode:n,signal:s})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});zt.exports={mergePromise:jr,getSpawnedPromise:Mr}});var Zt=c((Ws,Qt)=>{"use strict";var Yt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Fr=/^[\w.-]+$/,Ur=/"/g,Dr=e=>typeof e!="string"||Fr.test(e)?e:`"${e.replace(Ur,'\\"')}"`,Xr=(e,t)=>Yt(e,t).join(" "),Hr=(e,t)=>Yt(e,t).map(r=>Dr(r)).join(" "),Kr=/ +/g,Wr=e=>{let t=[];for(let r of e.trim().split(Kr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Qt.exports={joinCommand:Xr,getEscapedCommand:Hr,parseCommand:Wr}});var on=c((zs,A)=>{"use strict";var zr=require("path"),ye=require("child_process"),Vr=ut(),Yr=dt(),Qr=mt(),Zr=gt(),Y=Pt(),en=Ct(),{spawnedKill:Jr,spawnedCancel:es,setupTimeout:ts,validateTimeout:ns,setExitHandler:rs}=$t(),{handleInput:ss,getSpawnedResult:os,makeAllStream:is,validateInputSync:as}=Wt(),{mergePromise:Jt,getSpawnedPromise:cs}=Vt(),{joinCommand:tn,parseCommand:nn,getEscapedCommand:rn}=Zt(),us=1e3*1e3*100,ls=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:s})=>{let o=t?{...process.env,...e}:e;return r?Qr.env({env:o,cwd:n,execPath:s}):o},sn=(e,t,r={})=>{let n=Vr._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:us,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=ls(r),r.stdio=en(r),process.platform==="win32"&&zr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},k=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Yr(t):t,Q=(e,t,r)=>{let n=sn(e,t,r),s=tn(e,t),o=rn(e,t);ns(n.options);let i;try{i=ye.spawn(n.file,n.args,n.options)}catch(y){let S=new ye.ChildProcess,g=Promise.reject(Y({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return Jt(S,g)}let a=cs(i),l=ts(i,n.options,a),d=rs(i,n.options,l),f={isCanceled:!1};i.kill=Jr.bind(null,i.kill.bind(i)),i.cancel=es.bind(null,i,f);let m=Zr(async()=>{let[{error:y,exitCode:S,signal:g,timedOut:w},$,B,ln]=await os(i,n.options,d),Se=k(n.options,$),ge=k(n.options,B),xe=k(n.options,ln);if(y||S!==0||g!==null){let be=Y({error:y,exitCode:S,signal:g,stdout:Se,stderr:ge,all:xe,command:s,escapedCommand:o,parsed:n,timedOut:w,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return be;throw be}return{command:s,escapedCommand:o,exitCode:0,stdout:Se,stderr:ge,all:xe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ss(i,n.options.input),i.all=is(i,n.options),Jt(i,m)};A.exports=Q;A.exports.sync=(e,t,r)=>{let n=sn(e,t,r),s=tn(e,t),o=rn(e,t);as(n.options);let i;try{i=ye.spawnSync(n.file,n.args,n.options)}catch(d){throw Y({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=k(n.options,i.stdout,i.error),l=k(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=Y({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};A.exports.command=(e,t)=>{let[r,...n]=nn(e);return Q(r,n,t)};A.exports.commandSync=(e,t)=>{let[r,...n]=nn(e);return Q.sync(r,n,t)};A.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=en.node(r),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=r;return Q(o,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var fs={};yn(fs,{default:()=>ds});module.exports=Sn(fs);var _=require("@raycast/api");var an=ve(require("node:process"),1),cn=ve(on(),1);async function un(e){if(an.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,cn.default)("osascript",["-e",e]);return t}var ds=async()=>{let e=`
  if application "Spotify" is not running then
      return "Not playing"
  end if

  property currentTrackName : "Unknown Track"
  property currentTrackArtist : "Unknown Artist"
  property playerState : "stopped"

  tell application "Spotify"
      try
          set currentTrackName to name of the current track
          set currentTrackArtist to artist of the current track
          set playerState to player state as string
      end try
  end tell

  if playerState is "playing" then
      return currentTrackName & " by " & currentTrackArtist
  else if playerState is "paused" then
      return currentTrackName & " by " & currentTrackArtist & " (Paused)"
  else
      return "Not playing"
  end if`;try{let t=await un(e);await(0,_.showToast)({title:"Currently Playing Track",message:t})}catch{await(0,_.showToast)({style:_.Toast.Style.Failure,title:"Failed getting playing track"})}};