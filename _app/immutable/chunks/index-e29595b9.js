function _(){}const gt=t=>t;function Q(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function L(){return Object.create(null)}function b(t){t.forEach(O)}function S(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let w;function bt(t,n){return w||(w=document.createElement("a")),w.href=n,t===w.href}function X(t){return Object.keys(t).length===0}function M(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function xt(t){let n;return M(t,e=>n=e)(),n}function $t(t,n,e){t.$$.on_destroy.push(M(n,e))}function vt(t,n,e,i){if(t){const r=G(t,n,e,i);return t[0](r)}}function G(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function wt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function Et(t,n,e,i,r,l){if(r){const s=G(n,e,i,l);t.p(s,r)}}function At(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Nt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Tt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function St(t){const n={};for(const e in t)n[e]=!0;return n}function kt(t){return t==null?"":t}function Ct(t,n,e){return t.set(e),n}function jt(t){return t&&S(t.destroy)?t.destroy:_}let k=!1;function Y(){k=!0}function Z(){k=!1}function tt(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:tt(1,r,p=>n[e[p]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],s=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(s[c],a)}}function et(t,n){if(k){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){t.insertBefore(n,e||null)}function rt(t,n,e){k&&!e?et(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function T(t){t.parentNode.removeChild(t)}function Ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function R(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function Mt(){return D(" ")}function Dt(){return D("")}function Lt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function qt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ct(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){F(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Bt(t,n,e){return ot(t,n,e,R)}function ut(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>D(n),!0)}function Pt(t){return ut(t," ")}function q(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function zt(t,n){const e=q(t,"HTML_TAG_START",0),i=q(t,"HTML_TAG_END",e);if(e===i)return new B(void 0,n);F(t);const r=t.splice(e,i-e+1);T(r[0]),T(r[r.length-1]);const l=r.slice(1,r.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(l,n)}function Ot(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Gt(t,n){t.value=n==null?"":n}function Rt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ft(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function It(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function Ut(t,n,e){t.classList[e?"add":"remove"](n)}function lt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Wt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class at{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=st(e.nodeName):this.e=R(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(T)}}class B extends at{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)rt(this.t,this.n[e],n)}}function Jt(t,n){return new t(n)}let v;function $(t){v=t}function m(){if(!v)throw new Error("Function called outside component initialization");return v}function Kt(t){m().$$.before_update.push(t)}function Qt(t){m().$$.on_mount.push(t)}function Vt(t){m().$$.after_update.push(t)}function Xt(t){m().$$.on_destroy.push(t)}function Yt(){const t=m();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=lt(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Zt(t,n){return m().$$.context.set(t,n),n}function tn(t){return m().$$.context.get(t)}const x=[],P=[],A=[],z=[],U=Promise.resolve();let j=!1;function W(){j||(j=!0,U.then(J))}function nn(){return W(),U}function H(t){A.push(t)}const C=new Set;let E=0;function J(){const t=v;do{for(;E<x.length;){const n=x[E];E++,$(n),ft(n.$$)}for($(null),x.length=0,E=0;P.length;)P.pop()();for(let n=0;n<A.length;n+=1){const e=A[n];C.has(e)||(C.add(e),e())}A.length=0}while(x.length);for(;z.length;)z.pop()();j=!1,C.clear(),$(t)}function ft(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const N=new Set;let h;function en(){h={r:0,c:[],p:h}}function rn(){h.r||b(h.c),h=h.p}function _t(t,n){t&&t.i&&(N.delete(t),t.i(n))}function sn(t,n,e,i){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function cn(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],u=n[l];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function on(t){return typeof t=="object"&&t!==null?t:{}}function un(t){t&&t.c()}function ln(t,n){t&&t.l(n)}function dt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||H(()=>{const s=t.$$.on_mount.map(O).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),l.forEach(H)}function ht(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function mt(t,n){t.$$.dirty[0]===-1&&(x.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function an(t,n,e,i,r,l,s,u=[-1]){const c=v;$(t);const o=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,p,...d)=>{const y=d.length?d[0]:p;return o.ctx&&r(o.ctx[f],o.ctx[f]=y)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](y),a&&mt(t,f)),p}):[],o.update(),a=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){Y();const f=ct(n.target);o.fragment&&o.fragment.l(f),f.forEach(T)}else o.fragment&&o.fragment.c();n.intro&&_t(t.$$.fragment),dt(t,n.target,n.anchor,n.customElement),Z(),J()}$(c)}class fn{$destroy(){ht(this,1),this.$destroy=_}$on(n,e){if(!S(e))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!X(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const g=[];function pt(t,n){return{subscribe:yt(t,n).subscribe}}function yt(t,n=_){let e;const i=new Set;function r(u){if(V(t,u)&&(t=u,e)){const c=!g.length;for(const o of i)o[1](),g.push(o,t);if(c){for(let o=0;o<g.length;o+=2)g[o][0](g[o+1]);g.length=0}}}function l(u){r(u(t))}function s(u,c=_){const o=[u,c];return i.add(o),i.size===1&&(e=n(r)||_),u(t),()=>{i.delete(o),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:s}}function _n(t,n,e){const i=!Array.isArray(t),r=i?[t]:t,l=n.length<2;return pt(e,s=>{let u=!1;const c=[];let o=0,a=_;const f=()=>{if(o)return;a();const d=n(i?c[0]:c,s);l?s(d):a=S(d)?d:_},p=r.map((d,y)=>M(d,K=>{c[y]=K,o&=~(1<<y),u&&f()},()=>{o|=1<<y}));return u=!0,f(),function(){b(p),a()}})}export{S as $,nn as A,yt as B,H as C,vt as D,bt as E,kt as F,Ut as G,et as H,Lt as I,Et as J,At as K,wt as L,Ht as M,b as N,$t as O,_ as P,B as Q,zt as R,fn as S,Kt as T,Q as U,Nt as V,Wt as W,St as X,jt as Y,P as Z,Ct as _,Mt as a,_n as a0,xt as a1,gt as a2,tn as a3,Zt as a4,Xt as a5,Yt as a6,It as a7,Gt as a8,Ft as a9,Tt as aa,cn as ab,on as ac,rt as b,Pt as c,rn as d,Dt as e,_t as f,en as g,T as h,an as i,Vt as j,R as k,Bt as l,ct as m,qt as n,Qt as o,Rt as p,D as q,ut as r,V as s,sn as t,Ot as u,Jt as v,un as w,ln as x,dt as y,ht as z};
