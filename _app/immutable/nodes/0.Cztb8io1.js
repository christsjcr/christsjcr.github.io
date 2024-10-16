import{s as kt,C as ka,o as wa,e as P,a as H,c as O,b as N,m as Ce,g as W,f as A,l as _,a1 as Ut,w as I,r as nt,i as V,h as E,A as ce,u as _a,p as xa,q as Aa,F as Ea,y as rn,k as Ht,v as Sa,G as Wt,t as wt,d as _t,j as xt,n as se}from"../chunks/scheduler.8yXm6sNE.js";import{S as At,i as Et,t as te,b as ae,c as pe,a as ge,m as be,d as he}from"../chunks/index.DWLfrfOH.js";import{e as Be,p as on,w as Ca,d as sn}from"../chunks/width.CQGpMkn5.js";import{l as rt}from"../chunks/links.Cbk1EXbF.js";import{f as Pa,a as Oa,b as ln,c as fn}from"../chunks/index.ZdTWSncw.js";import{b as cn,a as un,c as mn,f as dn,F as Ia}from"../chunks/fa.B4o8dMEX.js";import{T as Gt}from"../chunks/TrackedLink.BtP8EGbs.js";const vn=!0,vi=Object.freeze(Object.defineProperty({__proto__:null,prerender:vn},Symbol.toStringTag,{value:"Module"}));function Vt(e,t,a){const n=e.slice();return n[21]=t[a],n}function Xt(e,t,a){const n=e.slice();return n[24]=t[a],n}function pn(e){let t,a,n=e[21].label+"",r,o,i,s,l;return{c(){t=P("a"),a=P("b"),r=wt(n),o=H(),this.h()},l(c){t=O(c,"A",{class:!0,href:!0});var f=N(t);a=O(f,"B",{});var u=N(a);r=_t(u,n),u.forEach(A),o=W(f),f.forEach(A),this.h()},h(){_(t,"class","navbar-item"),_(t,"href",i=e[21].route),I(t,"is-active",e[7](e[21])),I(t,"has-text-white",!e[2])},m(c,f){V(c,t,f),E(t,a),E(a,r),E(t,o),s||(l=ce(t,"click",e[20]),s=!0)},p(c,f){f&1&&n!==(n=c[21].label+"")&&xt(r,n),f&1&&i!==(i=c[21].route)&&_(t,"href",i),f&129&&I(t,"is-active",c[7](c[21])),f&4&&I(t,"has-text-white",!c[2])},d(c){c&&A(t),s=!1,l()}}}function gn(e){let t,a,n,r=e[21].label+"",o,i,s,l,c,f,u,p,g=Be(e[21].children),h=[];for(let v=0;v<g.length;v+=1)h[v]=Bt(Xt(e,g,v));return{c(){t=P("div"),a=P("a"),n=P("b"),o=wt(r),l=H(),c=P("div");for(let v=0;v<h.length;v+=1)h[v].c();f=H(),this.h()},l(v){t=O(v,"DIV",{class:!0});var k=N(t);a=O(k,"A",{class:!0,href:!0,target:!0});var b=N(a);n=O(b,"B",{});var w=N(n);o=_t(w,r),w.forEach(A),b.forEach(A),l=W(k),c=O(k,"DIV",{class:!0});var C=N(c);for(let M=0;M<h.length;M+=1)h[M].l(C);C.forEach(A),f=W(k),k.forEach(A),this.h()},h(){_(a,"class","navbar-link"),_(a,"href",i=e[21].route),_(a,"target",s=e[21].external?"_blank":""),I(a,"is-active",e[7](e[21])),I(a,"has-text-white",!e[2]),_(c,"class","navbar-dropdown svelte-15vf8p3"),I(c,"is-boxed",!e[3]),I(c,"last-dropdown",e[21]==e[0][e[0].length-1]),_(t,"class","navbar-item has-dropdown is-hoverable")},m(v,k){V(v,t,k),E(t,a),E(a,n),E(n,o),E(t,l),E(t,c);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(c,null);E(t,f),u||(p=ce(a,"click",e[18]),u=!0)},p(v,k){if(k&1&&r!==(r=v[21].label+"")&&xt(o,r),k&1&&i!==(i=v[21].route)&&_(a,"href",i),k&1&&s!==(s=v[21].external?"_blank":"")&&_(a,"target",s),k&129&&I(a,"is-active",v[7](v[21])),k&4&&I(a,"has-text-white",!v[2]),k&149){g=Be(v[21].children);let b;for(b=0;b<g.length;b+=1){const w=Xt(v,g,b);h[b]?h[b].p(w,k):(h[b]=Bt(w),h[b].c(),h[b].m(c,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=g.length}k&8&&I(c,"is-boxed",!v[3]),k&1&&I(c,"last-dropdown",v[21]==v[0][v[0].length-1])},d(v){v&&A(t),Ea(h,v),u=!1,p()}}}function Bt(e){let t,a=e[24].label+"",n,r,o,i,s,l;return{c(){t=P("a"),n=wt(a),r=H(),this.h()},l(c){t=O(c,"A",{class:!0,href:!0,target:!0});var f=N(t);n=_t(f,a),r=W(f),f.forEach(A),this.h()},h(){_(t,"class","navbar-item"),_(t,"href",o=e[24].route),_(t,"target",i=e[24].external?"_blank":""),I(t,"is-active",e[7](e[24])),I(t,"has-text-white",!e[2]&&!e[4])},m(c,f){V(c,t,f),E(t,n),E(t,r),s||(l=ce(t,"click",e[19]),s=!0)},p(c,f){f&1&&a!==(a=c[24].label+"")&&xt(n,a),f&1&&o!==(o=c[24].route)&&_(t,"href",o),f&1&&i!==(i=c[24].external?"_blank":"")&&_(t,"target",i),f&129&&I(t,"is-active",c[7](c[24])),f&20&&I(t,"has-text-white",!c[2]&&!c[4])},d(c){c&&A(t),s=!1,l()}}}function qt(e){let t;function a(o,i){var s;return(s=o[21].children)!=null&&s.length?gn:pn}let n=a(e),r=n(e);return{c(){r.c(),t=Wt()},l(o){r.l(o),t=Wt()},m(o,i){r.m(o,i),V(o,t,i)},p(o,i){n===(n=a(o))&&r?r.p(o,i):(r.d(1),r=n(o),r&&(r.c(),r.m(t.parentNode,t)))},d(o){o&&A(t),r.d(o)}}}function bn(e){let t=!1,a=()=>{t=!1},n,r,o,i,s,l,c='<img src="/img/logo_small.webp" width="112" height="28" alt="JCR Logo" class="svelte-15vf8p3"/>',f,u,p,g,h,v,k,b,w,C,M,y,x,Y,T;ka(e[15]);let R=Be(e[0]),z=[];for(let S=0;S<R.length;S+=1)z[S]=qt(Vt(e,R,S));const de=e[14].default,G=wa(de,e,e[13],null);return{c(){r=P("div"),o=P("div"),i=P("nav"),s=P("div"),l=P("a"),l.innerHTML=c,f=H(),u=P("button"),p=P("span"),g=H(),h=P("span"),v=H(),k=P("span"),b=H(),w=P("div"),C=P("div");for(let S=0;S<z.length;S+=1)z[S].c();M=H(),y=P("div"),G&&G.c(),this.h()},l(S){r=O(S,"DIV",{class:!0});var D=N(r);o=O(D,"DIV",{});var j=N(o);i=O(j,"NAV",{class:!0});var oe=N(i);s=O(oe,"DIV",{class:!0});var Re=N(s);l=O(Re,"A",{class:!0,href:!0,"data-svelte-h":!0}),Ce(l)!=="svelte-1an28uj"&&(l.innerHTML=c),f=W(Re),u=O(Re,"BUTTON",{class:!0,"aria-label":!0,"aria-expanded":!0});var ve=N(u);p=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),N(p).forEach(A),g=W(ve),h=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),N(h).forEach(A),v=W(ve),k=O(ve,"SPAN",{style:!0,"aria-hidden":!0}),N(k).forEach(A),ve.forEach(A),Re.forEach(A),b=W(oe),w=O(oe,"DIV",{class:!0});var Dt=N(w);C=O(Dt,"DIV",{class:!0});var jt=N(C);for(let at=0;at<z.length;at+=1)z[at].l(jt);jt.forEach(A),Dt.forEach(A),oe.forEach(A),j.forEach(A),M=W(D),y=O(D,"DIV",{});var Yt=N(y);G&&G.l(Yt),Yt.forEach(A),D.forEach(A),this.h()},h(){_(l,"class",Ut("navbar-item logo")+" svelte-15vf8p3"),_(l,"href","/"),I(l,"logoshow",e[5].type!="image"||e[9]),nt(p,"color","white"),_(p,"aria-hidden","true"),nt(h,"color","white"),_(h,"aria-hidden","true"),nt(k,"color","white"),_(k,"aria-hidden","true"),_(u,"class","navbar-burger"),_(u,"aria-label","menu"),_(u,"aria-expanded",e[2]),I(u,"is-active",e[2]),_(s,"class","navbar-brand"),_(C,"class","navbar-end"),_(w,"class","navbar-menu svelte-15vf8p3"),I(w,"is-active",e[2]),_(i,"class",Ut("navbar is-fixed-top is-transparent")+" svelte-15vf8p3"),I(i,"barshow",e[9]),I(i,"pr-4",e[4]),I(i,"animated",e[8]),o.hidden=e[6],_(r,"class","has-navbar-fixed-top svelte-15vf8p3")},m(S,D){V(S,r,D),E(r,o),E(o,i),E(i,s),E(s,l),E(s,f),E(s,u),E(u,p),E(u,g),E(u,h),E(u,v),E(u,k),E(i,b),E(i,w),E(w,C);for(let j=0;j<z.length;j+=1)z[j]&&z[j].m(C,null);E(r,M),E(r,y),G&&G.m(y,null),x=!0,Y||(T=[ce(window,"scroll",()=>{t=!0,clearTimeout(n),n=setTimeout(a,100),e[15]()}),ce(u,"click",e[16]),ce(u,"keypress",e[17])],Y=!0)},p(S,[D]){if(D&2&&!t&&(t=!0,clearTimeout(n),scrollTo(window.pageXOffset,S[1]),n=setTimeout(a,100)),(!x||D&544)&&I(l,"logoshow",S[5].type!="image"||S[9]),(!x||D&4)&&_(u,"aria-expanded",S[2]),(!x||D&4)&&I(u,"is-active",S[2]),D&157){R=Be(S[0]);let j;for(j=0;j<R.length;j+=1){const oe=Vt(S,R,j);z[j]?z[j].p(oe,D):(z[j]=qt(oe),z[j].c(),z[j].m(C,null))}for(;j<z.length;j+=1)z[j].d(1);z.length=R.length}(!x||D&4)&&I(w,"is-active",S[2]),(!x||D&512)&&I(i,"barshow",S[9]),(!x||D&16)&&I(i,"pr-4",S[4]),(!x||D&256)&&I(i,"animated",S[8]),(!x||D&64)&&(o.hidden=S[6]),G&&G.p&&(!x||D&8192)&&_a(G,de,S,S[13],x?Aa(de,S[13],D,null):xa(S[13]),null)},i(S){x||(te(G,S),x=!0)},o(S){ae(G,S),x=!1},d(S){S&&A(r),Ea(z,S),G&&G.d(S),Y=!1,rn(T)}}}function hn(e,t,a){let n,r,o,i,s,l,c,f,u;Ht(e,on,T=>a(5,f=T)),Ht(e,Ca,T=>a(12,u=T));let{$$slots:p={},$$scope:g}=t,{layout:h}=t,v=0,k=!0;Sa(()=>{a(6,k=!1)});let b=!1;function w(){a(1,v=window.pageYOffset)}const C=()=>a(2,b=!b),M=()=>a(2,b=!b),y=()=>a(2,b=!1),x=()=>a(2,b=!1),Y=()=>a(2,b=!1);return e.$$set=T=>{"layout"in T&&a(0,h=T.layout),"$$scope"in T&&a(13,g=T.$$scope)},e.$$.update=()=>{e.$$.dirty&4096&&a(4,n=u>=sn.min),e.$$.dirty&34&&a(10,r=f.header!=null&&v>=f.header.offsetTop+f.header.offsetHeight-64),e.$$.dirty&16&&n&&a(2,b=!1),e.$$.dirty&32&&a(11,o=f.type!="primary"),e.$$.dirty&1028&&a(3,i=b||r),e.$$.dirty&2056&&a(9,s=!o||i),e.$$.dirty&1056&&a(8,l=f.type=="image"||!r),e.$$.dirty&32&&a(7,c=T=>T.route===f.current)},[h,v,b,i,n,f,k,c,l,s,r,o,u,g,p,w,C,M,y,x,Y]}class yn extends At{constructor(t){super(),Et(this,t,hn,bn,kt,{layout:0})}}function Kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Kt(Object(a),!0).forEach(function(n){U(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Kt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function kn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _n(e,t,a){return t&&wn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function St(e,t){return An(e)||Sn(e,t)||Ta(e,t)||Pn()}function Me(e){return xn(e)||En(e)||Ta(e)||Cn()}function xn(e){if(Array.isArray(e))return ft(e)}function An(e){if(Array.isArray(e))return e}function En(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,o=!1,i,s;try{for(a=a.call(e);!(r=(i=a.next()).done)&&(n.push(i.value),!(t&&n.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return n}}function Ta(e,t){if(e){if(typeof e=="string")return ft(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ft(e,t)}}function ft(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Cn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jt=function(){},Ct={},Na={},Ma=null,La={mark:Jt,measure:Jt};try{typeof window<"u"&&(Ct=window),typeof document<"u"&&(Na=document),typeof MutationObserver<"u"&&(Ma=MutationObserver),typeof performance<"u"&&(La=performance)}catch{}var On=Ct.navigator||{},Qt=On.userAgent,Zt=Qt===void 0?"":Qt,ne=Ct,$=Na,ea=Ma,ze=La;ne.document;var Z=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",$a=~Zt.indexOf("MSIE")||~Zt.indexOf("Trident/"),Fe,De,je,Ye,Ue,K="___FONT_AWESOME___",ct=16,Ra="fa",za="svg-inline--fa",ue="data-fa-i2svg",ut="data-fa-pseudo-element",In="data-fa-pseudo-element-pending",Pt="data-prefix",Ot="data-icon",ta="fontawesome-i2svg",Tn="async",Nn=["HTML","HEAD","STYLE","SCRIPT"],Fa=function(){try{return!0}catch{return!1}}(),L="classic",F="sharp",It=[L,F];function Le(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[L]}})}var Pe=Le((Fe={},U(Fe,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),U(Fe,F,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Fe)),Oe=Le((De={},U(De,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U(De,F,{solid:"fass",regular:"fasr",light:"fasl"}),De)),Ie=Le((je={},U(je,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U(je,F,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),je)),Mn=Le((Ye={},U(Ye,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U(Ye,F,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ye)),Ln=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Da="fa-layers-text",$n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rn=Le((Ue={},U(Ue,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U(Ue,F,{900:"fass",400:"fasr",300:"fasl"}),Ue)),ja=[1,2,3,4,5,6,7,8,9,10],zn=ja.concat([11,12,13,14,15,16,17,18,19,20]),Fn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Te=new Set;Object.keys(Oe[L]).map(Te.add.bind(Te));Object.keys(Oe[F]).map(Te.add.bind(Te));var Dn=[].concat(It,Me(Te),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(ja.map(function(e){return"".concat(e,"x")})).concat(zn.map(function(e){return"w-".concat(e)})),Ee=ne.FontAwesomeConfig||{};function jn(e){var t=$.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if($&&typeof $.querySelector=="function"){var Un=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Un.forEach(function(e){var t=St(e,2),a=t[0],n=t[1],r=Yn(jn(a));r!=null&&(Ee[n]=r)})}var Ya={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ra,replacementClass:za,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ee.familyPrefix&&(Ee.cssPrefix=Ee.familyPrefix);var _e=m(m({},Ya),Ee);_e.autoReplaceSvg||(_e.observeMutations=!1);var d={};Object.keys(Ya).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(a){_e[e]=a,Se.forEach(function(n){return n(d)})},get:function(){return _e[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){_e.cssPrefix=t,Se.forEach(function(a){return a(d)})},get:function(){return _e.cssPrefix}});ne.FontAwesomeConfig=d;var Se=[];function Hn(e){return Se.push(e),function(){Se.splice(Se.indexOf(e),1)}}var ee=ct,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wn(e){if(!(!e||!Z)){var t=$.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=$.head.childNodes,n=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=o)}return $.head.insertBefore(t,n),e}}var Gn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ne(){for(var e=12,t="";e-- >0;)t+=Gn[Math.random()*62|0];return t}function xe(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Tt(e){return e.classList?xe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ua(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ua(e[a]),'" ')},"").trim()}function Qe(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Nt(e){return e.size!==q.size||e.x!==q.x||e.y!==q.y||e.rotate!==q.rotate||e.flipX||e.flipY}function Xn(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Bn(e){var t=e.transform,a=e.width,n=a===void 0?ct:a,r=e.height,o=r===void 0?ct:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&$a?l+="translate(".concat(t.x/ee-n/2,"em, ").concat(t.y/ee-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ee,"em), calc(-50% + ").concat(t.y/ee,"em)) "):l+="translate(".concat(t.x/ee,"em, ").concat(t.y/ee,"em) "),l+="scale(".concat(t.size/ee*(t.flipX?-1:1),", ").concat(t.size/ee*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var qn=`:root, :host {
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
}`;function Ha(){var e=Ra,t=za,a=d.cssPrefix,n=d.replacementClass,r=qn;if(a!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var aa=!1;function it(){d.autoAddCss&&!aa&&(Wn(Ha()),aa=!0)}var Kn={mixout:function(){return{dom:{css:Ha,insertCss:it}}},hooks:function(){return{beforeDOMElementCreation:function(){it()},beforeI2svg:function(){it()}}}},J=ne||{};J[K]||(J[K]={});J[K].styles||(J[K].styles={});J[K].hooks||(J[K].hooks={});J[K].shims||(J[K].shims=[]);var B=J[K],Wa=[],Jn=function e(){$.removeEventListener("DOMContentLoaded",e),Ke=1,Wa.map(function(t){return t()})},Ke=!1;Z&&(Ke=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),Ke||$.addEventListener("DOMContentLoaded",Jn));function Qn(e){Z&&(Ke?setTimeout(e,0):Wa.push(e))}function $e(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Ua(e):"<".concat(t," ").concat(Vn(n),">").concat(o.map($e).join(""),"</").concat(t,">")}function na(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var ot=function(t,a,n,r){var o=Object.keys(t),i=o.length,s=a,l,c,f;for(n===void 0?(l=1,f=t[o[0]]):(l=0,f=n);l<i;l++)c=o[l],f=s(f,t[c],c,t);return f};function Zn(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var o=e.charCodeAt(a++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function mt(e){var t=Zn(e);return t.length===1?t[0].toString(16):null}function er(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function ra(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function dt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,o=ra(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,ra(t)):B.styles[e]=m(m({},B.styles[e]||{}),o),e==="fas"&&dt("fa",t)}var He,We,Ge,ye=B.styles,tr=B.shims,ar=(He={},U(He,L,Object.values(Ie[L])),U(He,F,Object.values(Ie[F])),He),Mt=null,Ga={},Va={},Xa={},Ba={},qa={},nr=(We={},U(We,L,Object.keys(Pe[L])),U(We,F,Object.keys(Pe[F])),We);function rr(e){return~Dn.indexOf(e)}function ir(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!rr(r)?r:null}var Ka=function(){var t=function(o){return ot(ye,function(i,s,l){return i[l]=ot(s,o,{}),i},{})};Ga=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),Va=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),qa=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var a="far"in ye||d.autoFetchSvg,n=ot(tr,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Xa=n.names,Ba=n.unicodes,Mt=Ze(d.styleDefault,{family:d.familyDefault})};Hn(function(e){Mt=Ze(e.styleDefault,{family:d.familyDefault})});Ka();function Lt(e,t){return(Ga[e]||{})[t]}function or(e,t){return(Va[e]||{})[t]}function fe(e,t){return(qa[e]||{})[t]}function Ja(e){return Xa[e]||{prefix:null,iconName:null}}function sr(e){var t=Ba[e],a=Lt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function re(){return Mt}var $t=function(){return{prefix:null,iconName:null,rest:[]}};function Ze(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?L:a,r=Pe[n][e],o=Oe[n][e]||Oe[n][r],i=e in B.styles?e:null;return o||i||null}var ia=(Ge={},U(Ge,L,Object.keys(Ie[L])),U(Ge,F,Object.keys(Ie[F])),Ge);function et(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,o=(t={},U(t,L,"".concat(d.cssPrefix,"-").concat(L)),U(t,F,"".concat(d.cssPrefix,"-").concat(F)),t),i=null,s=L;(e.includes(o[L])||e.some(function(c){return ia[L].includes(c)}))&&(s=L),(e.includes(o[F])||e.some(function(c){return ia[F].includes(c)}))&&(s=F);var l=e.reduce(function(c,f){var u=ir(d.cssPrefix,f);if(ye[f]?(f=ar[s].includes(f)?Mn[s][f]:f,i=f,c.prefix=f):nr[s].indexOf(f)>-1?(i=f,c.prefix=Ze(f,{family:s})):u?c.iconName=u:f!==d.replacementClass&&f!==o[L]&&f!==o[F]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var p=i==="fa"?Ja(c.iconName):{},g=fe(c.prefix,c.iconName);p.prefix&&(i=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ye.far&&ye.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},$t());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===F&&(ye.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=fe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=re()||"fas"),l}var lr=function(){function e(){kn(this,e),this.definitions={}}return _n(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=m(m({},a.definitions[s]||{}),i[s]),dt(s,i[s]);var l=Ie[L][s];l&&dt(l,i[s]),Ka()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,c=i.icon,f=c[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(a[s][u]=c)}),a[s][l]=c}),a}}]),e}(),oa=[],ke={},we={},fr=Object.keys(we);function cr(e,t){var a=t.mixoutsTo;return oa=e,ke={},Object.keys(we).forEach(function(n){fr.indexOf(n)===-1&&delete we[n]}),oa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),qe(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(i){ke[i]||(ke[i]=[]),ke[i].push(o[i])})}n.provides&&n.provides(we)}),a}function vt(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var o=ke[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(n))}),t}function me(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=ke[e]||[];r.forEach(function(o){o.apply(null,a)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function pt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||re();if(t)return t=fe(a,t)||t,na(Qa.definitions,a,t)||na(B.styles,a,t)}var Qa=new lr,ur=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,me("noAuto")},mr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(me("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Qn(function(){vr({autoReplaceSvgRoot:a}),me("watch",t)})}},dr={icon:function(t){if(t===null)return null;if(qe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:fe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ze(t[0]);return{prefix:n,iconName:fe(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Ln))){var r=et(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:fe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=re();return{prefix:o,iconName:fe(o,t)||t}}}},X={noAuto:ur,config:d,dom:mr,parse:dr,library:Qa,findIconDefinition:pt,toHtml:$e},vr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?$:a;(Object.keys(B.styles).length>0||d.autoFetchSvg)&&Z&&d.autoReplaceSvg&&X.dom.i2svg({node:n})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return $e(n)})}}),Object.defineProperty(e,"node",{get:function(){if(Z){var n=$.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function pr(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Nt(i)&&a.found&&!n.found){var s=a.width,l=a.height,c={x:s/l/2,y:.5};r.style=Qe(m(m({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function gr(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:i}),children:n}]}]}function Rt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,p=e.watchable,g=p===void 0?!1:p,h=n.found?n:a,v=h.width,k=h.height,b=r==="fak",w=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(R){return u.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(u.classes).join(" "),C={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},M=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};g&&(C.attributes[ue]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||Ne())},children:[l]}),delete C.attributes.title);var y=m(m({},C),{},{prefix:r,iconName:o,main:a,mask:n,maskId:c,transform:i,symbol:s,styles:m(m({},M),u.styles)}),x=n.found&&a.found?Q("generateAbstractMask",y)||{children:[],attributes:{}}:Q("generateAbstractIcon",y)||{children:[],attributes:{}},Y=x.children,T=x.attributes;return y.children=Y,y.attributes=T,s?gr(y):pr(y)}function sa(e){var t=e.content,a=e.width,n=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,c=m(m(m({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(c[ue]="");var f=m({},i.styles);Nt(r)&&(f.transform=Bn({transform:r,startCentered:!0,width:a,height:n}),f["-webkit-transform"]=f.transform);var u=Qe(f);u.length>0&&(c.style=u);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function br(e){var t=e.content,a=e.title,n=e.extra,r=m(m(m({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),o=Qe(n.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var st=B.styles;function gt(e){var t=e[0],a=e[1],n=e.slice(4),r=St(n,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var hr={found:!1,width:512,height:512};function yr(e,t){!Fa&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bt(e,t){var a=t;return t==="fa"&&d.styleDefault!==null&&(t=re()),new Promise(function(n,r){if(Q("missingIconAbstract"),a==="fa"){var o=Ja(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&st[t]&&st[t][e]){var i=st[t][e];return n(gt(i))}yr(e,t),n(m(m({},hr),{},{icon:d.showMissingIcons&&e?Q("missingIconAbstract")||{}:{}}))})}var la=function(){},ht=d.measurePerformance&&ze&&ze.mark&&ze.measure?ze:{mark:la,measure:la},Ae='FA "6.4.2"',kr=function(t){return ht.mark("".concat(Ae," ").concat(t," begins")),function(){return Za(t)}},Za=function(t){ht.mark("".concat(Ae," ").concat(t," ends")),ht.measure("".concat(Ae," ").concat(t),"".concat(Ae," ").concat(t," begins"),"".concat(Ae," ").concat(t," ends"))},zt={begin:kr,end:Za},Ve=function(){};function fa(e){var t=e.getAttribute?e.getAttribute(ue):null;return typeof t=="string"}function wr(e){var t=e.getAttribute?e.getAttribute(Pt):null,a=e.getAttribute?e.getAttribute(Ot):null;return t&&a}function _r(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function xr(){if(d.autoReplaceSvg===!0)return Xe.replace;var e=Xe[d.autoReplaceSvg];return e||Xe.replace}function Ar(e){return $.createElementNS("http://www.w3.org/2000/svg",e)}function Er(e){return $.createElement(e)}function en(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Ar:Er:a;if(typeof e=="string")return $.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(en(i,{ceFn:n}))}),r}function Sr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xe={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(en(r),a)}),a.getAttribute(ue)===null&&d.keepOriginalSource){var n=$.createComment(Sr(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Tt(a).indexOf(d.replacementClass))return Xe.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=n.map(function(s){return $e(s)}).join(`
`);a.setAttribute(ue,""),a.innerHTML=i}};function ca(e){e()}function tn(e,t){var a=typeof t=="function"?t:Ve;if(e.length===0)a();else{var n=ca;d.mutateApproach===Tn&&(n=ne.requestAnimationFrame||ca),n(function(){var r=xr(),o=zt.begin("mutate");e.map(r),o(),a()})}}var Ft=!1;function an(){Ft=!0}function yt(){Ft=!1}var Je=null;function ua(e){if(ea&&d.observeMutations){var t=e.treeCallback,a=t===void 0?Ve:t,n=e.nodeCallback,r=n===void 0?Ve:n,o=e.pseudoElementsCallback,i=o===void 0?Ve:o,s=e.observeMutationsRoot,l=s===void 0?$:s;Je=new ea(function(c){if(!Ft){var f=re();xe(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!fa(u.addedNodes[0])&&(d.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&fa(u.target)&&~Fn.indexOf(u.attributeName))if(u.attributeName==="class"&&wr(u.target)){var p=et(Tt(u.target)),g=p.prefix,h=p.iconName;u.target.setAttribute(Pt,g||f),h&&u.target.setAttribute(Ot,h)}else _r(u.target)&&r(u.target)})}}),Z&&Je.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cr(){Je&&Je.disconnect()}function Pr(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),a}function Or(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=et(Tt(e));return r.prefix||(r.prefix=re()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=or(r.prefix,e.innerText)||Lt(r.prefix,mt(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ir(e){var t=xe(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return d.autoA11y&&(a?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(n||Ne()):(t["aria-hidden"]="true",t.focusable="false")),t}function Tr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Or(e),n=a.iconName,r=a.prefix,o=a.rest,i=Ir(e),s=vt("parseNodeAttributes",{},e),l=t.styleParser?Pr(e):[];return m({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Nr=B.styles;function nn(e){var t=d.autoReplaceSvg==="nest"?ma(e,{styleParser:!1}):ma(e);return~t.extra.classes.indexOf(Da)?Q("generateLayersText",e,t):Q("generateSvgReplacementMutation",e,t)}var ie=new Set;It.map(function(e){ie.add("fa-".concat(e))});Object.keys(Pe[L]).map(ie.add.bind(ie));Object.keys(Pe[F]).map(ie.add.bind(ie));ie=Me(ie);function da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var a=$.documentElement.classList,n=function(u){return a.add("".concat(ta,"-").concat(u))},r=function(u){return a.remove("".concat(ta,"-").concat(u))},o=d.autoFetchSvg?ie:It.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Nr));o.includes("fa")||o.push("fa");var i=[".".concat(Da,":not([").concat(ue,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(ue,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=xe(e.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=zt.begin("onTree"),c=s.reduce(function(f,u){try{var p=nn(u);p&&f.push(p)}catch(g){Fa||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(p){tn(p,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),u(p)})})}function Mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nn(e).then(function(a){a&&tn([a],t)})}function Lr(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:pt(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:pt(r||{})),e(n,m(m({},a),{},{mask:r}))}}var $r=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?q:n,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,c=a.maskId,f=c===void 0?null:c,u=a.title,p=u===void 0?null:u,g=a.titleId,h=g===void 0?null:g,v=a.classes,k=v===void 0?[]:v,b=a.attributes,w=b===void 0?{}:b,C=a.styles,M=C===void 0?{}:C;if(t){var y=t.prefix,x=t.iconName,Y=t.icon;return tt(m({type:"icon"},t),function(){return me("beforeDOMElementCreation",{iconDefinition:t,params:a}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||Ne()):(w["aria-hidden"]="true",w.focusable="false")),Rt({icons:{main:gt(Y),mask:l?gt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:x,transform:m(m({},q),r),symbol:i,title:p,maskId:f,titleId:h,extra:{attributes:w,styles:M,classes:k}})})}},Rr={mixout:function(){return{icon:Lr($r)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=da,a.nodeCallback=Mr,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?$:n,o=a.callback,i=o===void 0?function(){}:o;return da(r,i)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,o=n.title,i=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,f=n.mask,u=n.maskId,p=n.extra;return new Promise(function(g,h){Promise.all([bt(r,s),f.iconName?bt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=St(v,2),b=k[0],w=k[1];g([a,Rt({icons:{main:b,mask:w},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:o,titleId:i,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,l=Qe(s);l.length>0&&(r.style=l);var c;return Nt(i)&&(c=Q("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(c||o.icon),{children:n,attributes:r}}}},zr={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,o=r===void 0?[]:r;return tt({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(Me(o)).join(" ")},children:i}]})}}}},Fr={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,o=r===void 0?null:r,i=n.classes,s=i===void 0?[]:i,l=n.attributes,c=l===void 0?{}:l,f=n.styles,u=f===void 0?{}:f;return tt({type:"counter",content:a},function(){return me("beforeDOMElementCreation",{content:a,params:n}),br({content:a.toString(),title:o,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(Me(s))}})})}}}},Dr={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?q:r,i=n.title,s=i===void 0?null:i,l=n.classes,c=l===void 0?[]:l,f=n.attributes,u=f===void 0?{}:f,p=n.styles,g=p===void 0?{}:p;return tt({type:"text",content:a},function(){return me("beforeDOMElementCreation",{content:a,params:n}),sa({content:a,transform:m(m({},q),o),title:s,extra:{attributes:u,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(Me(c))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,o=n.transform,i=n.extra,s=null,l=null;if($a){var c=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,sa({content:a.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},jr=new RegExp('"',"ug"),va=[1105920,1112319];function Yr(e){var t=e.replace(jr,""),a=er(t,0),n=a>=va[0]&&a<=va[1],r=t.length===2?t[0]===t[1]:!1;return{value:mt(r?t[0]:t),isSecondary:n||r}}function pa(e,t){var a="".concat(In).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var o=xe(e.children),i=o.filter(function(Y){return Y.getAttribute(ut)===t})[0],s=ne.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match($n),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),n();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?F:L,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oe[p][l[2].toLowerCase()]:Rn[p][c],h=Yr(u),v=h.value,k=h.isSecondary,b=l[0].startsWith("FontAwesome"),w=Lt(g,v),C=w;if(b){var M=sr(v);M.iconName&&M.prefix&&(w=M.iconName,g=M.prefix)}if(w&&!k&&(!i||i.getAttribute(Pt)!==g||i.getAttribute(Ot)!==C)){e.setAttribute(a,C),i&&e.removeChild(i);var y=Tr(),x=y.extra;x.attributes[ut]=t,bt(w,g).then(function(Y){var T=Rt(m(m({},y),{},{icons:{main:Y,mask:$t()},prefix:g,iconName:C,extra:x,watchable:!0})),R=$.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=T.map(function(z){return $e(z)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Ur(e){return Promise.all([pa(e,"::before"),pa(e,"::after")])}function Hr(e){return e.parentNode!==document.head&&!~Nn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ut)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ga(e){if(Z)return new Promise(function(t,a){var n=xe(e.querySelectorAll("*")).filter(Hr).map(Ur),r=zt.begin("searchPseudoElements");an(),Promise.all(n).then(function(){r(),yt(),t()}).catch(function(){r(),yt(),a()})})}var Wr={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ga,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?$:n;d.searchPseudoElements&&ga(r)}}},ba=!1,Gr={mixout:function(){return{dom:{unwatch:function(){an(),ba=!0}}}},hooks:function(){return{bootstrap:function(){ua(vt("mutationObserverCallbacks",{}))},noAuto:function(){Cr()},watch:function(a){var n=a.observeMutationsRoot;ba?yt():ua(vt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ha=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Vr={mixout:function(){return{parse:{transform:function(a){return ha(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=ha(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:u,path:p};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),g.path)}]}]}}}},lt={x:0,y:0,width:"100%",height:"100%"};function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xr(e){return e.tag==="g"?e.children:[e]}var Br={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),o=r?et(r.split(" ").map(function(i){return i.trim()})):$t();return o.prefix||(o.prefix=re()),a.mask=o,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,c=o.width,f=o.icon,u=i.width,p=i.icon,g=Xn({transform:l,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:m(m({},lt),{},{fill:"white"})},v=f.children?{children:f.children.map(ya)}:{},k={tag:"g",attributes:m({},g.inner),children:[ya(m({tag:f.tag,attributes:m(m({},f.attributes),g.path)},v))]},b={tag:"g",attributes:m({},g.outer),children:[k]},w="mask-".concat(s||Ne()),C="clip-".concat(s||Ne()),M={tag:"mask",attributes:m(m({},lt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,b]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Xr(p)},M]};return n.push(y,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},lt)}),{children:n,attributes:r}}}},qr={provides:function(t){var a=!1;ne.matchMedia&&(a=ne.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=m(m({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:m(m({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Kr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},Jr=[Kn,Rr,zr,Fr,Dr,Wr,Gr,Vr,Br,qr,Kr];cr(Jr,{mixoutsTo:X});X.noAuto;X.config;var Qr=X.library;X.dom;X.parse;X.findIconDefinition;X.toHtml;X.icon;X.layer;X.text;X.counter;function Zr(e){let t,a;return ka(e[1]),{c:se,l:se,m(n,r){t||(a=ce(window,"resize",e[1]),t=!0)},p:se,i:se,o:se,d(n){t=!1,a()}}}function ei(e,t,a){let n;function r(){a(0,n=window.innerWidth)}return e.$$.update=()=>{e.$$.dirty&1&&Ca.set(n)},[n,r]}class ti extends At{constructor(t){super(),Et(this,t,ei,Zr,kt,{})}}function ai(e){let t;const a=e[1].default,n=wa(a,e,e[2],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,o){n&&n.m(r,o),t=!0},p(r,o){n&&n.p&&(!t||o&4)&&_a(n,a,r,r[2],t?Aa(a,r[2],o,null):xa(r[2]),null)},i(r){t||(te(n,r),t=!0)},o(r){ae(n,r),t=!1},d(r){n&&n.d(r)}}}function ni(e){let t,a,n,r,o="@christsjcr",i;return a=new Ia({props:{icon:Pa,size:"2x"}}),{c(){t=P("span"),pe(a.$$.fragment),n=H(),r=P("p"),r.textContent=o,this.h()},l(s){t=O(s,"SPAN",{class:!0});var l=N(t);ge(a.$$.fragment,l),l.forEach(A),n=W(s),r=O(s,"P",{class:!0,"data-svelte-h":!0}),Ce(r)!=="svelte-1fc8epe"&&(r.textContent=o),this.h()},h(){_(t,"class","icon is-large"),_(r,"class","heading")},m(s,l){V(s,t,l),be(a,t,null),V(s,n,l),V(s,r,l),i=!0},p:se,i(s){i||(te(a.$$.fragment,s),i=!0)},o(s){ae(a.$$.fragment,s),i=!1},d(s){s&&(A(t),A(n),A(r)),he(a)}}}function ri(e){let t,a,n,r,o="@ChristsJCR",i;return a=new Ia({props:{icon:Oa,size:"2x"}}),{c(){t=P("span"),pe(a.$$.fragment),n=H(),r=P("p"),r.textContent=o,this.h()},l(s){t=O(s,"SPAN",{class:!0});var l=N(t);ge(a.$$.fragment,l),l.forEach(A),n=W(s),r=O(s,"P",{class:!0,"data-svelte-h":!0}),Ce(r)!=="svelte-1b8gl0y"&&(r.textContent=o),this.h()},h(){_(t,"class","icon is-large"),_(r,"class","heading")},m(s,l){V(s,t,l),be(a,t,null),V(s,n,l),V(s,r,l),i=!0},p:se,i(s){i||(te(a.$$.fragment,s),i=!0)},o(s){ae(a.$$.fragment,s),i=!1},d(s){s&&(A(t),A(n),A(r)),he(a)}}}function ii(e){let t,a,n,r,o,i,s,l,c,f,u,p,g,h,v,k="© Christ's JCR 2023",b,w,C="Source",M;return t=new ti({}),r=new yn({props:{layout:e[0],$$slots:{default:[ai]},$$scope:{ctx:e}}}),f=new Gt({props:{href:rt.general.JCR_INSTAGRAM,id:"instagram",external:!0,$$slots:{default:[ni]},$$scope:{ctx:e}}}),g=new Gt({props:{href:rt.general.JCR_FACEBOOK,id:"facebook",external:!0,$$slots:{default:[ri]},$$scope:{ctx:e}}}),{c(){pe(t.$$.fragment),a=H(),n=P("div"),pe(r.$$.fragment),o=H(),i=P("footer"),s=P("div"),l=P("div"),c=P("div"),pe(f.$$.fragment),u=H(),p=P("div"),pe(g.$$.fragment),h=H(),v=P("p"),v.textContent=k,b=H(),w=P("a"),w.textContent=C,this.h()},l(y){ge(t.$$.fragment,y),a=W(y),n=O(y,"DIV",{class:!0});var x=N(n);ge(r.$$.fragment,x),o=W(x),i=O(x,"FOOTER",{class:!0});var Y=N(i);s=O(Y,"DIV",{class:!0});var T=N(s);l=O(T,"DIV",{class:!0});var R=N(l);c=O(R,"DIV",{class:!0});var z=N(c);ge(f.$$.fragment,z),z.forEach(A),u=W(R),p=O(R,"DIV",{class:!0});var de=N(p);ge(g.$$.fragment,de),de.forEach(A),R.forEach(A),h=W(T),v=O(T,"P",{"data-svelte-h":!0}),Ce(v)!=="svelte-1remeiu"&&(v.textContent=k),b=W(T),w=O(T,"A",{rel:!0,href:!0,"data-svelte-h":!0}),Ce(w)!=="svelte-imlwa8"&&(w.textContent=C),T.forEach(A),Y.forEach(A),x.forEach(A),this.h()},h(){_(c,"class","level-item has-text-centered"),_(p,"class","level-item has-text-centered"),_(l,"class","level is-mobile"),_(w,"rel","external"),_(w,"href",rt.general.GITHUB),_(s,"class","container has-text-centered"),_(i,"class","footer svelte-2yswsl"),_(n,"class","page svelte-2yswsl")},m(y,x){be(t,y,x),V(y,a,x),V(y,n,x),be(r,n,null),E(n,o),E(n,i),E(i,s),E(s,l),E(l,c),be(f,c,null),E(l,u),E(l,p),be(g,p,null),E(s,h),E(s,v),E(s,b),E(s,w),M=!0},p(y,[x]){const Y={};x&4&&(Y.$$scope={dirty:x,ctx:y}),r.$set(Y);const T={};x&4&&(T.$$scope={dirty:x,ctx:y}),f.$set(T);const R={};x&4&&(R.$$scope={dirty:x,ctx:y}),g.$set(R)},i(y){M||(te(t.$$.fragment,y),te(r.$$.fragment,y),te(f.$$.fragment,y),te(g.$$.fragment,y),M=!0)},o(y){ae(t.$$.fragment,y),ae(r.$$.fragment,y),ae(f.$$.fragment,y),ae(g.$$.fragment,y),M=!1},d(y){y&&(A(a),A(n)),he(t,y),he(r),he(f),he(g)}}}function oi(e,t,a){let{$$slots:n={},$$scope:r}=t;Qr.add(Pa,Oa,ln,fn,cn,un,mn,dn);const o=[{route:"/",label:"Home"},{route:"/about",label:"About",children:[{route:"/about/committee",label:"Committee"},{route:"/about/constitution-and-guidelines",label:"Constitution & Guidelines"},{route:"/about/meetings",label:"Meetings"},{route:"/about/elections",label:"Elections"}]},{route:"/get-involved",label:"Get Involved",children:[{route:"/get-involved/freshers",label:"Freshers"},{route:"/get-involved/termcard",label:"Termcard"},{route:"/get-involved/societies",label:"Societies"},{route:"/get-involved/feedback",label:"Feedback"}]},{route:"/resources",label:"Resources"}];return Sa(()=>{const i=document.body.classList;let s;const l=()=>{s?(clearTimeout(s),s=null):i.add("stop-transitions"),s=setTimeout(()=>{i.remove("stop-transitions"),s=null},100)};l(),window.addEventListener("resize",l)}),e.$$set=i=>{"$$scope"in i&&a(2,r=i.$$scope)},[o,n,r]}class pi extends At{constructor(t){super(),Et(this,t,oi,ii,kt,{})}}export{pi as component,vi as universal};
