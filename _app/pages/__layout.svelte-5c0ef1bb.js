import{S as ie,i as ne,s as fe,F as de,l as _e,g as G,d,G as ve,e as v,k as R,c as p,a as g,m as J,H as Te,b as u,I as pe,J as E,f as ce,K as f,L as ae,M as me,N as ge,O as be,q as X,o as Y,P as we,Q as Ne,R as Ee,v as ke,t as K,h as Q,j as ue,T as te,U as $e,V as ye,W as Ie,w as se,x as le,y as re,B as oe,X as Pe}from"../chunks/vendor-b4a8eef2.js";import{p as Re,w as Ae,d as Je,a as Se}from"../chunks/width-47c7269d.js";function Ce(t,e,l){const s=t.slice();return s[18]=e[l],s}function Ve(t,e,l){const s=t.slice();return s[21]=e[l],s}function je(t){let e,l,s=t[18].label+"",a,n,r;return{c(){e=v("a"),l=v("b"),a=K(s),n=R(),this.h()},l(o){e=p(o,"A",{class:!0,href:!0});var c=g(e);l=p(c,"B",{});var $=g(l);a=Q($,s),$.forEach(d),n=J(c),c.forEach(d),this.h()},h(){u(e,"class","navbar-item"),u(e,"href",r=t[18].route),E(e,"is-active",t[6](t[18])),E(e,"has-text-white",!t[2])},m(o,c){G(o,e,c),f(e,l),f(l,a),f(e,n)},p(o,c){c&1&&s!==(s=o[18].label+"")&&ue(a,s),c&1&&r!==(r=o[18].route)&&u(e,"href",r),c&65&&E(e,"is-active",o[6](o[18])),c&4&&E(e,"has-text-white",!o[2])},d(o){o&&d(e)}}}function Le(t){let e,l,s,a=t[18].label+"",n,r,o,c,$,w=t[18].children,m=[];for(let i=0;i<w.length;i+=1)m[i]=De(Ve(t,w,i));return{c(){e=v("div"),l=v("a"),s=v("b"),n=K(a),o=R(),c=v("div");for(let i=0;i<m.length;i+=1)m[i].c();$=R(),this.h()},l(i){e=p(i,"DIV",{class:!0});var b=g(e);l=p(b,"A",{class:!0,href:!0});var _=g(l);s=p(_,"B",{});var D=g(s);n=Q(D,a),D.forEach(d),_.forEach(d),o=J(b),c=p(b,"DIV",{class:!0});var S=g(c);for(let A=0;A<m.length;A+=1)m[A].l(S);S.forEach(d),$=J(b),b.forEach(d),this.h()},h(){u(l,"class","navbar-link"),u(l,"href",r=t[18].route),E(l,"is-active",t[6](t[18])),E(l,"has-text-white",!t[2]),u(c,"class","navbar-dropdown svelte-i7i4z9"),E(c,"is-boxed",!t[8]),E(c,"last-dropdown",t[18]==t[0][t[0].length-1]),u(e,"class","navbar-item has-dropdown is-hoverable")},m(i,b){G(i,e,b),f(e,l),f(l,s),f(s,n),f(e,o),f(e,c);for(let _=0;_<m.length;_+=1)m[_].m(c,null);f(e,$)},p(i,b){if(b&1&&a!==(a=i[18].label+"")&&ue(n,a),b&1&&r!==(r=i[18].route)&&u(l,"href",r),b&65&&E(l,"is-active",i[6](i[18])),b&4&&E(l,"has-text-white",!i[2]),b&77){w=i[18].children;let _;for(_=0;_<w.length;_+=1){const D=Ve(i,w,_);m[_]?m[_].p(D,b):(m[_]=De(D),m[_].c(),m[_].m(c,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=w.length}b&256&&E(c,"is-boxed",!i[8]),b&1&&E(c,"last-dropdown",i[18]==i[0][i[0].length-1])},d(i){i&&d(e),we(m,i)}}}function De(t){let e,l=t[21].label+"",s,a,n;return{c(){e=v("a"),s=K(l),a=R(),this.h()},l(r){e=p(r,"A",{class:!0,href:!0});var o=g(e);s=Q(o,l),a=J(o),o.forEach(d),this.h()},h(){u(e,"class","navbar-item"),u(e,"href",n=t[21].route),E(e,"is-active",t[6](t[21])),E(e,"has-text-white",!t[2]&&!t[3])},m(r,o){G(r,e,o),f(e,s),f(e,a)},p(r,o){o&1&&l!==(l=r[21].label+"")&&ue(s,l),o&1&&n!==(n=r[21].route)&&u(e,"href",n),o&65&&E(e,"is-active",r[6](r[21])),o&12&&E(e,"has-text-white",!r[2]&&!r[3])},d(r){r&&d(e)}}}function ze(t){let e;function l(n,r){var o;return((o=n[18].children)==null?void 0:o.length)?Le:je}let s=l(t),a=s(t);return{c(){a.c(),e=_e()},l(n){a.l(n),e=_e()},m(n,r){a.m(n,r),G(n,e,r)},p(n,r){s===(s=l(n))&&a?a.p(n,r):(a.d(1),a=s(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&d(e)}}}function Oe(t){let e=!1,l=()=>{e=!1},s,a,n,r,o,c,$,w,m,i,b,_,D,S,A,P,z,N,T,j,L,q,M;de(t[15]);let O=t[0],V=[];for(let h=0;h<O.length;h+=1)V[h]=ze(Ce(t,O,h));const k=t[14].default,y=ve(k,t,t[13],null);return{c(){a=v("div"),n=v("div"),r=v("nav"),o=v("div"),c=v("a"),$=v("img"),m=R(),i=v("p"),b=v("span"),_=R(),D=v("span"),S=R(),A=v("span"),P=R(),z=v("div"),N=v("div");for(let h=0;h<V.length;h+=1)V[h].c();T=R(),j=v("div"),y&&y.c(),this.h()},l(h){a=p(h,"DIV",{class:!0});var I=g(a);n=p(I,"DIV",{});var C=g(n);r=p(C,"NAV",{class:!0});var W=g(r);o=p(W,"DIV",{class:!0});var F=g(o);c=p(F,"A",{class:!0,href:!0});var Z=g(c);$=p(Z,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Z.forEach(d),m=J(F),i=p(F,"P",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0});var H=g(i);b=p(H,"SPAN",{style:!0,"aria-hidden":!0}),g(b).forEach(d),_=J(H),D=p(H,"SPAN",{style:!0,"aria-hidden":!0}),g(D).forEach(d),S=J(H),A=p(H,"SPAN",{style:!0,"aria-hidden":!0}),g(A).forEach(d),H.forEach(d),F.forEach(d),P=J(W),z=p(W,"DIV",{class:!0});var x=g(z);N=p(x,"DIV",{class:!0});var B=g(N);for(let U=0;U<V.length;U+=1)V[U].l(B);B.forEach(d),x.forEach(d),W.forEach(d),C.forEach(d),T=J(I),j=p(I,"DIV",{});var ee=g(j);y&&y.l(ee),ee.forEach(d),I.forEach(d),this.h()},h(){Te($.src,w="/img/logo_small.webp")||u($,"src",w),u($,"width","112"),u($,"height","28"),u($,"alt","JCR Logo"),u($,"class","svelte-i7i4z9"),u(c,"class",""+(pe("navbar-item logo")+" svelte-i7i4z9")),u(c,"href","/"),E(c,"logoshow",t[4].type!="image"||t[8]),ce(b,"color","white"),u(b,"aria-hidden","true"),ce(D,"color","white"),u(D,"aria-hidden","true"),ce(A,"color","white"),u(A,"aria-hidden","true"),u(i,"role","button"),u(i,"class","navbar-burger"),u(i,"aria-label","menu"),u(i,"aria-expanded",t[2]),E(i,"is-active",t[2]),u(o,"class","navbar-brand"),u(N,"class","navbar-end"),u(z,"class","navbar-menu svelte-i7i4z9"),E(z,"is-active",t[2]),u(r,"class",""+(pe("navbar is-fixed-top is-transparent")+" svelte-i7i4z9")),E(r,"barshow",t[8]),E(r,"pr-4",t[3]),E(r,"animated",t[7]),n.hidden=t[5],u(a,"class","has-navbar-fixed-top svelte-i7i4z9")},m(h,I){G(h,a,I),f(a,n),f(n,r),f(r,o),f(o,c),f(c,$),f(o,m),f(o,i),f(i,b),f(i,_),f(i,D),f(i,S),f(i,A),f(r,P),f(r,z),f(z,N);for(let C=0;C<V.length;C+=1)V[C].m(N,null);f(a,T),f(a,j),y&&y.m(j,null),L=!0,q||(M=[ae(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(l,100),t[15]()}),ae(i,"click",t[16]),ae(z,"click",t[17])],q=!0)},p(h,[I]){if(I&2&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[1]),s=setTimeout(l,100)),I&272&&E(c,"logoshow",h[4].type!="image"||h[8]),(!L||I&4)&&u(i,"aria-expanded",h[2]),I&4&&E(i,"is-active",h[2]),I&333){O=h[0];let C;for(C=0;C<O.length;C+=1){const W=Ce(h,O,C);V[C]?V[C].p(W,I):(V[C]=ze(W),V[C].c(),V[C].m(N,null))}for(;C<V.length;C+=1)V[C].d(1);V.length=O.length}I&4&&E(z,"is-active",h[2]),I&256&&E(r,"barshow",h[8]),I&8&&E(r,"pr-4",h[3]),I&128&&E(r,"animated",h[7]),(!L||I&32)&&(n.hidden=h[5]),y&&y.p&&(!L||I&8192)&&me(y,k,h,h[13],L?be(k,h[13],I,null):ge(h[13]),null)},i(h){L||(X(y,h),L=!0)},o(h){Y(y,h),L=!1},d(h){h&&d(a),we(V,h),y&&y.d(h),q=!1,Ne(M)}}}function We(t,e,l){let s,a,n,r,o,c,$,w,m;Ee(t,Re,T=>l(4,w=T)),Ee(t,Ae,T=>l(12,m=T));let{$$slots:i={},$$scope:b}=e,{layout:_}=e,D=0,S=!0;ke(()=>{l(5,S=!1)});let A=!1;function P(){l(1,D=window.pageYOffset)}const z=()=>l(2,A=!A),N=()=>l(2,A=!1);return t.$$set=T=>{"layout"in T&&l(0,_=T.layout),"$$scope"in T&&l(13,b=T.$$scope)},t.$$.update=()=>{t.$$.dirty&4096&&l(3,s=m>=Je.min),t.$$.dirty&4096&&l(10,a=m>=Se.min),t.$$.dirty&18&&l(9,n=w.header!=null&&D>=w.header.offsetTop+w.header.offsetHeight-64),t.$$.dirty&8&&s&&l(2,A=!1),t.$$.dirty&16&&l(11,r=w.type!="primary"),t.$$.dirty&3588&&l(8,o=!r&&!a||A||n),t.$$.dirty&528&&l(7,c=w.type=="image"||!n),t.$$.dirty&16&&l(6,$=T=>T.route===w.current)},[_,D,A,s,w,S,$,c,o,n,a,r,m,b,i,P,z,N]}class Fe extends ie{constructor(e){super();ne(this,e,We,Oe,fe,{layout:0})}}function He(t){let e,l;return de(t[1]),{c:te,l:te,m(s,a){e||(l=ae(window,"resize",t[1]),e=!0)},p:te,i:te,o:te,d(s){e=!1,l()}}}function Me(t,e,l){let s;function a(){l(0,s=window.innerWidth)}return t.$$.update=()=>{t.$$.dirty&1&&Ae.set(s)},[s,a]}class qe extends ie{constructor(e){super();ne(this,e,Me,He,fe,{})}}function Be(t){let e;const l=t[1].default,s=ve(l,t,t[2],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,n){s&&s.m(a,n),e=!0},p(a,n){s&&s.p&&(!e||n&4)&&me(s,l,a,a[2],e?be(l,a[2],n,null):ge(a[2]),null)},i(a){e||(X(s,a),e=!0)},o(a){Y(s,a),e=!1},d(a){s&&s.d(a)}}}function Ge(t){let e,l,s,a,n,r,o,c,$,w,m,i,b,_,D,S,A,P,z,N,T,j,L,q,M,O,V;return e=new qe({}),a=new Fe({props:{layout:t[0],$$slots:{default:[Be]},$$scope:{ctx:t}}}),i=new $e({props:{icon:ye,size:"2x"}}),N=new $e({props:{icon:Ie,size:"2x"}}),{c(){se(e.$$.fragment),l=R(),s=v("div"),se(a.$$.fragment),n=R(),r=v("footer"),o=v("div"),c=v("div"),$=v("div"),w=v("a"),m=v("span"),se(i.$$.fragment),b=R(),_=v("p"),D=K("@christsjcr"),S=R(),A=v("div"),P=v("a"),z=v("span"),se(N.$$.fragment),T=R(),j=v("p"),L=K("@ChristsJCR"),q=R(),M=v("p"),O=K("\xA9 Christ's JCR 2021"),this.h()},l(k){le(e.$$.fragment,k),l=J(k),s=p(k,"DIV",{class:!0});var y=g(s);le(a.$$.fragment,y),n=J(y),r=p(y,"FOOTER",{class:!0});var h=g(r);o=p(h,"DIV",{class:!0});var I=g(o);c=p(I,"DIV",{class:!0});var C=g(c);$=p(C,"DIV",{class:!0});var W=g($);w=p(W,"A",{href:!0,target:!0});var F=g(w);m=p(F,"SPAN",{class:!0});var Z=g(m);le(i.$$.fragment,Z),Z.forEach(d),b=J(F),_=p(F,"P",{class:!0});var H=g(_);D=Q(H,"@christsjcr"),H.forEach(d),F.forEach(d),W.forEach(d),S=J(C),A=p(C,"DIV",{class:!0});var x=g(A);P=p(x,"A",{href:!0,target:!0});var B=g(P);z=p(B,"SPAN",{class:!0});var ee=g(z);le(N.$$.fragment,ee),ee.forEach(d),T=J(B),j=p(B,"P",{class:!0});var U=g(j);L=Q(U,"@ChristsJCR"),U.forEach(d),B.forEach(d),x.forEach(d),C.forEach(d),q=J(I),M=p(I,"P",{});var he=g(M);O=Q(he,"\xA9 Christ's JCR 2021"),he.forEach(d),I.forEach(d),h.forEach(d),y.forEach(d),this.h()},h(){u(m,"class","icon is-large"),u(_,"class","heading"),u(w,"href","https://www.instagram.com/christsjcr/"),u(w,"target","_blank"),u($,"class","level-item has-text-centered"),u(z,"class","icon is-large"),u(j,"class","heading"),u(P,"href","https://www.facebook.com/ChristsJCR"),u(P,"target","_blank"),u(A,"class","level-item has-text-centered"),u(c,"class","level is-mobile"),u(o,"class","container has-text-centered"),u(r,"class","footer svelte-2yswsl"),u(s,"class","page svelte-2yswsl")},m(k,y){re(e,k,y),G(k,l,y),G(k,s,y),re(a,s,null),f(s,n),f(s,r),f(r,o),f(o,c),f(c,$),f($,w),f(w,m),re(i,m,null),f(w,b),f(w,_),f(_,D),f(c,S),f(c,A),f(A,P),f(P,z),re(N,z,null),f(P,T),f(P,j),f(j,L),f(o,q),f(o,M),f(M,O),V=!0},p(k,[y]){const h={};y&4&&(h.$$scope={dirty:y,ctx:k}),a.$set(h)},i(k){V||(X(e.$$.fragment,k),X(a.$$.fragment,k),X(i.$$.fragment,k),X(N.$$.fragment,k),V=!0)},o(k){Y(e.$$.fragment,k),Y(a.$$.fragment,k),Y(i.$$.fragment,k),Y(N.$$.fragment,k),V=!1},d(k){oe(e,k),k&&d(l),k&&d(s),oe(a),oe(i),oe(N)}}}function Ue(t,e,l){let{$$slots:s={},$$scope:a}=e;Pe.add(ye,Ie);const n=[{route:"/",label:"Home"},{route:"/about",label:"About",children:[{route:"/about/roles",label:"Roles"},{route:"/about/constitution",label:"Constitution"},{route:"/about/meetings",label:"Meetings"}]},{route:"/resources",label:"Resources",children:[{route:"/resources/college",label:"College Life"},{route:"/resources/academicandcareers",label:"Academic & Careers"},{route:"/resources/welfare",label:"Welfare"}]}];return ke(()=>{const r=document.body.classList;let o;const c=()=>{o?(clearTimeout(o),o=null):r.add("stop-transitions"),o=setTimeout(()=>{r.remove("stop-transitions"),o=null},100)};c(),window.addEventListener("resize",c)}),t.$$set=r=>{"$$scope"in r&&l(2,a=r.$$scope)},[n,s,a]}class Ke extends ie{constructor(e){super();ne(this,e,Ue,Ge,fe,{})}}export{Ke as default};
