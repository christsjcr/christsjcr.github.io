import{S as ne,i as fe,s as ce,F as Ee,l as de,g as G,d,G as $e,e as v,k as R,c as m,a as g,m as S,H as Pe,b as u,I as _e,J as E,f as ie,K as f,L as oe,M as ke,N as ye,O as Ie,q as Y,o as K,P as Ce,Q as Ne,R as ve,v as Ae,t as Q,h as X,j as ue,E as te,w as ae,x as se,y as le,B as re}from"../chunks/index-cfa37649.js";import{p as Te,w as De,d as Re,a as Se}from"../chunks/width-55da6166.js";import{F as me,f as Ve,a as ze,l as Je,b as Fe,c as Le,d as Me,e as Oe,g as We}from"../chunks/FontAwesomeIcon-05e672a0.js";import"../chunks/index-ad16d0c5.js";function pe(t,e,l){const s=t.slice();return s[18]=e[l],s}function ge(t,e,l){const s=t.slice();return s[21]=e[l],s}function je(t){let e,l,s=t[18].label+"",a,n,r;return{c(){e=v("a"),l=v("b"),a=Q(s),n=R(),this.h()},l(o){e=m(o,"A",{class:!0,href:!0});var c=g(e);l=m(c,"B",{});var k=g(l);a=X(k,s),k.forEach(d),n=S(c),c.forEach(d),this.h()},h(){u(e,"class","navbar-item"),u(e,"href",r=t[18].route),E(e,"is-active",t[6](t[18])),E(e,"has-text-white",!t[2])},m(o,c){G(o,e,c),f(e,l),f(l,a),f(e,n)},p(o,c){c&1&&s!==(s=o[18].label+"")&&ue(a,s),c&1&&r!==(r=o[18].route)&&u(e,"href",r),c&65&&E(e,"is-active",o[6](o[18])),c&4&&E(e,"has-text-white",!o[2])},d(o){o&&d(e)}}}function He(t){let e,l,s,a=t[18].label+"",n,r,o,c,k,w=t[18].children,p=[];for(let i=0;i<w.length;i+=1)p[i]=be(ge(t,w,i));return{c(){e=v("div"),l=v("a"),s=v("b"),n=Q(a),o=R(),c=v("div");for(let i=0;i<p.length;i+=1)p[i].c();k=R(),this.h()},l(i){e=m(i,"DIV",{class:!0});var b=g(e);l=m(b,"A",{class:!0,href:!0});var _=g(l);s=m(_,"B",{});var V=g(s);n=X(V,a),V.forEach(d),_.forEach(d),o=S(b),c=m(b,"DIV",{class:!0});var J=g(c);for(let C=0;C<p.length;C+=1)p[C].l(J);J.forEach(d),k=S(b),b.forEach(d),this.h()},h(){u(l,"class","navbar-link"),u(l,"href",r=t[18].route),E(l,"is-active",t[6](t[18])),E(l,"has-text-white",!t[2]),u(c,"class","navbar-dropdown svelte-i7i4z9"),E(c,"is-boxed",!t[8]),E(c,"last-dropdown",t[18]==t[0][t[0].length-1]),u(e,"class","navbar-item has-dropdown is-hoverable")},m(i,b){G(i,e,b),f(e,l),f(l,s),f(s,n),f(e,o),f(e,c);for(let _=0;_<p.length;_+=1)p[_].m(c,null);f(e,k)},p(i,b){if(b&1&&a!==(a=i[18].label+"")&&ue(n,a),b&1&&r!==(r=i[18].route)&&u(l,"href",r),b&65&&E(l,"is-active",i[6](i[18])),b&4&&E(l,"has-text-white",!i[2]),b&77){w=i[18].children;let _;for(_=0;_<w.length;_+=1){const V=ge(i,w,_);p[_]?p[_].p(V,b):(p[_]=be(V),p[_].c(),p[_].m(c,null))}for(;_<p.length;_+=1)p[_].d(1);p.length=w.length}b&256&&E(c,"is-boxed",!i[8]),b&1&&E(c,"last-dropdown",i[18]==i[0][i[0].length-1])},d(i){i&&d(e),Ce(p,i)}}}function be(t){let e,l=t[21].label+"",s,a,n;return{c(){e=v("a"),s=Q(l),a=R(),this.h()},l(r){e=m(r,"A",{class:!0,href:!0});var o=g(e);s=X(o,l),a=S(o),o.forEach(d),this.h()},h(){u(e,"class","navbar-item"),u(e,"href",n=t[21].route),E(e,"is-active",t[6](t[21])),E(e,"has-text-white",!t[2]&&!t[3])},m(r,o){G(r,e,o),f(e,s),f(e,a)},p(r,o){o&1&&l!==(l=r[21].label+"")&&ue(s,l),o&1&&n!==(n=r[21].route)&&u(e,"href",n),o&65&&E(e,"is-active",r[6](r[21])),o&12&&E(e,"has-text-white",!r[2]&&!r[3])},d(r){r&&d(e)}}}function we(t){let e;function l(n,r){var o;return(o=n[18].children)!=null&&o.length?He:je}let s=l(t),a=s(t);return{c(){a.c(),e=de()},l(n){a.l(n),e=de()},m(n,r){a.m(n,r),G(n,e,r)},p(n,r){s===(s=l(n))&&a?a.p(n,r):(a.d(1),a=s(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&d(e)}}}function qe(t){let e=!1,l=()=>{e=!1},s,a,n,r,o,c,k,w,p,i,b,_,V,J,C,T,z,N,P,F,L,q,H;Ee(t[15]);let M=t[0],D=[];for(let h=0;h<M.length;h+=1)D[h]=we(pe(t,M,h));const $=t[14].default,y=$e($,t,t[13],null);return{c(){a=v("div"),n=v("div"),r=v("nav"),o=v("div"),c=v("a"),k=v("img"),p=R(),i=v("p"),b=v("span"),_=R(),V=v("span"),J=R(),C=v("span"),T=R(),z=v("div"),N=v("div");for(let h=0;h<D.length;h+=1)D[h].c();P=R(),F=v("div"),y&&y.c(),this.h()},l(h){a=m(h,"DIV",{class:!0});var I=g(a);n=m(I,"DIV",{});var A=g(n);r=m(A,"NAV",{class:!0});var O=g(r);o=m(O,"DIV",{class:!0});var W=g(o);c=m(W,"A",{class:!0,href:!0});var Z=g(c);k=m(Z,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Z.forEach(d),p=S(W),i=m(W,"P",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0});var j=g(i);b=m(j,"SPAN",{style:!0,"aria-hidden":!0}),g(b).forEach(d),_=S(j),V=m(j,"SPAN",{style:!0,"aria-hidden":!0}),g(V).forEach(d),J=S(j),C=m(j,"SPAN",{style:!0,"aria-hidden":!0}),g(C).forEach(d),j.forEach(d),W.forEach(d),T=S(O),z=m(O,"DIV",{class:!0});var x=g(z);N=m(x,"DIV",{class:!0});var B=g(N);for(let U=0;U<D.length;U+=1)D[U].l(B);B.forEach(d),x.forEach(d),O.forEach(d),A.forEach(d),P=S(I),F=m(I,"DIV",{});var ee=g(F);y&&y.l(ee),ee.forEach(d),I.forEach(d),this.h()},h(){Pe(k.src,w="/img/logo_small.webp")||u(k,"src",w),u(k,"width","112"),u(k,"height","28"),u(k,"alt","JCR Logo"),u(k,"class","svelte-i7i4z9"),u(c,"class",_e("navbar-item logo")+" svelte-i7i4z9"),u(c,"href","/"),E(c,"logoshow",t[4].type!="image"||t[8]),ie(b,"color","white"),u(b,"aria-hidden","true"),ie(V,"color","white"),u(V,"aria-hidden","true"),ie(C,"color","white"),u(C,"aria-hidden","true"),u(i,"role","button"),u(i,"class","navbar-burger"),u(i,"aria-label","menu"),u(i,"aria-expanded",t[2]),E(i,"is-active",t[2]),u(o,"class","navbar-brand"),u(N,"class","navbar-end"),u(z,"class","navbar-menu svelte-i7i4z9"),E(z,"is-active",t[2]),u(r,"class",_e("navbar is-fixed-top is-transparent")+" svelte-i7i4z9"),E(r,"barshow",t[8]),E(r,"pr-4",t[3]),E(r,"animated",t[7]),n.hidden=t[5],u(a,"class","has-navbar-fixed-top svelte-i7i4z9")},m(h,I){G(h,a,I),f(a,n),f(n,r),f(r,o),f(o,c),f(c,k),f(o,p),f(o,i),f(i,b),f(i,_),f(i,V),f(i,J),f(i,C),f(r,T),f(r,z),f(z,N);for(let A=0;A<D.length;A+=1)D[A].m(N,null);f(a,P),f(a,F),y&&y.m(F,null),L=!0,q||(H=[oe(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(l,100),t[15]()}),oe(i,"click",t[16]),oe(z,"click",t[17])],q=!0)},p(h,[I]){if(I&2&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,h[1]),s=setTimeout(l,100)),I&272&&E(c,"logoshow",h[4].type!="image"||h[8]),(!L||I&4)&&u(i,"aria-expanded",h[2]),I&4&&E(i,"is-active",h[2]),I&333){M=h[0];let A;for(A=0;A<M.length;A+=1){const O=pe(h,M,A);D[A]?D[A].p(O,I):(D[A]=we(O),D[A].c(),D[A].m(N,null))}for(;A<D.length;A+=1)D[A].d(1);D.length=M.length}I&4&&E(z,"is-active",h[2]),I&256&&E(r,"barshow",h[8]),I&8&&E(r,"pr-4",h[3]),I&128&&E(r,"animated",h[7]),(!L||I&32)&&(n.hidden=h[5]),y&&y.p&&(!L||I&8192)&&ke(y,$,h,h[13],L?Ie($,h[13],I,null):ye(h[13]),null)},i(h){L||(Y(y,h),L=!0)},o(h){K(y,h),L=!1},d(h){h&&d(a),Ce(D,h),y&&y.d(h),q=!1,Ne(H)}}}function Be(t,e,l){let s,a,n,r,o,c,k,w,p;ve(t,Te,P=>l(4,w=P)),ve(t,De,P=>l(12,p=P));let{$$slots:i={},$$scope:b}=e,{layout:_}=e,V=0,J=!0;Ae(()=>{l(5,J=!1)});let C=!1;function T(){l(1,V=window.pageYOffset)}const z=()=>l(2,C=!C),N=()=>l(2,C=!1);return t.$$set=P=>{"layout"in P&&l(0,_=P.layout),"$$scope"in P&&l(13,b=P.$$scope)},t.$$.update=()=>{t.$$.dirty&4096&&l(3,s=p>=Re.min),t.$$.dirty&4096&&l(10,a=p>=Se.min),t.$$.dirty&18&&l(9,n=w.header!=null&&V>=w.header.offsetTop+w.header.offsetHeight-64),t.$$.dirty&8&&s&&l(2,C=!1),t.$$.dirty&16&&l(11,r=w.type!="primary"),t.$$.dirty&3588&&l(8,o=!r&&!a||C||n),t.$$.dirty&528&&l(7,c=w.type=="image"||!n),t.$$.dirty&16&&l(6,k=P=>P.route===w.current)},[_,V,C,s,w,J,k,c,o,n,a,r,p,b,i,T,z,N]}class Ge extends ne{constructor(e){super(),fe(this,e,Be,qe,ce,{layout:0})}}function Ue(t){let e,l;return Ee(t[1]),{c:te,l:te,m(s,a){e||(l=oe(window,"resize",t[1]),e=!0)},p:te,i:te,o:te,d(s){e=!1,l()}}}function Ye(t,e,l){let s;function a(){l(0,s=window.innerWidth)}return t.$$.update=()=>{t.$$.dirty&1&&De.set(s)},[s,a]}class Ke extends ne{constructor(e){super(),fe(this,e,Ye,Ue,ce,{})}}function Qe(t){let e;const l=t[1].default,s=$e(l,t,t[2],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,n){s&&s.m(a,n),e=!0},p(a,n){s&&s.p&&(!e||n&4)&&ke(s,l,a,a[2],e?Ie(l,a[2],n,null):ye(a[2]),null)},i(a){e||(Y(s,a),e=!0)},o(a){K(s,a),e=!1},d(a){s&&s.d(a)}}}function Xe(t){let e,l,s,a,n,r,o,c,k,w,p,i,b,_,V,J,C,T,z,N,P,F,L,q,H,M,D;return e=new Ke({}),a=new Ge({props:{layout:t[0],$$slots:{default:[Qe]},$$scope:{ctx:t}}}),i=new me({props:{icon:Ve,size:"2x"}}),N=new me({props:{icon:ze,size:"2x"}}),{c(){ae(e.$$.fragment),l=R(),s=v("div"),ae(a.$$.fragment),n=R(),r=v("footer"),o=v("div"),c=v("div"),k=v("div"),w=v("a"),p=v("span"),ae(i.$$.fragment),b=R(),_=v("p"),V=Q("@christsjcr"),J=R(),C=v("div"),T=v("a"),z=v("span"),ae(N.$$.fragment),P=R(),F=v("p"),L=Q("@ChristsJCR"),q=R(),H=v("p"),M=Q("\xA9 Christ's JCR 2021"),this.h()},l($){se(e.$$.fragment,$),l=S($),s=m($,"DIV",{class:!0});var y=g(s);se(a.$$.fragment,y),n=S(y),r=m(y,"FOOTER",{class:!0});var h=g(r);o=m(h,"DIV",{class:!0});var I=g(o);c=m(I,"DIV",{class:!0});var A=g(c);k=m(A,"DIV",{class:!0});var O=g(k);w=m(O,"A",{href:!0,target:!0});var W=g(w);p=m(W,"SPAN",{class:!0});var Z=g(p);se(i.$$.fragment,Z),Z.forEach(d),b=S(W),_=m(W,"P",{class:!0});var j=g(_);V=X(j,"@christsjcr"),j.forEach(d),W.forEach(d),O.forEach(d),J=S(A),C=m(A,"DIV",{class:!0});var x=g(C);T=m(x,"A",{href:!0,target:!0});var B=g(T);z=m(B,"SPAN",{class:!0});var ee=g(z);se(N.$$.fragment,ee),ee.forEach(d),P=S(B),F=m(B,"P",{class:!0});var U=g(F);L=X(U,"@ChristsJCR"),U.forEach(d),B.forEach(d),x.forEach(d),A.forEach(d),q=S(I),H=m(I,"P",{});var he=g(H);M=X(he,"\xA9 Christ's JCR 2021"),he.forEach(d),I.forEach(d),h.forEach(d),y.forEach(d),this.h()},h(){u(p,"class","icon is-large"),u(_,"class","heading"),u(w,"href","https://www.instagram.com/christsjcr/"),u(w,"target","_blank"),u(k,"class","level-item has-text-centered"),u(z,"class","icon is-large"),u(F,"class","heading"),u(T,"href","https://www.facebook.com/ChristsJCR"),u(T,"target","_blank"),u(C,"class","level-item has-text-centered"),u(c,"class","level is-mobile"),u(o,"class","container has-text-centered"),u(r,"class","footer svelte-2yswsl"),u(s,"class","page svelte-2yswsl")},m($,y){le(e,$,y),G($,l,y),G($,s,y),le(a,s,null),f(s,n),f(s,r),f(r,o),f(o,c),f(c,k),f(k,w),f(w,p),le(i,p,null),f(w,b),f(w,_),f(_,V),f(c,J),f(c,C),f(C,T),f(T,z),le(N,z,null),f(T,P),f(T,F),f(F,L),f(o,q),f(o,H),f(H,M),D=!0},p($,[y]){const h={};y&4&&(h.$$scope={dirty:y,ctx:$}),a.$set(h)},i($){D||(Y(e.$$.fragment,$),Y(a.$$.fragment,$),Y(i.$$.fragment,$),Y(N.$$.fragment,$),D=!0)},o($){K(e.$$.fragment,$),K(a.$$.fragment,$),K(i.$$.fragment,$),K(N.$$.fragment,$),D=!1},d($){re(e,$),$&&d(l),$&&d(s),re(a),re(i),re(N)}}}function Ze(t,e,l){let{$$slots:s={},$$scope:a}=e;Je.add(Ve,ze,Fe,Le,Me,Oe,We);const n=[{route:"/",label:"Home"},{route:"/about",label:"About",children:[{route:"/about/committee",label:"Committee"},{route:"/about/constitution",label:"Constitution"},{route:"/about/meetings",label:"Meetings"}]},{route:"/societies",label:"Societies"},{route:"/resources",label:"Resources",children:[{route:"/resources/college-life",label:"College Life"},{route:"/resources/academic-and-careers",label:"Academic & Careers"},{route:"/resources/welfare",label:"Welfare"},{route:"/resources/legacies-of-enslavement",label:"Legacies of Enslavement"}]}];return Ae(()=>{const r=document.body.classList;let o;const c=()=>{o?(clearTimeout(o),o=null):r.add("stop-transitions"),o=setTimeout(()=>{r.remove("stop-transitions"),o=null},100)};c(),window.addEventListener("resize",c)}),t.$$set=r=>{"$$scope"in r&&l(2,a=r.$$scope)},[n,s,a]}class st extends ne{constructor(e){super(),fe(this,e,Ze,Xe,ce,{})}}export{st as default};
