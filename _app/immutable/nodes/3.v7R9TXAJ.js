import{s as q,e as u,a as E,c as f,b as $,f as m,g as J,l as h,i as R,h as d,n as P,m as G}from"../chunks/scheduler.8yXm6sNE.js";import{S as N,i as S,c as _,a as v,m as C,t as b,b as y,d as x}from"../chunks/index.DWLfrfOH.js";import{N as w}from"../chunks/NotificationLink.CH-h8cv_.js";import{P as A}from"../chunks/PageHeader.CpvBuK9z.js";function H(g){let t,n,e,o,s,a,k,c,l,p;return e=new w({props:{href:"/about/committee",title:"Committee 🧍‍♀️🧍🧍‍♂️",content:"Get to know the current members of the JCR Committee!"}}),a=new w({props:{href:"/about/constitution-and-guidelines",title:"Constitution & Guidelines 📜",content:`Take a look at a copy of the JCR constitution, 
                and explore the exciting world of funding guidelines & financial conduct.`}}),l=new w({props:{href:"/about/meetings",title:"Meetings ⏰",content:"Interested in changing Christ's for the better? Come to our meetings!"}}),{c(){t=u("div"),n=u("div"),_(e.$$.fragment),o=E(),s=u("div"),_(a.$$.fragment),k=E(),c=u("div"),_(l.$$.fragment),this.h()},l(i){t=f(i,"DIV",{class:!0});var r=$(t);n=f(r,"DIV",{class:!0});var D=$(n);v(e.$$.fragment,D),D.forEach(m),o=J(r),s=f(r,"DIV",{class:!0});var I=$(s);v(a.$$.fragment,I),I.forEach(m),k=J(r),c=f(r,"DIV",{class:!0});var V=$(c);v(l.$$.fragment,V),V.forEach(m),r.forEach(m),this.h()},h(){h(n,"class","column is-one-third"),h(s,"class","column is-one-third"),h(c,"class","column is-one-third"),h(t,"class","columns my-6")},m(i,r){R(i,t,r),d(t,n),C(e,n,null),d(t,o),d(t,s),C(a,s,null),d(t,k),d(t,c),C(l,c,null),p=!0},p:P,i(i){p||(b(e.$$.fragment,i),b(a.$$.fragment,i),b(l.$$.fragment,i),p=!0)},o(i){y(e.$$.fragment,i),y(a.$$.fragment,i),y(l.$$.fragment,i),p=!1},d(i){i&&m(t),x(e),x(a),x(l)}}}function L(g){let t,n=`Christ's JCR is the undergraduate student body at Christ's College,
        Cambridge. We are your student-elected Committee, representing your
        interests to help you make the most of your time here!`;return{c(){t=u("div"),t.textContent=n,this.h()},l(e){t=f(e,"DIV",{slot:!0,"data-svelte-h":!0}),G(t)!=="svelte-1ogq7d0"&&(t.textContent=n),this.h()},h(){h(t,"slot","description")},m(e,o){R(e,t,o)},p:P,d(e){e&&m(t)}}}function M(g){let t,n;return t=new A({props:{current:"/about",title:"About",metaDescription:"Christ's JCR is the undergraduate student body at Christ's College, Cambridge.",$$slots:{description:[L],default:[H]},$$scope:{ctx:g}}}),{c(){_(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){C(t,e,o),n=!0},p(e,[o]){const s={};o&1&&(s.$$scope={dirty:o,ctx:e}),t.$set(s)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}class B extends N{constructor(t){super(),S(this,t,null,M,q,{})}}export{B as component};