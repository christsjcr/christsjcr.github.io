import{S as at,i as rt,s as nt,F as xt,l as ft,g as N,d as c,G as wt,e as g,k as I,c as v,a as x,m as S,H as Et,b,I as pt,J as y,f as ot,K as f,L as tt,M as yt,N as zt,O as _t,q as R,o as H,P as jt,Q as It,R as mt,v as Gt,t as Z,h as K,j as st,E as P,w as Y,x as B,y as J,B as W}from"../chunks/index-afe72f92.js";import{p as St,w as $t,d as Dt,a as Ft}from"../chunks/width-432c46c4.js";import{l as Tt,f as At,a as qt,b as Nt,c as Vt,d as Rt,e as Ht,g as Mt,F as Ct}from"../chunks/FontAwesomeIcon-1351da4e.js";import{T as ht}from"../chunks/TrackedLink-79318a3e.js";import"../chunks/index-ecb96d3f.js";function ut(o,t,a){const r=o.slice();return r[18]=t[a],r}function gt(o,t,a){const r=o.slice();return r[21]=t[a],r}function Pt(o){let t,a,r=o[18].label+"",i,l,n;return{c(){t=g("a"),a=g("b"),i=Z(r),l=I(),this.h()},l(e){t=v(e,"A",{class:!0,href:!0});var s=x(t);a=v(s,"B",{});var h=x(a);i=K(h,r),h.forEach(c),l=S(s),s.forEach(c),this.h()},h(){b(t,"class","navbar-item"),b(t,"href",n=o[18].route),y(t,"is-active",o[6](o[18])),y(t,"has-text-white",!o[2])},m(e,s){N(e,t,s),f(t,a),f(a,i),f(t,l)},p(e,s){s&1&&r!==(r=e[18].label+"")&&st(i,r),s&1&&n!==(n=e[18].route)&&b(t,"href",n),s&65&&y(t,"is-active",e[6](e[18])),s&4&&y(t,"has-text-white",!e[2])},d(e){e&&c(t)}}}function Ut(o){let t,a,r,i=o[18].label+"",l,n,e,s,h,z=o[18].children,w=[];for(let d=0;d<z.length;d+=1)w[d]=vt(gt(o,z,d));return{c(){t=g("div"),a=g("a"),r=g("b"),l=Z(i),e=I(),s=g("div");for(let d=0;d<w.length;d+=1)w[d].c();h=I(),this.h()},l(d){t=v(d,"DIV",{class:!0});var m=x(t);a=v(m,"A",{class:!0,href:!0});var k=x(a);r=v(k,"B",{});var j=x(r);l=K(j,i),j.forEach(c),k.forEach(c),e=S(m),s=v(m,"DIV",{class:!0});var D=x(s);for(let G=0;G<w.length;G+=1)w[G].l(D);D.forEach(c),h=S(m),m.forEach(c),this.h()},h(){b(a,"class","navbar-link"),b(a,"href",n=o[18].route),y(a,"is-active",o[6](o[18])),y(a,"has-text-white",!o[2]),b(s,"class","navbar-dropdown svelte-1iwrn0f"),y(s,"is-boxed",!o[8]),y(s,"last-dropdown",o[18]==o[0][o[0].length-1]),b(t,"class","navbar-item has-dropdown is-hoverable")},m(d,m){N(d,t,m),f(t,a),f(a,r),f(r,l),f(t,e),f(t,s);for(let k=0;k<w.length;k+=1)w[k].m(s,null);f(t,h)},p(d,m){if(m&1&&i!==(i=d[18].label+"")&&st(l,i),m&1&&n!==(n=d[18].route)&&b(a,"href",n),m&65&&y(a,"is-active",d[6](d[18])),m&4&&y(a,"has-text-white",!d[2]),m&77){z=d[18].children;let k;for(k=0;k<z.length;k+=1){const j=gt(d,z,k);w[k]?w[k].p(j,m):(w[k]=vt(j),w[k].c(),w[k].m(s,null))}for(;k<w.length;k+=1)w[k].d(1);w.length=z.length}m&256&&y(s,"is-boxed",!d[8]),m&1&&y(s,"last-dropdown",d[18]==d[0][d[0].length-1])},d(d){d&&c(t),jt(w,d)}}}function vt(o){let t,a=o[21].label+"",r,i,l;return{c(){t=g("a"),r=Z(a),i=I(),this.h()},l(n){t=v(n,"A",{class:!0,href:!0});var e=x(t);r=K(e,a),i=S(e),e.forEach(c),this.h()},h(){b(t,"class","navbar-item"),b(t,"href",l=o[21].route),y(t,"is-active",o[6](o[21])),y(t,"has-text-white",!o[2]&&!o[3])},m(n,e){N(n,t,e),f(t,r),f(t,i)},p(n,e){e&1&&a!==(a=n[21].label+"")&&st(r,a),e&1&&l!==(l=n[21].route)&&b(t,"href",l),e&65&&y(t,"is-active",n[6](n[21])),e&12&&y(t,"has-text-white",!n[2]&&!n[3])},d(n){n&&c(t)}}}function kt(o){let t;function a(l,n){var e;return(e=l[18].children)!=null&&e.length?Ut:Pt}let r=a(o),i=r(o);return{c(){i.c(),t=ft()},l(l){i.l(l),t=ft()},m(l,n){i.m(l,n),N(l,t,n)},p(l,n){r===(r=a(l))&&i?i.p(l,n):(i.d(1),i=r(l),i&&(i.c(),i.m(t.parentNode,t)))},d(l){i.d(l),l&&c(t)}}}function Lt(o){let t=!1,a=()=>{t=!1},r,i,l,n,e,s,h,z,w,d,m,k,j,D,G,u,_,E,$,F,V,U,Q;xt(o[15]);let L=o[0],C=[];for(let p=0;p<L.length;p+=1)C[p]=kt(ut(o,L,p));const et=o[14].default,T=wt(et,o,o[13],null);return{c(){i=g("div"),l=g("div"),n=g("nav"),e=g("div"),s=g("a"),h=g("img"),w=I(),d=g("p"),m=g("span"),k=I(),j=g("span"),D=I(),G=g("span"),u=I(),_=g("div"),E=g("div");for(let p=0;p<C.length;p+=1)C[p].c();$=I(),F=g("div"),T&&T.c(),this.h()},l(p){i=v(p,"DIV",{class:!0});var A=x(i);l=v(A,"DIV",{});var q=x(l);n=v(q,"NAV",{class:!0});var M=x(n);e=v(M,"DIV",{class:!0});var X=x(e);s=v(X,"A",{class:!0,href:!0});var lt=x(s);h=v(lt,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),lt.forEach(c),w=S(X),d=v(X,"P",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0});var O=x(d);m=v(O,"SPAN",{style:!0,"aria-hidden":!0}),x(m).forEach(c),k=S(O),j=v(O,"SPAN",{style:!0,"aria-hidden":!0}),x(j).forEach(c),D=S(O),G=v(O,"SPAN",{style:!0,"aria-hidden":!0}),x(G).forEach(c),O.forEach(c),X.forEach(c),u=S(M),_=v(M,"DIV",{class:!0});var dt=x(_);E=v(dt,"DIV",{class:!0});var ct=x(E);for(let it=0;it<C.length;it+=1)C[it].l(ct);ct.forEach(c),dt.forEach(c),M.forEach(c),q.forEach(c),$=S(A),F=v(A,"DIV",{});var bt=x(F);T&&T.l(bt),bt.forEach(c),A.forEach(c),this.h()},h(){Et(h.src,z="/img/logo_small.webp")||b(h,"src",z),b(h,"width","112"),b(h,"height","28"),b(h,"alt","JCR Logo"),b(h,"class","svelte-1iwrn0f"),b(s,"class",pt("navbar-item logo")+" svelte-1iwrn0f"),b(s,"href","/"),y(s,"logoshow",o[4].type!="image"||o[8]),ot(m,"color","white"),b(m,"aria-hidden","true"),ot(j,"color","white"),b(j,"aria-hidden","true"),ot(G,"color","white"),b(G,"aria-hidden","true"),b(d,"role","button"),b(d,"class","navbar-burger"),b(d,"aria-label","menu"),b(d,"aria-expanded",o[2]),y(d,"is-active",o[2]),b(e,"class","navbar-brand"),b(E,"class","navbar-end"),b(_,"class","navbar-menu svelte-1iwrn0f"),y(_,"is-active",o[2]),b(n,"class",pt("navbar is-fixed-top is-transparent")+" svelte-1iwrn0f"),y(n,"barshow",o[8]),y(n,"pr-4",o[3]),y(n,"animated",o[7]),l.hidden=o[5],b(i,"class","has-navbar-fixed-top svelte-1iwrn0f")},m(p,A){N(p,i,A),f(i,l),f(l,n),f(n,e),f(e,s),f(s,h),f(e,w),f(e,d),f(d,m),f(d,k),f(d,j),f(d,D),f(d,G),f(n,u),f(n,_),f(_,E);for(let q=0;q<C.length;q+=1)C[q].m(E,null);f(i,$),f(i,F),T&&T.m(F,null),V=!0,U||(Q=[tt(window,"scroll",()=>{t=!0,clearTimeout(r),r=setTimeout(a,100),o[15]()}),tt(d,"click",o[16]),tt(_,"click",o[17])],U=!0)},p(p,[A]){if(A&2&&!t&&(t=!0,clearTimeout(r),scrollTo(window.pageXOffset,p[1]),r=setTimeout(a,100)),A&272&&y(s,"logoshow",p[4].type!="image"||p[8]),(!V||A&4)&&b(d,"aria-expanded",p[2]),A&4&&y(d,"is-active",p[2]),A&333){L=p[0];let q;for(q=0;q<L.length;q+=1){const M=ut(p,L,q);C[q]?C[q].p(M,A):(C[q]=kt(M),C[q].c(),C[q].m(E,null))}for(;q<C.length;q+=1)C[q].d(1);C.length=L.length}A&4&&y(_,"is-active",p[2]),A&256&&y(n,"barshow",p[8]),A&8&&y(n,"pr-4",p[3]),A&128&&y(n,"animated",p[7]),(!V||A&32)&&(l.hidden=p[5]),T&&T.p&&(!V||A&8192)&&yt(T,et,p,p[13],V?_t(et,p[13],A,null):zt(p[13]),null)},i(p){V||(R(T,p),V=!0)},o(p){H(T,p),V=!1},d(p){p&&c(i),jt(C,p),T&&T.d(p),U=!1,It(Q)}}}function Ot(o,t,a){let r,i,l,n,e,s,h,z,w;mt(o,St,$=>a(4,z=$)),mt(o,$t,$=>a(12,w=$));let{$$slots:d={},$$scope:m}=t,{layout:k}=t,j=0,D=!0;Gt(()=>{a(5,D=!1)});let G=!1;function u(){a(1,j=window.pageYOffset)}const _=()=>a(2,G=!G),E=()=>a(2,G=!1);return o.$$set=$=>{"layout"in $&&a(0,k=$.layout),"$$scope"in $&&a(13,m=$.$$scope)},o.$$.update=()=>{o.$$.dirty&4096&&a(3,r=w>=Dt.min),o.$$.dirty&4096&&a(10,i=w>=Ft.min),o.$$.dirty&18&&a(9,l=z.header!=null&&j>=z.header.offsetTop+z.header.offsetHeight-64),o.$$.dirty&8&&r&&a(2,G=!1),o.$$.dirty&16&&a(11,n=z.type!="primary"),o.$$.dirty&3588&&a(8,e=!n&&!i||G||l),o.$$.dirty&528&&a(7,s=z.type=="image"||!l),o.$$.dirty&16&&a(6,h=$=>$.route===z.current)},[k,j,G,r,z,D,h,s,e,l,i,n,w,m,d,u,_,E]}class Yt extends at{constructor(t){super(),rt(this,t,Ot,Lt,nt,{layout:0})}}function Bt(o){let t,a;return xt(o[1]),{c:P,l:P,m(r,i){t||(a=tt(window,"resize",o[1]),t=!0)},p:P,i:P,o:P,d(r){t=!1,a()}}}function Jt(o,t,a){let r;function i(){a(0,r=window.innerWidth)}return o.$$.update=()=>{o.$$.dirty&1&&$t.set(r)},[r,i]}class Wt extends at{constructor(t){super(),rt(this,t,Jt,Bt,nt,{})}}function Zt(o){let t;const a=o[1].default,r=wt(a,o,o[2],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,l){r&&r.m(i,l),t=!0},p(i,l){r&&r.p&&(!t||l&4)&&yt(r,a,i,i[2],t?_t(a,i[2],l,null):zt(i[2]),null)},i(i){t||(R(r,i),t=!0)},o(i){H(r,i),t=!1},d(i){r&&r.d(i)}}}function Kt(o){let t,a,r,i,l,n;return a=new Ct({props:{icon:At,size:"2x"}}),{c(){t=g("span"),Y(a.$$.fragment),r=I(),i=g("p"),l=Z("@christsjcr"),this.h()},l(e){t=v(e,"SPAN",{class:!0});var s=x(t);B(a.$$.fragment,s),s.forEach(c),r=S(e),i=v(e,"P",{class:!0});var h=x(i);l=K(h,"@christsjcr"),h.forEach(c),this.h()},h(){b(t,"class","icon is-large"),b(i,"class","heading")},m(e,s){N(e,t,s),J(a,t,null),N(e,r,s),N(e,i,s),f(i,l),n=!0},p:P,i(e){n||(R(a.$$.fragment,e),n=!0)},o(e){H(a.$$.fragment,e),n=!1},d(e){e&&c(t),W(a),e&&c(r),e&&c(i)}}}function Qt(o){let t,a,r,i,l,n;return a=new Ct({props:{icon:qt,size:"2x"}}),{c(){t=g("span"),Y(a.$$.fragment),r=I(),i=g("p"),l=Z("@ChristsJCR"),this.h()},l(e){t=v(e,"SPAN",{class:!0});var s=x(t);B(a.$$.fragment,s),s.forEach(c),r=S(e),i=v(e,"P",{class:!0});var h=x(i);l=K(h,"@ChristsJCR"),h.forEach(c),this.h()},h(){b(t,"class","icon is-large"),b(i,"class","heading")},m(e,s){N(e,t,s),J(a,t,null),N(e,r,s),N(e,i,s),f(i,l),n=!0},p:P,i(e){n||(R(a.$$.fragment,e),n=!0)},o(e){H(a.$$.fragment,e),n=!1},d(e){e&&c(t),W(a),e&&c(r),e&&c(i)}}}function Xt(o){let t,a,r,i,l,n,e,s,h,z,w,d,m,k,j,D,G;return t=new Wt({}),i=new Yt({props:{layout:o[0],$$slots:{default:[Zt]},$$scope:{ctx:o}}}),z=new ht({props:{href:"https://www.instagram.com/christsjcr/",id:"instagram",external:!0,$$slots:{default:[Kt]},$$scope:{ctx:o}}}),m=new ht({props:{href:"https://www.facebook.com/ChristsJCR",id:"facebook",external:!0,$$slots:{default:[Qt]},$$scope:{ctx:o}}}),{c(){Y(t.$$.fragment),a=I(),r=g("div"),Y(i.$$.fragment),l=I(),n=g("footer"),e=g("div"),s=g("div"),h=g("div"),Y(z.$$.fragment),w=I(),d=g("div"),Y(m.$$.fragment),k=I(),j=g("p"),D=Z("\xA9 Christ's JCR 2021"),this.h()},l(u){B(t.$$.fragment,u),a=S(u),r=v(u,"DIV",{class:!0});var _=x(r);B(i.$$.fragment,_),l=S(_),n=v(_,"FOOTER",{class:!0});var E=x(n);e=v(E,"DIV",{class:!0});var $=x(e);s=v($,"DIV",{class:!0});var F=x(s);h=v(F,"DIV",{class:!0});var V=x(h);B(z.$$.fragment,V),V.forEach(c),w=S(F),d=v(F,"DIV",{class:!0});var U=x(d);B(m.$$.fragment,U),U.forEach(c),F.forEach(c),k=S($),j=v($,"P",{});var Q=x(j);D=K(Q,"\xA9 Christ's JCR 2021"),Q.forEach(c),$.forEach(c),E.forEach(c),_.forEach(c),this.h()},h(){b(h,"class","level-item has-text-centered"),b(d,"class","level-item has-text-centered"),b(s,"class","level is-mobile"),b(e,"class","container has-text-centered"),b(n,"class","footer svelte-1dbq8jv"),b(r,"class","page svelte-1dbq8jv")},m(u,_){J(t,u,_),N(u,a,_),N(u,r,_),J(i,r,null),f(r,l),f(r,n),f(n,e),f(e,s),f(s,h),J(z,h,null),f(s,w),f(s,d),J(m,d,null),f(e,k),f(e,j),f(j,D),G=!0},p(u,[_]){const E={};_&4&&(E.$$scope={dirty:_,ctx:u}),i.$set(E);const $={};_&4&&($.$$scope={dirty:_,ctx:u}),z.$set($);const F={};_&4&&(F.$$scope={dirty:_,ctx:u}),m.$set(F)},i(u){G||(R(t.$$.fragment,u),R(i.$$.fragment,u),R(z.$$.fragment,u),R(m.$$.fragment,u),G=!0)},o(u){H(t.$$.fragment,u),H(i.$$.fragment,u),H(z.$$.fragment,u),H(m.$$.fragment,u),G=!1},d(u){W(t,u),u&&c(a),u&&c(r),W(i),W(z),W(m)}}}function te(o,t,a){let{$$slots:r={},$$scope:i}=t;Tt.add(At,qt,Nt,Vt,Rt,Ht,Mt);const l=[{route:"/",label:"Home"},{route:"/about",label:"About",children:[{route:"/about/committee",label:"Committee"},{route:"/about/constitution",label:"Constitution"},{route:"/about/meetings",label:"Meetings"}]},{route:"/societies",label:"Societies"},{route:"/resources",label:"Resources",children:[{route:"/resources/college-life",label:"College Life"},{route:"/resources/academic-and-careers",label:"Academic & Careers"},{route:"/resources/welfare",label:"Welfare"},{route:"/resources/legacies-of-enslavement",label:"Legacies of Enslavement"}]}];return Gt(()=>{const n=document.body.classList;let e;const s=()=>{e?(clearTimeout(e),e=null):n.add("stop-transitions"),e=setTimeout(()=>{n.remove("stop-transitions"),e=null},100)};s(),window.addEventListener("resize",s)}),o.$$set=n=>{"$$scope"in n&&a(2,i=n.$$scope)},[l,r,i]}class ne extends at{constructor(t){super(),rt(this,t,te,Xt,nt,{})}}export{ne as default};
