import{S as K,i as U,s as Q,e as v,t as D,k as R,c as _,a as y,h as F,d as m,m as I,b,g as S,K as f,L as oe,j as le,P as G,T as ce,G as ye,w as z,x as X,y as Z,M as Ce,N as ke,O as $e,q as M,o as j,B as x,R as Ee,H as Oe,J as A,l as ue}from"../../chunks/vendor-961a0326.js";import{P as Re}from"../../chunks/PageHeader-90a9e3ba.js";import{d as Ie,w as Te}from"../../chunks/width-cbc7423d.js";import"../../chunks/page-e2ce1e8c.js";function he(s,e,i){const t=s.slice();return t[5]=e[i],t}function de(s,e,i){const t=s.slice();return t[8]=e[i],t}function fe(s){let e,i,t=(s[8].label?s[8].label:s[8].title)+"",n,a,o,r,l;function c(...u){return s[3](s[8],...u)}return{c(){e=v("li"),i=v("a"),n=D(t),o=R(),this.h()},l(u){e=_(u,"LI",{});var d=y(e);i=_(d,"A",{href:!0});var h=y(i);n=F(h,t),h.forEach(m),o=I(d),d.forEach(m),this.h()},h(){b(i,"href",a=`#${s[8].id}`)},m(u,d){S(u,e,d),f(e,i),f(i,n),f(e,o),r||(l=oe(i,"click",c),r=!0)},p(u,d){s=u,d&1&&t!==(t=(s[8].label?s[8].label:s[8].title)+"")&&le(n,t),d&1&&a!==(a=`#${s[8].id}`)&&b(i,"href",a)},d(u){u&&m(e),r=!1,l()}}}function me(s){let e,i,t=s[5].category+"",n,a,o,r,l,c,u;function d(...w){return s[2](s[5],...w)}let h=s[5].items,g=[];for(let w=0;w<h.length;w+=1)g[w]=fe(de(s,h,w));return{c(){e=v("li"),i=v("a"),n=D(t),o=R(),r=v("ul");for(let w=0;w<g.length;w+=1)g[w].c();l=R(),this.h()},l(w){e=_(w,"LI",{});var C=y(e);i=_(C,"A",{class:!0,href:!0});var p=y(i);n=F(p,t),p.forEach(m),o=I(C),r=_(C,"UL",{});var k=y(r);for(let E=0;E<g.length;E+=1)g[E].l(k);k.forEach(m),l=I(C),C.forEach(m),this.h()},h(){b(i,"class","is-active"),b(i,"href",a=`#${s[5].category}`)},m(w,C){S(w,e,C),f(e,i),f(i,n),f(e,o),f(e,r);for(let p=0;p<g.length;p+=1)g[p].m(r,null);f(e,l),c||(u=oe(i,"click",d),c=!0)},p(w,C){if(s=w,C&1&&t!==(t=s[5].category+"")&&le(n,t),C&1&&a!==(a=`#${s[5].category}`)&&b(i,"href",a),C&3){h=s[5].items;let p;for(p=0;p<h.length;p+=1){const k=de(s,h,p);g[p]?g[p].p(k,C):(g[p]=fe(k),g[p].c(),g[p].m(r,null))}for(;p<g.length;p+=1)g[p].d(1);g.length=h.length}},d(w){w&&m(e),G(g,w),c=!1,u()}}}function Se(s){let e,i,t=s[0],n=[];for(let a=0;a<t.length;a+=1)n[a]=me(he(s,t,a));return{c(){e=v("aside"),i=v("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=_(a,"ASIDE",{class:!0});var o=y(e);i=_(o,"UL",{class:!0});var r=y(i);for(let l=0;l<n.length;l+=1)n[l].l(r);r.forEach(m),o.forEach(m),this.h()},h(){b(i,"class","menu-list"),b(e,"class","menu my-6")},m(a,o){S(a,e,o),f(e,i);for(let r=0;r<n.length;r+=1)n[r].m(i,null)},p(a,[o]){if(o&3){t=a[0];let r;for(r=0;r<t.length;r+=1){const l=he(a,t,r);n[r]?n[r].p(l,o):(n[r]=me(l),n[r].c(),n[r].m(i,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}},i:ce,o:ce,d(a){a&&m(e),G(n,a)}}}function De(s,e,i){let{categories:t}=e;function n(l,c){l.preventDefault();let u=document.getElementById(c).getBoundingClientRect().top,d=document.documentElement,h=(window.pageYOffset||d.scrollTop)-(d.clientTop||0);a(h+u-70,500)}const a=(l,c)=>{const u=document.scrollingElement||document.documentElement,d=u.scrollTop,h=l-d,g=+new Date,w=(p,k,E,L)=>{let T=p;return T/=L/2,T<1?E/2*T*T+k:(T-=1,-E/2*(T*(T-2)-1)+k)},C=()=>{const k=+new Date-g;u.scrollTop=parseInt(w(k,d,h,c),10),k<c?requestAnimationFrame(C):u.scrollTop=l};C()},o=(l,c)=>n(c,l.category),r=(l,c)=>n(c,l.id);return s.$$set=l=>{"categories"in l&&i(0,t=l.categories)},[t,n,o,r]}class Fe extends K{constructor(e){super();U(this,e,De,Se,Q,{categories:0})}}function Ae(s){let e,i,t,n,a,o;t=new Fe({props:{categories:s[0]}});const r=s[2].default,l=ye(r,s,s[1],null);return{c(){e=v("div"),i=v("div"),z(t.$$.fragment),n=R(),a=v("div"),l&&l.c(),this.h()},l(c){e=_(c,"DIV",{class:!0});var u=y(e);i=_(u,"DIV",{class:!0});var d=y(i);X(t.$$.fragment,d),d.forEach(m),n=I(u),a=_(u,"DIV",{class:!0});var h=y(a);l&&l.l(h),h.forEach(m),u.forEach(m),this.h()},h(){b(i,"class","column is-one-third-desktop is-one-quarter-widescreen"),b(a,"class","column"),b(e,"class","columns is-variable is-5 is-desktop")},m(c,u){S(c,e,u),f(e,i),Z(t,i,null),f(e,n),f(e,a),l&&l.m(a,null),o=!0},p(c,[u]){const d={};u&1&&(d.categories=c[0]),t.$set(d),l&&l.p&&(!o||u&2)&&Ce(l,r,c,c[1],o?$e(r,c[1],u,null):ke(c[1]),null)},i(c){o||(M(t.$$.fragment,c),M(l,c),o=!0)},o(c){j(t.$$.fragment,c),j(l,c),o=!1},d(c){c&&m(e),x(t),l&&l.d(c)}}}function Je(s,e,i){let{$$slots:t={},$$scope:n}=e,{categories:a}=e;return s.$$set=o=>{"categories"in o&&i(0,a=o.categories),"$$scope"in o&&i(1,n=o.$$scope)},[a,n,t]}class Be extends K{constructor(e){super();U(this,e,Je,Ae,Q,{categories:0})}}function ge(s,e,i){const t=s.slice();return t[4]=e[i],t}function pe(s,e,i){const t=s.slice();return t[7]=e[i],t}function ve(s){let e,i,t,n,a,o,r,l,c=s[7].name+"",u,d,h,g,w=s[7].title+"",C,p,k,E,L=s[7].id+"",T,q,be,P,B,ee=s[7].description+"",N,we,H,V;return{c(){e=v("div"),i=v("div"),t=v("img"),a=R(),o=v("div"),r=v("div"),l=v("h3"),u=D(c),d=R(),h=v("div"),g=v("div"),C=D(w),p=R(),k=v("a"),E=v("small"),T=D(L),q=D("@thejcr.co.uk"),P=R(),B=v("p"),N=D(ee),H=R(),V=v("hr"),this.h()},l($){e=_($,"DIV",{id:!0,class:!0});var O=y(e);i=_(O,"DIV",{class:!0});var te=y(i);t=_(te,"IMG",{class:!0,src:!0,alt:!0}),te.forEach(m),a=I(O),o=_(O,"DIV",{class:!0});var ie=y(o);r=_(ie,"DIV",{class:!0});var J=y(r);l=_(J,"H3",{class:!0});var se=y(l);u=F(se,c),se.forEach(m),d=I(J),h=_(J,"DIV",{class:!0});var W=y(h);g=_(W,"DIV",{class:!0});var ne=y(g);C=F(ne,w),ne.forEach(m),p=I(W),k=_(W,"A",{href:!0});var ae=y(k);E=_(ae,"SMALL",{});var Y=y(E);T=F(Y,L),q=F(Y,"@thejcr.co.uk"),Y.forEach(m),ae.forEach(m),W.forEach(m),P=I(J),B=_(J,"P",{});var re=y(B);N=F(re,ee),re.forEach(m),J.forEach(m),ie.forEach(m),O.forEach(m),H=I($),V=_($,"HR",{}),this.h()},h(){b(t,"class","profile svelte-bfbzap"),Oe(t.src,n=`/img/roles/${s[7].id}.webp`)||b(t,"src",n),b(t,"alt",s[7].title),b(i,"class","column"),b(l,"class","title is-4 my-1"),b(g,"class","title is-6 my-0"),A(g,"level-left",s[0]),A(E,"level-right",s[0]),b(k,"href",be=`mailto:${s[7].id}@thejcr.co.uk`),b(h,"class","my-0"),A(h,"level",s[0]),b(r,"class","content"),b(o,"class","column is-two-thirds"),b(e,"id",we=s[7].id),b(e,"class","columns"),A(e,"is-mobile",s[1])},m($,O){S($,e,O),f(e,i),f(i,t),f(e,a),f(e,o),f(o,r),f(r,l),f(l,u),f(r,d),f(r,h),f(h,g),f(g,C),f(h,p),f(h,k),f(k,E),f(E,T),f(E,q),f(r,P),f(r,B),f(B,N),S($,H,O),S($,V,O)},p($,O){O&1&&A(g,"level-left",$[0]),O&1&&A(E,"level-right",$[0]),O&1&&A(h,"level",$[0]),O&2&&A(e,"is-mobile",$[1])},d($){$&&m(e),$&&m(H),$&&m(V)}}}function _e(s){let e,i,t=s[4].category+"",n,a,o,r,l=s[4].items,c=[];for(let u=0;u<l.length;u+=1)c[u]=ve(pe(s,l,u));return{c(){e=v("div"),i=v("h2"),n=D(t),a=R();for(let u=0;u<c.length;u+=1)c[u].c();o=R(),this.h()},l(u){e=_(u,"DIV",{class:!0,id:!0});var d=y(e);i=_(d,"H2",{class:!0});var h=y(i);n=F(h,t),h.forEach(m),a=I(d);for(let g=0;g<c.length;g+=1)c[g].l(d);o=I(d),d.forEach(m),this.h()},h(){b(i,"class","title is-2"),b(e,"class","section px-0"),b(e,"id",r=s[4].category)},m(u,d){S(u,e,d),f(e,i),f(i,n),f(e,a);for(let h=0;h<c.length;h+=1)c[h].m(e,null);f(e,o)},p(u,d){if(d&7){l=u[4].items;let h;for(h=0;h<l.length;h+=1){const g=pe(u,l,h);c[h]?c[h].p(g,d):(c[h]=ve(g),c[h].c(),c[h].m(e,o))}for(;h<c.length;h+=1)c[h].d(1);c.length=l.length}},d(u){u&&m(e),G(c,u)}}}function Le(s){let e,i=s[2],t=[];for(let n=0;n<i.length;n+=1)t[n]=_e(ge(s,i,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ue()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=ue()},m(n,a){for(let o=0;o<t.length;o+=1)t[o].m(n,a);S(n,e,a)},p(n,a){if(a&7){i=n[2];let o;for(o=0;o<i.length;o+=1){const r=ge(n,i,o);t[o]?t[o].p(r,a):(t[o]=_e(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=i.length}},d(n){G(t,n),n&&m(e)}}}function He(s){let e,i,t,n,a,o;return a=new Be({props:{categories:s[2],$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){e=v("div"),i=v("blockquote"),t=D(`The JCR Committee is made up of a group of Christ's students who
            have been elected to represent the views of the undergraduate
            students at college and university level. The central role of the
            JCR Committee is to represent the interests and look after the
            welfare of the student body. This could include anything from
            running events to discussing food, accommodation or access in our
            meetings. Each member of the JCR committee has a specific
            responsibility. Find out more about each position below!`),n=R(),z(a.$$.fragment),this.h()},l(r){e=_(r,"DIV",{class:!0});var l=y(e);i=_(l,"BLOCKQUOTE",{});var c=y(i);t=F(c,`The JCR Committee is made up of a group of Christ's students who
            have been elected to represent the views of the undergraduate
            students at college and university level. The central role of the
            JCR Committee is to represent the interests and look after the
            welfare of the student body. This could include anything from
            running events to discussing food, accommodation or access in our
            meetings. Each member of the JCR committee has a specific
            responsibility. Find out more about each position below!`),c.forEach(m),l.forEach(m),n=I(r),X(a.$$.fragment,r),this.h()},h(){b(e,"class","content")},m(r,l){S(r,e,l),f(e,i),f(i,t),S(r,n,l),Z(a,r,l),o=!0},p(r,l){const c={};l&1027&&(c.$$scope={dirty:l,ctx:r}),a.$set(c)},i(r){o||(M(a.$$.fragment,r),o=!0)},o(r){j(a.$$.fragment,r),o=!1},d(r){r&&m(e),r&&m(n),x(a,r)}}}function Ve(s){let e,i;return e=new Re({props:{current:"/about/roles",title:"JCR Roles",description:"The JCR Committee is made up of a group of Christ's students who have been elected to represent the views of the undergraduate students at college and university level. The central role of the JCR Committee is to represent the interests and look after the welfare of the student body.",$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,n){Z(e,t,n),i=!0},p(t,[n]){const a={};n&1027&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){j(e.$$.fragment,t),i=!1},d(t){x(e,t)}}}function We(s,e,i){let t,n,a;Ee(s,Te,r=>i(3,a=r));const o=[{category:"Core",items:[{title:"President",name:"Sam Carling",id:"president",description:"Sam, our President, acts as the main undergraduate representative in College governance. He will be focusing on negotiating a reduction in yearly rent increases, heating the pool, bringing back the college punt, improving facilities in the hostels, and co-ordinating the JCR's responses to wider political issues that arise."},{title:"Vice President",name:"Tamsin Wood",id:"vicepresident",description:"Tamsin, our Vice President, will be continuing to help with Alt Bops at Christ's and promote them at the SU's Student Council, as well as work with Miles and Immi on ensuring that the JCR website is accessible and as informative as possible."},{title:"Treasurer",name:"Fergus Kirman",id:"treasurer",description:"Fergus, our Treasurer, is mainly focusing on getting the Prescription Reimbursement Scheme up and running. This will mean that the JCR will reimburse students who would otherwise pay the fixed charge of \xA39.35 for their NHS prescriptions (up to a cap of 4 per student during its pilot phase)."},{title:"Secretary",name:"Immi Sandhu",id:"secretary",description:"Immi, our Secretary, is hoping to reinvent our JCR social media platforms, including partaking in the construction of the new JCR website, Instagram and Facebook, send important weekly email bulletins and organise the JCR meetings throughout term. After the success of the student takeovers and tours on Instagram last year, Immi would like to continue this and open this up to members of staff and more students across year groups and subjects."}]},{category:"Events",items:[{title:"Events Officer (Ents)",label:"Ents",name:"Hannah Huang",id:"ents",description:"Hannah, our Ents Officer, is planning on increasing the diversity of events in collaboration with Abhi, bringing back SuperBops (Bops with other colleges) and continuing to form relationships with local businesses and venues."},{title:"Freshers' Reps",label:"Freshers'",name:"Vivek Bilous & Charlotte Westwood",id:"firstyearrep",description:"Vivek and Charlotte, our Freps/First Year Officers, aim to make Christ's a welcoming environment for next year's Freshers, as well as host events for their year, such as college marriages, formals and a SuperBop."},{title:"Internationals' Rep",label:"Internationals'",name:"Tudor Serban",id:"intl",description:"Tudor, our Internationals' Officer, is planning to create more opportunities for Internationals to meet with each other during Internationals' Week and throughout term, work with College and the JCR to ensure the welfare of International students, and expand the interactions of internationals from Christ's with those from other colleges."},{title:"Fourth Years' Officer",label:"Fourth Years'",name:"Oliver O'Brien",id:"fourth",description:"Oli, our Fourth Years' Officer, is planning to run another Fourth Year pub crawl and organise for all Fourth Years to go to Grad Hall together."}]},{category:"Welfare",items:[{title:"Male & NB Welfare Officer",label:"Male & NB",name:"Ossie Visick",id:"welfare-m",description:"Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress."},{title:"Female & NB Welfare Officer",label:"Female & NB",name:"Christina Lawrence",id:"welfare-f",description:"Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress."}]},{category:"Diversity",items:[{title:"Access Officer",label:"Access",name:"Romany Whittall",id:"access",description:"Romany, our Access officer, will be working with outside agencies and Cambridge-wide programmes to ensure students from non-traditional backgrounds are prepared for admission processes, make the 2022 Shadowing Scheme rewarding and enjoyable, develop the Bridging Course further for offer-holders, and support students who want to run their own Access and outreach events."},{title:"Class Act Officer",label:"Class Act",name:"Laura Goodchild",id:"classact",description:"Laura, our Class Act Officer, is aiming to establish a Class Act community at Christ's, support all students who self-identify as a Class Act and make Christ's more Class Act friendly."},{title:"Ethnic Diversity Officer",label:"Ethnic Diversity",name:"Abhi Gowda",id:"edo",description:"Abhi, our Ethnic Diversity Officer, will be assisting with access work of applicants from diverse ethnic backgrounds, voicing any concerns from students regarding discrimination, celebrating various cultures through important events in collaboration with Hannah, and supporting the introduction of the prayer room in college for individuals of all faiths."},{title:"LGBT+ Officer",label:"LGBT+",name:"Kit Burley",id:"lgbt",description:"Kit, our LGBT+ and Sexual Health Representative, will be putting on events to build the LGBT+ community at Christ's, as well as run an anonymous sexual health supplies scheme to be discreetly delivered into Pidges."},{title:"Women's Officer",label:"Women's",name:"Leah Almeida",id:"womens",description:"Leah, our Womens' Officer, will be promoting a safe space for discussion surrounding gender expression, organising informative events on issues surrounding intersectional feminism and misogyny, holding FemSoc events and socials, as well as continuing with the sustainable period product scheme."}]},{category:"Misc",items:[{title:"Catering & Facilities Officer",label:"Catering & Facilities",name:"Jonathon Konig",id:"facilities",description:"Jonathan, our Catering and Facilities Officer, will be hoping to improve Upper Hall menu options for all dietary preferences, work with Sam to bring back the college punt, and continue introducing new gym equipment and arrange seating plans for Formal Halls in an equitable fashion."},{title:"Green Officer",label:"Green",name:"Camille McCarthy",id:"green",description:"Camille, our Green and Charities Officer, will be establishing a Christ's Green Committee so students are able to become directly involved with campaigns and sustainability projects, as well as campaign for JCRs and MCRs to move their banks away from those who invest heavily in fossil fuels, and switch to more ethical alternatives. On the charities side, Camille would like to reinvigorate the food bank collection and look at ways to link individuals' fundraising efforts to college charities."},{title:"Webmaster",name:"Miles Watson",id:"webmaster",description:"Miles, our Webmaster, is mainly focusing on reintroducing and reinventing a new JCR website that can be accessed by both prospective and current students, staff and the general public to give an insight into what life is like at Christ's, why students should apply, and quick access to important information like JCR meetings/welfare resources/booking systems."}]}];return s.$$.update=()=>{s.$$.dirty&8&&i(1,t=a>=512),s.$$.dirty&8&&i(0,n=a>=Ie.min)},[n,t,o,a]}class Pe extends K{constructor(e){super();U(this,e,We,Ve,Q,{})}}export{Pe as default};
