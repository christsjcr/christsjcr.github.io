import{S as Qe,i as xe,s as et,a as tt,e as F,c as rt,b as W,g as he,t as J,d as me,f as G,h as K,j as nt,o as Oe,k as at,l as ot,m as st,n as ke,p as q,q as it,r as lt,u as ct,v as Z,w as Q,x as $e,y as x,z as ee,A as Ge}from"./chunks/index-e29595b9.js";import{g as Ke,f as ze,s as H,a as Le,b as ft,i as ut}from"./chunks/singletons-a02a021a.js";function pt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function dt(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(n,e){const r=new URL(n);for(const i of ht){let o=r[i];Object.defineProperty(r,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return _t(r),r}function _t(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const gt="/__data.json";function wt(n){return n.replace(/\/$/,"")+gt}function yt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=r.length;for(;i;)e=e*33^r[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;de.delete(i)}return _e(n,e)};const de=new Map;function bt(n,e,r){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(r==null?void 0:r.body)&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&(o+=`[data-hash="${yt(r.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:t,...f}=JSON.parse(d.textContent),_=d.getAttribute("data-ttl");return _&&de.set(e,{body:t,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(t,f))}return _e(n,r)}function vt(n,e){const r=de.get(n);if(r){if(performance.now()<r.ttl)return new Response(r.body,r.init);de.delete(n)}return _e(n,e)}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(n){const e=[],r=[],i=[];let o=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${Ot(n).map((t,f,_)=>{const p=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(g)return e.push(g[1]),r.push(g[2]),i.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(w)return e.push(w[1]),r.push(w[2]),i.push(!0),"(?:/([^/]+))?";const L=f===_.length-1;return p?"/"+p.split(/\[(.+?)\](?!\])/).map((A,B)=>{if(B%2){const U=Et.exec(A);if(!U)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,ie,re]=U;return e.push(ie),r.push(re),i.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return L&&A.includes(".")&&(o=!1),A.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:r,optional:i}}function Rt(n){return!/^\([^)]+\)$/.test(n)}function Ot(n){return n.slice(1).split("/").filter(Rt)}function Lt(n,{names:e,types:r,optional:i},o){const d={};for(let t=0;t<e.length;t+=1){const f=e[t],_=r[t];let p=n[t+1];if(p||!i[t]){if(_){const g=o[_];if(!g)throw new Error(`Missing "${_}" param matcher`);if(!g(p))return}d[f]=p!=null?p:""}}return d}function St(n,e,r,i){const o=new Set(e);return Object.entries(r).map(([f,[_,p,g]])=>{const{pattern:w,names:L,types:z,optional:M}=kt(f),A={id:f,exec:B=>{const U=w.exec(B);if(U)return Lt(U,{names:L,types:z,optional:M},i)},errors:[1,...g||[]].map(B=>n[B]),layouts:[0,...p||[]].map(t),leaf:d(_)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function d(f){const _=f<0;return _&&(f=~f),[_,n[f]]}function t(f){return f===void 0?f:[o.has(f),n[f]]}}function At(n){let e,r,i;var o=n[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,d(n))),{c(){e&&Q(e.$$.fragment),r=F()},l(t){e&&$e(e.$$.fragment,t),r=F()},m(t,f){e&&x(e,t,f),W(t,r,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(_)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(r),e&&ee(e,t)}}}function It(n){let e,r,i;var o=n[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[$t]},$$scope:{ctx:t}}}}return o&&(e=Z(o,d(n))),{c(){e&&Q(e.$$.fragment),r=F()},l(t){e&&$e(e.$$.fragment,t),r=F()},m(t,f){e&&x(e,t,f),W(t,r,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(_)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(r),e&&ee(e,t)}}}function $t(n){let e,r,i;var o=n[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,d(n))),{c(){e&&Q(e.$$.fragment),r=F()},l(t){e&&$e(e.$$.fragment,t),r=F()},m(t,f){e&&x(e,t,f),W(t,r,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){he();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(_)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(r),e&&ee(e,t)}}}function Me(n){let e,r=n[5]&&He(n);return{c(){e=at("div"),r&&r.c(),this.h()},l(i){e=ot(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=st(e);r&&r.l(o),o.forEach(K),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,o){W(i,e,o),r&&r.m(e,null)},p(i,o){i[5]?r?r.p(i,o):(r=He(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(i){i&&K(e),r&&r.d()}}}function He(n){let e;return{c(){e=it(n[6])},l(r){e=lt(r,n[6])},m(r,i){W(r,e,i)},p(r,i){i&64&&ct(e,r[6])},d(r){r&&K(e)}}}function Pt(n){let e,r,i,o,d;const t=[It,At],f=[];function _(g,w){return g[0][1]?0:1}e=_(n),r=f[e]=t[e](n);let p=n[4]&&Me(n);return{c(){r.c(),i=tt(),p&&p.c(),o=F()},l(g){r.l(g),i=rt(g),p&&p.l(g),o=F()},m(g,w){f[e].m(g,w),W(g,i,w),p&&p.m(g,w),W(g,o,w),d=!0},p(g,[w]){let L=e;e=_(g),e===L?f[e].p(g,w):(he(),J(f[L],1,1,()=>{f[L]=null}),me(),r=f[e],r?r.p(g,w):(r=f[e]=t[e](g),r.c()),G(r,1),r.m(i.parentNode,i)),g[4]?p?p.p(g,w):(p=Me(g),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(g){d||(G(r),d=!0)},o(g){J(r),d=!1},d(g){f[e].d(g),g&&K(i),p&&p.d(g),g&&K(o)}}}function jt(n,e,r){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;nt(i.page.notify);let p=!1,g=!1,w=null;return Oe(()=>{const L=i.page.subscribe(()=>{p&&(r(5,g=!0),r(6,w=document.title||"untitled page"))});return r(4,p=!0),L}),n.$$set=L=>{"stores"in L&&r(7,i=L.stores),"page"in L&&r(8,o=L.page),"components"in L&&r(0,d=L.components),"form"in L&&r(1,t=L.form),"data_0"in L&&r(2,f=L.data_0),"data_1"in L&&r(3,_=L.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(o)},[d,t,f,_,p,g,w,i,o]}class Tt extends Qe{constructor(e){super(),xe(this,e,jt,Pt,et,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Nt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ut=function(n,e){return new URL(n,e).href},We={},D=function(e,r,i){if(!r||r.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(r.map(d=>{if(d=Ut(d,i),d in We)return;We[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Nt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Dt={},ge=[()=>D(()=>import("./chunks/0-1fc38b36.js"),["./chunks/0-1fc38b36.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-0a6ff726.js","./chunks/index-e29595b9.js","./chunks/width-7d98b993.js","./chunks/FontAwesomeIcon-289541c1.js","./chunks/TrackedLink-2a2aedc3.js","./assets/_layout-2ee860c0.css"],import.meta.url),()=>D(()=>import("./chunks/1-408df5f1.js"),["./chunks/1-408df5f1.js","./components/error.svelte-7890725a.js","./chunks/index-e29595b9.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js"],import.meta.url),()=>D(()=>import("./chunks/2-0be3bb17.js"),["./chunks/2-0be3bb17.js","./components/pages/_page.svelte-42f375d3.js","./chunks/index-e29595b9.js","./chunks/NotificationLink-67ac4022.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js","./assets/NotificationLink-24e04704.css","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css","./chunks/UpperHallMenu-80348f95.js","./chunks/TitleBox-068748bc.js","./chunks/TrackedLink-2a2aedc3.js"],import.meta.url),()=>D(()=>import("./chunks/3-cca8ef7e.js"),["./chunks/3-cca8ef7e.js","./components/pages/about/_page.svelte-b8accd95.js","./chunks/index-e29595b9.js","./chunks/NotificationLink-67ac4022.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js","./assets/NotificationLink-24e04704.css","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/4-403a0ede.js"),["./chunks/4-403a0ede.js","./components/pages/about/committee/_page.svelte-c9793d11.js","./chunks/index-e29595b9.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css","./assets/_page-a2ddf001.css"],import.meta.url),()=>D(()=>import("./chunks/5-1524f61b.js"),["./chunks/5-1524f61b.js","./components/pages/about/constitution-and-guidelines/_page.svelte-c20f00af.js","./chunks/index-e29595b9.js","./chunks/Content-edaffa98.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/6-27d8b3aa.js"),["./chunks/6-27d8b3aa.js","./components/pages/about/elections/_page.svelte-f57b71a9.js","./chunks/index-e29595b9.js","./chunks/Content-edaffa98.js","./chunks/TitleBox-068748bc.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/7-3aa5a829.js"),["./chunks/7-3aa5a829.js","./components/pages/about/meetings/_page.svelte-aaa49bb6.js","./chunks/index-e29595b9.js","./chunks/Content-edaffa98.js","./chunks/TrackedLink-2a2aedc3.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/8-ba1f75bd.js"),["./chunks/8-ba1f75bd.js","./components/pages/get-involved/_page.svelte-edbd2929.js","./chunks/index-e29595b9.js","./chunks/NotificationLink-67ac4022.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js","./assets/NotificationLink-24e04704.css","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/9-d8843954.js"),["./chunks/9-d8843954.js","./components/pages/get-involved/freshers/_page.svelte-f2ae6691.js","./chunks/index-e29595b9.js","./chunks/Content-edaffa98.js","./chunks/UpperHallMenu-80348f95.js","./chunks/width-7d98b993.js","./chunks/TitleBox-068748bc.js","./chunks/PageHeader-2df41c6a.js","./assets/PageHeader-25283914.css","./assets/_page-e5f8ff0b.css"],import.meta.url),()=>D(()=>import("./chunks/10-1d99856e.js"),["./chunks/10-1d99856e.js","./components/pages/get-involved/societies/_page.svelte-02888d84.js","./chunks/index-e29595b9.js","./chunks/Content-edaffa98.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css","./chunks/FontAwesomeIcon-289541c1.js","./chunks/Markdown-d9d184a2.js"],import.meta.url),()=>D(()=>import("./chunks/11-6ced71ac.js"),["./chunks/11-6ced71ac.js","./components/pages/resources/_page.svelte-2e2e6c8c.js","./chunks/index-e29595b9.js","./chunks/NotificationLink-67ac4022.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js","./assets/NotificationLink-24e04704.css","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css"],import.meta.url),()=>D(()=>import("./chunks/12-ac4a8ace.js"),["./chunks/12-ac4a8ace.js","./components/pages/resources/_heading_/_page.svelte-79b9afa6.js","./chunks/index-e29595b9.js","./chunks/stores-74c4463a.js","./chunks/singletons-a02a021a.js","./chunks/Markdown-d9d184a2.js","./chunks/PageHeader-2df41c6a.js","./chunks/width-7d98b993.js","./assets/PageHeader-25283914.css","./assets/_page-8c93789c.css"],import.meta.url)],Vt=[],Bt={"/":[2],"/about":[3],"/about/committee":[4],"/about/constitution-and-guidelines":[5],"/about/elections":[6],"/about/meetings":[7],"/get-involved":[8],"/get-involved/freshers":[9],"/get-involved/societies":[10],"/resources":[11],"/resources/[heading]":[12]},qt={handleError:({error:n})=>{console.error(n)}};class Se{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,r){this.status=e,this.location=r}}async function Ct(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,o])=>[i,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ft=-1,Jt=-2,Gt=-3,Kt=-4,zt=-5,Mt=-6;function Ht(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function i(o,d=!1){if(o===Ft)return;if(o===Gt)return NaN;if(o===Kt)return 1/0;if(o===zt)return-1/0;if(o===Mt)return-0;if(d)throw new Error("Invalid input");if(o in r)return r[o];const t=e[o];if(!t||typeof t!="object")r[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[o]=new Date(t[1]);break;case"Set":const _=new Set;r[o]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const p=new Map;r[o]=p;for(let w=1;w<t.length;w+=2)p.set(i(t[w]),i(t[w+1]));break;case"RegExp":r[o]=new RegExp(t[1],t[2]);break;case"Object":r[o]=Object(t[1]);break;case"BigInt":r[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);r[o]=f;for(let _=0;_<t.length;_+=1){const p=t[_];p!==Jt&&(f[_]=i(p))}}else{const f={};r[o]=f;for(const _ in t){const p=t[_];f[_]=i(p)}}return r[o]}return i(0)}const Ze="sveltekit:scroll",C="sveltekit:index",fe=St(ge,Vt,Bt,Dt),Ae=ge[0],Ie=ge[1];Ae();Ie();let se={};try{se=JSON.parse(sessionStorage[Ze])}catch{}function Re(n){se[n]=Le()}function Wt({target:n,base:e,trailing_slash:r}){var Ce;const i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,p=!0,g=!1,w=!1,L=!1,z=!1,M,A=(Ce=history.state)==null?void 0:Ce[C];A||(A=Date.now(),history.replaceState({...history.state,[C]:A},"",location.href));const B=se[A];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let U,te,Y;async function ie(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=be(a,!0);o=null,await je(l,a,[])}async function re(a,{noScroll:l=!1,replaceState:u=!1,keepFocus:s=!1,state:c={},invalidateAll:h=!1},m,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:l?Le():null,keepfocus:s,redirect_chain:m,details:{state:c,replaceState:u},nav_token:v,accepted:()=>{h&&(z=!0)},blocked:()=>{},type:"goto"})}async function Pe(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ue(l)},o.promise}async function je(a,l,u,s,c={},h){var v,E;te=c;let m=a&&await Ue(a);if(m||(m=await qe(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==c)return!1;if(m.type==="redirect")if(u.length>10||u.includes(l.pathname))m=await le({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return re(new URL(m.location,l).href,{},[...u,l.pathname],c),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await H.updated.check()&&await ce(l);if(i.length=0,z=!1,g=!0,s&&s.details){const{details:y}=s,b=y.replaceState?0:1;y.state[C]=A+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,_){t=m.state,m.props.page&&(m.props.page.url=l);const y=pe();M.$set(m.props),y()}else Te(m);if(s){const{scroll:y,keepfocus:b}=s;if(!b){const R=document.body,P=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),P!==null?R.setAttribute("tabindex",P):R.removeAttribute("tabindex")}if(await Ge(),p){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ge();p=!0,m.props.page&&(U=m.props.page),h&&h(),g=!1}function Te(a){var c,h;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),U=a.props.page;const u=pe();M=new Tt({target:n,props:{...a.props,stores:H},hydrate:!0}),u();const s={from:null,to:ue("to",{params:t.params,route:{id:(h=(c=t.route)==null?void 0:c.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};d.after_navigate.forEach(m=>m(s)),_=!0}async function ne({url:a,params:l,branch:u,status:s,error:c,route:h,form:m}){var P;const v=u.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:u,error:c,route:h},props:{components:v.map(S=>S.node.component)}};m!==void 0&&(E.props.form=m);let y={},b=!U;for(let S=0;S<v.length;S+=1){const T=v[S];y={...y,...T.data},(b||!t.branch.some(N=>N===T))&&(E.props[`data_${S}`]=y,b=b||Object.keys((P=T.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(U.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||m!==void 0||b){E.props.page={error:c,params:l,route:h,status:s,url:a,form:m,data:b?y:U.data};const S=(T,N)=>{Object.defineProperty(E.props.page,T,{get:()=>{throw new Error(`$page.${T} has been replaced by $page.url.${N}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function we({loader:a,parent:l,url:u,params:s,route:c,server_data_node:h}){var y,b,R,P,S;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let T=function(...O){for(const V of O){const{href:k}=new URL(V,u);v.dependencies.add(k)}};const N={route:{get id(){return v.route=!0,c.id}},params:new Proxy(s,{get:(O,V)=>(v.params.add(V),O[V])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:mt(u,()=>{v.url=!0}),async fetch(O,V){let k;O instanceof Request?(k=O.url,V={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...V}):k=O;const I=new URL(k,u).href;return T(I),_?vt(I,V):bt(k,I,V)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,l()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(R=await E.shared.load.call(null,N))!=null?R:null,m=m?await Ct(m):null}return{node:E,loader:a,server:h,shared:(P=E.shared)!=null&&P.load?{type:"data",data:m,uses:v}:null,data:(S=m!=null?m:h==null?void 0:h.data)!=null?S:null}}function Ne(a,l,u,s,c){if(z)return!0;if(!s)return!1;if(s.parent&&a||s.route&&l||s.url&&u)return!0;for(const h of s.params)if(c[h]!==t.params[h])return!0;for(const h of s.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function ye(a,l){var u,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((u=a.uses.dependencies)!=null?u:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ue({id:a,invalidating:l,url:u,params:s,route:c}){var V;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:m,leaf:v}=c,E=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,P=E.reduce((k,I,j)=>{var ae;const $=t.branch[j],X=!!(I!=null&&I[0])&&(($==null?void 0:$.loader)!==I[1]||Ne(k.some(Boolean),R,b,(ae=$.server)==null?void 0:ae.uses,s));return k.push(X),k},[]);if(P.some(Boolean)){try{y=await Xe(u,P)}catch(k){return le({status:500,error:oe(k,{url:u,params:s,route:{id:c.id}}),url:u,route:c})}if(y.type==="redirect")return y}const S=y==null?void 0:y.nodes;let T=!1;const N=E.map(async(k,I)=>{var ae;if(!k)return;const j=t.branch[I],$=S==null?void 0:S[I];if((!$||$.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Ne(T,R,b,(ae=j.shared)==null?void 0:ae.uses,s))return j;if(T=!0,($==null?void 0:$.type)==="error")throw $;return we({loader:k[1],url:u,params:s,route:c,parent:async()=>{var Je;const Fe={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(Fe,(Je=await N[Ee])==null?void 0:Je.data);return Fe},server_data_node:ye($===void 0&&k[0]?{type:"skip"}:$!=null?$:null,j==null?void 0:j.server)})});for(const k of N)k.catch(()=>{});const O=[];for(let k=0;k<E.length;k+=1)if(E[k])try{O.push(await N[k])}catch(I){if(I instanceof Ye)return{type:"redirect",location:I.location};let j=500,$;S!=null&&S.includes(I)?(j=(V=I.status)!=null?V:j,$=I.error):I instanceof Se?(j=I.status,$=I.body):$=oe(I,{params:s,url:u,route:{id:c.id}});const X=await De(k,O,h);return X?await ne({url:u,params:s,branch:O.slice(0,X.idx).concat(X.node),status:j,error:$,route:c}):await qe(u,{id:c.id},$,j)}else O.push(void 0);return await ne({url:u,params:s,branch:O,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,u){for(;a--;)if(u[a]){let s=a;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await u[a](),loader:u[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:l,url:u,route:s}){var y;const c={},h=await Ae();let m=null;if(h.server)try{const b=await Xe(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(y=b.nodes[0])!=null?y:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await ce(u)}const v=await we({loader:Ae,url:u,params:c,route:s,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await ne({url:u,params:c,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const u=decodeURI(a.pathname.slice(e.length)||"/");for(const s of fe){const c=s.exec(u);if(c){const h=new URL(a.origin+pt(a.pathname,r)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:l,route:s,params:dt(c),url:h}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:u,delta:s}){var v,E,y,b,R;let c=!1;const h={from:ue("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:ue("to",{params:(y=u==null?void 0:u.params)!=null?y:null,route:{id:(R=(b=u==null?void 0:u.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!u,type:l};s!==void 0&&(h.delta=s);const m={...h,cancel:()=>{c=!0}};return d.before_navigate.forEach(P=>P(m)),c?null:h}async function ve({url:a,scroll:l,keepfocus:u,redirect_chain:s,details:c,type:h,delta:m,nav_token:v,accepted:E,blocked:y}){const b=be(a,!1),R=Be({url:a,type:h,delta:m,intent:b});if(!R){y();return}Re(A),E(),w=!0,_&&H.navigating.set(R),await je(b,a,s,{scroll:l,keepfocus:u,details:c},v,()=>{w=!1,d.after_navigate.forEach(P=>P(R)),H.navigating.set(null)})}async function qe(a,l,u,s){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await le({status:s,error:u,url:a,route:l}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Oe(()=>(d.after_navigate.push(a),()=>{const l=d.after_navigate.indexOf(a);d.after_navigate.splice(l,1)}))},before_navigate:a=>{Oe(()=>(d.before_navigate.push(a),()=>{const l=d.before_navigate.indexOf(a);d.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!_)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return re(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(u=>u.href===l)}return ie()},invalidateAll:()=>(z=!0,ie()),prefetch:async a=>{const l=new URL(a,Ke(document));await Pe(l)},prefetch_routes:async a=>{const u=(a?fe.filter(s=>a.some(c=>s.exec(c))):fe).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:u,route:s}=t;if(!s)return;const c=await De(t.branch.length,u,s.errors);if(c){const h=await ne({url:l,params:t.params,branch:u.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:s});t=h.state;const m=pe();M.$set(h.props),m()}}else if(a.type==="redirect")re(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...U,form:a.data,status:a.status}},u=pe();M.$set(l),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,m;let c=!1;if(!w){const v={from:ue("from",{params:t.params,route:{id:(m=(h=t.route)==null?void 0:h.id)!=null?m:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(E=>E(v))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(A);try{sessionStorage[Ze]=JSON.stringify(se)}catch{}}});const a=s=>{const{url:c,options:h}=ze(s);if(c&&h.prefetch){if(Ve(c))return;Pe(c)}};let l;const u=s=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=s.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:h,options:m}=ze(s);if(!c||!h)return;const v=c instanceof SVGAElement;if(!v&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||m.reload||(v?c.target.baseVal:c.target)){Be({url:h,type:"link"})||s.preventDefault(),w=!0;return}const[y,b]=h.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){L=!0,Re(A),t.url=h,H.page.set({...U,url:h}),H.page.notify();return}ve({url:h,scroll:m.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===A)return;const c=s.state[C]-A;ve({url:new URL(location.href),scroll:se[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{L&&(L=!1,history.replaceState({...history.state,[C]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&H.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:u,params:s,route:c,data:h,form:m})=>{var y;f=!0;const v=new URL(location.href);let E;try{const b=u.map(async(R,P)=>{const S=h[P];return we({loader:ge[R],url:v,params:s,route:c,parent:async()=>{const T={};for(let N=0;N<P;N+=1)Object.assign(T,(await b[N]).data);return T},server_data_node:ye(S)})});E=await ne({url:v,params:s,branch:await Promise.all(b),status:a,error:l,form:m,route:(y=fe.find(({id:R})=>R===c.id))!=null?y:null})}catch(b){if(b instanceof Ye){await ce(new URL(b.location,location.href));return}E=await le({status:b instanceof Se?b.status:500,error:oe(b,{url:v,params:s,route:c}),url:v,route:c})}Te(E)}}}async function Xe(n,e){var d;const r=new URL(n);r.pathname=wt(n.pathname);const i=await _e(r.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{var f,_;(t==null?void 0:t.type)==="data"&&(t.data=Ht(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((_=t.uses.params)!=null?_:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function oe(n,e){var r;return n instanceof Se?n.body:(r=qt.handleError({error:n,event:e}))!=null?r:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Yt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(n,e){for(const r of Yt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}async function Qt({env:n,hydrate:e,paths:r,target:i,trailing_slash:o}){ft(r);const d=Wt({target:i,base:r.base,trailing_slash:o});ut({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Qt as start};
