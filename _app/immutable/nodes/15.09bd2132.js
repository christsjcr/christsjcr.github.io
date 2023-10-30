import{s as w,f as B,l as _,a as j,g as v,h as k,m as M,d,c as R,v as x,j as b,i as u,y as T,G as D}from"../chunks/scheduler.380c08c3.js";import{S as H,i as P,b as y,d as C,m as f,a as h,t as $,e as g}from"../chunks/index.baeac5c0.js";import{C as A}from"../chunks/Content.1268ef0d.js";import{C as J}from"../chunks/Calendar.9076ce75.js";import{P as L}from"../chunks/PageHeader.461dae71.js";const i=2023,F="Michaelmas",W=[{description:"'When I Grow Up, I Want to Be' Bop",date:[i,10,6],time:[21,30],duration:[2,30],location:"Function Room",type:"jcr"},{description:"Alt Bop",date:[i,10,6],time:[21,30],duration:[2,30],location:"Lloyd Room",type:"jcr"},{description:"CCMS: Freshers' Concert",date:[i,10,9],time:[18,0],duration:[2,0],location:"Chapel",type:"society"},{description:"CCMS x JCR World Mental Health Day Charity Formal (Theme: Green)",date:[i,10,11],time:[19,30],duration:[2,0],location:"Formal Hall",type:"jcr"},{description:"Y2K Super Bop",date:[i,10,12],time:[22,30],duration:[3,30],location:"Vinyl",type:"jcr"},{description:"CCMS: Inaugural Concert for Bill Fitzgerald Music Room",date:[i,10,13],time:[18,0],duration:[2,0],location:"Bill Fitzgerald Music Room",type:"society"},{description:"Charity Plant Sale",date:[i,10,15],time:[14,0],duration:[1,0],location:"JCR",type:"jcr"},{description:"LGBTQ+ Charity Dinner with Sandi Toksvig",date:[i,10,20],time:[19,30],duration:[2,0],location:"Formal Hall",type:"jcr"},{description:"CCMS: Sumei Bao-Smith - Bernstein Songs Recital",date:[i,10,20],time:[18,0],duration:[1,0],location:"Chapel",type:"society"},{description:"Halloween Super Bop",date:[i,10,27],time:[22,30],duration:[3,30],location:"Lola's",type:"jcr"},{description:"Animal Therapy",date:[i,10,28],time:[13,0],duration:[2,0],location:"Buttery",type:"jcr"},{description:"Rugby World Cup Grand Final Screening",date:[i,10,28],time:[20,0],duration:[2,0],location:"Buttery",type:"jcr"},{description:"Pumpkin Carving Competition",date:[i,10,31],time:[19,0],duration:[2,0],location:"JCR",type:"jcr"},{description:"CCMS: Aidan Módica - Piano Recital",date:[i,11,3],time:[18,0],duration:[1,0],location:"Bill Fitzgerald Music Room",type:"society"},{description:"CCMS: Week 5 Blues (Date & Time TBC)",date:[i,11,4],time:[20,0],duration:[2,0],location:"TBD",type:"society"},{description:"Week 5 Blues Film Night",date:[i,11,5],time:[20,0],duration:[3,0],location:"TV Room",type:"jcr"},{description:"CCMS: Qinglan Du - Vocal Recital",date:[i,11,10],time:[18,0],duration:[1,0],location:"Chapel",type:"society"},{description:"Karaoke",date:[i,11,12],time:[19,0],duration:[2,0],location:"Buttery",type:"jcr"},{description:"CCMS: Jack Robinson - Piano Recital",date:[i,11,17],time:[18,0],duration:[1,0],location:"Bill Fitzgerald Music Room",type:"society"},{description:"CCMS: Emily Sparkes - 'An Ode to Musicals' Recital",date:[i,11,24],time:[18,0],duration:[1,0],location:"Chapel",type:"society"},{description:"Bridgemas Eve",date:[i,11,24],time:[20,30],duration:[2,0],location:"Buttery",type:"jcr"},{description:"CCMS: Christmas Concert",date:[i,11,25],time:[19,0],duration:[2,0],location:"Chapel",type:"society"},{description:"Bridgemas Super Bop",date:[i,11,28],time:[22,30],duration:[3,30],location:"Lola's",type:"jcr"},{description:"Final Bop (Theme TBD)",date:[i,11,30],time:[21,30],duration:[2,30],location:"Function Room",type:"jcr"}];function z(l){let t,r,e,o,n,S='<div class="column is-narrow"><a href="webcal://thejcr.co.uk/calendar/termcard/jcr.ics"><button class="button is-primary">Subscribe to JCR Events</button></a></div> <div class="column is-narrow"><a href="webcal://thejcr.co.uk/calendar/termcard/society.ics"><button class="button is-link">Subscribe to Society Events</button></a></div>',m,s,p;return s=new J({props:{events:W,colors:{society:"#A28000",jcr:"#146A46"},type:"listYear"}}),{c(){t=B("h2"),r=_(F),e=_(" Term"),o=j(),n=B("div"),n.innerHTML=S,m=j(),y(s.$$.fragment),this.h()},l(a){t=v(a,"H2",{class:!0});var c=k(t);r=M(c,F),e=M(c," Term"),c.forEach(d),o=R(a),n=v(a,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-1b5gpn4"&&(n.innerHTML=S),m=R(a),C(s.$$.fragment,a),this.h()},h(){b(t,"class","title is-2"),b(n,"class","columns")},m(a,c){u(a,t,c),T(t,r),T(t,e),u(a,o,c),u(a,n,c),u(a,m,c),f(s,a,c),p=!0},p:D,i(a){p||(h(s.$$.fragment,a),p=!0)},o(a){$(s.$$.fragment,a),p=!1},d(a){a&&(d(t),d(o),d(n),d(m)),g(s,a)}}}function E(l){let t,r;return t=new A({props:{hasText:!1,$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){y(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){f(t,e,o),r=!0},p(e,o){const n={};o&1&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){g(t,e)}}}function G(l){let t,r;return t=new L({props:{current:"/get-involved/termcard",title:"Termcard",size:"small",metaDescription:"See what's coming up this term on the official JCR termcard!",$$slots:{default:[E]},$$scope:{ctx:l}}}),{c(){y(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){f(t,e,o),r=!0},p(e,[o]){const n={};o&1&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){g(t,e)}}}class q extends H{constructor(t){super(),P(this,t,null,G,w,{})}}export{q as component};
