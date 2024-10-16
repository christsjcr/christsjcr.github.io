import{s as de,e as l,a as u,c as o,b as I,m as V,g as f,f as i,l as m,i as h,h as s,n as me}from"../chunks/scheduler.8yXm6sNE.js";import{S as pe,i as $e,c as D,a as w,m as k,t as T,b as R,d as L}from"../chunks/index.DWLfrfOH.js";import{C as ve}from"../chunks/Content.BUTkGOuy.js";import{C as ge}from"../chunks/Calendar.CFBuKzWD.js";import{N as K}from"../chunks/NotificationLink.C3NMfJp2.js";import{P as he}from"../chunks/PageHeader.CpvBuK9z.js";import{l as b}from"../chunks/links.Cbk1EXbF.js";const be=[{calendarId:"f47cb082566f93a9a682f20026f24aace73dc0203899ace553a6e54aaf2ca555@group.calendar.google.com",type:"compulsory"},{calendarId:"98f933efaa927a1b41a85f92bba67e064a0270676b3c1241ca901610f556ea84@group.calendar.google.com",type:"optional"},{calendarId:"12976251fe9451b67ab24ac082e838b261fd2521a0a24318890433515993c4c4@group.calendar.google.com",type:"international"}],_e=new Date(Date.UTC(2024,8,25)),Ce=new Date(Date.UTC(2024,9,13));function Ee(O){let e,r,a=`Welcome to Christ's! Bookmark this page for quick access to your
                freshers' week timetable, freshers' guide, and a map of the
                college. You can also use the buttons below to automatically add
                the timetable to your personal calendar (tip - you can probably
                set the colours so that optional and compulsory events appear
                differently).`,c,d,Q,p,A,_,Y,S,C,X,$,H,E,Z,N,y,ee,F,ne=`Remember to sign in with your Cambridge Google account to access
                the guides! By default, your academic timetable is blank - you
                need to manually log on to the site above using a desktop and
                add the relevant modules for them to show up.`,te,G,se="Freshers' Week Timetable",ae,M,re=`Note that international events are open to all freshers so do join if you end up at college early! 
                Use the buttons below to subscribe to calendars you want to keep records of :)`,P,v,le=`<div class="level-left"><div class="level-item"><a href="${b.calendar.FRESHERS}"><button class="button is-success">Compulsory Events</button></a></div> <div class="level-item"><a href="${b.calendar.FRESHERS_OPTIONAL}"><button class="button is-primary">Optional Events</button></a></div> <div class="level-item"><a href="${b.calendar.FRESHERS_INTERNATIONAL}"><button class="button is-link">International Events</button></a></div></div>`,U,x,B,q,W,g,oe=`<div class="column is-narrow"><figure class="image svelte-wurv2i"><img alt="Map of College" src="${b.general.COLLEGE_MAP}" loading="lazy"/></figure></div>`,z;return _=new K({props:{href:b.freshers.FRESHERS_GUIDE,title:"Freshers' Guide 🐣",external:!0,compact:!0}}),C=new K({props:{href:b.freshers.INTERNATIONAL_GUIDE,title:"International Freshers' Guide ✈️",external:!0,compact:!0}}),E=new K({props:{href:b.welfare.JCR_WELFARE_GUIDE,title:"Welfare Guide 💛",external:!0,compact:!0}}),y=new K({props:{href:b.academic.TIMETABLES,title:"Academic Timetable 📚",external:!0,compact:!0}}),x=new ge({props:{calendarDetails:be,timeMin:_e,timeMax:Ce,colors:{compulsory:"#ad34cb",optional:"#146A46",international:"#A28000"},type:"timeGridDay"}}),{c(){e=l("div"),r=l("blockquote"),r.textContent=a,c=u(),d=l("br"),Q=u(),p=l("div"),A=l("div"),D(_.$$.fragment),Y=u(),S=l("div"),D(C.$$.fragment),X=u(),$=l("div"),H=l("div"),D(E.$$.fragment),Z=u(),N=l("div"),D(y.$$.fragment),ee=u(),F=l("p"),F.textContent=ne,te=u(),G=l("h2"),G.textContent=se,ae=u(),M=l("p"),M.textContent=re,P=u(),v=l("div"),v.innerHTML=le,U=u(),D(x.$$.fragment),B=u(),q=l("br"),W=u(),g=l("div"),g.innerHTML=oe,this.h()},l(t){e=o(t,"DIV",{class:!0});var n=I(e);r=o(n,"BLOCKQUOTE",{"data-svelte-h":!0}),V(r)!=="svelte-11abx4r"&&(r.textContent=a),c=f(n),d=o(n,"BR",{}),Q=f(n),p=o(n,"DIV",{class:!0});var j=I(p);A=o(j,"DIV",{class:!0});var ie=I(A);w(_.$$.fragment,ie),ie.forEach(i),Y=f(j),S=o(j,"DIV",{class:!0});var ce=I(S);w(C.$$.fragment,ce),ce.forEach(i),j.forEach(i),X=f(n),$=o(n,"DIV",{class:!0});var J=I($);H=o(J,"DIV",{class:!0});var ue=I(H);w(E.$$.fragment,ue),ue.forEach(i),Z=f(J),N=o(J,"DIV",{class:!0});var fe=I(N);w(y.$$.fragment,fe),fe.forEach(i),J.forEach(i),ee=f(n),F=o(n,"P",{"data-svelte-h":!0}),V(F)!=="svelte-wge5gt"&&(F.textContent=ne),te=f(n),G=o(n,"H2",{"data-svelte-h":!0}),V(G)!=="svelte-vd656q"&&(G.textContent=se),ae=f(n),M=o(n,"P",{"data-svelte-h":!0}),V(M)!=="svelte-134l379"&&(M.textContent=re),n.forEach(i),P=f(t),v=o(t,"DIV",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-14kmay9"&&(v.innerHTML=le),U=f(t),w(x.$$.fragment,t),B=f(t),q=o(t,"BR",{}),W=f(t),g=o(t,"DIV",{class:!0,"data-svelte-h":!0}),V(g)!=="svelte-1p0ab15"&&(g.innerHTML=oe),this.h()},h(){m(A,"class","column"),m(S,"class","column"),m(p,"class","columns"),m(H,"class","column"),m(N,"class","column"),m($,"class","columns"),m(e,"class","content"),m(v,"class","level"),m(g,"class","columns is-centered")},m(t,n){h(t,e,n),s(e,r),s(e,c),s(e,d),s(e,Q),s(e,p),s(p,A),k(_,A,null),s(p,Y),s(p,S),k(C,S,null),s(e,X),s(e,$),s($,H),k(E,H,null),s($,Z),s($,N),k(y,N,null),s(e,ee),s(e,F),s(e,te),s(e,G),s(e,ae),s(e,M),h(t,P,n),h(t,v,n),h(t,U,n),k(x,t,n),h(t,B,n),h(t,q,n),h(t,W,n),h(t,g,n),z=!0},p:me,i(t){z||(T(_.$$.fragment,t),T(C.$$.fragment,t),T(E.$$.fragment,t),T(y.$$.fragment,t),T(x.$$.fragment,t),z=!0)},o(t){R(_.$$.fragment,t),R(C.$$.fragment,t),R(E.$$.fragment,t),R(y.$$.fragment,t),R(x.$$.fragment,t),z=!1},d(t){t&&(i(e),i(P),i(v),i(U),i(B),i(q),i(W),i(g)),L(_),L(C),L(E),L(y),L(x,t)}}}function ye(O){let e,r;return e=new ve({props:{hasText:!1,$$slots:{default:[Ee]},$$scope:{ctx:O}}}),{c(){D(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,c){k(e,a,c),r=!0},p(a,c){const d={};c&1&&(d.$$scope={dirty:c,ctx:a}),e.$set(d)},i(a){r||(T(e.$$.fragment,a),r=!0)},o(a){R(e.$$.fragment,a),r=!1},d(a){L(e,a)}}}function xe(O){let e,r;return e=new he({props:{current:"/get-involved/freshers",title:"Freshers",size:"small",metaDescription:"Resources for undergraduate students of Christ's College, Cambridge.",$$slots:{default:[ye]},$$scope:{ctx:O}}}),{c(){D(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,c){k(e,a,c),r=!0},p(a,[c]){const d={};c&1&&(d.$$scope={dirty:c,ctx:a}),e.$set(d)},i(a){r||(T(e.$$.fragment,a),r=!0)},o(a){R(e.$$.fragment,a),r=!1},d(a){L(e,a)}}}class Ae extends pe{constructor(e){super(),$e(this,e,null,xe,de,{})}}export{Ae as component};