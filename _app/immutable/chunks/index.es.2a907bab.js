/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function P(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(t){return typeof t}:P=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(n)}function Nn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function tn(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Rn(n,t,a){return t&&tn(n.prototype,t),a&&tn(n,a),n}function jn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},e=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.forEach(function(r){jn(n,r,a[r])})}return n}function mn(n,t){return Dn(n)||Fn(n,t)||$n()}function Dn(n){if(Array.isArray(n))return n}function Fn(n,t){var a=[],e=!0,r=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(a.push(s.value),!(t&&a.length===t));e=!0);}catch(f){r=!0,i=f}finally{try{!e&&o.return!=null&&o.return()}finally{if(r)throw i}}return a}function $n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var en=function(){},V={},hn={},Wn=null,gn={mark:en,measure:en};try{typeof window<"u"&&(V=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(Wn=MutationObserver),typeof performance<"u"&&(gn=performance)}catch{}var Un=V.navigator||{},an=Un.userAgent,rn=an===void 0?"":an,F=V,u=hn,L=gn;F.document;var J=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function";~rn.indexOf("MSIE")||~rn.indexOf("Trident/");var b="___FONT_AWESOME___",vn="fa",pn="svg-inline--fa",Yn="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var U={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yn=F.FontAwesomeConfig||{};function Xn(n){var t=u.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Hn(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(u&&typeof u.querySelector=="function"){var Bn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bn.forEach(function(n){var t=mn(n,2),a=t[0],e=t[1],r=Hn(Xn(a));r!=null&&(yn[e]=r)})}var Gn={familyPrefix:vn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},H=l({},Gn,yn);H.autoReplaceSvg||(H.observeMutations=!1);var m=l({},H);F.FontAwesomeConfig=m;var w=F||{};w[b]||(w[b]={});w[b].styles||(w[b].styles={});w[b].hooks||(w[b].hooks={});w[b].shims||(w[b].shims=[]);var p=w[b],qn=[],Vn=function n(){u.removeEventListener("DOMContentLoaded",n),B=1,qn.map(function(t){return t()})},B=!1;J&&(B=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),B||u.addEventListener("DOMContentLoaded",Vn));var Q="pending",bn="settled",N="fulfilled",R="rejected",Jn=function(){},wn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",Qn=typeof setImmediate>"u"?setTimeout:setImmediate,z=[],G;function Zn(){for(var n=0;n<z.length;n++)z[n][0](z[n][1]);z=[],G=!1}function j(n,t){z.push([n,t]),G||(G=!0,Qn(Zn,0))}function Kn(n,t){function a(r){Z(t,r)}function e(r){S(t,r)}try{n(a,e)}catch(r){e(r)}}function kn(n){var t=n.owner,a=t._state,e=t._data,r=n[a],i=n.then;if(typeof r=="function"){a=N;try{e=r(e)}catch(o){S(i,o)}}xn(i,e)||(a===N&&Z(i,e),a===R&&S(i,e))}function xn(n,t){var a;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||P(t)==="object")){var e=t.then;if(typeof e=="function")return e.call(t,function(r){a||(a=!0,t===r?In(n,r):Z(n,r))},function(r){a||(a=!0,S(n,r))}),!0}}catch(r){return a||S(n,r),!0}return!1}function Z(n,t){(n===t||!xn(n,t))&&In(n,t)}function In(n,t){n._state===Q&&(n._state=bn,n._data=t,j(nt,n))}function S(n,t){n._state===Q&&(n._state=bn,n._data=t,j(tt,n))}function _n(n){n._then=n._then.forEach(kn)}function nt(n){n._state=N,_n(n)}function tt(n){n._state=R,_n(n),!n._handled&&wn&&global.process.emit("unhandledRejection",n._data,n)}function et(n){global.process.emit("rejectionHandled",n)}function g(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof g))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Kn(n,this)}g.prototype={constructor:g,_state:Q,_then:null,_data:void 0,_handled:!1,then:function(t,a){var e={owner:this,then:new this.constructor(Jn),fulfilled:t,rejected:a};return(a||t)&&!this._handled&&(this._handled=!0,this._state===R&&wn&&j(et,this)),this._state===N||this._state===R?j(kn,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}};g.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new g(function(t,a){var e=[],r=0;function i(f){return r++,function(c){e[f]=c,--r||t(e)}}for(var o=0,s;o<n.length;o++)s=n[o],s&&typeof s.then=="function"?s.then(i(o),a):e[o]=s;r||t(e)})};g.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new g(function(t,a){for(var e=0,r;e<n.length;e++)r=n[e],r&&typeof r.then=="function"?r.then(t,a):t(r)})};g.resolve=function(n){return n&&P(n)==="object"&&n.constructor===g?n:new g(function(t){t(n)})};g.reject=function(n){return new g(function(t,a){a(n)})};var O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function at(n){if(!(!n||!J)){var t=u.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=u.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return u.head.insertBefore(t,e),n}}var rt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function D(){for(var n=12,t="";n-- >0;)t+=rt[Math.random()*62|0];return t}function En(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function it(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(En(n[a]),'" ')},"").trim()}function Mn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a],";")},"")}function An(n){return n.size!==O.size||n.x!==O.x||n.y!==O.y||n.rotate!==O.rotate||n.flipX||n.flipY}function On(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}var Y={x:0,y:0,width:"100%",height:"100%"};function on(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function ot(n){return n.tag==="g"?n.children:[n]}function st(n){var t=n.children,a=n.attributes,e=n.main,r=n.mask,i=n.maskId,o=n.transform,s=e.width,f=e.icon,c=r.width,h=r.icon,d=On({transform:o,containerWidth:c,iconWidth:s}),x={tag:"rect",attributes:l({},Y,{fill:"white"})},E=f.children?{children:f.children.map(on)}:{},I={tag:"g",attributes:l({},d.inner),children:[on(l({tag:f.tag,attributes:l({},f.attributes,d.path)},E))]},_={tag:"g",attributes:l({},d.outer),children:[I]},y="mask-".concat(i||D()),v="clip-".concat(i||D()),M={tag:"mask",attributes:l({},Y,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,_]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ot(h)},M]};return t.push(C,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Y)}),{children:t,attributes:a}}function ft(n){var t=n.children,a=n.attributes,e=n.main,r=n.transform,i=n.styles,o=Mn(i);if(o.length>0&&(a.style=o),An(r)){var s=On({transform:r,containerWidth:e.width,iconWidth:e.width});t.push({tag:"g",attributes:l({},s.outer),children:[{tag:"g",attributes:l({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l({},e.icon.attributes,s.path)}]}]})}else t.push(e.icon);return{children:t,attributes:a}}function lt(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(An(o)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=Mn(l({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ct(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(m.familyPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},r,{id:o}),children:e}]}]}function ut(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,c=n.maskId,h=n.titleId,d=n.extra,x=n.watchable,E=x===void 0?!1:x,I=e.found?e:a,_=I.width,y=I.height,v=r==="fak",M=v?"":"fa-w-".concat(Math.ceil(_/y*16)),C=[m.replacementClass,i?"".concat(m.familyPrefix,"-").concat(i):"",M].filter(function(T){return d.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(d.classes).join(" "),A={children:[],attributes:l({},d.attributes,{"data-prefix":r,"data-icon":i,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(y)})},W=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/y*16*.0625,"em")}:{};E&&(A.attributes[Yn]=""),f&&A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(h||D())},children:[f]});var k=l({},A,{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:l({},W,d.styles)}),nn=e.found&&a.found?st(k):ft(k),Tn=nn.children,Ln=nn.attributes;return k.children=Tn,k.attributes=Ln,s?ct(k):lt(k)}var sn=function(){};m.measurePerformance&&L&&L.mark&&L.measure;var dt=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},X=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?dt(a,r):a,f,c,h;for(e===void 0?(f=1,h=t[i[0]]):(f=0,h=e);f<o;f++)c=i[f],h=s(h,t[c],c,t);return h};function Cn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=Object.keys(t).reduce(function(o,s){var f=t[s],c=!!f.icon;return c?o[f.iconName]=f.icon:o[s]=f,o},{});typeof p.hooks.addPack=="function"&&!r?p.hooks.addPack(n,i):p.styles[n]=l({},p.styles[n]||{},i),n==="fas"&&Cn("fa",t)}var fn=p.styles,mt=p.shims,zn=function(){var t=function(r){return X(fn,function(i,o,s){return i[s]=X(o,r,{}),i},{})};t(function(e,r,i){return r[3]&&(e[r[3]]=i),e}),t(function(e,r,i){var o=r[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var a="far"in fn;X(mt,function(e,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!a&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};zn();p.styles;function ln(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}function Pn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?En(n):"<".concat(t," ").concat(it(e),">").concat(i.map(Pn).join(""),"</").concat(t,">")}var ht=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a):a};function q(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}q.prototype=Object.create(Error.prototype);q.prototype.constructor=q;var $={fill:"currentColor"},Sn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l({},$,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var K=l({},Sn,{attributeName:"opacity"});l({},$,{cx:"256",cy:"364",r:"28"}),l({},Sn,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},K,{values:"1;0;1;1;0;1;"});l({},$,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},K,{values:"1;0;0;0;0;1;"});l({},$,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},K,{values:"0;0;1;1;0;0;"});p.styles;function cn(n){var t=n[0],a=n[1],e=n.slice(4),r=mn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.familyPrefix,"-").concat(U.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(U.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(U.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}p.styles;var gt=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
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

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
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
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
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
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function vt(){var n=vn,t=pn,a=m.familyPrefix,e=m.replacementClass,r=gt;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var pt=function(){function n(){Nn(this,n),this.definitions={}}return Rn(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=l({},a.definitions[s]||{},o[s]),Cn(s,o[s]),zn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon;a[s]||(a[s]={}),a[s][f]=c}),a}}]),n}();function yt(){m.autoAddCss&&!dn&&(at(vt()),dn=!0)}function bt(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return Pn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(J){var e=u.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function un(n){var t=n.prefix,a=t===void 0?"fa":t,e=n.iconName;if(e)return ln(kt.definitions,a,e)||ln(p.styles,a,e)}function wt(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:un(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:un(r||{})),n(e,l({},a,{mask:r}))}}var kt=new pt,dn=!1,xt={transform:function(t){return ht(t)}},It=wt(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,e=a===void 0?O:a,r=t.symbol,i=r===void 0?!1:r,o=t.mask,s=o===void 0?null:o,f=t.maskId,c=f===void 0?null:f,h=t.title,d=h===void 0?null:h,x=t.titleId,E=x===void 0?null:x,I=t.classes,_=I===void 0?[]:I,y=t.attributes,v=y===void 0?{}:y,M=t.styles,C=M===void 0?{}:M;if(n){var A=n.prefix,W=n.iconName,k=n.icon;return bt(l({type:"icon"},n),function(){return yt(),m.autoA11y&&(d?v["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(E||D()):(v["aria-hidden"]="true",v.focusable="false")),ut({icons:{main:cn(k),mask:s?cn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:W,transform:l({},O,e),symbol:i,title:d,maskId:c,titleId:E,extra:{attributes:v,styles:C,classes:_}})})}});export{un as f,It as i,kt as l,xt as p};