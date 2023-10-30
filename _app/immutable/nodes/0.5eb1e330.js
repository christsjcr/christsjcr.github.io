import{s as yt,r as wn,u as _n,f as P,a as H,g as O,h as T,v as Ce,c as W,d as A,j as _,w as Yt,x as I,k as at,i as G,y as E,z as ce,A as xn,B as An,C as En,D as Sn,E as ia,F as Ut,o as Cn,e as Ht,l as kt,m as wt,n as _t,G as se}from"../chunks/scheduler.380c08c3.js";import{S as xt,i as At,a as te,t as ne,b as pe,d as ge,m as be,e as he}from"../chunks/index.baeac5c0.js";import{e as Be,p as oa,w as Pn,d as sa}from"../chunks/width.6ae85fba.js";import{f as On,a as In,b as la,c as fa}from"../chunks/index.d4df1357.js";import{f as ca,a as ua,b as ma,c as da,F as Nn}from"../chunks/fa.f9ee3721.js";import{T as Wt}from"../chunks/TrackedLink.75803a4f.js";const va=!0,di=Object.freeze(Object.defineProperty({__proto__:null,prerender:va},Symbol.toStringTag,{value:"Module"}));function Vt(e,t,n){const a=e.slice();return a[21]=t[n],a}function Gt(e,t,n){const a=e.slice();return a[24]=t[n],a}function pa(e){let t,n,a=e[21].label+"",r,o,i,s,l;return{c(){t=P("a"),n=P("b"),r=kt(a),o=H(),this.h()},l(c){t=O(c,"A",{class:!0,href:!0});var f=T(t);n=O(f,"B",{});var u=T(n);r=wt(u,a),u.forEach(A),o=W(f),f.forEach(A),this.h()},h(){_(t,"class","navbar-item"),_(t,"href",i=e[21].route),I(t,"is-active",e[7](e[21])),I(t,"has-text-white",!e[2])},m(c,f){G(c,t,f),E(t,n),E(n,r),E(t,o),s||(l=ce(t,"click",e[20]),s=!0)},p(c,f){f&1&&a!==(a=c[21].label+"")&&_t(r,a),f&1&&i!==(i=c[21].route)&&_(t,"href",i),f&129&&I(t,"is-active",c[7](c[21])),f&4&&I(t,"has-text-white",!c[2])},d(c){c&&A(t),s=!1,l()}}}function ga(e){let t,n,a,r=e[21].label+"",o,i,s,l,c,f,u,p,g=Be(e[21].children),h=[];for(let v=0;v<g.length;v+=1)h[v]=Xt(Gt(e,g,v));return{c(){t=P("div"),n=P("a"),a=P("b"),o=kt(r),l=H(),c=P("div");for(let v=0;v<h.length;v+=1)h[v].c();f=H(),this.h()},l(v){t=O(v,"DIV",{class:!0});var k=T(t);n=O(k,"A",{class:!0,href:!0,target:!0});var b=T(n);a=O(b,"B",{});var w=T(a);o=wt(w,r),w.forEach(A),b.forEach(A),l=W(k),c=O(k,"DIV",{class:!0});var C=T(c);for(let M=0;M<h.length;M+=1)h[M].l(C);C.forEach(A),f=W(k),k.forEach(A),this.h()},h(){_(n,"class","navbar-link"),_(n,"href",i=e[21].route),_(n,"target",s=e[21].external?"_blank":""),I(n,"is-active",e[7](e[21])),I(n,"has-text-white",!e[2]),_(c,"class","navbar-dropdown svelte-15vf8p3"),I(c,"is-boxed",!e[3]),I(c,"last-dropdown",e[21]==e[0][e[0].length-1]),_(t,"class","navbar-item has-dropdown is-hoverable")},m(v,k){G(v,t,k),E(t,n),E(n,a),E(a,o),E(t,l),E(t,c);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(c,null);E(t,f),u||(p=ce(n,"click",e[18]),u=!0)},p(v,k){if(k&1&&r!==(r=v[21].label+"")&&_t(o,r),k&1&&i!==(i=v[21].route)&&_(n,"href",i),k&1&&s!==(s=v[21].external?"_blank":"")&&_(n,"target",s),k&129&&I(n,"is-active",v[7](v[21])),k&4&&I(n,"has-text-white",!v[2]),k&149){g=Be(v[21].children);let b;for(b=0;b<g.length;b+=1){const w=Gt(v,g,b);h[b]?h[b].p(w,k):(h[b]=Xt(w),h[b].c(),h[b].m(c,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=g.length}k&8&&I(c,"is-boxed",!v[3]),k&1&&I(c,"last-dropdown",v[21]==v[0][v[0].length-1])},d(v){v&&A(t),Sn(h,v),u=!1,p()}}}function Xt(e){let t,n=e[24].label+"",a,r,o,i,s,l;return{c(){t=P("a"),a=kt(n),r=H(),this.h()},l(c){t=O(c,"A",{class:!0,href:!0,target:!0});var f=T(t);a=wt(f,n),r=W(f),f.forEach(A),this.h()},h(){_(t,"class","navbar-item"),_(t,"href",o=e[24].route),_(t,"target",i=e[24].external?"_blank":""),I(t,"is-active",e[7](e[24])),I(t,"has-text-white",!e[2]&&!e[4])},m(c,f){G(c,t,f),E(t,a),E(t,r),s||(l=ce(t,"click",e[19]),s=!0)},p(c,f){f&1&&n!==(n=c[24].label+"")&&_t(a,n),f&1&&o!==(o=c[24].route)&&_(t,"href",o),f&1&&i!==(i=c[24].external?"_blank":"")&&_(t,"target",i),f&129&&I(t,"is-active",c[7](c[24])),f&20&&I(t,"has-text-white",!c[2]&&!c[4])},d(c){c&&A(t),s=!1,l()}}}function Bt(e){let t;function n(o,i){var s;return(s=o[21].children)!=null&&s.length?ga:pa}let a=n(e),r=a(e);return{c(){r.c(),t=Ht()},l(o){r.l(o),t=Ht()},m(o,i){r.m(o,i),G(o,t,i)},p(o,i){a===(a=n(o))&&r?r.p(o,i):(r.d(1),r=a(o),r&&(r.c(),r.m(t.parentNode,t)))},d(o){o&&A(t),r.d(o)}}}function ba(e){let t=!1,n=()=>{t=!1},a,r,o,i,s,l,c='<img src="/img/logo_small.webp" width="112" height="28" alt="JCR Logo" class="svelte-15vf8p3"/>',f,u,p,g,h,v,k,b,w,C,M,y,x,Y,N;wn(e[15]);let R=Be(e[0]),F=[];for(let S=0;S<R.length;S+=1)F[S]=Bt(Vt(e,R,S));const de=e[14].default,V=_n(de,e,e[13],null);return{c(){r=P("div"),o=P("div"),i=P("nav"),s=P("div"),l=P("a"),l.innerHTML=c,f=H(),u=P("button"),p=P("span"),g=H(),h=P("span"),v=H(),k=P("span"),b=H(),w=P("div"),C=P("div");for(let S=0;S<F.length;S+=1)F[S].c();M=H(),y=P("div"),V&&V.c(),this.h()},l(S){r=O(S,"DIV",{class:!0});var z=T(r);o=O(z,"DIV",{});var j=T(o);i=O(j,"NAV",{class:!0});var oe=T(i);s=O(oe,"DIV",{class:!0});var Re=T(s);l=O(Re,"A",{class:!0,href:!0,"data-svelte-h":!0}),Ce(l)!=="svelte-1an28uj"&&(l.innerHTML=c),f=W(Re),u=O(Re,"BUTTON",{class:!0,"aria-label":!0,"aria-expanded":!0});var ve=T(u);p=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),T(p).forEach(A),g=W(ve),h=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),T(h).forEach(A),v=W(ve),k=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),T(k).forEach(A),ve.forEach(A),Re.forEach(A),b=W(oe),w=O(oe,"DIV",{class:!0});var Dt=T(w);C=O(Dt,"DIV",{class:!0});var zt=T(C);for(let nt=0;nt<F.length;nt+=1)F[nt].l(zt);zt.forEach(A),Dt.forEach(A),oe.forEach(A),j.forEach(A),M=W(z),y=O(z,"DIV",{});var jt=T(y);V&&V.l(jt),jt.forEach(A),z.forEach(A),this.h()},h(){_(l,"class",Yt("navbar-item logo")+" svelte-15vf8p3"),_(l,"href","/"),I(l,"logoshow",e[5].type!="image"||e[9]),at(p,"color","white"),_(p,"aria-hidden","true"),at(h,"color","white"),_(h,"aria-hidden","true"),at(k,"color","white"),_(k,"aria-hidden","true"),_(u,"class","navbar-burger"),_(u,"aria-label","menu"),_(u,"aria-expanded",e[2]),I(u,"is-active",e[2]),_(s,"class","navbar-brand"),_(C,"class","navbar-end"),_(w,"class","navbar-menu svelte-15vf8p3"),I(w,"is-active",e[2]),_(i,"class",Yt("navbar is-fixed-top is-transparent")+" svelte-15vf8p3"),I(i,"barshow",e[9]),I(i,"pr-4",e[4]),I(i,"animated",e[8]),o.hidden=e[6],_(r,"class","has-navbar-fixed-top svelte-15vf8p3")},m(S,z){G(S,r,z),E(r,o),E(o,i),E(i,s),E(s,l),E(s,f),E(s,u),E(u,p),E(u,g),E(u,h),E(u,v),E(u,k),E(i,b),E(i,w),E(w,C);for(let j=0;j<F.length;j+=1)F[j]&&F[j].m(C,null);E(r,M),E(r,y),V&&V.m(y,null),x=!0,Y||(N=[ce(window,"scroll",()=>{t=!0,clearTimeout(a),a=setTimeout(n,100),e[15]()}),ce(u,"click",e[16]),ce(u,"keypress",e[17])],Y=!0)},p(S,[z]){if(z&2&&!t&&(t=!0,clearTimeout(a),scrollTo(window.pageXOffset,S[1]),a=setTimeout(n,100)),(!x||z&544)&&I(l,"logoshow",S[5].type!="image"||S[9]),(!x||z&4)&&_(u,"aria-expanded",S[2]),(!x||z&4)&&I(u,"is-active",S[2]),z&157){R=Be(S[0]);let j;for(j=0;j<R.length;j+=1){const oe=Vt(S,R,j);F[j]?F[j].p(oe,z):(F[j]=Bt(oe),F[j].c(),F[j].m(C,null))}for(;j<F.length;j+=1)F[j].d(1);F.length=R.length}(!x||z&4)&&I(w,"is-active",S[2]),(!x||z&512)&&I(i,"barshow",S[9]),(!x||z&16)&&I(i,"pr-4",S[4]),(!x||z&256)&&I(i,"animated",S[8]),(!x||z&64)&&(o.hidden=S[6]),V&&V.p&&(!x||z&8192)&&xn(V,de,S,S[13],x?En(de,S[13],z,null):An(S[13]),null)},i(S){x||(te(V,S),x=!0)},o(S){ne(V,S),x=!1},d(S){S&&A(r),Sn(F,S),V&&V.d(S),Y=!1,ia(N)}}}function ha(e,t,n){let a,r,o,i,s,l,c,f,u;Ut(e,oa,N=>n(5,f=N)),Ut(e,Pn,N=>n(12,u=N));let{$$slots:p={},$$scope:g}=t,{layout:h}=t,v=0,k=!0;Cn(()=>{n(6,k=!1)});let b=!1;function w(){n(1,v=window.pageYOffset)}const C=()=>n(2,b=!b),M=()=>n(2,b=!b),y=()=>n(2,b=!1),x=()=>n(2,b=!1),Y=()=>n(2,b=!1);return e.$$set=N=>{"layout"in N&&n(0,h=N.layout),"$$scope"in N&&n(13,g=N.$$scope)},e.$$.update=()=>{e.$$.dirty&4096&&n(4,a=u>=sa.min),e.$$.dirty&34&&n(10,r=f.header!=null&&v>=f.header.offsetTop+f.header.offsetHeight-64),e.$$.dirty&16&&a&&n(2,b=!1),e.$$.dirty&32&&n(11,o=f.type!="primary"),e.$$.dirty&1028&&n(3,i=b||r),e.$$.dirty&2056&&n(9,s=!o||i),e.$$.dirty&1056&&n(8,l=f.type=="image"||!r),e.$$.dirty&32&&n(7,c=N=>N.route===f.current)},[h,v,b,i,a,f,k,c,l,s,r,o,u,g,p,w,C,M,y,x,Y]}class ya extends xt{constructor(t){super(),At(this,t,ha,ba,yt,{layout:0})}}function qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qt(Object(n),!0).forEach(function(a){U(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function ka(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function wa(e,t,n){return t&&Kt(e.prototype,t),n&&Kt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e,t){return xa(e)||Ea(e,t)||Tn(e,t)||Ca()}function Me(e){return _a(e)||Aa(e)||Tn(e)||Sa()}function _a(e){if(Array.isArray(e))return lt(e)}function xa(e){if(Array.isArray(e))return e}function Aa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ea(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Tn(e,t){if(e){if(typeof e=="string")return lt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lt(e,t)}}function lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Sa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ca(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jt=function(){},St={},Mn={},Ln=null,$n={mark:Jt,measure:Jt};try{typeof window<"u"&&(St=window),typeof document<"u"&&(Mn=document),typeof MutationObserver<"u"&&(Ln=MutationObserver),typeof performance<"u"&&($n=performance)}catch{}var Pa=St.navigator||{},Qt=Pa.userAgent,Zt=Qt===void 0?"":Qt,ae=St,$=Mn,en=Ln,Fe=$n;ae.document;var Z=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",Rn=~Zt.indexOf("MSIE")||~Zt.indexOf("Trident/"),De,ze,je,Ye,Ue,K="___FONT_AWESOME___",ft=16,Fn="fa",Dn="svg-inline--fa",ue="data-fa-i2svg",ct="data-fa-pseudo-element",Oa="data-fa-pseudo-element-pending",Ct="data-prefix",Pt="data-icon",tn="fontawesome-i2svg",Ia="async",Na=["HTML","HEAD","STYLE","SCRIPT"],zn=function(){try{return!0}catch{return!1}}(),L="classic",D="sharp",Ot=[L,D];function Le(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[L]}})}var Pe=Le((De={},U(De,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),U(De,D,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),De)),Oe=Le((ze={},U(ze,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U(ze,D,{solid:"fass",regular:"fasr",light:"fasl"}),ze)),Ie=Le((je={},U(je,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U(je,D,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),je)),Ta=Le((Ye={},U(Ye,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U(Ye,D,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ye)),Ma=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,jn="fa-layers-text",La=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$a=Le((Ue={},U(Ue,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U(Ue,D,{900:"fass",400:"fasr",300:"fasl"}),Ue)),Yn=[1,2,3,4,5,6,7,8,9,10],Ra=Yn.concat([11,12,13,14,15,16,17,18,19,20]),Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ne=new Set;Object.keys(Oe[L]).map(Ne.add.bind(Ne));Object.keys(Oe[D]).map(Ne.add.bind(Ne));var Da=[].concat(Ot,Me(Ne),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(Yn.map(function(e){return"".concat(e,"x")})).concat(Ra.map(function(e){return"w-".concat(e)})),Ee=ae.FontAwesomeConfig||{};function za(e){var t=$.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ja(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if($&&typeof $.querySelector=="function"){var Ya=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ya.forEach(function(e){var t=Et(e,2),n=t[0],a=t[1],r=ja(za(n));r!=null&&(Ee[a]=r)})}var Un={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fn,replacementClass:Dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ee.familyPrefix&&(Ee.cssPrefix=Ee.familyPrefix);var _e=m(m({},Un),Ee);_e.autoReplaceSvg||(_e.observeMutations=!1);var d={};Object.keys(Un).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){_e[e]=n,Se.forEach(function(a){return a(d)})},get:function(){return _e[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){_e.cssPrefix=t,Se.forEach(function(n){return n(d)})},get:function(){return _e.cssPrefix}});ae.FontAwesomeConfig=d;var Se=[];function Ua(e){return Se.push(e),function(){Se.splice(Se.indexOf(e),1)}}var ee=ft,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ha(e){if(!(!e||!Z)){var t=$.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=$.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return $.head.insertBefore(t,a),e}}var Wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Te(){for(var e=12,t="";e-- >0;)t+=Wa[Math.random()*62|0];return t}function xe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function It(e){return e.classList?xe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Va(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hn(e[n]),'" ')},"").trim()}function Qe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Nt(e){return e.size!==q.size||e.x!==q.x||e.y!==q.y||e.rotate!==q.rotate||e.flipX||e.flipY}function Ga(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Xa(e){var t=e.transform,n=e.width,a=n===void 0?ft:n,r=e.height,o=r===void 0?ft:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&Rn?l+="translate(".concat(t.x/ee-a/2,"em, ").concat(t.y/ee-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ee,"em), calc(-50% + ").concat(t.y/ee,"em)) "):l+="translate(".concat(t.x/ee,"em, ").concat(t.y/ee,"em) "),l+="scale(".concat(t.size/ee*(t.flipX?-1:1),", ").concat(t.size/ee*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wn(){var e=Fn,t=Dn,n=d.cssPrefix,a=d.replacementClass,r=Ba;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var nn=!1;function rt(){d.autoAddCss&&!nn&&(Ha(Wn()),nn=!0)}var qa={mixout:function(){return{dom:{css:Wn,insertCss:rt}}},hooks:function(){return{beforeDOMElementCreation:function(){rt()},beforeI2svg:function(){rt()}}}},J=ae||{};J[K]||(J[K]={});J[K].styles||(J[K].styles={});J[K].hooks||(J[K].hooks={});J[K].shims||(J[K].shims=[]);var B=J[K],Vn=[],Ka=function e(){$.removeEventListener("DOMContentLoaded",e),Ke=1,Vn.map(function(t){return t()})},Ke=!1;Z&&(Ke=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),Ke||$.addEventListener("DOMContentLoaded",Ka));function Ja(e){Z&&(Ke?setTimeout(e,0):Vn.push(e))}function $e(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Hn(e):"<".concat(t," ").concat(Va(a),">").concat(o.map($e).join(""),"</").concat(t,">")}function an(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qa=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},it=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Qa(n,r):n,l,c,f;for(a===void 0?(l=1,f=t[o[0]]):(l=0,f=a);l<i;l++)c=o[l],f=s(f,t[c],c,t);return f};function Za(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ut(e){var t=Za(e);return t.length===1?t[0].toString(16):null}function er(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function rn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function mt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=rn(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,rn(t)):B.styles[e]=m(m({},B.styles[e]||{}),o),e==="fas"&&mt("fa",t)}var He,We,Ve,ye=B.styles,tr=B.shims,nr=(He={},U(He,L,Object.values(Ie[L])),U(He,D,Object.values(Ie[D])),He),Tt=null,Gn={},Xn={},Bn={},qn={},Kn={},ar=(We={},U(We,L,Object.keys(Pe[L])),U(We,D,Object.keys(Pe[D])),We);function rr(e){return~Da.indexOf(e)}function ir(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!rr(r)?r:null}var Jn=function(){var t=function(o){return it(ye,function(i,s,l){return i[l]=it(s,o,{}),i},{})};Gn=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),Xn=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),Kn=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in ye||d.autoFetchSvg,a=it(tr,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Bn=a.names,qn=a.unicodes,Tt=Ze(d.styleDefault,{family:d.familyDefault})};Ua(function(e){Tt=Ze(e.styleDefault,{family:d.familyDefault})});Jn();function Mt(e,t){return(Gn[e]||{})[t]}function or(e,t){return(Xn[e]||{})[t]}function fe(e,t){return(Kn[e]||{})[t]}function Qn(e){return Bn[e]||{prefix:null,iconName:null}}function sr(e){var t=qn[e],n=Mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Tt}var Lt=function(){return{prefix:null,iconName:null,rest:[]}};function Ze(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?L:n,r=Pe[a][e],o=Oe[a][e]||Oe[a][r],i=e in B.styles?e:null;return o||i||null}var on=(Ve={},U(Ve,L,Object.keys(Ie[L])),U(Ve,D,Object.keys(Ie[D])),Ve);function et(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},U(t,L,"".concat(d.cssPrefix,"-").concat(L)),U(t,D,"".concat(d.cssPrefix,"-").concat(D)),t),i=null,s=L;(e.includes(o[L])||e.some(function(c){return on[L].includes(c)}))&&(s=L),(e.includes(o[D])||e.some(function(c){return on[D].includes(c)}))&&(s=D);var l=e.reduce(function(c,f){var u=ir(d.cssPrefix,f);if(ye[f]?(f=nr[s].includes(f)?Ta[s][f]:f,i=f,c.prefix=f):ar[s].indexOf(f)>-1?(i=f,c.prefix=Ze(f,{family:s})):u?c.iconName=u:f!==d.replacementClass&&f!==o[L]&&f!==o[D]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var p=i==="fa"?Qn(c.iconName):{},g=fe(c.prefix,c.iconName);p.prefix&&(i=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ye.far&&ye.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},Lt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===D&&(ye.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=fe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=re()||"fas"),l}var lr=function(){function e(){ka(this,e),this.definitions={}}return wa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),i[s]),mt(s,i[s]);var l=Ie[L][s];l&&mt(l,i[s]),Jn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,c=i.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),sn=[],ke={},we={},fr=Object.keys(we);function cr(e,t){var n=t.mixoutsTo;return sn=e,ke={},Object.keys(we).forEach(function(a){fr.indexOf(a)===-1&&delete we[a]}),sn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),qe(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){ke[i]||(ke[i]=[]),ke[i].push(o[i])})}a.provides&&a.provides(we)}),n}function dt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=ke[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ke[e]||[];r.forEach(function(o){o.apply(null,n)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function vt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||re();if(t)return t=fe(n,t)||t,an(Zn.definitions,n,t)||an(B.styles,n,t)}var Zn=new lr,ur=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,me("noAuto")},mr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(me("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ja(function(){vr({autoReplaceSvgRoot:n}),me("watch",t)})}},dr={icon:function(t){if(t===null)return null;if(qe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:fe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Ze(t[0]);return{prefix:a,iconName:fe(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Ma))){var r=et(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:fe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=re();return{prefix:o,iconName:fe(o,t)||t}}}},X={noAuto:ur,config:d,dom:mr,parse:dr,library:Zn,findIconDefinition:vt,toHtml:$e},vr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?$:n;(Object.keys(B.styles).length>0||d.autoFetchSvg)&&Z&&d.autoReplaceSvg&&X.dom.i2svg({node:a})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return $e(a)})}}),Object.defineProperty(e,"node",{get:function(){if(Z){var a=$.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function pr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Nt(i)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Qe(m(m({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function gr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:i}),children:a}]}]}function $t(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,p=e.watchable,g=p===void 0?!1:p,h=a.found?a:n,v=h.width,k=h.height,b=r==="fak",w=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(R){return u.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(u.classes).join(" "),C={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},M=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};g&&(C.attributes[ue]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||Te())},children:[l]}),delete C.attributes.title);var y=m(m({},C),{},{prefix:r,iconName:o,main:n,mask:a,maskId:c,transform:i,symbol:s,styles:m(m({},M),u.styles)}),x=a.found&&n.found?Q("generateAbstractMask",y)||{children:[],attributes:{}}:Q("generateAbstractIcon",y)||{children:[],attributes:{}},Y=x.children,N=x.attributes;return y.children=Y,y.attributes=N,s?gr(y):pr(y)}function ln(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,c=m(m(m({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(c[ue]="");var f=m({},i.styles);Nt(r)&&(f.transform=Xa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=Qe(f);u.length>0&&(c.style=u);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function br(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Qe(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var ot=B.styles;function pt(e){var t=e[0],n=e[1],a=e.slice(4),r=Et(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var hr={found:!1,width:512,height:512};function yr(e,t){!zn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function gt(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=re()),new Promise(function(a,r){if(Q("missingIconAbstract"),n==="fa"){var o=Qn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ot[t]&&ot[t][e]){var i=ot[t][e];return a(pt(i))}yr(e,t),a(m(m({},hr),{},{icon:d.showMissingIcons&&e?Q("missingIconAbstract")||{}:{}}))})}var fn=function(){},bt=d.measurePerformance&&Fe&&Fe.mark&&Fe.measure?Fe:{mark:fn,measure:fn},Ae='FA "6.4.2"',kr=function(t){return bt.mark("".concat(Ae," ").concat(t," begins")),function(){return ea(t)}},ea=function(t){bt.mark("".concat(Ae," ").concat(t," ends")),bt.measure("".concat(Ae," ").concat(t),"".concat(Ae," ").concat(t," begins"),"".concat(Ae," ").concat(t," ends"))},Rt={begin:kr,end:ea},Ge=function(){};function cn(e){var t=e.getAttribute?e.getAttribute(ue):null;return typeof t=="string"}function wr(e){var t=e.getAttribute?e.getAttribute(Ct):null,n=e.getAttribute?e.getAttribute(Pt):null;return t&&n}function _r(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function xr(){if(d.autoReplaceSvg===!0)return Xe.replace;var e=Xe[d.autoReplaceSvg];return e||Xe.replace}function Ar(e){return $.createElementNS("http://www.w3.org/2000/svg",e)}function Er(e){return $.createElement(e)}function ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Ar:Er:n;if(typeof e=="string")return $.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(ta(i,{ceFn:a}))}),r}function Sr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(ta(r),n)}),n.getAttribute(ue)===null&&d.keepOriginalSource){var a=$.createComment(Sr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~It(n).indexOf(d.replacementClass))return Xe.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return $e(s)}).join(`
`);n.setAttribute(ue,""),n.innerHTML=i}};function un(e){e()}function na(e,t){var n=typeof t=="function"?t:Ge;if(e.length===0)n();else{var a=un;d.mutateApproach===Ia&&(a=ae.requestAnimationFrame||un),a(function(){var r=xr(),o=Rt.begin("mutate");e.map(r),o(),n()})}}var Ft=!1;function aa(){Ft=!0}function ht(){Ft=!1}var Je=null;function mn(e){if(en&&d.observeMutations){var t=e.treeCallback,n=t===void 0?Ge:t,a=e.nodeCallback,r=a===void 0?Ge:a,o=e.pseudoElementsCallback,i=o===void 0?Ge:o,s=e.observeMutationsRoot,l=s===void 0?$:s;Je=new en(function(c){if(!Ft){var f=re();xe(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!cn(u.addedNodes[0])&&(d.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&cn(u.target)&&~Fa.indexOf(u.attributeName))if(u.attributeName==="class"&&wr(u.target)){var p=et(It(u.target)),g=p.prefix,h=p.iconName;u.target.setAttribute(Ct,g||f),h&&u.target.setAttribute(Pt,h)}else _r(u.target)&&r(u.target)})}}),Z&&Je.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cr(){Je&&Je.disconnect()}function Pr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Or(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=et(It(e));return r.prefix||(r.prefix=re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=or(r.prefix,e.innerText)||Mt(r.prefix,ut(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ir(e){var t=xe(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Te()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Or(e),a=n.iconName,r=n.prefix,o=n.rest,i=Ir(e),s=dt("parseNodeAttributes",{},e),l=t.styleParser?Pr(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Tr=B.styles;function ra(e){var t=d.autoReplaceSvg==="nest"?dn(e,{styleParser:!1}):dn(e);return~t.extra.classes.indexOf(jn)?Q("generateLayersText",e,t):Q("generateSvgReplacementMutation",e,t)}var ie=new Set;Ot.map(function(e){ie.add("fa-".concat(e))});Object.keys(Pe[L]).map(ie.add.bind(ie));Object.keys(Pe[D]).map(ie.add.bind(ie));ie=Me(ie);function vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var n=$.documentElement.classList,a=function(u){return n.add("".concat(tn,"-").concat(u))},r=function(u){return n.remove("".concat(tn,"-").concat(u))},o=d.autoFetchSvg?ie:Ot.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Tr));o.includes("fa")||o.push("fa");var i=[".".concat(jn,":not([").concat(ue,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(ue,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=xe(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Rt.begin("onTree"),c=s.reduce(function(f,u){try{var p=ra(u);p&&f.push(p)}catch(g){zn||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(p){na(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),u(p)})})}function Mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ra(e).then(function(n){n&&na([n],t)})}function Lr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:vt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:vt(r||{})),e(a,m(m({},n),{},{mask:r}))}}var $r=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?q:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,p=u===void 0?null:u,g=n.titleId,h=g===void 0?null:g,v=n.classes,k=v===void 0?[]:v,b=n.attributes,w=b===void 0?{}:b,C=n.styles,M=C===void 0?{}:C;if(t){var y=t.prefix,x=t.iconName,Y=t.icon;return tt(m({type:"icon"},t),function(){return me("beforeDOMElementCreation",{iconDefinition:t,params:n}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||Te()):(w["aria-hidden"]="true",w.focusable="false")),$t({icons:{main:pt(Y),mask:l?pt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:x,transform:m(m({},q),r),symbol:i,title:p,maskId:f,titleId:h,extra:{attributes:w,styles:M,classes:k}})})}},Rr={mixout:function(){return{icon:Lr($r)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vn,n.nodeCallback=Mr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?$:a,o=n.callback,i=o===void 0?function(){}:o;return vn(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,u=a.maskId,p=a.extra;return new Promise(function(g,h){Promise.all([gt(r,s),f.iconName?gt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=Et(v,2),b=k[0],w=k[1];g([n,$t({icons:{main:b,mask:w},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:o,titleId:i,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=Qe(s);l.length>0&&(r.style=l);var c;return Nt(i)&&(c=Q("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},Fr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return tt({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(Me(o)).join(" ")},children:i}]})}}}},Dr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,c=l===void 0?{}:l,f=a.styles,u=f===void 0?{}:f;return tt({type:"counter",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:a}),br({content:n.toString(),title:o,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(Me(s))}})})}}}},zr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?q:r,i=a.title,s=i===void 0?null:i,l=a.classes,c=l===void 0?[]:l,f=a.attributes,u=f===void 0?{}:f,p=a.styles,g=p===void 0?{}:p;return tt({type:"text",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:a}),ln({content:n,transform:m(m({},q),o),title:s,extra:{attributes:u,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(Me(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(Rn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,ln({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},jr=new RegExp('"',"ug"),pn=[1105920,1112319];function Yr(e){var t=e.replace(jr,""),n=er(t,0),a=n>=pn[0]&&n<=pn[1],r=t.length===2?t[0]===t[1]:!1;return{value:ut(r?t[0]:t),isSecondary:a||r}}function gn(e,t){var n="".concat(Oa).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=xe(e.children),i=o.filter(function(Y){return Y.getAttribute(ct)===t})[0],s=ae.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(La),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?D:L,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oe[p][l[2].toLowerCase()]:$a[p][c],h=Yr(u),v=h.value,k=h.isSecondary,b=l[0].startsWith("FontAwesome"),w=Mt(g,v),C=w;if(b){var M=sr(v);M.iconName&&M.prefix&&(w=M.iconName,g=M.prefix)}if(w&&!k&&(!i||i.getAttribute(Ct)!==g||i.getAttribute(Pt)!==C)){e.setAttribute(n,C),i&&e.removeChild(i);var y=Nr(),x=y.extra;x.attributes[ct]=t,gt(w,g).then(function(Y){var N=$t(m(m({},y),{},{icons:{main:Y,mask:Lt()},prefix:g,iconName:C,extra:x,watchable:!0})),R=$.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=N.map(function(F){return $e(F)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ur(e){return Promise.all([gn(e,"::before"),gn(e,"::after")])}function Hr(e){return e.parentNode!==document.head&&!~Na.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ct)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function bn(e){if(Z)return new Promise(function(t,n){var a=xe(e.querySelectorAll("*")).filter(Hr).map(Ur),r=Rt.begin("searchPseudoElements");aa(),Promise.all(a).then(function(){r(),ht(),t()}).catch(function(){r(),ht(),n()})})}var Wr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?$:a;d.searchPseudoElements&&bn(r)}}},hn=!1,Vr={mixout:function(){return{dom:{unwatch:function(){aa(),hn=!0}}}},hooks:function(){return{bootstrap:function(){mn(dt("mutationObserverCallbacks",{}))},noAuto:function(){Cr()},watch:function(n){var a=n.observeMutationsRoot;hn?ht():mn(dt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},yn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Gr={mixout:function(){return{parse:{transform:function(n){return yn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=yn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:u,path:p};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},st={x:0,y:0,width:"100%",height:"100%"};function kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xr(e){return e.tag==="g"?e.children:[e]}var Br={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?et(r.split(" ").map(function(i){return i.trim()})):Lt();return o.prefix||(o.prefix=re()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,c=o.width,f=o.icon,u=i.width,p=i.icon,g=Ga({transform:l,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:m(m({},st),{},{fill:"white"})},v=f.children?{children:f.children.map(kn)}:{},k={tag:"g",attributes:m({},g.inner),children:[kn(m({tag:f.tag,attributes:m(m({},f.attributes),g.path)},v))]},b={tag:"g",attributes:m({},g.outer),children:[k]},w="mask-".concat(s||Te()),C="clip-".concat(s||Te()),M={tag:"mask",attributes:m(m({},st),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,b]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Xr(p)},M]};return a.push(y,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},st)}),{children:a,attributes:r}}}},qr={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=m(m({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Kr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Jr=[qa,Rr,Fr,Dr,zr,Wr,Vr,Gr,Br,qr,Kr];cr(Jr,{mixoutsTo:X});X.noAuto;X.config;var Qr=X.library;X.dom;X.parse;X.findIconDefinition;X.toHtml;X.icon;X.layer;X.text;X.counter;function Zr(e){let t,n;return wn(e[1]),{c:se,l:se,m(a,r){t||(n=ce(window,"resize",e[1]),t=!0)},p:se,i:se,o:se,d(a){t=!1,n()}}}function ei(e,t,n){let a;function r(){n(0,a=window.innerWidth)}return e.$$.update=()=>{e.$$.dirty&1&&Pn.set(a)},[a,r]}class ti extends xt{constructor(t){super(),At(this,t,ei,Zr,yt,{})}}function ni(e){let t;const n=e[1].default,a=_n(n,e,e[2],null);return{c(){a&&a.c()},l(r){a&&a.l(r)},m(r,o){a&&a.m(r,o),t=!0},p(r,o){a&&a.p&&(!t||o&4)&&xn(a,n,r,r[2],t?En(n,r[2],o,null):An(r[2]),null)},i(r){t||(te(a,r),t=!0)},o(r){ne(a,r),t=!1},d(r){a&&a.d(r)}}}function ai(e){let t,n,a,r,o="@christsjcr",i;return n=new Nn({props:{icon:On,size:"2x"}}),{c(){t=P("span"),pe(n.$$.fragment),a=H(),r=P("p"),r.textContent=o,this.h()},l(s){t=O(s,"SPAN",{class:!0});var l=T(t);ge(n.$$.fragment,l),l.forEach(A),a=W(s),r=O(s,"P",{class:!0,"data-svelte-h":!0}),Ce(r)!=="svelte-1fc8epe"&&(r.textContent=o),this.h()},h(){_(t,"class","icon is-large"),_(r,"class","heading")},m(s,l){G(s,t,l),be(n,t,null),G(s,a,l),G(s,r,l),i=!0},p:se,i(s){i||(te(n.$$.fragment,s),i=!0)},o(s){ne(n.$$.fragment,s),i=!1},d(s){s&&(A(t),A(a),A(r)),he(n)}}}function ri(e){let t,n,a,r,o="@ChristsJCR",i;return n=new Nn({props:{icon:In,size:"2x"}}),{c(){t=P("span"),pe(n.$$.fragment),a=H(),r=P("p"),r.textContent=o,this.h()},l(s){t=O(s,"SPAN",{class:!0});var l=T(t);ge(n.$$.fragment,l),l.forEach(A),a=W(s),r=O(s,"P",{class:!0,"data-svelte-h":!0}),Ce(r)!=="svelte-1b8gl0y"&&(r.textContent=o),this.h()},h(){_(t,"class","icon is-large"),_(r,"class","heading")},m(s,l){G(s,t,l),be(n,t,null),G(s,a,l),G(s,r,l),i=!0},p:se,i(s){i||(te(n.$$.fragment,s),i=!0)},o(s){ne(n.$$.fragment,s),i=!1},d(s){s&&(A(t),A(a),A(r)),he(n)}}}function ii(e){let t,n,a,r,o,i,s,l,c,f,u,p,g,h,v,k="© Christ's JCR 2023",b,w,C="Source",M;return t=new ti({}),r=new ya({props:{layout:e[0],$$slots:{default:[ni]},$$scope:{ctx:e}}}),f=new Wt({props:{href:"https://www.instagram.com/christsjcr/",id:"instagram",external:!0,$$slots:{default:[ai]},$$scope:{ctx:e}}}),g=new Wt({props:{href:"https://www.facebook.com/ChristsJCR",id:"facebook",external:!0,$$slots:{default:[ri]},$$scope:{ctx:e}}}),{c(){pe(t.$$.fragment),n=H(),a=P("div"),pe(r.$$.fragment),o=H(),i=P("footer"),s=P("div"),l=P("div"),c=P("div"),pe(f.$$.fragment),u=H(),p=P("div"),pe(g.$$.fragment),h=H(),v=P("p"),v.textContent=k,b=H(),w=P("a"),w.textContent=C,this.h()},l(y){ge(t.$$.fragment,y),n=W(y),a=O(y,"DIV",{class:!0});var x=T(a);ge(r.$$.fragment,x),o=W(x),i=O(x,"FOOTER",{class:!0});var Y=T(i);s=O(Y,"DIV",{class:!0});var N=T(s);l=O(N,"DIV",{class:!0});var R=T(l);c=O(R,"DIV",{class:!0});var F=T(c);ge(f.$$.fragment,F),F.forEach(A),u=W(R),p=O(R,"DIV",{class:!0});var de=T(p);ge(g.$$.fragment,de),de.forEach(A),R.forEach(A),h=W(N),v=O(N,"P",{"data-svelte-h":!0}),Ce(v)!=="svelte-1remeiu"&&(v.textContent=k),b=W(N),w=O(N,"A",{rel:!0,href:!0,"data-svelte-h":!0}),Ce(w)!=="svelte-w2czll"&&(w.textContent=C),N.forEach(A),Y.forEach(A),x.forEach(A),this.h()},h(){_(c,"class","level-item has-text-centered"),_(p,"class","level-item has-text-centered"),_(l,"class","level is-mobile"),_(w,"rel","external"),_(w,"href","https://github.com/christsjcr/website"),_(s,"class","container has-text-centered"),_(i,"class","footer svelte-2yswsl"),_(a,"class","page svelte-2yswsl")},m(y,x){be(t,y,x),G(y,n,x),G(y,a,x),be(r,a,null),E(a,o),E(a,i),E(i,s),E(s,l),E(l,c),be(f,c,null),E(l,u),E(l,p),be(g,p,null),E(s,h),E(s,v),E(s,b),E(s,w),M=!0},p(y,[x]){const Y={};x&4&&(Y.$$scope={dirty:x,ctx:y}),r.$set(Y);const N={};x&4&&(N.$$scope={dirty:x,ctx:y}),f.$set(N);const R={};x&4&&(R.$$scope={dirty:x,ctx:y}),g.$set(R)},i(y){M||(te(t.$$.fragment,y),te(r.$$.fragment,y),te(f.$$.fragment,y),te(g.$$.fragment,y),M=!0)},o(y){ne(t.$$.fragment,y),ne(r.$$.fragment,y),ne(f.$$.fragment,y),ne(g.$$.fragment,y),M=!1},d(y){y&&(A(n),A(a)),he(t,y),he(r),he(f),he(g)}}}function oi(e,t,n){let{$$slots:a={},$$scope:r}=t;Qr.add(On,In,la,fa,ca,ua,ma,da);const o=[{route:"/",label:"Home"},{route:"/about",label:"About",children:[{route:"/about/committee",label:"Committee"},{route:"/about/constitution-and-guidelines",label:"Constitution & Guidelines"},{route:"/about/meetings",label:"Meetings"},{route:"/about/elections",label:"Elections"}]},{route:"/get-involved",label:"Get Involved",children:[{route:"/get-involved/freshers",label:"Freshers"},{route:"/get-involved/termcard",label:"Termcard"},{route:"/get-involved/societies",label:"Societies"},{route:"/get-involved/feedback",label:"Feedback"}]},{route:"/resources",label:"Resources"}];return Cn(()=>{const i=document.body.classList;let s;const l=()=>{s?(clearTimeout(s),s=null):i.add("stop-transitions"),s=setTimeout(()=>{i.remove("stop-transitions"),s=null},100)};l(),window.addEventListener("resize",l)}),e.$$set=i=>{"$$scope"in i&&n(2,r=i.$$scope)},[o,a,r]}class vi extends xt{constructor(t){super(),At(this,t,oi,ii,yt,{})}}export{vi as component,di as universal};
