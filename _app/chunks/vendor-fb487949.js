function y(){}const I=t=>t;function rt(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function J(){return Object.create(null)}function x(t){t.forEach(G)}function K(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Ot(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function ct(t){return Object.keys(t).length===0}function Dt(t,e,n,r){if(t){const s=Q(t,e,n,r);return t[0](s)}}function Q(t,e,n,r){return t[1]&&r?rt(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],i=Math.max(e.dirty.length,s.length);for(let l=0;l<i;l+=1)u[l]=e.dirty[l]|s[l];return u}return e.dirty|s}return e.dirty}function Pt(t,e,n,r,s,u){if(s){const i=Q(e,n,r,u);t.p(i,s)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Bt(t){return t==null?"":t}const U=typeof window!="undefined";let lt=U?()=>window.performance.now():()=>Date.now(),D=U?t=>requestAnimationFrame(t):y;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&D(V)}function ot(t){let e;return $.size===0&&D(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let j=!1;function ut(){j=!0}function at(){j=!1}function ft(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:ft(1,s,a=>e[n[a]].claim_order,o))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const u=[],i=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(u.push(e[c-1]);l>=c;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);u.reverse(),i.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<i.length;c++){for(;o<u.length&&i[c].claim_order>=u[o].claim_order;)o++;const _=o<u.length?u[o]:null;t.insertBefore(i[c],_)}}function dt(t,e){t.appendChild(e)}function W(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=X("style");return mt(W(t),e),e}function mt(t,e){dt(t.head||t,e)}function pt(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){j&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function It(){return L(" ")}function Gt(){return L("")}function Jt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,r,s=!1){bt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function xt(t,e,n,r){return Y(t,s=>s.nodeName===e,s=>{const u=[];for(let i=0;i<s.attributes.length;i++){const l=s.attributes[i];n[l.name]||u.push(l.name)}u.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Qt(t,e,n){return xt(t,e,n,X)}function $t(t,e){return Y(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Ut(t){return $t(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const P=new Set;let A=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Z(t,e,n,r,s,u,i,l=0){const c=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=c){const b=e+(n-e)*u(p);o+=p*100+`%{${i(b,1-b)}}
`}const _=o+`100% {${i(n,1-n)}}
}`,f=`__svelte_${vt(_)}_${l}`,a=W(t);P.add(a);const d=a.__svelte_stylesheet||(a.__svelte_stylesheet=ht(t).sheet),h=a.__svelte_rules||(a.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${s}ms 1 both`,A+=1,f}function Et(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),A-=s,A||kt())}function kt(){D(()=>{A||(P.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),P.clear())})}let v;function E(t){v=t}function T(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){T().$$.on_mount.push(t)}function Zt(t){T().$$.after_update.push(t)}function te(t,e){T().$$.context.set(t,e)}const k=[],tt=[],q=[],et=[],St=Promise.resolve();let B=!1;function Ct(){B||(B=!0,St.then(nt))}function M(t){q.push(t)}const F=new Set;let R=0;function nt(){const t=v;do{for(;R<k.length;){const e=k[R];R++,E(e),Nt(e.$$)}for(E(null),k.length=0,R=0;tt.length;)tt.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(k.length);for(;et.length;)et.pop()();B=!1,F.clear(),E(t)}function Nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let S;function jt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function H(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const z=new Set;let m;function ee(){m={r:0,c:[],p:m}}function ne(){m.r||x(m.c),m=m.p}function At(t,e){t&&t.i&&(z.delete(t),t.i(e))}function ie(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),m.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const qt={duration:0};function re(t,e,n,r){let s=e(t,n),u=r?0:1,i=null,l=null,c=null;function o(){c&&Et(t,c)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:g=I,tick:p=y,css:b}=s||qt,O={start:lt()+d,b:a};a||(O.group=m,m.r+=1),i||l?l=O:(b&&(o(),c=Z(t,u,a,h,d,g,b)),a&&p(0,1),i=_(O,h),M(()=>H(t,a,"start")),ot(C=>{if(l&&C>l.start&&(i=_(l,h),l=null,H(t,i.b,"start"),b&&(o(),c=Z(t,u,i.b,i.duration,0,g,s.css))),i){if(C>=i.end)p(u=i.b,1-u),H(t,i.b,"end"),l||(i.b?o():--i.group.r||x(i.group.c)),i=null;else if(C>=i.start){const it=C-i.start;u=i.a+i.d*g(it/i.duration),p(u,1-u)}}return!!(i||l)}))}return{run(a){K(s)?jt().then(()=>{s=s(),f(a)}):f(a)},end(){o(),i=l=null}}}function se(t,e){const n={},r={},s={$$scope:1};let u=t.length;for(;u--;){const i=t[u],l=e[u];if(l){for(const c in i)c in l||(r[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[u]=l}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function le(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),r||M(()=>{const c=u.map(G).filter(K);i?i.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(M)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(k.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,s,u,i,l=[-1]){const c=v;E(t);const o=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};i&&i(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&zt(t,f)),a}):[],o.update(),_=!0,x(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){ut();const f=gt(e.target);o.fragment&&o.fragment.l(f),f.forEach(yt)}else o.fragment&&o.fragment.c();e.intro&&At(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),at(),nt()}E(c)}class ae{$destroy(){Rt(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function fe(t,e=y){let n;const r=new Set;function s(l){if(st(t,l)&&(t=l,n)){const c=!w.length;for(const o of r)o[1](),w.push(o,t);if(c){for(let o=0;o<w.length;o+=2)w[o][0](w[o+1]);w.length=0}}}function u(l){s(l(t))}function i(l,c=y){const o=[l,c];return r.add(o),r.size===1&&(n=e(s)||y),l(t),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:i}}function _e(t,{delay:e=0,duration:n=400,easing:r=I}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:u=>`opacity: ${u*s}`}}export{Yt as A,rt as B,fe as C,Dt as D,Pt as E,Tt as F,Lt as G,pt as H,y as I,Ot as J,tt as K,Xt as L,Wt as M,Jt as N,K as O,Ht as P,M as Q,re as R,ae as S,Bt as T,x as U,_e as V,gt as a,Kt as b,Qt as c,yt as d,X as e,Ft as f,$t as g,Vt as h,ue as i,le as j,It as k,Gt as l,oe as m,Ut as n,Mt as o,se as p,ce as q,ee as r,st as s,L as t,ie as u,Rt as v,ne as w,At as x,te as y,Zt as z};
