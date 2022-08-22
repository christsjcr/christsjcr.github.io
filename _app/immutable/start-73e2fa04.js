var qe=Object.defineProperty;var ze=(r,e,n)=>e in r?qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var le=(r,e,n)=>(ze(r,typeof e!="symbol"?e+"":e,n),n);import{S as Be,i as Ke,s as Je,a as We,e as I,c as He,b as q,g as F,t as T,d as G,f as j,h as V,j as Fe,k as Ge,o as pe,l as Ye,m as Me,n as Xe,p as fe,q as J,r as Ze,u as Qe,v as xe,w as z,x as Q,y as B,z as K,A as Se}from"./chunks/index-2eefe4c2.js";import{w as me}from"./chunks/index-2c9f01fc.js";class te{constructor(e,n){le(this,"name","HttpError");le(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ae{constructor(e,n){this.status=e,this.location=n}}function et(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function tt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class nt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Oe="",Ve="";function rt(r){Oe=r.base,Ve=r.assets||Oe}function Pe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function _e(){return{x:pageXOffset,y:pageYOffset}}function Ue(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Ie(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Te(r){const e=me(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function f(t){let i;return e.subscribe(l=>{(i===void 0||n&&l!==i)&&t(i=l)})}return{notify:s,set:a,subscribe:f}}function at(){const{set:r,subscribe:e}=me(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${Ve}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:f}=await a.json(),t=f!=="1661201425850";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function st(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const he=window.fetch;function it(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${st(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:f,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(f,t))}return he(r,e)}const ot=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ct(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,t,i)=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(l)return e.push(l[1]),n.push(l[2]),"(?:/(.*))?";const _=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((m,L)=>{if(L%2){const A=ot.exec(m);if(!A)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,W,P]=A;return e.push(W),n.push(P),$?"(.*?)":"([^/]+?)"}return _&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function lt(r,e,n,s){const a={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],l=r[f+1]||"";if(i){const _=s[i];if(!_)throw new Error(`Missing "${i}" param matcher`);if(!_(l))return}a[t]=l}return a}function ft(r,e,n){return Object.entries(e).map(([s,[a,f,t,i]])=>{const{pattern:l,names:_,types:m}=ct(s),L={id:s,exec:A=>{const $=l.exec(A);if($)return lt($,_,m,n)},errors:a.map(A=>r[A]),layouts:f.map(A=>r[A]),leaf:r[t],uses_server_data:!!i};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L})}function ut(r,e){return new te(r,e)}function dt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&16&&(l.errors=t[4]),a!==(a=t[0][0])){if(e){F();const _=e;T(_.$$.fragment,1,0,()=>{K(_,1)}),G()}a?(e=new a(f(t)),z(e.$$.fragment),j(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&V(n),e&&K(e,t)}}}function pt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],$$slots:{default:[gt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&1053&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){F();const _=e;T(_.$$.fragment,1,0,()=>{K(_,1)}),G()}a?(e=new a(f(t)),z(e.$$.fragment),j(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&V(n),e&&K(e,t)}}}function _t(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&16&&(l.errors=t[4]),a!==(a=t[0][1])){if(e){F();const _=e;T(_.$$.fragment,1,0,()=>{K(_,1)}),G()}a?(e=new a(f(t)),z(e.$$.fragment),j(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&V(n),e&&K(e,t)}}}function ht(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],$$slots:{default:[mt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&1033&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){F();const _=e;T(_.$$.fragment,1,0,()=>{K(_,1)}),G()}a?(e=new a(f(t)),z(e.$$.fragment),j(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&V(n),e&&K(e,t)}}}function mt(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[3]}}}return a&&(e=new a(f(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&Q(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),a!==(a=t[0][2])){if(e){F();const _=e;T(_.$$.fragment,1,0,()=>{K(_,1)}),G()}a?(e=new a(f(t)),z(e.$$.fragment),j(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&V(n),e&&K(e,t)}}}function gt(r){let e,n,s,a;const f=[ht,_t],t=[];function i(l,_){return l[0][2]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=I()},l(l){n.l(l),s=I()},m(l,_){t[e].m(l,_),q(l,s,_),a=!0},p(l,_){let m=e;e=i(l),e===m?t[e].p(l,_):(F(),T(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(l,_):(n=t[e]=f[e](l),n.c()),j(n,1),n.m(s.parentNode,s))},i(l){a||(j(n),a=!0)},o(l){T(n),a=!1},d(l){t[e].d(l),l&&V(s)}}}function je(r){let e,n=r[6]&&De(r);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Xe(e);n&&n.l(a),a.forEach(V),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(s,a){q(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=De(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&V(e),n&&n.d()}}}function De(r){let e;return{c(){e=Ze(r[7])},l(n){e=Qe(n,r[7])},m(n,s){q(n,e,s)},p(n,s){s&128&&xe(e,n[7])},d(n){n&&V(e)}}}function wt(r){let e,n,s,a,f;const t=[pt,dt],i=[];function l(m,L){return m[0][1]?0:1}e=l(r),n=i[e]=t[e](r);let _=r[5]&&je(r);return{c(){n.c(),s=We(),_&&_.c(),a=I()},l(m){n.l(m),s=He(m),_&&_.l(m),a=I()},m(m,L){i[e].m(m,L),q(m,s,L),_&&_.m(m,L),q(m,a,L),f=!0},p(m,[L]){let A=e;e=l(m),e===A?i[e].p(m,L):(F(),T(i[A],1,1,()=>{i[A]=null}),G(),n=i[e],n?n.p(m,L):(n=i[e]=t[e](m),n.c()),j(n,1),n.m(s.parentNode,s)),m[5]?_?_.p(m,L):(_=je(m),_.c(),_.m(a.parentNode,a)):_&&(_.d(1),_=null)},i(m){f||(j(n),f=!0)},o(m){T(n),f=!1},d(m){i[e].d(m),m&&V(s),_&&_.d(m),m&&V(a)}}}function bt(r,e,n){let{stores:s}=e,{page:a}=e,{components:f}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:l=null}=e,{errors:_}=e;Fe("__svelte__",s),Ge(s.page.notify);let m=!1,L=!1,A=null;return pe(()=>{const $=s.page.subscribe(()=>{m&&(n(6,L=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),$}),r.$$set=$=>{"stores"in $&&n(8,s=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,f=$.components),"data_0"in $&&n(1,t=$.data_0),"data_1"in $&&n(2,i=$.data_1),"data_2"in $&&n(3,l=$.data_2),"errors"in $&&n(4,_=$.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[f,t,i,l,_,m,L,A,s,a]}class vt extends Be{constructor(e){super(),Ke(this,e,bt,wt,Je,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const yt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),kt=function(r){return"/"+r},Ne={},C=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=kt(a),a in Ne)return;Ne[a]=!0;const f=a.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=f?"stylesheet":yt,f||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),f)return new Promise((l,_)=>{i.addEventListener("load",l),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Et={},ne=[()=>C(()=>import("./chunks/0-3c86da1d.js"),["_app/immutable/chunks/0-3c86da1d.js","_app/immutable/components/pages/_layout.svelte-9a66bd0e.js","_app/immutable/assets/+layout-356cced6.css","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js","_app/immutable/chunks/FontAwesomeIcon-6e2b1717.js","_app/immutable/chunks/TrackedLink-a917fa58.js"]),()=>C(()=>import("./chunks/1-600ac1aa.js"),["_app/immutable/chunks/1-600ac1aa.js","_app/immutable/components/error.svelte-35667543.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/stores-2d6e3977.js"]),()=>C(()=>import("./chunks/2-74da830d.js"),["_app/immutable/chunks/2-74da830d.js","_app/immutable/components/pages/_page.svelte-e1e51aca.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/NotificationLink-a399d41a.js","_app/immutable/assets/NotificationLink-24e04704.css","_app/immutable/chunks/stores-2d6e3977.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js","_app/immutable/chunks/TrackedLink-a917fa58.js"]),()=>C(()=>import("./chunks/3-bedc2275.js"),["_app/immutable/chunks/3-bedc2275.js","_app/immutable/components/pages/about/_page.svelte-c4f77922.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/NotificationLink-a399d41a.js","_app/immutable/assets/NotificationLink-24e04704.css","_app/immutable/chunks/stores-2d6e3977.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/4-69ff316c.js"),["_app/immutable/chunks/4-69ff316c.js","_app/immutable/components/pages/about/committee/_page.svelte-7f4e4552.js","_app/immutable/assets/+page-85d40524.css","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/5-0055ad11.js"),["_app/immutable/chunks/5-0055ad11.js","_app/immutable/components/pages/about/constitution-and-guidelines/_page.svelte-5b29a9ce.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/Content-25cbe6e8.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/6-bf91055a.js"),["_app/immutable/chunks/6-bf91055a.js","_app/immutable/components/pages/about/meetings/_page.svelte-bea098ff.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/Content-25cbe6e8.js","_app/immutable/chunks/TrackedLink-a917fa58.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/7-479d2862.js"),["_app/immutable/chunks/7-479d2862.js","_app/immutable/components/pages/resources/_page.svelte-aa6102df.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/NotificationLink-a399d41a.js","_app/immutable/assets/NotificationLink-24e04704.css","_app/immutable/chunks/stores-2d6e3977.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/8-e3ea822f.js"),["_app/immutable/chunks/8-e3ea822f.js","_app/immutable/components/pages/resources/_heading_/_page.svelte-2591348a.js","_app/immutable/assets/+page-8c93789c.css","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/stores-2d6e3977.js","_app/immutable/chunks/Markdown-0e541805.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js"]),()=>C(()=>import("./chunks/9-0ed1a1e4.js"),["_app/immutable/chunks/9-0ed1a1e4.js","_app/immutable/components/pages/societies/_page.svelte-aba895bd.js","_app/immutable/chunks/index-2eefe4c2.js","_app/immutable/chunks/PageHeader-17bea57a.js","_app/immutable/assets/PageHeader-0eb9a559.css","_app/immutable/chunks/width-2a25f2ea.js","_app/immutable/chunks/index-2c9f01fc.js","_app/immutable/chunks/FontAwesomeIcon-6e2b1717.js","_app/immutable/chunks/Markdown-0e541805.js"])],$t={"":[[1],[0],2],about:[[1],[0],3],resources:[[1],[0],7],societies:[[1],[0],9],"about/committee":[[1],[0],4],"about/constitution-and-guidelines":[[1],[0],5],"about/meetings":[[1],[0],6],"resources/[heading]":[[1],[0],8]},Ce="sveltekit:scroll",H="sveltekit:index",ue=ft(ne,$t,Et),Rt=ne[0](),Lt=ne[1]();let Z={};try{Z=JSON.parse(sessionStorage[Ce])}catch{}function de(r){Z[r]=_e()}function St({target:r,base:e,trailing_slash:n}){var $e;const s=[],a={url:Te({}),page:Te({}),navigating:me(null),updated:at()},f={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},l=!1,_=!0,m=!1,L=1,A=null,$,W=!0,P=($e=history.state)==null?void 0:$e[H];P||(P=Date.now(),history.replaceState({...history.state,[H]:P},"",location.href));const re=Z[P];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let ae=!1,se,ge;async function we(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:c=!1,state:u={}},E){if(typeof o=="string"&&(o=new URL(o,Pe(document))),W)return oe({url:o,scroll:p?_e():null,keepfocus:c,redirect_chain:E,details:{state:u,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(o)}async function be(o){const p=Ee(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return f.promise=ke(p),f.id=p.id,f.promise}async function ve(o,p,g,c){var b,O,S;const u=Ee(o),E=ge={};let h=u&&await ke(u);if(!h&&o.origin===location.origin&&o.pathname===location.pathname&&(h=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!h)return await M(o),!1;if(o=(u==null?void 0:u.url)||o,ge!==E)return!1;if(s.length=0,h.type==="redirect")if(p.length>10||p.includes(o.pathname))h=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return W?we(new URL(h.location,o).href,{},[...p,o.pathname]):await M(new URL(h.location,location.href)),!1;else((O=(b=h.props)==null?void 0:b.page)==null?void 0:O.status)>=400&&await a.updated.check()&&await M(o);if(m=!0,g&&g.details){const{details:R}=g,v=R.replaceState?0:1;R.state[H]=P+=v,history[R.replaceState?"replaceState":"pushState"](R.state,"",o)}if(l?(i=h.state,h.props.page&&(h.props.page.url=o),$.$set(h.props)):ye(h),g){const{scroll:R,keepfocus:v}=g;if(!v){const w=document.body,d=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),d!==null?w.setAttribute("tabindex",d):w.removeAttribute("tabindex")}if(await Se(),_){const w=o.hash&&document.getElementById(o.hash.slice(1));R?scrollTo(R.x,R.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Se();f.promise=null,f.id=null,_=!0,h.props.page&&(se=h.props.page);const k=h.state.branch.at(-1);W=((S=k==null?void 0:k.node.shared)==null?void 0:S.router)!==!1,c&&c(),m=!1}function ye(o){i=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),se=o.props.page,$=new vt({target:r,props:{...o.props,stores:a},hydrate:!0}),W){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(c=>c(g))}l=!0}async function x({url:o,params:p,branch:g,status:c,error:u,routeId:E,validation_errors:h}){const k=g.filter(Boolean),b={type:"loaded",state:{url:o,params:p,branch:g,error:u,session_id:L},props:{components:k.map(v=>v.node.component),errors:h}};let O={},S=!1;for(let v=0;v<k.length;v+=1)Object.assign(O,k[v].data),i.branch.some(w=>w===k[v])||(b.props[`data_${v}`]=k[v].data,S=!0);if(!i.url||o.href!==i.url.href||i.error!==u||S){b.props.page={error:u,params:p,routeId:E,status:c,url:o,data:O};const v=(w,d)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${d}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function ie({node:o,parent:p,url:g,params:c,routeId:u,server_data:E}){var R,v;const h={params:new Set,url:!1,dependencies:new Set,parent:!1};function k(...w){for(const d of w){const{href:y}=new URL(d,g);h.dependencies.add(y)}}let b=null;o.server&&(h.dependencies.add(g.href),h.url=!0);const O={};for(const w in c)Object.defineProperty(O,w,{get(){return h.params.add(w),c[w]},enumerable:!0});const S=new nt(g);if((R=o.shared)!=null&&R.load){const w={routeId:u,params:O,data:E,get url(){return h.url=!0,S},async fetch(d,y){let U;typeof d=="string"?U=d:(U=d.url,y={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...y});const D=new URL(U,g).href;return k(D),l?he(D,y):it(U,y)},setHeaders:()=>{},depends:k,get parent(){return h.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await o.shared.load.call(null,w))!=null?v:null}return{node:o,data:b||E,uses:h}}async function ke({id:o,url:p,params:g,route:c}){if(f.id===o&&f.promise)return f.promise;const{errors:u,layouts:E,leaf:h}=c,k=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(d=>i.params[d]!==g[d])};[...u,...E,h].forEach(d=>d==null?void 0:d().catch(()=>{}));const b=[...E,h],O=[];for(let d=0;d<b.length;d++)if(!b[d])O.push(!1);else{const y=i.branch[d],U=!y||k.url&&y.uses.url||k.params.some(D=>y.uses.params.has(D))||Array.from(y.uses.dependencies).some(D=>s.some(X=>X(D)))||y.uses.parent&&O.includes(!0);O.push(U)}let S=null;if(c.uses_server_data){try{const d=await he(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(S=await d.json(),!d.ok)throw S}catch{throw new Error("TODO render fallback error page")}if(S.type==="redirect")return S}const R=S==null?void 0:S.nodes,v=b.map(async(d,y)=>Promise.resolve().then(async()=>{var Y;if(!d)return;const U=await d(),D=i.branch[y];if(O[y]||!D||U!==D.node){const N=R==null?void 0:R[y];if(N!=null&&N.status)throw ut(N.status,N.message);if(N!=null&&N.error)throw N.error;return await ie({node:U,url:p,params:g,routeId:c.id,parent:async()=>{var Le;const Re={};for(let ce=0;ce<y;ce+=1)Object.assign(Re,(Le=await v[ce])==null?void 0:Le.data);return Re},server_data:(Y=N==null?void 0:N.data)!=null?Y:null})}else return D}));for(const d of v)d.catch(()=>{});const w=[];for(let d=0;d<b.length;d+=1)if(b[d])try{w.push(await v[d])}catch(y){const U=y;if(U instanceof Ae)return{type:"redirect",location:U.location};const D=y instanceof te?y.status:500;for(;d--;)if(u[d]){let X,Y=d;for(;!w[Y];)Y-=1;try{return X={node:await u[d](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:p,params:g,branch:w.slice(0,Y+1).concat(X),status:D,error:U,routeId:c.id})}catch{continue}}return await ee({status:D,error:U,url:p,routeId:c.id})}else w.push(void 0);return await x({url:p,params:g,branch:w,status:200,error:null,routeId:c.id})}async function ee({status:o,error:p,url:g,routeId:c}){const u={},E=await ie({node:await Rt,url:g,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data:null}),h={node:await Lt,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:u,branch:[E,h],status:o,error:p,routeId:c})}function Ee(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const p=decodeURI(o.pathname.slice(e.length)||"/");for(const g of ue){const c=g.exec(p);if(c){const u=new URL(o.origin+et(o.pathname,n)+o.search+o.hash);return{id:u.pathname+u.search,route:g,params:tt(c),url:u}}}}async function oe({url:o,scroll:p,keepfocus:g,redirect_chain:c,details:u,accepted:E,blocked:h}){const k=i.url;let b=!1;const O={from:k,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(S=>S(O)),b){h();return}de(P),E(),l&&a.navigating.set({from:i.url,to:o}),await ve(o,c,{scroll:p,keepfocus:g,details:u},()=>{const S={from:k,to:o};t.after_navigate.forEach(R=>R(S)),a.navigating.set(null)})}function M(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{pe(()=>(t.after_navigate.push(o),()=>{const p=t.after_navigate.indexOf(o);t.after_navigate.splice(p,1)}))},before_navigate:o=>{pe(()=>(t.before_navigate.push(o),()=>{const p=t.before_navigate.indexOf(o);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(m||!l)&&(_=!1)},goto:(o,p={})=>we(o,p,[]),invalidate:o=>{if(o===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:p}=new URL(o,location.href);s.push(g=>g===p)}return A||(A=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),A=null})),A},prefetch:async o=>{const p=new URL(o,Pe(document));await be(p)},prefetch_routes:async o=>{const g=(o?ue.filter(c=>o.some(u=>c.exec(u))):ue).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let u=!1;const E={from:i.url,to:null,cancel:()=>u=!0};t.before_navigate.forEach(h=>h(E)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(P);try{sessionStorage[Ce]=JSON.stringify(Z)}catch{}}});const o=c=>{const u=Ue(c);u&&u.href&&u.hasAttribute("sveltekit:prefetch")&&be(Ie(u))};let p;const g=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",c=>{if(!W||c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const u=Ue(c);if(!u||!u.href)return;const E=u instanceof SVGAElement,h=Ie(u);if(!E&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||u.hasAttribute("sveltekit:reload")||(E?u.target.baseVal:u.target))return;const[b,O]=h.href.split("#");if(O!==void 0&&b===location.href.split("#")[0]){ae=!0,de(P),a.page.set({...se,url:h}),a.page.notify();return}oe({url:h,scroll:u.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault()})}),addEventListener("popstate",c=>{if(c.state&&W){if(c.state[H]===P)return;oe({url:new URL(location.href),scroll:Z[c.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=c.state[H]},blocked:()=>{const u=P-c.state[H];history.go(u)}})}}),addEventListener("hashchange",()=>{ae&&(ae=!1,history.replaceState({...history.state,[H]:++P},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:p,node_ids:g,params:c,routeId:u})=>{const E=new URL(location.href);let h;try{const k=(R,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${R}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=k("server_data",[]),O=k("validation_errors",void 0),S=g.map(async(R,v)=>{var w;return ie({node:await ne[R](),url:E,params:c,routeId:u,parent:async()=>{const d={};for(let y=0;y<v;y+=1)Object.assign(d,(await S[y]).data);return d},server_data:(w=b[v])!=null?w:null})});h=await x({url:E,params:c,branch:await Promise.all(S),status:o,error:p!=null&&p.__is_http_error?new te(p.status,p.message):p,validation_errors:O,routeId:u})}catch(k){const b=k;if(b instanceof Ae){await M(new URL(k.location,location.href));return}h=await ee({status:b instanceof te?b.status:500,error:b,url:E,routeId:u})}ye(h)}}}function At(r){r.client}function It(r){}async function Tt({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:f}){const t=St({target:e,base:r.base,trailing_slash:a});At({client:t}),rt(r),f&&await t._hydrate(f),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{It as set_public_env,Tt as start};
