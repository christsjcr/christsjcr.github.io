function _(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function L(){return Object.create(null)}function m(t){t.forEach(v)}function F(t){return typeof t=="function"}function H(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(G(n,e))}function ft(t,n,e,i){if(t){const c=T(t,n,e,i);return t[0](c)}}function T(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,l){if(c){const o=T(n,e,i,l);t.p(o,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){return t==null?"":t}let $=!1;function J(){$=!0}function K(){$=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:Q(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function W(t,n){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){$&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function bt(){return j("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,c=!1){Y(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,n,e,i){return z(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function $t(t,n,e){return Z(t,n,e,V)}function tt(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function wt(t){return tt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function jt(t,n,e){t.classList[e?"add":"remove"](n)}let p;function y(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Nt(t){N().$$.on_mount.push(t)}function St(t){N().$$.after_update.push(t)}function At(t,n){N().$$.context.set(t,n)}const b=[],B=[],w=[],O=[],nt=Promise.resolve();let S=!1;function et(){S||(S=!0,nt.then(P))}function A(t){w.push(t)}const C=new Set;let E=0;function P(){const t=p;do{for(;E<b.length;){const n=b[E];E++,y(n),it(n.$$)}for(y(null),b.length=0,E=0;B.length;)B.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];C.has(e)||(C.add(e),e())}w.length=0}while(b.length);for(;O.length;)O.pop()();S=!1,C.clear(),y(t)}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const k=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function qt(){d.r||m(d.c),d=d.p}function rt(t,n){t&&t.i&&(k.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function vt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||A(()=>{const r=l.map(v).filter(F);o?o.push(...r):m(r),t.$$.on_mount=[]}),u.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(b.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,c,l,o,u=[-1]){const r=p;y(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:L(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...q)=>{const M=q.length?q[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=M)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](M),a&&ut(t,f)),g}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=X(n.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),P()}y(r)}class Ot{$destroy(){ot(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Pt(t,n=_){let e;const i=new Set;function c(u){if(H(t,u)&&(t=u,e)){const r=!h.length;for(const s of i)s[1](),h.push(s,t);if(r){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(u){c(u(t))}function o(u,r=_){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||_),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{Nt as A,D as B,Pt as C,W as D,ft as E,dt as F,_t as G,at as H,A as I,st as J,ht as K,jt as L,kt as M,gt as N,pt as O,m as P,lt as Q,_ as R,Ot as S,B as T,X as a,xt as b,$t as c,U as d,V as e,mt as f,tt as g,Et as h,Bt as i,Tt as j,yt as k,bt as l,zt as m,wt as n,ct as o,vt as p,Lt as q,Ct as r,H as s,j as t,Mt as u,ot as v,qt as w,rt as x,At as y,St as z};
