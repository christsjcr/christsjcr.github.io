import{S as J,i as K,s as Q,e as m,t as N,k as M,c as d,a as E,h as P,d as v,m as j,b as g,J as C,g as V,K as o,L as H,j as q,E as I,Q as w,R as z}from"./index-cfa37649.js";import{p as F}from"./stores-acb363e7.js";function G(a){let t,e,r,u,c,f,h,p,b,l,_,k=a[0]==null?"Coming Soon":"Read More",S,R,L,y;return{c(){t=m("a"),e=m("div"),r=m("h3"),u=N(a[1]),c=M(),f=m("p"),h=N(a[2]),p=M(),b=m("br"),l=M(),_=m("p"),S=N(k),this.h()},l(s){t=d(s,"A",{href:!0});var n=E(t);e=d(n,"DIV",{class:!0});var i=E(e);r=d(i,"H3",{class:!0});var A=E(r);u=P(A,a[1]),A.forEach(v),c=j(i),f=d(i,"P",{class:!0});var B=E(f);h=P(B,a[2]),B.forEach(v),p=j(i),b=d(i,"BR",{}),l=j(i),_=d(i,"P",{class:!0});var D=E(_);S=P(D,k),D.forEach(v),i.forEach(v),n.forEach(v),this.h()},h(){var s;g(r,"class","title is-5"),g(f,"class","block"),g(_,"class","block is-underlined svelte-fhg6t"),g(e,"class","notification svelte-fhg6t"),C(e,"is-primary",!a[3]),C(e,"is-link",a[3]),g(t,"href",R=(s=a[0])!=null?s:a[4].url.toString())},m(s,n){V(s,t,n),o(t,e),o(e,r),o(r,u),o(e,c),o(e,f),o(f,h),o(e,p),o(e,b),o(e,l),o(e,_),o(_,S),L||(y=[H(t,"mouseenter",a[5]),H(t,"mouseleave",a[6])],L=!0)},p(s,[n]){var i;n&2&&q(u,s[1]),n&4&&q(h,s[2]),n&1&&k!==(k=s[0]==null?"Coming Soon":"Read More")&&q(S,k),n&8&&C(e,"is-primary",!s[3]),n&8&&C(e,"is-link",s[3]),n&17&&R!==(R=(i=s[0])!=null?i:s[4].url.toString())&&g(t,"href",R)},i:I,o:I,d(s){s&&v(t),L=!1,w(y)}}}function O(a,t,e){let r;z(a,F,l=>e(4,r=l));let{href:u=null}=t,{title:c}=t,{content:f}=t,h=!1;const p=()=>e(3,h=!0),b=()=>e(3,h=!1);return a.$$set=l=>{"href"in l&&e(0,u=l.href),"title"in l&&e(1,c=l.title),"content"in l&&e(2,f=l.content)},[u,c,f,h,r,p,b]}class W extends J{constructor(t){super(),K(this,t,O,G,Q,{href:0,title:1,content:2})}}export{W as N};
