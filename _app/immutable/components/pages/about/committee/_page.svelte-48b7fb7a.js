import{S as X,i as Z,s as x,k as _,l as y,m as b,h,n as f,b as T,H as c,P as N,M as ee,q as J,a as D,r as R,c as O,I as te,u as z,D as Pe,w as se,x as ae,y as ie,J as We,K as Be,L as je,f as M,t as H,z as oe,B as Le,e as Q,O as Se,g as Ve,d as He,E as qe,G as W}from"../../../../chunks/index-35427abf.js";import{P as Ne}from"../../../../chunks/PageHeader-0ea7f636.js";import{d as Ge,w as Ye}from"../../../../chunks/width-b580e117.js";function Ee(o,e,a){const t=o.slice();return t[3]=e[a],t}function Ae(o,e,a){const t=o.slice();return t[6]=e[a],t}function De(o){let e,a,t=(o[6].label?o[6].label:o[6].title)+"",s,r,n,i,l;function d(...p){return o[2](o[6],...p)}return{c(){e=_("li"),a=_("a"),s=J(t),n=D(),this.h()},l(p){e=y(p,"LI",{});var C=b(e);a=y(C,"A",{href:!0});var g=b(a);s=R(g,t),g.forEach(h),n=O(C),C.forEach(h),this.h()},h(){f(a,"href",r=`#${o[6].id}`)},m(p,C){T(p,e,C),c(e,a),c(a,s),c(e,n),i||(l=te(a,"click",d),i=!0)},p(p,C){o=p,C&1&&t!==(t=(o[6].label?o[6].label:o[6].title)+"")&&z(s,t),C&1&&r!==(r=`#${o[6].id}`)&&f(a,"href",r)},d(p){p&&h(e),i=!1,l()}}}function Oe(o){let e,a,t=o[3].category+"",s,r,n,i,l,d,p;function C(...v){return o[1](o[3],...v)}let g=o[3].items,w=[];for(let v=0;v<g.length;v+=1)w[v]=De(Ae(o,g,v));return{c(){e=_("li"),a=_("a"),s=J(t),n=D(),i=_("ul");for(let v=0;v<w.length;v+=1)w[v].c();l=D(),this.h()},l(v){e=y(v,"LI",{});var u=b(e);a=y(u,"A",{class:!0,href:!0});var k=b(a);s=R(k,t),k.forEach(h),n=O(u),i=y(u,"UL",{});var m=b(i);for(let I=0;I<w.length;I+=1)w[I].l(m);m.forEach(h),l=O(u),u.forEach(h),this.h()},h(){f(a,"class","is-active"),f(a,"href",r=`#${o[3].category.toLowerCase().replaceAll(" ","-")}`)},m(v,u){T(v,e,u),c(e,a),c(a,s),c(e,n),c(e,i);for(let k=0;k<w.length;k+=1)w[k].m(i,null);c(e,l),d||(p=te(a,"click",C),d=!0)},p(v,u){if(o=v,u&1&&t!==(t=o[3].category+"")&&z(s,t),u&1&&r!==(r=`#${o[3].category.toLowerCase().replaceAll(" ","-")}`)&&f(a,"href",r),u&1){g=o[3].items;let k;for(k=0;k<g.length;k+=1){const m=Ae(o,g,k);w[k]?w[k].p(m,u):(w[k]=De(m),w[k].c(),w[k].m(i,null))}for(;k<w.length;k+=1)w[k].d(1);w.length=g.length}},d(v){v&&h(e),ee(w,v),d=!1,p()}}}function Ue(o){let e,a,t=o[0],s=[];for(let r=0;r<t.length;r+=1)s[r]=Oe(Ee(o,t,r));return{c(){e=_("aside"),a=_("ul");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=y(r,"ASIDE",{class:!0,id:!0});var n=b(e);a=y(n,"UL",{class:!0});var i=b(a);for(let l=0;l<s.length;l+=1)s[l].l(i);i.forEach(h),n.forEach(h),this.h()},h(){f(a,"class","menu-list"),f(e,"class","menu mt-6"),f(e,"id","top")},m(r,n){T(r,e,n),c(e,a);for(let i=0;i<s.length;i+=1)s[i].m(a,null)},p(r,[n]){if(n&1){t=r[0];let i;for(i=0;i<t.length;i+=1){const l=Ee(r,t,i);s[i]?s[i].p(l,n):(s[i]=Oe(l),s[i].c(),s[i].m(a,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},i:N,o:N,d(r){r&&h(e),ee(s,r)}}}function ue(o,e){o.preventDefault();let a=document.getElementById(e).getBoundingClientRect().top,t=document.documentElement,s=(window.pageYOffset||t.scrollTop)-(t.clientTop||0);Ke(s+a-70,500)}const Ke=(o,e)=>{const a=document.scrollingElement||document.documentElement,t=a.scrollTop,s=o-t,r=+new Date,n=(l,d,p,C)=>{let g=l;return g/=C/2,g<1?p/2*g*g+d:(g-=1,-p/2*(g*(g-2)-1)+d)},i=()=>{const d=+new Date-r;a.scrollTop=n(d,t,s,e),d<e?requestAnimationFrame(i):a.scrollTop=o};i()};function ze(o,e,a){let{categories:t}=e;const s=(n,i)=>ue(i,n.category.toLowerCase().replaceAll(" ","-")),r=(n,i)=>ue(i,n.id);return o.$$set=n=>{"categories"in n&&a(0,t=n.categories)},[t,s,r]}class Qe extends X{constructor(e){super(),Z(this,e,ze,Ue,x,{categories:0})}}function Xe(o){let e,a,t,s,r,n;t=new Qe({props:{categories:o[0]}});const i=o[2].default,l=Pe(i,o,o[1],null);return{c(){e=_("div"),a=_("div"),se(t.$$.fragment),s=D(),r=_("div"),l&&l.c(),this.h()},l(d){e=y(d,"DIV",{class:!0});var p=b(e);a=y(p,"DIV",{class:!0});var C=b(a);ae(t.$$.fragment,C),C.forEach(h),s=O(p),r=y(p,"DIV",{class:!0});var g=b(r);l&&l.l(g),g.forEach(h),p.forEach(h),this.h()},h(){f(a,"class","column is-one-third-desktop is-one-quarter-widescreen"),f(r,"class","column"),f(e,"class","columns is-variable is-5 is-desktop")},m(d,p){T(d,e,p),c(e,a),ie(t,a,null),c(e,s),c(e,r),l&&l.m(r,null),n=!0},p(d,[p]){const C={};p&1&&(C.categories=d[0]),t.$set(C),l&&l.p&&(!n||p&2)&&We(l,i,d,d[1],n?je(i,d[1],p,null):Be(d[1]),null)},i(d){n||(M(t.$$.fragment,d),M(l,d),n=!0)},o(d){H(t.$$.fragment,d),H(l,d),n=!1},d(d){d&&h(e),oe(t),l&&l.d(d)}}}function Ze(o,e,a){let{$$slots:t={},$$scope:s}=e,{categories:r}=e;return o.$$set=n=>{"categories"in n&&a(0,r=n.categories),"$$scope"in n&&a(1,s=n.$$scope)},[r,s,t]}class xe extends X{constructor(e){super(),Z(this,e,Ze,Xe,x,{categories:0})}}const he=[{category:"Core",items:[{title:"President",name:"Ossie Visick",pronouns:"he/him",id:"president",description:"Hello! I'm Ossie, Christ's JCR President for 2023. I am the principal undergraduate representative in college and I am responsible for overseeing the JCR's activities. This year, my plans are to negotiate with college to mitigate rent rises, secure more study space for students, reform the scholars' system and look at alternative ways for heating the college pool. I am working closely with all officers on the JCR to make student representation as effective as it can be. Please get in touch if you have any questions or any concerns that you wish to discuss!"},{title:"Vice President",name:"Tamsin Wood",id:"vicepresident",description:"Tamsin, our Vice President, will be continuing to help with Alt Bops at Christ's and promote them at the SU's Student Council, as well as work with Miles and Immi on ensuring that the JCR website is accessible and as informative as possible."},{title:"Treasurer",name:"Fergus Kirman",id:"treasurer",description:"Fergus, our Treasurer, manages the budgets and organises funding for the over 30 Christ's clubs and societies, as well as special JCR projects. Fergus also recently launched the Free Prescription Scheme, allowing all undergraduates to get free NHS prescriptions."},{title:"Secretary",name:"Immi Sandhu",id:"secretary",description:"Immi, our Secretary, is hoping to reinvent our JCR social media platforms, including partaking in the construction of the new JCR website, Instagram and Facebook, send important weekly email bulletins and organise the JCR meetings throughout term. After the success of the student takeovers and tours on Instagram last year, Immi would like to continue this and open this up to members of staff and more students across year groups and subjects."}]},{category:"Welfare Officers",items:[{title:"Welfare Officer",label:"Julen",name:"Julen Lippman-Errasti",id:"welfare-m",description:"Hi, I'm Julen, your Male/Non-Binary Welfare Officer! Alongside Olivia, I'll be working to expand the college social spaces as well as running inclusive, relaxed events throughout term to help students take their minds off work, like weekly Welfare Walks. I'll work with other members of the JCR committee to make sure students feel welcome and safe around college, and to help the incoming freshers settle in. Please send me an email or message @ChristsWelfare on Instagram if you have any questions or want a chat!"},{title:"Welfare Officer",label:"Olivia",name:"Olivia Moynihan",pronouns:"she/her",id:"welfare-f",description:"Hi, I'm Olivia, your Female/Non-Binary Welfare Officer! This year, I hope to ensure that Christ's is a supportive and welcoming environment for all students by being an approachable point of contact and liaising with college to ensure that their decisions are in the best interests of students' welfare. I'll be working with Julen to organise a plethora of welfare events throughout the year, and I'm also designing a welfare handbook for incoming freshers to support their transition to university. Feel free to get in touch via email or on the @ChristsWelfare Instagram if you have any queries or concerns, or just want to chat!"}]},{category:"Year Reps",items:[{title:"Freshers' Reps",label:"Freshers'",name:"Vivek Bilous & Charlotte Westwood",id:"firstyearrep",description:"Vivek and Charlotte, our Freps/First Year Officers, aim to make Christ's a welcoming environment for next year's Freshers, as well as host events for their year, such as college marriages, formals and a SuperBop."}]},{category:"Diversity",items:[{title:"Class Act Officer",label:"Class Act",name:"Kai Briggs",pronouns:"he/him",id:"classact",description:"Hey! I'm Kai, your Class Act Officer for this year. My role is to support any student who has experienced educational, social, economic or cultural 'disadvantage' (basically continuing Access post-admissions, so I hope to collaborate a lot with our Access Officer so that you get the support you need). A few of my plans are to continue establishing the Class Act community at Christ's, to organise a range of events (socials, speakers, etc), and to create comprehensive resources about Class Act (especially on financial and welfare support). I also want to be available to support students myself, so please get in touch if you have feedback, questions, issues, or just anything Class Act related!"},{title:"Ethnic Diversity Officer",label:"Ethnic Diversity",name:"Abhi Gowda",id:"edo",description:"Abhi, our Ethnic Diversity Officer, will be assisting with access work of applicants from diverse ethnic backgrounds, voicing any concerns from students regarding discrimination, celebrating various cultures through important events in collaboration with Hannah, and supporting the introduction of the prayer room in college for individuals of all faiths."},{title:"Women's Officer",label:"Women's",name:"Ana-Maria Skaricic",pronouns:"she/her",id:"womens",description:"Hi! I'm Ana-Maria, this year's Women's Officer. I'll be representing women/nonbinary people at college and making sure that Christ's continues to be an open and inclusive community for all genders! This year, I hope to expand FemSoc's events (swaps, arts & crafts nights, and speaker events), ensure that menstruating students have access to sustainable period products throughout college, and provide a safe space for students of all genders to air any concerns. Please get in touch with me if you have any feedback, concerns, or just want a chat!"},{title:"Internationals' Officer",label:"Internationals'",name:"Ju Yi Tai",pronouns:"she/her",id:"intl",description:"Hi! I'm Ju Yi, a second-year medic from Malaysia, and I'm your international officer! This means I can help with anything international-related, whether that's storage, food, welfare, or if you just want someone to talk to. I'll also be organising events with other internationals from college and throughout Cambridge, as well as working with the college and JCR to make your stay in Cambridge as comfortable as possible. Feel free to raise things you'd like to see changed, ask me any questions about settling in, or just talk to me about anything on your mind - I'd be glad to chat!"}]},{category:"Misc",items:[{title:"Access Officer",label:"Access",name:"Yii-Ling Deng",pronouns:"she/her",id:"access",description:"Hey! I'm Yii-Ling, the Access Officer. My job is widening access and participation, working closely with the Admissions & Outreach department, prospective students and Christ's representatives, encouraging and supporting applicants in the admission process - especially those from under-represented and disadvantaged backgrounds. I'm focusing on making the 2023 Shadowing scheme run smoothly and enjoyably, developing the Bridging Course and collaborating with other JCR officers so that every aspect of access is covered for prospective and current students. My vision is to make more people realise that Cambridge is a possibility; a place they can thrive! Please drop me an email if you have any ideas/questions on anything related to access!"},{title:"Catering & Facilities Officer",label:"Catering & Facilities",name:"Mikolaj Rycek",pronouns:"he/him",id:"facilities",description:"Hi! I'm Mikolaj, this year's Catering and Facilities officer. I hope to organise a college punt, listen to student feedback to ensure Upper Hall and the Buttery are satisfactory, and work with other members of the JCR committee with their projects. Please send a message or an email if you have any suggestions to improve the Catering and Facilities at Christ's!"},{title:"Events Officer (Ents)",label:"Ents",name:"Neha Pauly",pronouns:"she/her",id:"ents",description:"Hello! I'm Neha, this year's Ents Officer. My job is to make Christs as fun as possible by organising bops, alt-bops, and various other events. This year, I hope to organise more events with other colleges, work with the Buttery staff on official college and seasonal drinks, as well as host a wider array of social events by collaborating with other officers and local businesses. Please do come talk to me or shoot me a message if you have any feedback or suggestions on how to make Christ's slay!"},{title:"Green Officer",label:"Green",name:"Rachel Doran",id:"green",description:"Hi, I'm Rachel the Green and Charities Officer. My job is to work to try and make Christ's a more environmentally friendly college, as well as to organise fun charity events to raise money for our 3 college charities (currently these are Jimmy's Cambridge, Cancer Research UK and WaterAid). My plans currently include an overhaul of the food waste disposal system in college accommodation, setting up new end-of-term food bank collections, improving communication between college staff and students about green initiatives, and supporting the college in working towards the next Green Impact Award. Please do get in contact with me if you have any ideas/ suggestions for how to make Christ's greener!"},{title:"Webmaster",name:"Miles Watson",pronouns:"he/him",id:"webmaster",description:"Hey, I'm Miles, the JCR Webmaster! I built the website you're currently looking at, and am constantly working to improve it. My current plans for the upcoming year include an improved anonymous feedback system, a better (customisable + subscribable) termcard, and an interactive questionnaire that students can use to determine their eligibility for various grants & bursaries. Please drop me an email if you find any bugs, or want to suggest a feature / improvement!"}]}],Je=Le(!1);function et(o){let e,a,t,s;return{c(){e=_("a"),a=J("[Show Emails]"),this.h()},l(r){e=y(r,"A",{href:!0,rel:!0});var n=b(e);a=R(n,"[Show Emails]"),n.forEach(h),this.h()},h(){f(e,"href",null),f(e,"rel","external")},m(r,n){T(r,e,n),c(e,a),t||(s=te(e,"click",o[3]),t=!0)},p:N,d(r){r&&h(e),t=!1,s()}}}function tt(o){let e,a,t,s,r;return{c(){e=_("a"),a=J(o[0]),t=J("@"),s=J(o[1]),this.h()},l(n){e=y(n,"A",{href:!0});var i=b(e);a=R(i,o[0]),t=R(i,"@"),s=R(i,o[1]),i.forEach(h),this.h()},h(){f(e,"href",r=`mailto:${o[0]}@${o[1]}`)},m(n,i){T(n,e,i),c(e,a),c(e,t),c(e,s)},p(n,i){i&1&&z(a,n[0]),i&2&&z(s,n[1]),i&3&&r!==(r=`mailto:${n[0]}@${n[1]}`)&&f(e,"href",r)},d(n){n&&h(e)}}}function st(o){let e;function a(r,n){return r[2]?tt:et}let t=a(o),s=t(o);return{c(){s.c(),e=Q()},l(r){s.l(r),e=Q()},m(r,n){s.m(r,n),T(r,e,n)},p(r,[n]){t===(t=a(r))&&s?s.p(r,n):(s.d(1),s=t(r),s&&(s.c(),s.m(e.parentNode,e)))},i:N,o:N,d(r){s.d(r),r&&h(e)}}}function at(o,e,a){let t;Se(o,Je,i=>a(2,t=i));let{username:s}=e,{domain:r}=e;const n=()=>Je.set(!0);return o.$$set=i=>{"username"in i&&a(0,s=i.username),"domain"in i&&a(1,r=i.domain)},[s,r,t,n]}class it extends X{constructor(e){super(),Z(this,e,at,st,x,{username:0,domain:1})}}function Re(o,e,a){const t=o.slice();return t[4]=e[a],t}function Te(o,e,a){const t=o.slice();return t[7]=e[a],t}function Me(o){var me;let e,a,t,s,r,n,i,l,d=o[7].name+"",p,C,g,w,v,u,k,m,I=o[7].title+"",$,F,S,V,de=((me=o[7].pronouns)!=null?me:"")+"",ne,re,B,j,le,L,fe=o[7].description+"",ce,G,Y,P;return j=new it({props:{username:o[7].id,domain:"thejcr.co.uk"}}),{c(){e=_("div"),a=_("div"),t=_("img"),r=D(),n=_("div"),i=_("div"),l=_("h3"),p=J(d),C=D(),g=_("div"),w=_("div"),v=_("div"),u=_("div"),k=_("div"),m=_("div"),$=J(I),F=D(),S=_("div"),V=_("i"),ne=J(de),re=D(),B=_("small"),se(j.$$.fragment),le=D(),L=_("p"),ce=J(fe),G=D(),Y=_("hr"),this.h()},l(E){e=y(E,"DIV",{id:!0,class:!0});var A=b(e);a=y(A,"DIV",{class:!0});var ge=b(a);t=y(ge,"IMG",{class:!0,src:!0,alt:!0}),ge.forEach(h),r=O(A),n=y(A,"DIV",{class:!0});var pe=b(n);i=y(pe,"DIV",{class:!0});var q=b(i);l=y(q,"H3",{class:!0});var ve=b(l);p=R(ve,d),ve.forEach(h),C=O(q),g=y(q,"DIV",{class:!0});var U=b(g);w=y(U,"DIV",{class:!0});var _e=b(w);v=y(_e,"DIV",{class:!0});var ye=b(v);u=y(ye,"DIV",{class:!0});var K=b(u);k=y(K,"DIV",{class:!0});var be=b(k);m=y(be,"DIV",{class:!0});var we=b(m);$=R(we,I),we.forEach(h),be.forEach(h),F=O(K),S=y(K,"DIV",{class:!0});var ke=b(S);V=y(ke,"I",{});var Ce=b(V);ne=R(Ce,de),Ce.forEach(h),ke.forEach(h),K.forEach(h),ye.forEach(h),_e.forEach(h),re=O(U),B=y(U,"SMALL",{});var Ie=b(B);ae(j.$$.fragment,Ie),Ie.forEach(h),U.forEach(h),le=O(q),L=y(q,"P",{class:!0});var $e=b(L);ce=R($e,fe),$e.forEach(h),q.forEach(h),pe.forEach(h),A.forEach(h),G=O(E),Y=y(E,"HR",{}),this.h()},h(){f(t,"class","profile svelte-bfbzap"),qe(t.src,s=`/img/committee/${o[7].id}.webp`)||f(t,"src",s),f(t,"alt",o[7].title),f(a,"class","column"),f(l,"class","title is-4 my-1"),f(m,"class","title is-6"),f(k,"class","level-item"),f(S,"class","level-item"),f(u,"class","level-left"),f(v,"class","level is-mobile"),f(w,"class","my-0"),W(w,"level-left",o[0]),W(B,"level-right",o[0]),f(g,"class","my-0"),W(g,"level",o[0]),f(L,"class","pt-3"),f(i,"class","content"),f(n,"class","column is-two-thirds"),f(e,"id",o[7].id),f(e,"class","columns"),W(e,"is-mobile",o[1])},m(E,A){T(E,e,A),c(e,a),c(a,t),c(e,r),c(e,n),c(n,i),c(i,l),c(l,p),c(i,C),c(i,g),c(g,w),c(w,v),c(v,u),c(u,k),c(k,m),c(m,$),c(u,F),c(u,S),c(S,V),c(V,ne),c(g,re),c(g,B),ie(j,B,null),c(i,le),c(i,L),c(L,ce),T(E,G,A),T(E,Y,A),P=!0},p(E,A){(!P||A&1)&&W(w,"level-left",E[0]),(!P||A&1)&&W(B,"level-right",E[0]),(!P||A&1)&&W(g,"level",E[0]),(!P||A&2)&&W(e,"is-mobile",E[1])},i(E){P||(M(j.$$.fragment,E),P=!0)},o(E){H(j.$$.fragment,E),P=!1},d(E){E&&h(e),oe(j),E&&h(G),E&&h(Y)}}}function Fe(o){let e,a,t=o[4].category+"",s,r,n,i,l,d,p,C,g,w,v=o[4].items,u=[];for(let m=0;m<v.length;m+=1)u[m]=Me(Te(o,v,m));const k=m=>H(u[m],1,1,()=>{u[m]=null});return{c(){e=_("div"),a=_("h2"),s=J(t),r=D();for(let m=0;m<u.length;m+=1)u[m].c();n=D(),i=_("a"),l=_("button"),d=J("Back to top"),p=D(),this.h()},l(m){e=y(m,"DIV",{class:!0,id:!0});var I=b(e);a=y(I,"H2",{class:!0});var $=b(a);s=R($,t),$.forEach(h),r=O(I);for(let V=0;V<u.length;V+=1)u[V].l(I);n=O(I),i=y(I,"A",{href:!0});var F=b(i);l=y(F,"BUTTON",{class:!0});var S=b(l);d=R(S,"Back to top"),S.forEach(h),F.forEach(h),p=O(I),I.forEach(h),this.h()},h(){f(a,"class","title is-2"),f(l,"class","button is-link"),f(i,"href","#top"),f(e,"class","section px-0"),f(e,"id",o[4].category.toLowerCase().replaceAll(" ","-"))},m(m,I){T(m,e,I),c(e,a),c(a,s),c(e,r);for(let $=0;$<u.length;$+=1)u[$].m(e,null);c(e,n),c(e,i),c(i,l),c(l,d),c(e,p),C=!0,g||(w=te(i,"click",o[3]),g=!0)},p(m,I){if(I&3){v=m[4].items;let $;for($=0;$<v.length;$+=1){const F=Te(m,v,$);u[$]?(u[$].p(F,I),M(u[$],1)):(u[$]=Me(F),u[$].c(),M(u[$],1),u[$].m(e,n))}for(Ve(),$=v.length;$<u.length;$+=1)k($);He()}},i(m){if(!C){for(let I=0;I<v.length;I+=1)M(u[I]);C=!0}},o(m){u=u.filter(Boolean);for(let I=0;I<u.length;I+=1)H(u[I]);C=!1},d(m){m&&h(e),ee(u,m),g=!1,w()}}}function ot(o){let e,a,t=he,s=[];for(let n=0;n<t.length;n+=1)s[n]=Fe(Re(o,t,n));const r=n=>H(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=Q()},l(n){for(let i=0;i<s.length;i+=1)s[i].l(n);e=Q()},m(n,i){for(let l=0;l<s.length;l+=1)s[l].m(n,i);T(n,e,i),a=!0},p(n,i){if(i&3){t=he;let l;for(l=0;l<t.length;l+=1){const d=Re(n,t,l);s[l]?(s[l].p(d,i),M(s[l],1)):(s[l]=Fe(d),s[l].c(),M(s[l],1),s[l].m(e.parentNode,e))}for(Ve(),l=t.length;l<s.length;l+=1)r(l);He()}},i(n){if(!a){for(let i=0;i<t.length;i+=1)M(s[i]);a=!0}},o(n){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)H(s[i]);a=!1},d(n){ee(s,n),n&&h(e)}}}function nt(o){let e,a;return e=new xe({props:{categories:he,$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){se(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,s){ie(e,t,s),a=!0},p(t,s){const r={};s&1027&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){oe(e,t)}}}function rt(o){let e,a;return{c(){e=_("div"),a=J(`The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!`),this.h()},l(t){e=y(t,"DIV",{slot:!0});var s=b(e);a=R(s,`The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!`),s.forEach(h),this.h()},h(){f(e,"slot","description")},m(t,s){T(t,e,s),c(e,a)},p:N,d(t){t&&h(e)}}}function lt(o){let e,a;return e=new Ne({props:{current:"/about/committee",title:"Committee",metaDescription:"The JCR Committee is comprised of students who have been elected to represent the views of Christ's undergrads.",$$slots:{description:[rt],default:[nt]},$$scope:{ctx:o}}}),{c(){se(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,s){ie(e,t,s),a=!0},p(t,[s]){const r={};s&1027&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){oe(e,t)}}}function ct(o,e,a){let t,s,r;Se(o,Ye,i=>a(2,r=i));const n=i=>ue(i,"top");return o.$$.update=()=>{o.$$.dirty&4&&a(1,t=r>=512),o.$$.dirty&4&&a(0,s=r>=Ge.min)},[s,t,r,n]}class ft extends X{constructor(e){super(),Z(this,e,ct,lt,x,{})}}export{ft as default};