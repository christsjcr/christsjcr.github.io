import{S as K,i as Y,s as Q,k as w,l as y,m as $,h as f,n as _,b as D,G as c,O as P,L as z,q as R,a as S,r as T,c as A,H as X,u as U,C as ke,v as Z,w as x,x as ee,I as Ce,J as $e,K as Ee,f as J,t as V,y as te,A as Ie,e as j,N as be,g as we,d as ye,D as Oe,F as W}from"../../../../chunks/index-390bd58d.js";import{P as De}from"../../../../chunks/PageHeader-3abd2a7b.js";import{d as Se,w as Ae}from"../../../../chunks/width-3b351736.js";function ue(a,e,s){const t=a.slice();return t[3]=e[s],t}function he(a,e,s){const t=a.slice();return t[6]=e[s],t}function fe(a){let e,s,t=(a[6].label?a[6].label:a[6].title)+"",i,o,r,n,l;function u(...g){return a[2](a[6],...g)}return{c(){e=w("li"),s=w("a"),i=R(t),r=S(),this.h()},l(g){e=y(g,"LI",{});var k=$(e);s=y(k,"A",{href:!0});var m=$(s);i=T(m,t),m.forEach(f),r=A(k),k.forEach(f),this.h()},h(){_(s,"href",o=`#${a[6].id}`)},m(g,k){D(g,e,k),c(e,s),c(s,i),c(e,r),n||(l=X(s,"click",u),n=!0)},p(g,k){a=g,k&1&&t!==(t=(a[6].label?a[6].label:a[6].title)+"")&&U(i,t),k&1&&o!==(o=`#${a[6].id}`)&&_(s,"href",o)},d(g){g&&f(e),n=!1,l()}}}function de(a){let e,s,t=a[3].category+"",i,o,r,n,l,u,g;function k(...v){return a[1](a[3],...v)}let m=a[3].items,b=[];for(let v=0;v<m.length;v+=1)b[v]=fe(he(a,m,v));return{c(){e=w("li"),s=w("a"),i=R(t),r=S(),n=w("ul");for(let v=0;v<b.length;v+=1)b[v].c();l=S(),this.h()},l(v){e=y(v,"LI",{});var h=$(e);s=y(h,"A",{class:!0,href:!0});var E=$(s);i=T(E,t),E.forEach(f),r=A(h),n=y(h,"UL",{});var d=$(n);for(let p=0;p<b.length;p+=1)b[p].l(d);d.forEach(f),l=A(h),h.forEach(f),this.h()},h(){_(s,"class","is-active"),_(s,"href",o=`#${a[3].category}`)},m(v,h){D(v,e,h),c(e,s),c(s,i),c(e,r),c(e,n);for(let E=0;E<b.length;E+=1)b[E].m(n,null);c(e,l),u||(g=X(s,"click",k),u=!0)},p(v,h){if(a=v,h&1&&t!==(t=a[3].category+"")&&U(i,t),h&1&&o!==(o=`#${a[3].category}`)&&_(s,"href",o),h&1){m=a[3].items;let E;for(E=0;E<m.length;E+=1){const d=he(a,m,E);b[E]?b[E].p(d,h):(b[E]=fe(d),b[E].c(),b[E].m(n,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=m.length}},d(v){v&&f(e),z(b,v),u=!1,g()}}}function Re(a){let e,s,t=a[0],i=[];for(let o=0;o<t.length;o+=1)i[o]=de(ue(a,t,o));return{c(){e=w("aside"),s=w("ul");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=y(o,"ASIDE",{class:!0,id:!0});var r=$(e);s=y(r,"UL",{class:!0});var n=$(s);for(let l=0;l<i.length;l+=1)i[l].l(n);n.forEach(f),r.forEach(f),this.h()},h(){_(s,"class","menu-list"),_(e,"class","menu mt-6"),_(e,"id","top")},m(o,r){D(o,e,r),c(e,s);for(let n=0;n<i.length;n+=1)i[n].m(s,null)},p(o,[r]){if(r&1){t=o[0];let n;for(n=0;n<t.length;n+=1){const l=ue(o,t,n);i[n]?i[n].p(l,r):(i[n]=de(l),i[n].c(),i[n].m(s,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=t.length}},i:P,o:P,d(o){o&&f(e),z(i,o)}}}function ie(a,e){a.preventDefault();let s=document.getElementById(e).getBoundingClientRect().top,t=document.documentElement,i=(window.pageYOffset||t.scrollTop)-(t.clientTop||0);Te(i+s-70,500)}const Te=(a,e)=>{const s=document.scrollingElement||document.documentElement,t=s.scrollTop,i=a-t,o=+new Date,r=(l,u,g,k)=>{let m=l;return m/=k/2,m<1?g/2*m*m+u:(m-=1,-g/2*(m*(m-2)-1)+u)},n=()=>{const u=+new Date-o;s.scrollTop=r(u,t,i,e),u<e?requestAnimationFrame(n):s.scrollTop=a};n()};function Fe(a,e,s){let{categories:t}=e;const i=(r,n)=>ie(n,r.category),o=(r,n)=>ie(n,r.id);return a.$$set=r=>{"categories"in r&&s(0,t=r.categories)},[t,i,o]}class Je extends K{constructor(e){super(),Y(this,e,Fe,Re,Q,{categories:0})}}function Ve(a){let e,s,t,i,o,r;t=new Je({props:{categories:a[0]}});const n=a[2].default,l=ke(n,a,a[1],null);return{c(){e=w("div"),s=w("div"),Z(t.$$.fragment),i=S(),o=w("div"),l&&l.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var g=$(e);s=y(g,"DIV",{class:!0});var k=$(s);x(t.$$.fragment,k),k.forEach(f),i=A(g),o=y(g,"DIV",{class:!0});var m=$(o);l&&l.l(m),m.forEach(f),g.forEach(f),this.h()},h(){_(s,"class","column is-one-third-desktop is-one-quarter-widescreen"),_(o,"class","column"),_(e,"class","columns is-variable is-5 is-desktop")},m(u,g){D(u,e,g),c(e,s),ee(t,s,null),c(e,i),c(e,o),l&&l.m(o,null),r=!0},p(u,[g]){const k={};g&1&&(k.categories=u[0]),t.$set(k),l&&l.p&&(!r||g&2)&&Ce(l,n,u,u[1],r?Ee(n,u[1],g,null):$e(u[1]),null)},i(u){r||(J(t.$$.fragment,u),J(l,u),r=!0)},o(u){V(t.$$.fragment,u),V(l,u),r=!1},d(u){u&&f(e),te(t),l&&l.d(u)}}}function He(a,e,s){let{$$slots:t={},$$scope:i}=e,{categories:o}=e;return a.$$set=r=>{"categories"in r&&s(0,o=r.categories),"$$scope"in r&&s(1,i=r.$$scope)},[o,i,t]}class We extends K{constructor(e){super(),Y(this,e,He,Ve,Q,{categories:0})}}const se=[{category:"Core",items:[{title:"President",name:"Sam Carling",id:"president",description:"Sam, our President, acts as the main undergraduate representative in College governance. He will be focusing on negotiating a reduction in yearly rent increases, heating the pool, bringing back the college punt, improving facilities in the hostels, and co-ordinating the JCR's responses to wider political issues that arise."},{title:"Vice President",name:"Tamsin Wood",id:"vicepresident",description:"Tamsin, our Vice President, will be continuing to help with Alt Bops at Christ's and promote them at the SU's Student Council, as well as work with Miles and Immi on ensuring that the JCR website is accessible and as informative as possible."},{title:"Treasurer",name:"Fergus Kirman",id:"treasurer",description:"Fergus, our Treasurer, manages the budgets and organises funding for the over 30 Christ's clubs and societies, as well as special JCR projects. Fergus also recently launched the Free Prescription Scheme, allowing all undergraduates to get free NHS prescriptions."},{title:"Secretary",name:"Immi Sandhu",id:"secretary",description:"Immi, our Secretary, is hoping to reinvent our JCR social media platforms, including partaking in the construction of the new JCR website, Instagram and Facebook, send important weekly email bulletins and organise the JCR meetings throughout term. After the success of the student takeovers and tours on Instagram last year, Immi would like to continue this and open this up to members of staff and more students across year groups and subjects."}]},{category:"Welfare Officers",items:[{title:"Welfare Officer",label:"Ossie",name:"Ossie Visick",id:"welfare-m",description:"Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress."},{title:"Welfare Officer",label:"Christina",name:"Christina Lawrence",id:"welfare-f",description:"Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress."}]},{category:"Year Reps",items:[{title:"Freshers' Reps",label:"Freshers'",name:"Vivek Bilous & Charlotte Westwood",id:"firstyearrep",description:"Vivek and Charlotte, our Freps/First Year Officers, aim to make Christ's a welcoming environment for next year's Freshers, as well as host events for their year, such as college marriages, formals and a SuperBop."}]},{category:"Diversity",items:[{title:"Class Act Officer",label:"Class Act",name:"Laura Goodchild",id:"classact",description:"Laura, our Class Act Officer, is aiming to establish a Class Act community at Christ's, support all students who self-identify as a Class Act and make Christ's more Class Act friendly."},{title:"Ethnic Diversity Officer",label:"Ethnic Diversity",name:"Abhi Gowda",id:"edo",description:"Abhi, our Ethnic Diversity Officer, will be assisting with access work of applicants from diverse ethnic backgrounds, voicing any concerns from students regarding discrimination, celebrating various cultures through important events in collaboration with Hannah, and supporting the introduction of the prayer room in college for individuals of all faiths."},{title:"Women's Officer",label:"Women's",name:"Leah Almeida",id:"womens",description:"Leah, our Womens' Officer, will be promoting a safe space for discussion surrounding gender expression, organising informative events on issues surrounding intersectional feminism and misogyny, holding FemSoc events and socials, as well as continuing with the sustainable period product scheme."},{title:"Internationals' Officer",label:"Internationals'",name:"Tudor Serban",id:"intl",description:"Tudor, our Internationals' Officer, is planning to create more opportunities for Internationals to meet with each other during Internationals' Week and throughout term, work with College and the JCR to ensure the welfare of International students, and expand the interactions of internationals from Christ's with those from other colleges."}]},{category:"Misc",items:[{title:"Access Officer",label:"Access",name:"Romany Whittall",id:"access",description:"Romany, our Access officer, will be working with outside agencies and Cambridge-wide programmes to ensure students from non-traditional backgrounds are prepared for admission processes, make the 2022 Shadowing Scheme rewarding and enjoyable, develop the Bridging Course further for offer-holders, and support students who want to run their own Access and outreach events."},{title:"Catering & Facilities Officer",label:"Catering & Facilities",name:"Jonathon Konig",id:"facilities",description:"Jonathan, our Catering and Facilities Officer, will be hoping to improve Upper Hall menu options for all dietary preferences, work with Sam to bring back the college punt, and continue introducing new gym equipment and arrange seating plans for Formal Halls in an equitable fashion."},{title:"Events Officer (Ents)",label:"Ents",name:"Hannah Huang",id:"ents",description:"Hannah, our Ents Officer, is planning on increasing the diversity of events in collaboration with Abhi, bringing back SuperBops (Bops with other colleges) and continuing to form relationships with local businesses and venues."},{title:"Green Officer",label:"Green",name:"Rachel Doran",id:"green",description:"[Description Pending]"},{title:"Webmaster",name:"Miles Watson",id:"webmaster",description:"Hey, I'm Miles, the JCR Webmaster! I built the website you're currently looking at, and am constantly working to improve it. Please drop me an email if you find any bugs, or want to suggest a feature / improvement!"}]}],me=Ie(!1);function Be(a){let e,s,t,i;return{c(){e=w("a"),s=R("[Show Emails]"),this.h()},l(o){e=y(o,"A",{href:!0,rel:!0});var r=$(e);s=T(r,"[Show Emails]"),r.forEach(f),this.h()},h(){_(e,"href",null),_(e,"rel","external")},m(o,r){D(o,e,r),c(e,s),t||(i=X(e,"click",a[3]),t=!0)},p:P,d(o){o&&f(e),t=!1,i()}}}function Le(a){let e,s,t,i,o;return{c(){e=w("a"),s=R(a[0]),t=R("@"),i=R(a[1]),this.h()},l(r){e=y(r,"A",{href:!0});var n=$(e);s=T(n,a[0]),t=T(n,"@"),i=T(n,a[1]),n.forEach(f),this.h()},h(){_(e,"href",o=`mailto:${a[0]}@${a[1]}`)},m(r,n){D(r,e,n),c(e,s),c(e,t),c(e,i)},p(r,n){n&1&&U(s,r[0]),n&2&&U(i,r[1]),n&3&&o!==(o=`mailto:${r[0]}@${r[1]}`)&&_(e,"href",o)},d(r){r&&f(e)}}}function Pe(a){let e;function s(o,r){return o[2]?Le:Be}let t=s(a),i=t(a);return{c(){i.c(),e=j()},l(o){i.l(o),e=j()},m(o,r){i.m(o,r),D(o,e,r)},p(o,[r]){t===(t=s(o))&&i?i.p(o,r):(i.d(1),i=t(o),i&&(i.c(),i.m(e.parentNode,e)))},i:P,o:P,d(o){i.d(o),o&&f(e)}}}function Me(a,e,s){let t;be(a,me,n=>s(2,t=n));let{username:i}=e,{domain:o}=e;const r=()=>me.set(!0);return a.$$set=n=>{"username"in n&&s(0,i=n.username),"domain"in n&&s(1,o=n.domain)},[i,o,t,r]}class qe extends K{constructor(e){super(),Y(this,e,Me,Pe,Q,{username:0,domain:1})}}function ge(a,e,s){const t=a.slice();return t[4]=e[s],t}function pe(a,e,s){const t=a.slice();return t[7]=e[s],t}function _e(a){let e,s,t,i,o,r,n,l,u=a[7].name+"",g,k,m,b,v=a[7].title+"",h,E,d,p,C,F,M=a[7].description+"",B,q,G,H;return p=new qe({props:{username:a[7].id,domain:"thejcr.co.uk"}}),{c(){e=w("div"),s=w("div"),t=w("img"),o=S(),r=w("div"),n=w("div"),l=w("h3"),g=R(u),k=S(),m=w("div"),b=w("div"),h=R(v),E=S(),d=w("small"),Z(p.$$.fragment),C=S(),F=w("p"),B=R(M),q=S(),G=w("hr"),this.h()},l(I){e=y(I,"DIV",{id:!0,class:!0});var O=$(e);s=y(O,"DIV",{class:!0});var ne=$(s);t=y(ne,"IMG",{class:!0,src:!0,alt:!0}),ne.forEach(f),o=A(O),r=y(O,"DIV",{class:!0});var re=$(r);n=y(re,"DIV",{class:!0});var L=$(n);l=y(L,"H3",{class:!0});var ae=$(l);g=T(ae,u),ae.forEach(f),k=A(L),m=y(L,"DIV",{class:!0});var N=$(m);b=y(N,"DIV",{class:!0});var oe=$(b);h=T(oe,v),oe.forEach(f),E=A(N),d=y(N,"SMALL",{});var le=$(d);x(p.$$.fragment,le),le.forEach(f),N.forEach(f),C=A(L),F=y(L,"P",{});var ce=$(F);B=T(ce,M),ce.forEach(f),L.forEach(f),re.forEach(f),O.forEach(f),q=A(I),G=y(I,"HR",{}),this.h()},h(){_(t,"class","profile svelte-r4p9yh"),Oe(t.src,i=`/img/committee/${a[7].id}.webp`)||_(t,"src",i),_(t,"alt",a[7].title),_(s,"class","column"),_(l,"class","title is-4 my-1"),_(b,"class","title is-6 my-0"),W(b,"level-left",a[0]),W(d,"level-right",a[0]),_(m,"class","my-0"),W(m,"level",a[0]),_(n,"class","content"),_(r,"class","column is-two-thirds"),_(e,"id",a[7].id),_(e,"class","columns"),W(e,"is-mobile",a[1])},m(I,O){D(I,e,O),c(e,s),c(s,t),c(e,o),c(e,r),c(r,n),c(n,l),c(l,g),c(n,k),c(n,m),c(m,b),c(b,h),c(m,E),c(m,d),ee(p,d,null),c(n,C),c(n,F),c(F,B),D(I,q,O),D(I,G,O),H=!0},p(I,O){(!H||O&1)&&W(b,"level-left",I[0]),(!H||O&1)&&W(d,"level-right",I[0]),(!H||O&1)&&W(m,"level",I[0]),(!H||O&2)&&W(e,"is-mobile",I[1])},i(I){H||(J(p.$$.fragment,I),H=!0)},o(I){V(p.$$.fragment,I),H=!1},d(I){I&&f(e),te(p),I&&f(q),I&&f(G)}}}function ve(a){let e,s,t=a[4].category+"",i,o,r,n,l,u,g,k,m,b,v=a[4].items,h=[];for(let d=0;d<v.length;d+=1)h[d]=_e(pe(a,v,d));const E=d=>V(h[d],1,1,()=>{h[d]=null});return{c(){e=w("div"),s=w("h2"),i=R(t),o=S();for(let d=0;d<h.length;d+=1)h[d].c();r=S(),n=w("a"),l=w("button"),u=R("Back to top"),g=S(),this.h()},l(d){e=y(d,"DIV",{class:!0,id:!0});var p=$(e);s=y(p,"H2",{class:!0});var C=$(s);i=T(C,t),C.forEach(f),o=A(p);for(let B=0;B<h.length;B+=1)h[B].l(p);r=A(p),n=y(p,"A",{href:!0});var F=$(n);l=y(F,"BUTTON",{class:!0});var M=$(l);u=T(M,"Back to top"),M.forEach(f),F.forEach(f),g=A(p),p.forEach(f),this.h()},h(){_(s,"class","title is-2"),_(l,"class","button is-link"),_(n,"href","#top"),_(e,"class","section px-0"),_(e,"id",a[4].category)},m(d,p){D(d,e,p),c(e,s),c(s,i),c(e,o);for(let C=0;C<h.length;C+=1)h[C].m(e,null);c(e,r),c(e,n),c(n,l),c(l,u),c(e,g),k=!0,m||(b=X(n,"click",a[3]),m=!0)},p(d,p){if(p&3){v=d[4].items;let C;for(C=0;C<v.length;C+=1){const F=pe(d,v,C);h[C]?(h[C].p(F,p),J(h[C],1)):(h[C]=_e(F),h[C].c(),J(h[C],1),h[C].m(e,r))}for(we(),C=v.length;C<h.length;C+=1)E(C);ye()}},i(d){if(!k){for(let p=0;p<v.length;p+=1)J(h[p]);k=!0}},o(d){h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)V(h[p]);k=!1},d(d){d&&f(e),z(h,d),m=!1,b()}}}function Ge(a){let e,s,t=se,i=[];for(let r=0;r<t.length;r+=1)i[r]=ve(ge(a,t,r));const o=r=>V(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=j()},l(r){for(let n=0;n<i.length;n+=1)i[n].l(r);e=j()},m(r,n){for(let l=0;l<i.length;l+=1)i[l].m(r,n);D(r,e,n),s=!0},p(r,n){if(n&3){t=se;let l;for(l=0;l<t.length;l+=1){const u=ge(r,t,l);i[l]?(i[l].p(u,n),J(i[l],1)):(i[l]=ve(u),i[l].c(),J(i[l],1),i[l].m(e.parentNode,e))}for(we(),l=t.length;l<i.length;l+=1)o(l);ye()}},i(r){if(!s){for(let n=0;n<t.length;n+=1)J(i[n]);s=!0}},o(r){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)V(i[n]);s=!1},d(r){z(i,r),r&&f(e)}}}function Ne(a){let e,s;return e=new We({props:{categories:se,$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){ee(e,t,i),s=!0},p(t,i){const o={};i&1027&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function Ue(a){let e,s;return{c(){e=w("div"),s=R(`The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!`),this.h()},l(t){e=y(t,"DIV",{slot:!0});var i=$(e);s=T(i,`The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!`),i.forEach(f),this.h()},h(){_(e,"slot","description")},m(t,i){D(t,e,i),c(e,s)},p:P,d(t){t&&f(e)}}}function je(a){let e,s;return e=new De({props:{current:"/about/committee",title:"JCR Committee",metaDescription:"The JCR Committee is comprised of students who have been elected to represent the views of Christ's undergrads.",$$slots:{description:[Ue],default:[Ne]},$$scope:{ctx:a}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){ee(e,t,i),s=!0},p(t,[i]){const o={};i&1027&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function Ke(a,e,s){let t,i,o;be(a,Ae,n=>s(2,o=n));const r=n=>ie(n,"top");return a.$$.update=()=>{a.$$.dirty&4&&s(1,t=o>=512),a.$$.dirty&4&&s(0,i=o>=Se.min)},[i,t,o,r]}class Xe extends K{constructor(e){super(),Y(this,e,Ke,je,Q,{})}}export{Xe as default};
