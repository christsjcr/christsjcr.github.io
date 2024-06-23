import{s as Q,e as b,c as _,b as k,f,l as g,i as R,h as u,n as q,F as X,t as T,a as A,d as M,g as D,A as x,j as N,o as Pe,u as Ve,p as je,q as Fe,G as Y,k as Se,m as ee,w as L}from"../chunks/scheduler.8yXm6sNE.js";import{S as te,i as ne,c as oe,a as ie,m as se,t as H,b as S,d as ae,g as Oe,e as Le}from"../chunks/index.DWLfrfOH.js";import{e as P,d as Be,w as Ge}from"../chunks/width.CQGpMkn5.js";import{P as qe}from"../chunks/PageHeader.CpvBuK9z.js";import{w as We}from"../chunks/index.Cris5lEi.js";function $e(s,e,o){const t=s.slice();return t[3]=e[o],t}function Ee(s,e,o){const t=s.slice();return t[6]=e[o],t}function Ae(s){let e,o,t=(s[6].label?s[6].label:s[6].title)+"",n,r,i,a,l;function d(...m){return s[2](s[6],...m)}return{c(){e=b("li"),o=b("a"),n=T(t),i=A(),this.h()},l(m){e=_(m,"LI",{});var p=k(e);o=_(p,"A",{href:!0});var v=k(o);n=M(v,t),v.forEach(f),i=D(p),p.forEach(f),this.h()},h(){g(o,"href",r=`#${s[6].id}`)},m(m,p){R(m,e,p),u(e,o),u(o,n),u(e,i),a||(l=x(o,"click",d),a=!0)},p(m,p){s=m,p&1&&t!==(t=(s[6].label?s[6].label:s[6].title)+"")&&N(n,t),p&1&&r!==(r=`#${s[6].id}`)&&g(o,"href",r)},d(m){m&&f(e),a=!1,l()}}}function De(s){let e,o,t=s[3].category+"",n,r,i,a,l,d,m;function p(...c){return s[1](s[3],...c)}let v=P(s[3].items),y=[];for(let c=0;c<v.length;c+=1)y[c]=Ae(Ee(s,v,c));return{c(){e=b("li"),o=b("a"),n=T(t),i=A(),a=b("ul");for(let c=0;c<y.length;c+=1)y[c].c();l=A(),this.h()},l(c){e=_(c,"LI",{});var C=k(e);o=_(C,"A",{class:!0,href:!0});var h=k(o);n=M(h,t),h.forEach(f),i=D(C),a=_(C,"UL",{});var I=k(a);for(let w=0;w<y.length;w+=1)y[w].l(I);I.forEach(f),l=D(C),C.forEach(f),this.h()},h(){g(o,"class","is-active"),g(o,"href",r=`#${s[3].category.toLowerCase().replaceAll(" ","-")}`)},m(c,C){R(c,e,C),u(e,o),u(o,n),u(e,i),u(e,a);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(a,null);u(e,l),d||(m=x(o,"click",p),d=!0)},p(c,C){if(s=c,C&1&&t!==(t=s[3].category+"")&&N(n,t),C&1&&r!==(r=`#${s[3].category.toLowerCase().replaceAll(" ","-")}`)&&g(o,"href",r),C&1){v=P(s[3].items);let h;for(h=0;h<v.length;h+=1){const I=Ee(s,v,h);y[h]?y[h].p(I,C):(y[h]=Ae(I),y[h].c(),y[h].m(a,null))}for(;h<y.length;h+=1)y[h].d(1);y.length=v.length}},d(c){c&&f(e),X(y,c),d=!1,m()}}}function Ue(s){let e,o,t=P(s[0]),n=[];for(let r=0;r<t.length;r+=1)n[r]=De($e(s,t,r));return{c(){e=b("aside"),o=b("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=_(r,"ASIDE",{class:!0,id:!0});var i=k(e);o=_(i,"UL",{class:!0});var a=k(o);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(f),i.forEach(f),this.h()},h(){g(o,"class","menu-list"),g(e,"class","menu mt-6"),g(e,"id","top")},m(r,i){R(r,e,i),u(e,o);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,null)},p(r,[i]){if(i&1){t=P(r[0]);let a;for(a=0;a<t.length;a+=1){const l=$e(r,t,a);n[a]?n[a].p(l,i):(n[a]=De(l),n[a].c(),n[a].m(o,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},i:q,o:q,d(r){r&&f(e),X(n,r)}}}function ue(s,e){s.preventDefault();let o=document.getElementById(e).getBoundingClientRect().top,t=document.documentElement,n=(window.pageYOffset||t.scrollTop)-(t.clientTop||0);ze(n+o-70,500)}const ze=(s,e)=>{const o=document.scrollingElement||document.documentElement,t=o.scrollTop,n=s-t,r=+new Date,i=(l,d,m,p)=>{let v=l;return v/=p/2,v<1?m/2*v*v+d:(v-=1,-m/2*(v*(v-2)-1)+d)},a=()=>{const d=+new Date-r;o.scrollTop=i(d,t,n,e),d<e?requestAnimationFrame(a):o.scrollTop=s};a()};function Ze(s,e,o){let{categories:t}=e;const n=(i,a)=>ue(a,i.category.toLowerCase().replaceAll(" ","-")),r=(i,a)=>ue(a,i.id);return s.$$set=i=>{"categories"in i&&o(0,t=i.categories)},[t,n,r]}class Ke extends te{constructor(e){super(),ne(this,e,Ze,Ue,Q,{categories:0})}}function Ne(s){let e,o,t,n,r,i;t=new Ke({props:{categories:s[0]}});const a=s[2].default,l=Pe(a,s,s[1],null);return{c(){e=b("div"),o=b("div"),oe(t.$$.fragment),n=A(),r=b("div"),l&&l.c(),this.h()},l(d){e=_(d,"DIV",{class:!0});var m=k(e);o=_(m,"DIV",{class:!0});var p=k(o);ie(t.$$.fragment,p),p.forEach(f),n=D(m),r=_(m,"DIV",{class:!0});var v=k(r);l&&l.l(v),v.forEach(f),m.forEach(f),this.h()},h(){g(o,"class","column is-one-third-desktop is-one-quarter-widescreen"),g(r,"class","column"),g(e,"class","columns is-variable is-5 is-desktop")},m(d,m){R(d,e,m),u(e,o),se(t,o,null),u(e,n),u(e,r),l&&l.m(r,null),i=!0},p(d,[m]){const p={};m&1&&(p.categories=d[0]),t.$set(p),l&&l.p&&(!i||m&2)&&Ve(l,a,d,d[1],i?Fe(a,d[1],m,null):je(d[1]),null)},i(d){i||(H(t.$$.fragment,d),H(l,d),i=!0)},o(d){S(t.$$.fragment,d),S(l,d),i=!1},d(d){d&&f(e),ae(t),l&&l.d(d)}}}function Ye(s,e,o){let{$$slots:t={},$$scope:n}=e,{categories:r}=e;return s.$$set=i=>{"categories"in i&&o(0,r=i.categories),"$$scope"in i&&o(1,n=i.$$scope)},[r,n,t]}class Qe extends te{constructor(e){super(),ne(this,e,Ye,Ne,Q,{categories:0})}}const de=[{category:"Core",items:[{title:"President",name:"Isabelle Mohammed",pronouns:"she/her",id:"president",description:"Hi! I’m Isabelle and I’m your JCR President for 2024. I act as the bridge between the college and the undergraduate body, advocating on behalf of students and supporting our amazing JCR committee. My role sees me represent students on various committees, collaborate with the MCR and most importantly listen to any concerns students may have. My goal is ensure that the college remains a welcoming environment for all, and that students here feel as happy studying and living at Christ’s as possible. Some of my aims as President include working with college to solve the international student storage problem, offering JCR subsidies for bicycle safety and potentially introducing air fryers into kitchenettes. Please feel free to drop me an email if you have any concerns! You can also find me around college taking pictures of Finch and Baines or in the buttery enjoying a hot chocolate, so if you have any questions I am always happy to help!"},{title:"Vice President",name:"Misha Mir",pronouns:"she/her",id:"vicepresident",description:"Hi! I’m Misha and I’m your JCR Vice President for 2024. Alongside working with the SU, my role includes collaborating with other JCR members and current students to ensure Christs is a welcoming and happy environment for everyone here! I’m intent on promoting diversity within college (through themed cultural formals), supporting societies within Christs as well as establishing connections with other college’s JCRs to broaden our community. Please email me if you have any concerns or any ideas as to what I can do next!"},{title:"Treasurer",name:"Skyler Roberts",pronouns:"he/him",id:"treasurer",description:"Hi! I'm Skyler, the JCR's Treasurer for 2024. I'm responsible for the JCR's financial management as well as the funding of more than 30 student societies. I'm excited to be continuing the work of our previous treasurer through our successful Free Prescription Scheme, and I'm working on establishing better financial analytics tools and archival measures to help our current and future JCRs to continue these schemes. Continuing my previous work with the JCR, I'm taking on some of Christ's longest standing student enquiries with thorough financing considerations; the next project is refurbishing the JCR!"},{title:"Secretary",name:"Chiara Delpiano Cordeiro",pronouns:"she/her",id:"secretary",description:"Hello! I'm Chiara, your JCR secretary! My job involves sending the weekly bulletin (an email that brings joy), running the JCR social media platforms, and taking the minutes/preparing the agendas for meetings throughout the year. My aims are to further publicise events and cool opportunities going on around Christ's, provide short summaries of what the JCR is doing, and create a dynamic calendar of events going on around college! I also hope to increase interaction with the JCR Instagram through fun content, student takeovers, and more. Just send me an email if you have anything you'd like to publicise in the weekly bulletin, cat photos for the JCR socials, or any ideas/suggestions and I'll be happy to help!"}]},{category:"Welfare Officers",items:[{title:"Welfare Officer",label:"Zain",name:"Zain Ali",pronouns:"he/him",id:"welfare-m",description:"Hi, I'm Zain, your welfare officer alongside Chris! I'm excited to work with the student community to promote wellbeing and inclusivity around college. As your welfare officer, I aim to be a friendly point of contact for anyone needing support. Chris and I will be organizing fun college events like movie and karaoke nights to help students relax. Additionally, I'll collaborate with other members of the JCR committee and college administration to ensure students feel safe and welcome at Christ’s. My goal is for our college to be a warm, accepting place for everyone. Please feel free to reach out by email or Instagram (@ChristsWelfare) if you ever want to talk or have any questions or concerns!"},{title:"Welfare Officer",label:"Chris",name:"Christopher Lorde",pronouns:"he/they/she",id:"welfare-f",description:"Hey! I'm Chris, one of your two Welfare Officers this year! This year, I'm hoping to organise a variety of fun activities & initiatives with Zain to foster community and make sure Christ's feels like a welcoming home away from home for students new and old. I also want to work with the rest of the JCR to make sure that the college is acting in the best interests of the student body, by providing an open ear for any concerns & advocating on your behalf. Zain and I are here for any concerns you may have - no issue, question, or concern is too large or too small to chat about. If you're looking for a chat, have a question, need help with anything, or are just looking for resources, you can get in touch via the @ChristsWelfare Instagram or send over an email! :)"}]},{category:"Events",items:[{title:"Freshers' Rep",label:"Freshers'",name:"Flora Moayed",pronouns:"she/her",id:"firstyearrep",description:"Hi! I’m Flora, this year’s Frep! Although freshers week is long gone, that doesn't mean I won't be organising a range of events (superbops, socials, etc.) in the coming term, so stay tuned! During freshers week, my job is to ensure a smooth and fun transition for the incoming freshers, and I look forward to hosting an array of events that cater to everyone’s preferences. Feel free to get in touch with me via email if you have any questions!"}]},{category:"Diversity",items:[{title:"Class Act Officer",label:"Class Act",name:"Maisie Caddock",pronouns:"she/her",id:"classact",description:"Hi! I’m Maisie, your Class Act Officer. I am here to support anyone who identifies with experiencing educational, social, economic or cultural disadvantage. I hope to increase the scope of support offered to the Class Act community. I will organise a range of social events to strengthen the Class Act community within Christ’s, including movie nights, games and wii socials. I also hope to work with our Access Officer and other colleges’ Class Act officers to maximise support, including Class Act socials with other colleges. If you have any questions or feedback that are Class Act related, please do get in touch!"},{title:"Disabled Students' Officer",label:"Disabled Students'",name:"Josie Iino",pronouns:"she/her",id:"dso",description:"Hi! My name is Josie and I am first-year HisPoler and your DSO. As a disabled student myself, I am very keen to help disabled students of all types, and with all concerns, whether that be academic,  pertaining to accommodation, or just anything, please reach out! I'll respond ASAP on my Instagram (@josieiino) or email (ji280@cam.ac.uk). "},{title:"Ethnic Diversity Officer",label:"Ethnic Diversity",name:"David Adegboye",pronouns:"he/him",id:"edo",description:"Hi! I’m David, a 2nd year CompSci and this year’s Ethnic Diversity Officer. I’m planning to run some events each term to celebrate different cultures within Christ’s. More importantly, I’d like Christ’s to be an inclusive and anti-racist environment. I’m happy to work with anyone to make these things happen, if you have any suggestions, concerns or feedback feel free to drop me an email!"},{title:"Women's Officer",label:"Women's",name:"Ella Howard",pronouns:"she/her",id:"womens",description:"Hi! I'm Ella, you 2024 Women's Officer. I'll be representing women in college and making sure that Christ's continues to be an open and inclusive community for everyone. I am going to ensure that menstruating students have access to sustainable period products throughout college and provide a safe space for students of all genders. I'm hoping to improve the sanitary bin emptying system this year and hopefully implement a women's hour in the gym. Please get in touch with me if you have any feedback, concerns."},{title:"Internationals' Officer",label:"Internationals'",name:"Anna Petrides",pronouns:"she/her",id:"intl",description:"Hello! I’m Anna, your internationals’ officer and a 2nd-year lawyer born and raised in Cyprus 🇨🇾 ! I’m a language enthusiast and I love to travel. This obviously means I'm organising linguistic, culinary, and cultural exchange socials. I'm also excited to organise international freshers' week to help ifreshers adjust to Christ's, and also to publicise accessible information on grants and visa bureaucracy to make your lives in the UK a little bit easier. My goal is to be your point of contact, and the person you go to when you need someone to talk to. I am very approachable, so come to me with anything internationals-related!"},{title:"LGBT+ Officer",label:"LGBT+",name:"George Wang",pronouns:"he/she",id:"lgbt",description:`Hello! I'm George, your LGBT+ Officer this year. My top priority is to ensure that Christ's is a safe and supportive environment for LGBT+ students. Throughout the year, I'll be working on three main initiatives: 

(1) Inclusion and sensitivity training for Staff and Fellows.
(2) Streamlining access to mental health and sexual wellbeing resources for LGBT+ students.
(3) Social events including inter-college socials, socials with an intersectional focus, pride month events, and LGBT+ formals.

Please don't hesitate to reach out to me via email or in person if you need any help, support, advice, or if you have any questions or suggestions. I'm always more than happy to listen!`}]},{category:"Misc",items:[{title:"Access Officer",label:"Access",name:"Georgie Van Dyke",pronouns:"she/her",id:"access",description:"Hi, I'm Georgie and I'm your Access Officer! I will be working with the JCR and the Admissions Team to continue developing outreach initiatives and widening participation events. I am really passionate about encouraging and supporting students from underrepresented backgrounds when applying to university and to Cambridge specifically. I want to help provide prospective students with enough information to know if Cambridge is right for them, regardless of their background. I'm looking forward to working on the SU Shadowing Scheme, collaborating with Access Officers from other Colleges and for getting lots of new CReps involved in different outreach initiatives this year. Please do get in contact if you have any questions or would like to get involved with anything I do!"},{title:"Catering & Facilities Officer",label:"Catering & Facilities",name:"Alex Bevins",pronouns:"he/him",id:"facilities",description:"Hi, I’m Alex, your Catering and Facilities officer. I want to ensure that the Upper Hall and the Buttery are enjoyable, appealing and affordably priced, and that the college has the right range of facilities that students want. I’m hoping to make Upper Hall a more attractive place to eat, install more bike storage, and make the buttery easier to study and relax in. I also want to continue with the project to transform the JCR room. Please get in touch if you have any ideas or complaints about the catering or facilities!"},{title:"Green Officer",label:"Green",name:"Kelly Kwok",pronouns:"she/her",id:"green",description:"Hi! I am Kelly, your Green and Charities Officer. I will be involved with sustainability in college and organize events to raise money for charity. In addition to continuing previous events (such as running charity plant sales, setting up end-of-term food bank collections, and supporting the food waste disposal system in college accommodations), I am hoping to explore the possibility of organizing some gardening/sustainability events in college. If you have any suggestions, please let me know and I will try my best to act upon them!"},{title:"Webmaster",name:"Rachel Tam",pronouns:"she/her",id:"webmaster",description:"Hi there! I’m Rachel, the JCR Webmaster. My main job is to maintain the website you’re currently looking at, and to provide technical support for the JCR committee. Feel free to email me if you find any bugs, or to suggest new features/improvements - I’ll be happy to hear them :) Cheers!  (Credits to our previous webmaster Miles for setting up the awesome website!)"}]}],Re=We(!1);function Xe(s){let e,o="[Show Emails]",t,n;return{c(){e=b("a"),e.textContent=o,this.h()},l(r){e=_(r,"A",{href:!0,rel:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1v3z0yp"&&(e.textContent=o),this.h()},h(){g(e,"href",null),g(e,"rel","external")},m(r,i){R(r,e,i),t||(n=x(e,"click",s[3]),t=!0)},p:q,d(r){r&&f(e),t=!1,n()}}}function xe(s){let e,o,t,n,r;return{c(){e=b("a"),o=T(s[0]),t=T("@"),n=T(s[1]),this.h()},l(i){e=_(i,"A",{href:!0});var a=k(e);o=M(a,s[0]),t=M(a,"@"),n=M(a,s[1]),a.forEach(f),this.h()},h(){g(e,"href",r=`mailto:${s[0]}@${s[1]}`)},m(i,a){R(i,e,a),u(e,o),u(e,t),u(e,n)},p(i,a){a&1&&N(o,i[0]),a&2&&N(n,i[1]),a&3&&r!==(r=`mailto:${i[0]}@${i[1]}`)&&g(e,"href",r)},d(i){i&&f(e)}}}function et(s){let e;function o(r,i){return r[2]?xe:Xe}let t=o(s),n=t(s);return{c(){n.c(),e=Y()},l(r){n.l(r),e=Y()},m(r,i){n.m(r,i),R(r,e,i)},p(r,[i]){t===(t=o(r))&&n?n.p(r,i):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},i:q,o:q,d(r){r&&f(e),n.d(r)}}}function tt(s,e,o){let t;Se(s,Re,a=>o(2,t=a));let{username:n}=e,{domain:r}=e;const i=()=>Re.set(!0);return s.$$set=a=>{"username"in a&&o(0,n=a.username),"domain"in a&&o(1,r=a.domain)},[n,r,t,i]}class nt extends te{constructor(e){super(),ne(this,e,tt,et,Q,{username:0,domain:1})}}function He(s,e,o){const t=s.slice();return t[4]=e[o],t}function Je(s,e,o){const t=s.slice();return t[7]=e[o],t}function Te(s){let e,o,t=`<img class="profile svelte-bfbzap" src="${`/img/committee/${s[7].id}.webp`}" alt="${s[7].title}"/>`,n,r,i,a,l=s[7].name+"",d,m,p,v,y,c,C,h,I=s[7].title+"",w,J,F,W,fe=(s[7].pronouns??"")+"",re,le,V,j,ce,B,me=s[7].description+"",he,U,z,O;return j=new nt({props:{username:s[7].id,domain:"thejcr.co.uk"}}),{c(){e=b("div"),o=b("div"),o.innerHTML=t,n=A(),r=b("div"),i=b("div"),a=b("h3"),d=T(l),m=A(),p=b("div"),v=b("div"),y=b("div"),c=b("div"),C=b("div"),h=b("div"),w=T(I),J=A(),F=b("div"),W=b("i"),re=T(fe),le=A(),V=b("small"),oe(j.$$.fragment),ce=A(),B=b("p"),he=T(me),U=A(),z=b("hr"),this.h()},l($){e=_($,"DIV",{id:!0,class:!0});var E=k(e);o=_(E,"DIV",{class:!0,"data-svelte-h":!0}),ee(o)!=="svelte-9j55ow"&&(o.innerHTML=t),n=D(E),r=_(E,"DIV",{class:!0});var ge=k(r);i=_(ge,"DIV",{class:!0});var G=k(i);a=_(G,"H3",{class:!0});var pe=k(a);d=M(pe,l),pe.forEach(f),m=D(G),p=_(G,"DIV",{class:!0});var Z=k(p);v=_(Z,"DIV",{class:!0});var ve=k(v);y=_(ve,"DIV",{class:!0});var ye=k(y);c=_(ye,"DIV",{class:!0});var K=k(c);C=_(K,"DIV",{class:!0});var be=k(C);h=_(be,"DIV",{class:!0});var _e=k(h);w=M(_e,I),_e.forEach(f),be.forEach(f),J=D(K),F=_(K,"DIV",{class:!0});var we=k(F);W=_(we,"I",{});var Ie=k(W);re=M(Ie,fe),Ie.forEach(f),we.forEach(f),K.forEach(f),ye.forEach(f),ve.forEach(f),le=D(Z),V=_(Z,"SMALL",{});var ke=k(V);ie(j.$$.fragment,ke),ke.forEach(f),Z.forEach(f),ce=D(G),B=_(G,"P",{class:!0});var Ce=k(B);he=M(Ce,me),Ce.forEach(f),G.forEach(f),ge.forEach(f),E.forEach(f),U=D($),z=_($,"HR",{}),this.h()},h(){g(o,"class","column"),g(a,"class","title is-4 my-1"),g(h,"class","title is-6"),g(C,"class","level-item"),g(F,"class","level-item"),g(c,"class","level-left"),g(y,"class","level is-mobile"),g(v,"class","my-0"),L(v,"level-left",s[0]),L(V,"level-right",s[0]),g(p,"class","my-0"),L(p,"level",s[0]),g(B,"class","pt-3"),g(i,"class","content"),g(r,"class","column is-two-thirds"),g(e,"id",s[7].id),g(e,"class","columns"),L(e,"is-mobile",s[1])},m($,E){R($,e,E),u(e,o),u(e,n),u(e,r),u(r,i),u(i,a),u(a,d),u(i,m),u(i,p),u(p,v),u(v,y),u(y,c),u(c,C),u(C,h),u(h,w),u(c,J),u(c,F),u(F,W),u(W,re),u(p,le),u(p,V),se(j,V,null),u(i,ce),u(i,B),u(B,he),R($,U,E),R($,z,E),O=!0},p($,E){(!O||E&1)&&L(v,"level-left",$[0]),(!O||E&1)&&L(V,"level-right",$[0]),(!O||E&1)&&L(p,"level",$[0]),(!O||E&2)&&L(e,"is-mobile",$[1])},i($){O||(H(j.$$.fragment,$),O=!0)},o($){S(j.$$.fragment,$),O=!1},d($){$&&(f(e),f(U),f(z)),ae(j)}}}function Me(s){let e,o,t=s[4].category+"",n,r,i,a,l='<button class="button is-link">Back to top</button>',d,m,p,v,y=P(s[4].items),c=[];for(let h=0;h<y.length;h+=1)c[h]=Te(Je(s,y,h));const C=h=>S(c[h],1,1,()=>{c[h]=null});return{c(){e=b("div"),o=b("h2"),n=T(t),r=A();for(let h=0;h<c.length;h+=1)c[h].c();i=A(),a=b("a"),a.innerHTML=l,d=A(),this.h()},l(h){e=_(h,"DIV",{class:!0,id:!0});var I=k(e);o=_(I,"H2",{class:!0});var w=k(o);n=M(w,t),w.forEach(f),r=D(I);for(let J=0;J<c.length;J+=1)c[J].l(I);i=D(I),a=_(I,"A",{href:!0,"data-svelte-h":!0}),ee(a)!=="svelte-c3rlj6"&&(a.innerHTML=l),d=D(I),I.forEach(f),this.h()},h(){g(o,"class","title is-2"),g(a,"href","#top"),g(e,"class","section px-0"),g(e,"id",s[4].category.toLowerCase().replaceAll(" ","-"))},m(h,I){R(h,e,I),u(e,o),u(o,n),u(e,r);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(e,null);u(e,i),u(e,a),u(e,d),m=!0,p||(v=x(a,"click",s[3]),p=!0)},p(h,I){if(I&3){y=P(h[4].items);let w;for(w=0;w<y.length;w+=1){const J=Je(h,y,w);c[w]?(c[w].p(J,I),H(c[w],1)):(c[w]=Te(J),c[w].c(),H(c[w],1),c[w].m(e,i))}for(Oe(),w=y.length;w<c.length;w+=1)C(w);Le()}},i(h){if(!m){for(let I=0;I<y.length;I+=1)H(c[I]);m=!0}},o(h){c=c.filter(Boolean);for(let I=0;I<c.length;I+=1)S(c[I]);m=!1},d(h){h&&f(e),X(c,h),p=!1,v()}}}function ot(s){let e,o,t=P(de),n=[];for(let i=0;i<t.length;i+=1)n[i]=Me(He(s,t,i));const r=i=>S(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=Y()},l(i){for(let a=0;a<n.length;a+=1)n[a].l(i);e=Y()},m(i,a){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(i,a);R(i,e,a),o=!0},p(i,a){if(a&3){t=P(de);let l;for(l=0;l<t.length;l+=1){const d=He(i,t,l);n[l]?(n[l].p(d,a),H(n[l],1)):(n[l]=Me(d),n[l].c(),H(n[l],1),n[l].m(e.parentNode,e))}for(Oe(),l=t.length;l<n.length;l+=1)r(l);Le()}},i(i){if(!o){for(let a=0;a<t.length;a+=1)H(n[a]);o=!0}},o(i){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)S(n[a]);o=!1},d(i){i&&f(e),X(n,i)}}}function it(s){let e,o;return e=new Qe({props:{categories:de,$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){oe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){se(e,t,n),o=!0},p(t,n){const r={};n&1027&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){o||(H(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){ae(e,t)}}}function st(s){let e,o=`The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!`;return{c(){e=b("div"),e.textContent=o,this.h()},l(t){e=_(t,"DIV",{slot:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1b6rlcf"&&(e.textContent=o),this.h()},h(){g(e,"slot","description")},m(t,n){R(t,e,n)},p:q,d(t){t&&f(e)}}}function at(s){let e,o;return e=new qe({props:{current:"/about/committee",title:"Committee",metaDescription:"The JCR Committee is comprised of students who have been elected to represent the views of Christ's undergrads.",$$slots:{description:[st],default:[it]},$$scope:{ctx:s}}}),{c(){oe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){se(e,t,n),o=!0},p(t,[n]){const r={};n&1027&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){o||(H(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){ae(e,t)}}}function rt(s,e,o){let t,n,r;Se(s,Ge,a=>o(2,r=a));const i=a=>ue(a,"top");return s.$$.update=()=>{s.$$.dirty&4&&o(1,t=r>=512),s.$$.dirty&4&&o(0,n=r>=Be.min)},[n,t,r,i]}class ft extends te{constructor(e){super(),ne(this,e,rt,at,Q,{})}}export{ft as component};
