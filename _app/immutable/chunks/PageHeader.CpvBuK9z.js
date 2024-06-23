import{s as ee,G as B,i as V,n as O,f as d,k as le,e as k,a as R,c as w,b as q,g as j,l as _,h as D,F as he,t as te,d as ie,w as L,j as se,o as ae,H as _e,u as ne,p as re,q as oe,I as de,v as ge,J as G,K as fe,L as be}from"./scheduler.8yXm6sNE.js";import{S as ue,i as ce,c as pe,a as ve,m as ke,t as H,g as we,b as T,e as Ee,d as Ie}from"./index.DWLfrfOH.js";import{p as me,e as U,t as P,w as De}from"./width.CQGpMkn5.js";function F(i,l,e){const t=i.slice();return t[3]=l[e],t}function Q(i){let l,e,t,a,s,r,n,f=U(i[0]),u=[];for(let h=0;h<f.length;h+=1)u[h]=W(F(i,f,h));return{c(){l=k("div"),e=k("nav"),t=k("ul");for(let h=0;h<u.length;h+=1)u[h].c();a=R(),s=k("hr"),r=R(),n=k("br"),this.h()},l(h){l=w(h,"DIV",{class:!0});var b=q(l);e=w(b,"NAV",{class:!0,"aria-label":!0});var m=q(e);t=w(m,"UL",{});var C=q(t);for(let A=0;A<u.length;A+=1)u[A].l(C);C.forEach(d),m.forEach(d),b.forEach(d),a=j(h),s=w(h,"HR",{}),r=j(h),n=w(h,"BR",{}),this.h()},h(){_(e,"class","breadcrumb is-medium has-arrow-separator is-centered"),_(e,"aria-label","breadcrumbs"),_(l,"class","block mb-3 px-2")},m(h,b){V(h,l,b),D(l,e),D(e,t);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(t,null);V(h,a,b),V(h,s,b),V(h,r,b),V(h,n,b)},p(h,b){if(b&1){f=U(h[0]);let m;for(m=0;m<f.length;m+=1){const C=F(h,f,m);u[m]?u[m].p(C,b):(u[m]=W(C),u[m].c(),u[m].m(t,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=f.length}},d(h){h&&(d(l),d(a),d(s),d(r),d(n)),he(u,h)}}}function W(i){let l,e,t=i[3].name+"",a,s,r,n;return{c(){l=k("li"),e=k("a"),a=te(t),n=R(),this.h()},l(f){l=w(f,"LI",{});var u=q(l);e=w(u,"A",{"aria-current":!0,href:!0});var h=q(e);a=ie(h,t),h.forEach(d),n=j(u),u.forEach(d),this.h()},h(){_(e,"aria-current",s=i[3].last?"page":!1),_(e,"href",r=i[3].route),L(l,"is-active",i[3].last)},m(f,u){V(f,l,u),D(l,e),D(e,a),D(l,n)},p(f,u){u&1&&t!==(t=f[3].name+"")&&se(a,t),u&1&&s!==(s=f[3].last?"page":!1)&&_(e,"aria-current",s),u&1&&r!==(r=f[3].route)&&_(e,"href",r),u&1&&L(l,"is-active",f[3].last)},d(f){f&&d(l)}}}function Ce(i){let l,e=i[0].length>1&&Q(i);return{c(){e&&e.c(),l=B()},l(t){e&&e.l(t),l=B()},m(t,a){e&&e.m(t,a),V(t,l,a)},p(t,[a]){t[0].length>1?e?e.p(t,a):(e=Q(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&d(l),e&&e.d(t)}}}function Se(i,l,e){let t,a;le(i,me,r=>e(2,a=r));let s=[];return i.$$.update=()=>{if(i.$$.dirty&4&&e(1,t=a.current),i.$$.dirty&2){let r=t.split("/").slice(1);e(0,s=r.map((n,f)=>({route:"/"+r.slice(0,f+1).join("/"),name:n.split("-").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ").replace(" And "," & ").replace(" Of "," of "),last:f==r.length-1})))}},[s,t,a]}class Ve extends ue{constructor(l){super(),ce(this,l,Se,Ce,ee,{})}}const Le=i=>({}),X=i=>({});function Y(i){let l,e=i[9]&&Z(i);return{c(){e&&e.c(),l=B()},l(t){e&&e.l(t),l=B()},m(t,a){e&&e.m(t,a),V(t,l,a)},p(t,a){t[9]?e?e.p(t,a):(e=Z(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){t&&d(l),e&&e.d(t)}}}function Z(i){let l,e,t,a,s,r;return{c(){l=k("div"),e=k("img"),this.h()},l(n){l=w(n,"DIV",{class:!0});var f=q(l);e=w(f,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),f.forEach(d),this.h()},h(){G(e.src,t=i[1].src)||_(e,"src",t),_(e,"alt",a=i[1].alt),_(e,"class","darkened svelte-xewodc"),_(e,"width","2000"),_(e,"height","875"),_(l,"class","fill svelte-xewodc"),L(l,"showing",i[10])},m(n,f){V(n,l,f),D(l,e),s||(r=fe(i[13].call(null,e)),s=!0)},p(n,f){f&2&&!G(e.src,t=n[1].src)&&_(e,"src",t),f&2&&a!==(a=n[1].alt)&&_(e,"alt",a),f&1024&&L(l,"showing",n[10])},d(n){n&&d(l),s=!1,r()}}}function y(i){let l,e,t,a;return{c(){l=k("img"),this.h()},l(s){l=w(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){G(l.src,e=i[3])||_(l,"src",e),_(l,"alt",i[2]),_(l,"class","headerImg svelte-xewodc"),L(l,"showing",i[11])},m(s,r){V(s,l,r),t||(a=fe(i[14].call(null,l)),t=!0)},p(s,r){r&8&&!G(l.src,e=s[3])&&_(l,"src",e),r&4&&_(l,"alt",s[2]),r&2048&&L(l,"showing",s[11])},d(s){s&&d(l),t=!1,a()}}}function $(i){let l,e,t;return{c(){l=k("div"),e=k("h1"),t=te(i[2]),this.h()},l(a){l=w(a,"DIV",{class:!0});var s=q(l);e=w(s,"H1",{class:!0});var r=q(e);t=ie(r,i[2]),r.forEach(d),s.forEach(d),this.h()},h(){_(e,"class","title is-1 has-text-white"),_(l,"class","header svelte-xewodc")},m(a,s){V(a,l,s),D(l,e),D(e,t)},p(a,s){s&4&&se(t,a[2])},d(a){a&&d(l)}}}function x(i){let l,e,t;const a=i[17].description,s=ae(a,i,i[16],X);return{c(){l=k("div"),e=k("blockquote"),s&&s.c(),this.h()},l(r){l=w(r,"DIV",{class:!0});var n=q(l);e=w(n,"BLOCKQUOTE",{});var f=q(e);s&&s.l(f),f.forEach(d),n.forEach(d),this.h()},h(){_(l,"class","content")},m(r,n){V(r,l,n),D(l,e),s&&s.m(e,null),t=!0},p(r,n){s&&s.p&&(!t||n&65536)&&ne(s,a,r,r[16],t?oe(a,r[16],n,Le):re(r[16]),X)},i(r){t||(H(s,r),t=!0)},o(r){T(s,r),t=!1},d(r){r&&d(l),s&&s.d(r)}}}function qe(i){let l,e,t,a,s,r,n,f,u,h,b,m,C,A,J,S;document.title=l=i[6]?"Christ's JCR":`${i[2]} | Christ's JCR`;let E=i[1]&&Y(i),v=i[3]&&i[9]&&y(i),I=(!i[3]||!i[11]&&i[8])&&$(i);C=new Ve({});let p=i[15].description&&x(i);const N=i[17].default,c=ae(N,i,i[16],null);return{c(){e=k("meta"),t=k("meta"),a=k("link"),r=R(),n=k("div"),E&&E.c(),f=R(),v&&v.c(),u=R(),I&&I.c(),h=R(),b=k("div"),m=k("div"),pe(C.$$.fragment),A=R(),p&&p.c(),J=R(),c&&c.c(),this.h()},l(o){const g=_e("svelte-1n4cf0a",document.head);e=w(g,"META",{name:!0,content:!0}),t=w(g,"META",{name:!0,content:!0}),a=w(g,"LINK",{rel:!0,href:!0}),g.forEach(d),r=j(o),n=w(o,"DIV",{class:!0});var M=q(n);E&&E.l(M),f=j(M),v&&v.l(M),u=j(M),I&&I.l(M),M.forEach(d),h=j(o),b=w(o,"DIV",{class:!0});var K=q(b);m=w(K,"DIV",{id:!0,class:!0});var z=q(m);ve(C.$$.fragment,z),A=j(z),p&&p.l(z),J=j(z),c&&c.l(z),z.forEach(d),K.forEach(d),this.h()},h(){_(e,"name","description"),_(e,"content",i[4]),_(t,"name","robots"),_(t,"content","index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"),_(a,"rel","canonical"),_(a,"href",s=`https://thejcr.co.uk${i[0]==="/"?"":i[0]}`),_(n,"class","wrapper svelte-xewodc"),L(n,"black",i[3]!=null),L(n,"large",i[5]=="large"),L(n,"medium",i[5]=="medium"),_(m,"id","inner"),_(m,"class","mx-4 m-5"),L(m,"mx-5",i[12]>=P.min),_(b,"class","container")},m(o,g){D(document.head,e),D(document.head,t),D(document.head,a),V(o,r,g),V(o,n,g),E&&E.m(n,null),D(n,f),v&&v.m(n,null),D(n,u),I&&I.m(n,null),i[18](n),V(o,h,g),V(o,b,g),D(b,m),ke(C,m,null),D(m,A),p&&p.m(m,null),D(m,J),c&&c.m(m,null),S=!0},p(o,[g]){(!S||g&68)&&l!==(l=o[6]?"Christ's JCR":`${o[2]} | Christ's JCR`)&&(document.title=l),(!S||g&16)&&_(e,"content",o[4]),(!S||g&1&&s!==(s=`https://thejcr.co.uk${o[0]==="/"?"":o[0]}`))&&_(a,"href",s),o[1]?E?E.p(o,g):(E=Y(o),E.c(),E.m(n,f)):E&&(E.d(1),E=null),o[3]&&o[9]?v?v.p(o,g):(v=y(o),v.c(),v.m(n,u)):v&&(v.d(1),v=null),!o[3]||!o[11]&&o[8]?I?I.p(o,g):(I=$(o),I.c(),I.m(n,null)):I&&(I.d(1),I=null),(!S||g&8)&&L(n,"black",o[3]!=null),(!S||g&32)&&L(n,"large",o[5]=="large"),(!S||g&32)&&L(n,"medium",o[5]=="medium"),o[15].description?p?(p.p(o,g),g&32768&&H(p,1)):(p=x(o),p.c(),H(p,1),p.m(m,J)):p&&(we(),T(p,1,1,()=>{p=null}),Ee()),c&&c.p&&(!S||g&65536)&&ne(c,N,o,o[16],S?oe(N,o[16],g,null):re(o[16]),null),(!S||g&4096)&&L(m,"mx-5",o[12]>=P.min)},i(o){S||(H(C.$$.fragment,o),H(p),H(c,o),S=!0)},o(o){T(C.$$.fragment,o),T(p),T(c,o),S=!1},d(o){o&&(d(r),d(n),d(h),d(b)),d(e),d(t),d(a),E&&E.d(),v&&v.d(),I&&I.d(),i[18](null),Ie(C),p&&p.d(),c&&c.d(o)}}}function Ae(i,l,e){let t;le(i,De,c=>e(12,t=c));let{$$slots:a={},$$scope:s}=l;const r=de(a);let{current:n}=l,{background:f=null}=l,{title:u}=l,{titleSrc:h=null}=l,{metaDescription:b}=l,{size:m="small"}=l,{home:C=!1}=l,A=!1,J=!1,S=!1,E=!1,v;ge(()=>{e(9,J=!0),setTimeout(()=>e(8,A=!0),300)});const I=c=>{c.addEventListener("load",()=>{e(10,S=!0)})},p=c=>{c.addEventListener("load",()=>{e(11,E=!0)})};function N(c){be[c?"unshift":"push"](()=>{v=c,e(7,v)})}return i.$$set=c=>{"current"in c&&e(0,n=c.current),"background"in c&&e(1,f=c.background),"title"in c&&e(2,u=c.title),"titleSrc"in c&&e(3,h=c.titleSrc),"metaDescription"in c&&e(4,b=c.metaDescription),"size"in c&&e(5,m=c.size),"home"in c&&e(6,C=c.home),"$$scope"in c&&e(16,s=c.$$scope)},i.$$.update=()=>{i.$$.dirty&131&&me.set({current:n,type:f==null?"primary":"image",header:v})},[n,f,u,h,b,m,C,v,A,J,S,E,t,I,p,r,s,a,N]}class Me extends ue{constructor(l){super(),ce(this,l,Ae,qe,ee,{current:0,background:1,title:2,titleSrc:3,metaDescription:4,size:5,home:6})}}export{Me as P};
