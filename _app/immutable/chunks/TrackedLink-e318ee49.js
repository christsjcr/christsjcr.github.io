import{S as h,i as k,s as g,D as p,k as b,l as w,m as E,h as u,b as S,I as m,J as T,K as A,L as C,f as c,t as _,N as L,w as N,x as q,y as v,z,n as o}from"./index-cb9296bc.js";function d(r){var e;(e=window.umami)==null||e.trackEvent(r,"click")}function D(r){let e,a,l,f;const s=r[2].default,t=p(s,r,r[1],null);return{c(){e=b("span"),t&&t.c()},l(n){e=w(n,"SPAN",{});var i=E(e);t&&t.l(i),i.forEach(u)},m(n,i){S(n,e,i),t&&t.m(e,null),a=!0,l||(f=[m(e,"click",r[3]),m(e,"keypress",r[4])],l=!0)},p(n,[i]){t&&t.p&&(!a||i&2)&&T(t,s,n,n[1],a?C(s,n[1],i,null):A(n[1]),null)},i(n){a||(c(t,n),a=!0)},o(n){_(t,n),a=!1},d(n){n&&u(e),t&&t.d(n),l=!1,L(f)}}}function I(r,e,a){let{$$slots:l={},$$scope:f}=e,{id:s}=e;const t=()=>d(s),n=()=>d(s);return r.$$set=i=>{"id"in i&&a(0,s=i.id),"$$scope"in i&&a(1,f=i.$$scope)},[s,f,l,t,n]}class J extends h{constructor(e){super(),k(this,e,I,D,g,{id:0})}}function K(r){let e,a,l;const f=r[3].default,s=p(f,r,r[4],null);return{c(){e=b("a"),s&&s.c(),this.h()},l(t){e=w(t,"A",{href:!0,target:!0});var n=E(e);s&&s.l(n),n.forEach(u),this.h()},h(){o(e,"href",r[0]),o(e,"target",a=r[2]?"_blank":"")},m(t,n){S(t,e,n),s&&s.m(e,null),l=!0},p(t,n){s&&s.p&&(!l||n&16)&&T(s,f,t,t[4],l?C(f,t[4],n,null):A(t[4]),null),(!l||n&1)&&o(e,"href",t[0]),(!l||n&4&&a!==(a=t[2]?"_blank":""))&&o(e,"target",a)},i(t){l||(c(s,t),l=!0)},o(t){_(s,t),l=!1},d(t){t&&u(e),s&&s.d(t)}}}function P(r){let e,a;return e=new J({props:{id:r[1],$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,f){v(e,l,f),a=!0},p(l,[f]){const s={};f&2&&(s.id=l[1]),f&21&&(s.$$scope={dirty:f,ctx:l}),e.$set(s)},i(l){a||(c(e.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),a=!1},d(l){z(e,l)}}}function $(r,e,a){let{$$slots:l={},$$scope:f}=e,{href:s}=e,{id:t}=e,{external:n=!1}=e;return r.$$set=i=>{"href"in i&&a(0,s=i.href),"id"in i&&a(1,t=i.id),"external"in i&&a(2,n=i.external),"$$scope"in i&&a(4,f=i.$$scope)},[s,t,n,l,f]}class y extends h{constructor(e){super(),k(this,e,$,P,g,{href:0,id:1,external:2})}}export{y as T};