import{S as m,i as d,s as h,C as k,k as g,l as b,m as p,h as u,b as C,H as A,I as S,J as T,K as w,f as c,t as _,v as E,w as q,x as v,y as H,n as o}from"./index-390bd58d.js";function I(i){let e,s,l,r;const a=i[2].default,t=k(a,i,i[1],null);return{c(){e=g("span"),t&&t.c()},l(n){e=b(n,"SPAN",{});var f=p(e);t&&t.l(f),f.forEach(u)},m(n,f){C(n,e,f),t&&t.m(e,null),s=!0,l||(r=A(e,"click",i[3]),l=!0)},p(n,[f]){t&&t.p&&(!s||f&2)&&S(t,a,n,n[1],s?w(a,n[1],f,null):T(n[1]),null)},i(n){s||(c(t,n),s=!0)},o(n){_(t,n),s=!1},d(n){n&&u(e),t&&t.d(n),l=!1,r()}}}function J(i,e,s){let{$$slots:l={},$$scope:r}=e,{id:a}=e;const t=()=>void 0;return i.$$set=n=>{"id"in n&&s(0,a=n.id),"$$scope"in n&&s(1,r=n.$$scope)},[a,r,l,t]}class K extends m{constructor(e){super(),d(this,e,J,I,h,{id:0})}}function L(i){let e,s,l;const r=i[3].default,a=k(r,i,i[4],null);return{c(){e=g("a"),a&&a.c(),this.h()},l(t){e=b(t,"A",{href:!0,target:!0});var n=p(e);a&&a.l(n),n.forEach(u),this.h()},h(){o(e,"href",i[0]),o(e,"target",s=i[2]?"_blank":"")},m(t,n){C(t,e,n),a&&a.m(e,null),l=!0},p(t,n){a&&a.p&&(!l||n&16)&&S(a,r,t,t[4],l?w(r,t[4],n,null):T(t[4]),null),(!l||n&1)&&o(e,"href",t[0]),(!l||n&4&&s!==(s=t[2]?"_blank":""))&&o(e,"target",s)},i(t){l||(c(a,t),l=!0)},o(t){_(a,t),l=!1},d(t){t&&u(e),a&&a.d(t)}}}function N(i){let e,s;return e=new K({props:{id:i[1],$$slots:{default:[L]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,r){v(e,l,r),s=!0},p(l,[r]){const a={};r&2&&(a.id=l[1]),r&21&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){H(e,l)}}}function P(i,e,s){let{$$slots:l={},$$scope:r}=e,{href:a}=e,{id:t}=e,{external:n=!1}=e;return i.$$set=f=>{"href"in f&&s(0,a=f.href),"id"in f&&s(1,t=f.id),"external"in f&&s(2,n=f.external),"$$scope"in f&&s(4,r=f.$$scope)},[a,t,n,l,r]}class j extends m{constructor(e){super(),d(this,e,P,N,h,{href:0,id:1,external:2})}}export{j as T};