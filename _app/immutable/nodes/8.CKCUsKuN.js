import{s as A,v as H,e as $,t as b,a as P,c as g,b as v,d as E,f as m,g as w,l as d,i as k,h as u,j as R}from"../chunks/scheduler.8yXm6sNE.js";import{S as M,i as N,c as I,a as L,m as U,t as j,b as q,d as z}from"../chunks/index.DWLfrfOH.js";import{C as O}from"../chunks/Content.BUTkGOuy.js";import{P as T}from"../chunks/PageHeader.CpvBuK9z.js";function C(l){let t,s;return{c(){t=$("p"),s=b(l[1]),this.h()},l(e){t=g(e,"P",{class:!0});var a=v(t);s=E(a,l[1]),a.forEach(m),this.h()},h(){d(t,"class","subtitle")},m(e,a){k(e,t,a),u(t,s)},p(e,a){a&2&&R(s,e[1])},d(e){e&&m(t)}}}function y(l){let t,s,e;return{c(){t=$("p"),s=b("Reason: "),e=b(l[2])},l(a){t=g(a,"P",{});var r=v(t);s=E(r,"Reason: "),e=E(r,l[2]),r.forEach(m)},m(a,r){k(a,t,r),u(t,s),u(t,e)},p(a,r){r&4&&R(e,a[2])},d(a){a&&m(t)}}}function D(l){let t,s,e,a;return{c(){t=$("p"),s=$("u"),e=$("a"),a=b("Retry ↺"),this.h()},l(r){t=g(r,"P",{class:!0});var c=v(t);s=g(c,"U",{});var p=v(s);e=g(p,"A",{class:!0,href:!0});var n=v(e);a=E(n,"Retry ↺"),n.forEach(m),p.forEach(m),c.forEach(m),this.h()},h(){d(e,"class","link"),d(e,"href",l[3]),d(t,"class","subtitle")},m(r,c){k(r,t,c),u(t,s),u(s,e),u(e,a)},p(r,c){c&8&&d(e,"href",r[3])},d(r){r&&m(t)}}}function V(l){let t,s,e,a,r,c,p,n=l[1]&&C(l),o=l[2]&&y(l),i=l[3]&&D(l);return{c(){t=$("section"),s=$("div"),e=$("p"),a=b(l[0]),r=P(),n&&n.c(),c=P(),o&&o.c(),p=P(),i&&i.c(),this.h()},l(f){t=g(f,"SECTION",{class:!0});var _=v(t);s=g(_,"DIV",{class:!0});var h=v(s);e=g(h,"P",{class:!0});var S=v(e);a=E(S,l[0]),S.forEach(m),r=w(h),n&&n.l(h),c=w(h),o&&o.l(h),p=w(h),i&&i.l(h),h.forEach(m),_.forEach(m),this.h()},h(){d(e,"class","title"),d(s,"class","hero-body"),d(t,"class","hero is-warning")},m(f,_){k(f,t,_),u(t,s),u(s,e),u(e,a),u(s,r),n&&n.m(s,null),u(s,c),o&&o.m(s,null),u(s,p),i&&i.m(s,null)},p(f,_){_&1&&R(a,f[0]),f[1]?n?n.p(f,_):(n=C(f),n.c(),n.m(s,c)):n&&(n.d(1),n=null),f[2]?o?o.p(f,_):(o=y(f),o.c(),o.m(s,p)):o&&(o.d(1),o=null),f[3]?i?i.p(f,_):(i=D(f),i.c(),i.m(s,null)):i&&(i.d(1),i=null)},d(f){f&&m(t),n&&n.d(),o&&o.d(),i&&i.d()}}}function B(l){let t,s;return t=new O({props:{$$slots:{default:[V]},$$scope:{ctx:l}}}),{c(){I(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,a){U(t,e,a),s=!0},p(e,a){const r={};a&31&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){s||(j(t.$$.fragment,e),s=!0)},o(e){q(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function F(l){let t,s;return t=new T({props:{current:"/error",title:"Error",size:"small",metaDescription:"",$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){I(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,a){U(t,e,a),s=!0},p(e,[a]){const r={};a&31&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){s||(j(t.$$.fragment,e),s=!0)},o(e){q(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function G(l,t,s){let e,a,r,c;return H(()=>{var p;const n=new URLSearchParams(document.location.search);s(0,e=(p=n.get("title"))!==null&&p!==void 0?p:"Something went wrong!"),s(1,a=n.get("message")),s(2,r=n.get("reason")),s(3,c=n.get("retry"))}),[e,a,r,c]}class X extends M{constructor(t){super(),N(this,t,G,F,A,{})}}export{X as component};