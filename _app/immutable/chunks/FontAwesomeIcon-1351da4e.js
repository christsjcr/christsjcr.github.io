var Yn=Object.defineProperty;var rn=Object.getOwnPropertySymbols;var Xn=Object.prototype.hasOwnProperty,Vn=Object.prototype.propertyIsEnumerable;var on=(n,t,e)=>t in n?Yn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,sn=(n,t)=>{for(var e in t||(t={}))Xn.call(t,e)&&on(n,e,t[e]);if(rn)for(var e of rn(t))Vn.call(t,e)&&on(n,e,t[e]);return n};import{S as Bn,i as Gn,s as qn,T as Jn,l as fn,U as Qn,g as Zn,E as ln,d as Kn,V as $n,C as cn,W as un}from"./index-afe72f92.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function L(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(t){return typeof t}:L=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(n)}function nt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function mn(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function tt(n,t,e){return t&&mn(n.prototype,t),e&&mn(n,e),n}function et(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{},a=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.forEach(function(r){et(n,r,e[r])})}return n}function zn(n,t){return at(n)||rt(n,t)||it()}function at(n){if(Array.isArray(n))return n}function rt(n,t){var e=[],a=!0,r=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(a=(s=o.next()).done)&&(e.push(s.value),!(t&&e.length===t));a=!0);}catch(l){r=!0,i=l}finally{try{!a&&o.return!=null&&o.return()}finally{if(r)throw i}}return e}function it(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var dn=function(){},$={},In={},ot=null,Mn={mark:dn,measure:dn};try{typeof window!="undefined"&&($=window),typeof document!="undefined"&&(In=document),typeof MutationObserver!="undefined"&&(ot=MutationObserver),typeof performance!="undefined"&&(Mn=performance)}catch{}var st=$.navigator||{},hn=st.userAgent,gn=hn===void 0?"":hn,Y=$,g=In,D=Mn;Y.document;var nn=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function";~gn.indexOf("MSIE")||~gn.indexOf("Trident/");var A="___FONT_AWESOME___",Cn="fa",En="svg-inline--fa",ft="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var V={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=Y.FontAwesomeConfig||{};function lt(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function ct(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var ut=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ut.forEach(function(n){var t=zn(n,2),e=t[0],a=t[1],r=ct(lt(e));r!=null&&(An[a]=r)})}var mt={familyPrefix:Cn,replacementClass:En,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=c({},mt,An);q.autoReplaceSvg||(q.observeMutations=!1);var y=c({},q);Y.FontAwesomeConfig=y;var O=Y||{};O[A]||(O[A]={});O[A].styles||(O[A].styles={});O[A].hooks||(O[A].hooks={});O[A].shims||(O[A].shims=[]);var M=O[A],dt=[],ht=function n(){g.removeEventListener("DOMContentLoaded",n),J=1,dt.map(function(t){return t()})},J=!1;nn&&(J=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),J||g.addEventListener("DOMContentLoaded",ht));var tn="pending",On="settled",F="fulfilled",W="rejected",gt=function(){},Sn=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",vt=typeof setImmediate=="undefined"?setTimeout:setImmediate,_=[],Q;function yt(){for(var n=0;n<_.length;n++)_[n][0](_[n][1]);_=[],Q=!1}function H(n,t){_.push([n,t]),Q||(Q=!0,vt(yt,0))}function bt(n,t){function e(r){en(t,r)}function a(r){R(t,r)}try{n(e,a)}catch(r){a(r)}}function Pn(n){var t=n.owner,e=t._state,a=t._data,r=n[e],i=n.then;if(typeof r=="function"){e=F;try{a=r(a)}catch(o){R(i,o)}}Tn(i,a)||(e===F&&en(i,a),e===W&&R(i,a))}function Tn(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||L(t)==="object")){var a=t.then;if(typeof a=="function")return a.call(t,function(r){e||(e=!0,t===r?Nn(n,r):en(n,r))},function(r){e||(e=!0,R(n,r))}),!0}}catch(r){return e||R(n,r),!0}return!1}function en(n,t){(n===t||!Tn(n,t))&&Nn(n,t)}function Nn(n,t){n._state===tn&&(n._state=On,n._data=t,H(pt,n))}function R(n,t){n._state===tn&&(n._state=On,n._data=t,H(wt,n))}function _n(n){n._then=n._then.forEach(Pn)}function pt(n){n._state=F,_n(n)}function wt(n){n._state=W,_n(n),!n._handled&&Sn&&global.process.emit("unhandledRejection",n._data,n)}function kt(n){global.process.emit("rejectionHandled",n)}function p(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof p))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],bt(n,this)}p.prototype={constructor:p,_state:tn,_then:null,_data:void 0,_handled:!1,then:function(t,e){var a={owner:this,then:new this.constructor(gt),fulfilled:t,rejected:e};return(e||t)&&!this._handled&&(this._handled=!0,this._state===W&&Sn&&H(kt,this)),this._state===F||this._state===W?H(Pn,a):this._then.push(a),a.then},catch:function(t){return this.then(null,t)}};p.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new p(function(t,e){var a=[],r=0;function i(l){return r++,function(u){a[l]=u,--r||t(a)}}for(var o=0,s;o<n.length;o++)s=n[o],s&&typeof s.then=="function"?s.then(i(o),e):a[o]=s;r||t(a)})};p.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new p(function(t,e){for(var a=0,r;a<n.length;a++)r=n[a],r&&typeof r.then=="function"?r.then(t,e):t(r)})};p.resolve=function(n){return n&&L(n)==="object"&&n.constructor===p?n:new p(function(t){t(n)})};p.reject=function(n){return new p(function(t,e){e(n)})};var N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xt(n){if(!(!n||!nn)){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(t,a),n}}var zt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var n=12,t="";n-- >0;)t+=zt[Math.random()*62|0];return t}function Ln(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function It(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Ln(n[e]),'" ')},"").trim()}function Rn(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function jn(n){return n.size!==N.size||n.x!==N.x||n.y!==N.y||n.rotate!==N.rotate||n.flipX||n.flipY}function Dn(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}var B={x:0,y:0,width:"100%",height:"100%"};function vn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Mt(n){return n.tag==="g"?n.children:[n]}function Ct(n){var t=n.children,e=n.attributes,a=n.main,r=n.mask,i=n.maskId,o=n.transform,s=a.width,l=a.icon,u=r.width,d=r.icon,m=Dn({transform:o,containerWidth:u,iconWidth:s}),w={tag:"rect",attributes:c({},B,{fill:"white"})},k=l.children?{children:l.children.map(vn)}:{},x={tag:"g",attributes:c({},m.inner),children:[vn(c({tag:l.tag,attributes:c({},l.attributes,m.path)},k))]},b={tag:"g",attributes:c({},m.outer),children:[x]},v="mask-".concat(i||U()),h="clip-".concat(i||U()),z={tag:"mask",attributes:c({},B,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Mt(d)},z]};return t.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},B)}),{children:t,attributes:e}}function Et(n){var t=n.children,e=n.attributes,a=n.main,r=n.transform,i=n.styles,o=Rn(i);if(o.length>0&&(e.style=o),jn(r)){var s=Dn({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:c({},s.outer),children:[{tag:"g",attributes:c({},s.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c({},a.icon.attributes,s.path)}]}]})}else t.push(a.icon);return{children:t,attributes:e}}function At(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(jn(o)&&e.found&&!a.found){var s=e.width,l=e.height,u={x:s/l/2,y:.5};r.style=Rn(c({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ot(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(y.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},r,{id:o}),children:a}]}]}function St(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,l=n.title,u=n.maskId,d=n.titleId,m=n.extra,w=n.watchable,k=w===void 0?!1:w,x=a.found?a:e,b=x.width,v=x.height,h=r==="fak",z=h?"":"fa-w-".concat(Math.ceil(b/v*16)),C=[y.replacementClass,i?"".concat(y.familyPrefix,"-").concat(i):"",z].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),I={children:[],attributes:c({},m.attributes,{"data-prefix":r,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(v)})},P=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/v*16*.0625,"em")}:{};k&&(I.attributes[ft]=""),l&&I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||U())},children:[l]});var f=c({},I,{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:c({},P,m.styles)}),E=a.found&&e.found?Ct(f):Et(f),T=E.children,S=E.attributes;return f.children=T,f.attributes=S,s?Ot(f):At(f)}var yn=function(){};y.measurePerformance&&D&&D.mark&&D.measure;var Pt=function(t,e){return function(a,r,i,o){return t.call(e,a,r,i,o)}},G=function(t,e,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Pt(e,r):e,l,u,d;for(a===void 0?(l=1,d=t[i[0]]):(l=0,d=a);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Fn(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Object.keys(t).reduce(function(o,s){var l=t[s],u=!!l.icon;return u?o[l.iconName]=l.icon:o[s]=l,o},{});typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(n,i):M.styles[n]=c({},M.styles[n]||{},i),n==="fas"&&Fn("fa",t)}var bn=M.styles,Tt=M.shims,Wn=function(){var t=function(r){return G(bn,function(i,o,s){return i[s]=G(o,r,{}),i},{})};t(function(a,r,i){return r[3]&&(a[r[3]]=i),a}),t(function(a,r,i){var o=r[2];return a[i]=i,o.forEach(function(s){a[s]=i}),a});var e="far"in bn;G(Tt,function(a,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!e&&(o="fas"),a[i]={prefix:o,iconName:s},a},{})};Wn();M.styles;function pn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function Hn(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Ln(n):"<".concat(t," ").concat(It(a),">").concat(i.map(Hn).join(""),"</").concat(t,">")}var Nt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e):e};function Z(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}Z.prototype=Object.create(Error.prototype);Z.prototype.constructor=Z;var X={fill:"currentColor"},Un={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c({},X,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var an=c({},Un,{attributeName:"opacity"});c({},X,{cx:"256",cy:"364",r:"28"}),c({},Un,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},an,{values:"1;0;1;1;0;1;"});c({},X,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},an,{values:"1;0;0;0;0;1;"});c({},X,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},an,{values:"0;0;1;1;0;0;"});M.styles;function wn(n){var t=n[0],e=n[1],a=n.slice(4),r=zn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(y.familyPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:e,icon:o}}M.styles;var _t=`svg:not(:root).svg-inline--fa {
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
}`;function Lt(){var n=Cn,t=En,e=y.familyPrefix,a=y.replacementClass,r=_t;if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Rt=function(){function n(){nt(this,n),this.definitions={}}return tt(n,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c({},e.definitions[s]||{},o[s]),Fn(s,o[s]),Wn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon;e[s]||(e[s]={}),e[s][l]=u}),e}}]),n}();function jt(){y.autoAddCss&&!kn&&(xt(Lt()),kn=!0)}function Dt(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return Hn(a)})}}),Object.defineProperty(n,"node",{get:function(){if(!!nn){var a=g.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function K(n){var t=n.prefix,e=t===void 0?"fa":t,a=n.iconName;if(!!a)return pn(Wt.definitions,e,a)||pn(M.styles,e,a)}function Ft(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:K(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:K(r||{})),n(a,c({},e,{mask:r}))}}var Wt=new Rt,kn=!1,Ht={transform:function(t){return Nt(t)}},Ut=Ft(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,a=e===void 0?N:e,r=t.symbol,i=r===void 0?!1:r,o=t.mask,s=o===void 0?null:o,l=t.maskId,u=l===void 0?null:l,d=t.title,m=d===void 0?null:d,w=t.titleId,k=w===void 0?null:w,x=t.classes,b=x===void 0?[]:x,v=t.attributes,h=v===void 0?{}:v,z=t.styles,C=z===void 0?{}:z;if(!!n){var I=n.prefix,P=n.iconName,f=n.icon;return Dt(c({type:"icon"},n),function(){return jt(),y.autoA11y&&(m?h["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(k||U()):(h["aria-hidden"]="true",h.focusable="false")),St({icons:{main:wn(f),mask:s?wn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:P,transform:c({},N,a),symbol:i,title:m,maskId:u,titleId:k,extra:{attributes:h,styles:C,classes:b}})})}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Gt={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},qt={prefix:"fab",iconName:"facebook-messenger",icon:[512,512,[],"f39f","M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"]},Jt={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Qt={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Zt={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},Kt={prefix:"fas",iconName:"globe",icon:[496,512,[],"f0ac","M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]},$t={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};function xn(n){if(n===null||typeof n=="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2){const[t,e]=n;return{prefix:t,iconName:e}}if(typeof n=="string")return{prefix:"fas",iconName:n}}function Yt(n){let t,e;return{c(){t=new Jn(!1),e=fn(),this.h()},l(a){t=Qn(a,!1),e=fn(),this.h()},h(){t.a=e},m(a,r){t.m(n[0],a,r),Zn(a,e,r)},p(a,[r]){r&1&&t.p(a[0])},i:ln,o:ln,d(a){a&&Kn(e),a&&t.d()}}}function Xt(n,t,e){let a,r,{border:i=!1}=t,{fixedWidth:o=!1}=t,{flip:s=null}=t,{icon:l=null}=t,{mask:u=null}=t,{listItem:d=!1}=t,{pull:m=null}=t,{pulse:w=!1}=t,{rotation:k=null}=t,{swapOpacity:x=!1}=t,{size:b=null}=t,{spin:v=!1}=t,{transform:h={}}=t,{symbol:z=!1}=t,{title:C=null}=t,{inverse:I=!1}=t,P="";return $n(()=>{const f=xn(l);if(!f)return;const E=K(f),T=Ut(E||l,{symbol:z,title:C,styles:t.style?r:{},classes:[...Object.keys(a).map(S=>a[S]?S:null).filter(S=>!!S),(t.class||"").split(" ")],transform:sn({},typeof h=="string"?Ht.transform(h):h),mask:xn(u)});if(!T){console.warn("Could not find one or more icon(s)",E||l,u);return}e(0,P=T.html)}),n.$$set=f=>{e(19,t=cn(cn({},t),un(f))),"border"in f&&e(1,i=f.border),"fixedWidth"in f&&e(2,o=f.fixedWidth),"flip"in f&&e(3,s=f.flip),"icon"in f&&e(4,l=f.icon),"mask"in f&&e(5,u=f.mask),"listItem"in f&&e(6,d=f.listItem),"pull"in f&&e(7,m=f.pull),"pulse"in f&&e(8,w=f.pulse),"rotation"in f&&e(9,k=f.rotation),"swapOpacity"in f&&e(10,x=f.swapOpacity),"size"in f&&e(11,b=f.size),"spin"in f&&e(12,v=f.spin),"transform"in f&&e(13,h=f.transform),"symbol"in f&&e(14,z=f.symbol),"title"in f&&e(15,C=f.title),"inverse"in f&&e(16,I=f.inverse)},n.$$.update=()=>{n.$$.dirty&73678&&(a={"fa-spin":v,"fa-pulse":w,"fa-fw":o,"fa-border":i,"fa-li":d,"fa-inverse":I,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${b}`]:b!==null,[`fa-rotate-${k}`]:k!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":x}),r=(t.style||"").split(";").filter(f=>!!f).map(f=>f.split(":").map(E=>E.trim())).reduce((f,E)=>{const[T,S]=E;return f[T]=S,f},{})},t=un(t),[P,i,o,s,l,u,d,m,w,k,x,b,v,h,z,C,I]}class ne extends Bn{constructor(t){super(),Gn(this,t,Xt,Yt,qn,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}export{ne as F,Gt as a,qt as b,Qt as c,Zt as d,$t as e,Jt as f,Kt as g,Wt as l};
